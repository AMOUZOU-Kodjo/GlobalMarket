import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Tag, Trash2, ShoppingBag, Ticket } from "lucide-react";
import formatCurrency from "../../utils/formatCurrency";

export function OrderSummary({
  items = [],
  subtotal,
  shipping,
  tax,
  discount,
  total,
  coupon,
  onRemoveCoupon,
  showCouponInput = true,
  onApplyCoupon,
  className = "",
}) {
  const [couponCode, setCouponCode] = useState("");
  const [couponLoading, setCouponLoading] = useState(false);
  const { t } = useTranslation();

  const handleApply = async () => {
    if (!couponCode.trim()) return;
    setCouponLoading(true);
    try {
      await onApplyCoupon?.(couponCode.trim());
    } finally {
      setCouponLoading(false);
    }
  };

  return (
    <div className={`bg-base-100 border border-base-200 rounded-xl p-4 ${className}`}>
      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
        <ShoppingBag size={20} />
        {t('checkout.orderSummary')}
      </h3>

      {items.length > 0 && (
        <div className="flex flex-col gap-3 mb-4 max-h-64 overflow-y-auto">
          {items.map((item, index) => (
            <div key={item._id || index} className="flex gap-3">
              <div className="w-14 h-14 rounded-lg bg-base-200 overflow-hidden flex-shrink-0">
                <img
                  src={item.image || (item.images && item.images[0]) || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{item.name}</p>
                <p className="text-xs opacity-50">
                  {item.quantity} x {formatCurrency(item.price)}
                </p>
              </div>
              <span className="text-sm font-medium flex-shrink-0">
                {formatCurrency(item.price * item.quantity)}
              </span>
            </div>
          ))}
        </div>
      )}

      {items.length === 0 && (
        <div className="text-center py-6 opacity-50">
          <ShoppingBag size={24} className="mx-auto mb-1" />
          <p className="text-sm">{t('cart.empty')}</p>
        </div>
      )}

      <div className="divider my-2" />

      <div className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <span className="opacity-60">{t('checkout.subtotal')}</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-60">{t('checkout.shipping')}</span>
          <span>
            {shipping === 0 || shipping === undefined
              ? t('checkout.free')
              : formatCurrency(shipping)}
          </span>
        </div>
        {tax !== undefined && (
          <div className="flex justify-between">
            <span className="opacity-60">{t('checkout.tax')}</span>
            <span>{formatCurrency(tax)}</span>
          </div>
        )}
        {discount !== undefined && discount > 0 && (
          <div className="flex justify-between text-success">
            <span className="flex items-center gap-1">
              <Tag size={14} />
              {t('checkout.discount')}
            </span>
            <span>-{formatCurrency(discount)}</span>
          </div>
        )}
      </div>

      <div className="divider my-2" />

      <div className="flex justify-between text-lg font-bold">
        <span>{t('checkout.total')}</span>
        <span className="text-primary">{formatCurrency(total)}</span>
      </div>

      {coupon && (
        <div className="flex items-center justify-between bg-success/5 border border-success/20 rounded-lg px-3 py-2 mt-3">
          <div className="flex items-center gap-2 text-sm text-success">
            <Ticket size={16} />
            <span className="font-medium">{coupon.code || coupon}</span>
          </div>
          {onRemoveCoupon && (
            <button
              type="button"
              className="btn btn-ghost btn-xs text-error"
              onClick={onRemoveCoupon}
            >
              <Trash2 size={14} />
            </button>
          )}
        </div>
      )}

      {showCouponInput && !coupon && (
        <div className="mt-4">
          <label className="text-sm font-medium mb-1 block">{t('cart.promoCode')}</label>
          <div className="join w-full">
            <input
              type="text"
              placeholder={t('cart.promoCodePlaceholder')}
              className="input input-bordered input-sm join-item flex-1"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleApply()}
            />
            <button
              type="button"
              className="btn btn-primary btn-sm join-item"
              disabled={!couponCode.trim() || couponLoading}
              onClick={handleApply}
            >
              {couponLoading ? (
                <span className="loading loading-spinner loading-xs" />
              ) : (
                t('cart.apply')
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
