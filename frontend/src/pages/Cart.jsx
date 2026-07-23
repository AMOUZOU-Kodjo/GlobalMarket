import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ShoppingCart,
  ArrowLeft,
  Trash2,
  Tag,
  X,
  ShoppingBag,
  PackageSearch,
} from 'lucide-react'
import Breadcrumb from '../components/atoms/Breadcrumb'
import { EmptyState } from '../components/atoms/EmptyState'
import Spinner from '../components/atoms/Spinner'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { api } from '../services/api'
import formatCurrency from '../utils/formatCurrency'

function CartItemRow({ item, onUpdateQuantity, onRemove }) {
  const { productId, name, price, image, quantity, seller, stock = 99 } = item

  return (
    <div className="flex gap-4 p-4 bg-base-100 rounded-box border border-base-300">
      <Link
        to={`/products/${productId}`}
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-box overflow-hidden bg-base-200 shrink-0"
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-base-content/30">
            <PackageSearch size={24} />
          </div>
        )}
      </Link>

      <div className="flex flex-col flex-1 min-w-0 gap-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <Link
              to={`/products/${productId}`}
              className="font-semibold text-sm sm:text-base hover:link line-clamp-1"
            >
              {name}
            </Link>
            {seller && (
              <p className="text-xs text-base-content/50 mt-0.5">
                Vendeur: {seller}
              </p>
            )}
          </div>
          <button
            type="button"
            className="btn btn-ghost btn-circle btn-sm text-error hover:bg-error/10 shrink-0"
            onClick={() => onRemove(productId)}
            aria-label={`Supprimer ${name}`}
          >
            <Trash2 size={16} />
          </button>
        </div>

        <div className="flex items-end justify-between mt-auto pt-2">
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="btn btn-ghost btn-circle btn-sm"
              onClick={() => onUpdateQuantity(productId, quantity - 1)}
              disabled={quantity <= 1}
              aria-label="Diminuer la quantité"
            >
              -
            </button>
            <input
              type="number"
              className="input input-bordered input-sm w-14 text-center text-xs"
              value={quantity}
              readOnly
              aria-label="Quantité"
            />
            <button
              type="button"
              className="btn btn-ghost btn-circle btn-sm"
              onClick={() => onUpdateQuantity(productId, quantity + 1)}
              disabled={quantity >= stock}
              aria-label="Augmenter la quantité"
            >
              +
            </button>
            {stock <= 5 && stock > 0 && (
              <span className="text-xs text-warning ml-1 hidden sm:inline">
                Stock: {stock}
              </span>
            )}
          </div>

          <p className="font-bold text-primary text-sm sm:text-base">
            {formatCurrency(price * quantity)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Cart() {
  const navigate = useNavigate()
  const {
    items,
    coupon,
    subtotal,
    total,
    totalItems,
    updateQuantity,
    removeItem,
    clearCart,
    applyCoupon,
    removeCoupon,
  } = useCart()

  const [couponCode, setCouponCode] = useState('')
  const [couponLoading, setCouponLoading] = useState(false)
  const [couponError, setCouponError] = useState('')

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) return
    setCouponLoading(true)
    setCouponError('')
    try {
      const data = await api.post('/coupons/validate', { code: couponCode.trim() })
      applyCoupon(data)
      setCouponCode('')
    } catch (err) {
      setCouponError(err.message || 'Code promo invalide')
    } finally {
      setCouponLoading(false)
    }
  }

  const handleRemoveCoupon = () => {
    removeCoupon()
    setCouponCode('')
  }

  const shippingEstimate = subtotal >= 50000 ? 0 : 2500
  const totalWithShipping = total + shippingEstimate

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Panier' },
          ]}
          className="mb-4"
        />

        <EmptyState
          icon={ShoppingCart}
          title="Votre panier est vide"
          description="Ajoutez des produits pour commencer vos achats."
          action={
            <Link to="/products" className="btn btn-primary gap-2">
              <ArrowLeft size={18} />
              Voir les produits
            </Link>
          }
        />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Panier' },
        ]}
        className="mb-4"
      />

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          Panier ({totalItems} article{totalItems !== 1 ? 's' : ''})
        </h1>
        <button
          type="button"
          className="btn btn-ghost btn-sm text-error gap-1"
          onClick={clearCart}
        >
          <Trash2 size={14} />
          Vider le panier
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-3">
          {items.map((item) => (
            <CartItemRow
              key={item.productId}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-base-100 border border-base-300 rounded-xl p-6 sticky top-24">
            <h2 className="font-bold text-lg mb-4">Récapitulatif</h2>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="opacity-70">
                  Sous-total ({totalItems} article{totalItems !== 1 ? 's' : ''})
                </span>
                <span className="font-medium">{formatCurrency(subtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span className="opacity-70">Livraison estimée</span>
                <span className="font-medium">
                  {shippingEstimate === 0 ? (
                    <span className="text-success">Gratuite</span>
                  ) : (
                    formatCurrency(shippingEstimate)
                  )}
                </span>
              </div>

              {shippingEstimate > 0 && (
                <p className="text-xs opacity-50">
                  Livraison gratuite dès {formatCurrency(50000)} d'achats
                </p>
              )}

              {coupon && (
                <div className="flex items-center justify-between bg-success/10 rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2 text-success">
                    <Tag size={14} />
                    <span className="text-sm font-medium">
                      {coupon.code || 'Promo'}
                      {coupon.type === 'percentage'
                        ? ` (-${coupon.value}%)`
                        : ` (-${formatCurrency(coupon.value)})`}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-ghost btn-xs text-error"
                    onClick={handleRemoveCoupon}
                  >
                    <X size={14} />
                  </button>
                </div>
              )}

              <div className="divider my-1" />

              <div className="flex justify-between font-bold text-base">
                <span>Total</span>
                <span className="text-primary">{formatCurrency(totalWithShipping)}</span>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <div className="join w-full">
                <input
                  type="text"
                  className="input input-bordered join-item flex-1 text-sm"
                  placeholder="Code promo"
                  value={couponCode}
                  onChange={(e) => {
                    setCouponCode(e.target.value)
                    setCouponError('')
                  }}
                  disabled={!!coupon}
                />
                <button
                  type="button"
                  className="btn btn-primary join-item btn-sm"
                  onClick={handleApplyCoupon}
                  disabled={!!coupon || couponLoading || !couponCode.trim()}
                >
                  {couponLoading ? (
                    <span className="loading loading-spinner loading-xs" />
                  ) : (
                    'Appliquer'
                  )}
                </button>
              </div>
              {couponError && (
                <p className="text-error text-xs">{couponError}</p>
              )}
            </div>

            <button
              type="button"
              className="btn btn-primary btn-block mt-4 gap-2"
              onClick={() => navigate('/checkout')}
            >
              <ShoppingBag size={18} />
              Passer la commande
            </button>

            <Link
              to="/products"
              className="btn btn-ghost btn-block btn-sm mt-2 gap-1"
            >
              <ArrowLeft size={16} />
              Continuer mes achats
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
