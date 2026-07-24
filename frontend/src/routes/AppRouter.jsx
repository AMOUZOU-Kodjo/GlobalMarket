import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Spinner from '../components/atoms/Spinner'

const MainLayout = lazy(() => import('../layouts/MainLayout'))
const AuthLayout = lazy(() => import('../layouts/AuthLayout'))
const AdminLayout = lazy(() => import('../layouts/AdminLayout'))
const SellerLayout = lazy(() => import('../layouts/SellerLayout'))
const CheckoutLayout = lazy(() => import('../layouts/CheckoutLayout'))
const MinimalLayout = lazy(() => import('../layouts/MinimalLayout'))

const ProtectedRoute = lazy(() => import('../components/ProtectedRoute'))
const GuestRoute = lazy(() => import('../routes/GuestRoute'))
const SellerRoute = lazy(() => import('../routes/SellerRoute'))

const Home = lazy(() => import('../pages/Home'))
const Products = lazy(() => import('../pages/Products'))
const ProductDetail = lazy(() => import('../pages/ProductDetail'))
const Search = lazy(() => import('../pages/Search'))
const Category = lazy(() => import('../pages/Category'))
const Cart = lazy(() => import('../pages/Cart'))

const LoginPage = lazy(() => import('../pages/Login'))
const RegisterPage = lazy(() => import('../pages/Auth/RegisterPage'))
const ForgotPasswordPage = lazy(() => import('../pages/Auth/ForgotPasswordPage'))
const ResetPasswordPage = lazy(() => import('../pages/Auth/ResetPasswordPage'))
const VerifyEmailPage = lazy(() => import('../pages/Auth/VerifyEmailPage'))

const CheckoutPage = lazy(() => import('../pages/Checkout/CheckoutPage'))
const OrderConfirmationPage = lazy(() => import('../pages/Checkout/OrderConfirmationPage'))

const OrderHistoryPage = lazy(() => import('../pages/Orders/OrderHistoryPage'))
const OrderDetailPage = lazy(() => import('../pages/Orders/OrderDetailPage'))

const UserProfilePage = lazy(() => import('../pages/User/UserProfilePage'))
const UserSettingsPage = lazy(() => import('../pages/User/UserSettingsPage'))
const WishlistPage = lazy(() => import('../pages/User/WishlistPage'))

const SellerRegisterPage = lazy(() => import('../pages/Seller/SellerRegisterPage'))
const SellerDashboardPage = lazy(() => import('../pages/Seller/SellerDashboardPage'))
const SellerProductsPage = lazy(() => import('../pages/Seller/SellerProductsPage'))
const ProductCreatePage = lazy(() => import('../pages/Seller/ProductCreatePage'))
const ProductEditPage = lazy(() => import('../pages/Seller/ProductEditPage'))
const SellerOrdersPage = lazy(() => import('../pages/Seller/SellerOrdersPage'))
const SellerAnalyticsPage = lazy(() => import('../pages/Seller/SellerAnalyticsPage'))
const SellerPayoutsPage = lazy(() => import('../pages/Seller/SellerPayoutsPage'))
const SellerShopSettingsPage = lazy(() => import('../pages/Seller/SellerShopSettingsPage'))

const SellerShopPage = lazy(() => import('../pages/Seller/SellerShopPage'))

const AdminDashboardPage = lazy(() => import('../pages/Admin/AdminDashboardPage'))
const AdminUsersPage = lazy(() => import('../pages/Admin/AdminUsersPage'))
const AdminProductsPage = lazy(() => import('../pages/Admin/AdminProductsPage'))
const AdminOrdersPage = lazy(() => import('../pages/Admin/AdminOrdersPage'))
const AdminReportsPage = lazy(() => import('../pages/Admin/AdminReportsPage'))
const AdminSettingsPage = lazy(() => import('../pages/Admin/AdminSettingsPage'))

const AboutPage = lazy(() => import('../pages/Legal/AboutPage'))
const ContactPage = lazy(() => import('../pages/Legal/ContactPage'))
const TermsPage = lazy(() => import('../pages/Legal/TermsPage'))
const PrivacyPage = lazy(() => import('../pages/Legal/PrivacyPage'))
const CookiePolicyPage = lazy(() => import('../pages/Legal/CookiePolicyPage'))
const HowItWorksPage = lazy(() => import('../pages/Legal/HowItWorksPage'))
const BuyerProtectionPage = lazy(() => import('../pages/Legal/BuyerProtectionPage'))
const ShippingPage = lazy(() => import('../pages/Legal/ShippingPage'))
const ReturnsPage = lazy(() => import('../pages/Legal/ReturnsPage'))
const SellerPricingPage = lazy(() => import('../pages/Seller/SellerPricingPage'))
const SellerResourcesPage = lazy(() => import('../pages/Seller/SellerResourcesPage'))

const SupportPage = lazy(() => import('../pages/Support/SupportPage'))

const CareersPage = lazy(() => import('../pages/Info/CareersPage'))
const PressPage = lazy(() => import('../pages/Info/PressPage'))
const BlogPage = lazy(() => import('../pages/Info/BlogPage'))
const PartnersPage = lazy(() => import('../pages/Info/PartnersPage'))
const SellerSuccessStoriesPage = lazy(() => import('../pages/Info/SellerSuccessStoriesPage'))
const SellerApiPage = lazy(() => import('../pages/Info/SellerApiPage'))
const ReportPage = lazy(() => import('../pages/Info/ReportPage'))
const AccessibilityPage = lazy(() => import('../pages/Info/AccessibilityPage'))
const GdprPage = lazy(() => import('../pages/Info/GdprPage'))
const MessagesPage = lazy(() => import('../pages/MessagesPage'))

const NotFoundPage = lazy(() => import('../pages/Error/NotFoundPage'))
const UnauthorizedPage = lazy(() => import('../pages/Error/UnauthorizedPage'))
const MaintenancePage = lazy(() => import('../pages/Error/MaintenancePage'))

function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <Spinner size="lg" />
    </div>
  )
}

function SuspenseWrapper({ children }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SuspenseWrapper><MainLayout /></SuspenseWrapper>,
    children: [
      { index: true, element: <SuspenseWrapper><Home /></SuspenseWrapper> },
      { path: 'products', element: <SuspenseWrapper><Products /></SuspenseWrapper> },
      { path: 'products/:id', element: <SuspenseWrapper><ProductDetail /></SuspenseWrapper> },
      { path: 'search', element: <SuspenseWrapper><Search /></SuspenseWrapper> },
      { path: 'category/:slug', element: <SuspenseWrapper><Category /></SuspenseWrapper> },
      { path: 'cart', element: <SuspenseWrapper><Cart /></SuspenseWrapper> },
      { path: 'wishlist', element: <SuspenseWrapper><ProtectedRoute><WishlistPage /></ProtectedRoute></SuspenseWrapper> },

      { path: 'profile', element: <SuspenseWrapper><ProtectedRoute><UserProfilePage /></ProtectedRoute></SuspenseWrapper> },
      { path: 'settings', element: <SuspenseWrapper><ProtectedRoute><UserSettingsPage /></ProtectedRoute></SuspenseWrapper> },
      { path: 'orders', element: <SuspenseWrapper><ProtectedRoute><OrderHistoryPage /></ProtectedRoute></SuspenseWrapper> },
      { path: 'orders/:id', element: <SuspenseWrapper><ProtectedRoute><OrderDetailPage /></ProtectedRoute></SuspenseWrapper> },
      { path: 'order-confirmation/:id', element: <SuspenseWrapper><ProtectedRoute><OrderConfirmationPage /></ProtectedRoute></SuspenseWrapper> },

      { path: 'shop/:slug', element: <SuspenseWrapper><SellerShopPage /></SuspenseWrapper> },

      { path: 'seller/register', element: <SuspenseWrapper><ProtectedRoute><SellerRegisterPage /></ProtectedRoute></SuspenseWrapper> },
      { path: 'seller/shop', element: <SuspenseWrapper><SellerRoute><SellerLayout /></SellerRoute></SuspenseWrapper>, children: [
        { index: true, element: <SuspenseWrapper><SellerDashboardPage /></SuspenseWrapper> },
        { path: 'products', element: <SuspenseWrapper><SellerProductsPage /></SuspenseWrapper> },
        { path: 'products/create', element: <SuspenseWrapper><ProductCreatePage /></SuspenseWrapper> },
        { path: 'products/:id/edit', element: <SuspenseWrapper><ProductEditPage /></SuspenseWrapper> },
        { path: 'orders', element: <SuspenseWrapper><SellerOrdersPage /></SuspenseWrapper> },
        { path: 'analytics', element: <SuspenseWrapper><SellerAnalyticsPage /></SuspenseWrapper> },
        { path: 'payouts', element: <SuspenseWrapper><SellerPayoutsPage /></SuspenseWrapper> },
        { path: 'settings', element: <SuspenseWrapper><SellerShopSettingsPage /></SuspenseWrapper> },
      ]},

      { path: 'admin', element: <SuspenseWrapper><ProtectedRoute roles={['admin']}><AdminLayout /></ProtectedRoute></SuspenseWrapper>, children: [
        { index: true, element: <SuspenseWrapper><AdminDashboardPage /></SuspenseWrapper> },
        { path: 'users', element: <SuspenseWrapper><AdminUsersPage /></SuspenseWrapper> },
        { path: 'products', element: <SuspenseWrapper><AdminProductsPage /></SuspenseWrapper> },
        { path: 'orders', element: <SuspenseWrapper><AdminOrdersPage /></SuspenseWrapper> },
        { path: 'moderation', element: <SuspenseWrapper><AdminProductsPage /></SuspenseWrapper> },
        { path: 'reports', element: <SuspenseWrapper><AdminReportsPage /></SuspenseWrapper> },
        { path: 'settings', element: <SuspenseWrapper><AdminSettingsPage /></SuspenseWrapper> },
      ]},

      { path: 'about', element: <SuspenseWrapper><AboutPage /></SuspenseWrapper> },
      { path: 'contact', element: <SuspenseWrapper><ContactPage /></SuspenseWrapper> },
      { path: 'terms', element: <SuspenseWrapper><TermsPage /></SuspenseWrapper> },
      { path: 'privacy', element: <SuspenseWrapper><PrivacyPage /></SuspenseWrapper> },
      { path: 'cookies', element: <SuspenseWrapper><CookiePolicyPage /></SuspenseWrapper> },
      { path: 'how-it-works', element: <SuspenseWrapper><HowItWorksPage /></SuspenseWrapper> },
      { path: 'buyer-protection', element: <SuspenseWrapper><BuyerProtectionPage /></SuspenseWrapper> },
      { path: 'shipping', element: <SuspenseWrapper><ShippingPage /></SuspenseWrapper> },
      { path: 'returns', element: <SuspenseWrapper><ReturnsPage /></SuspenseWrapper> },
      { path: 'seller/pricing', element: <SuspenseWrapper><SellerPricingPage /></SuspenseWrapper> },
      { path: 'seller/resources', element: <SuspenseWrapper><SellerResourcesPage /></SuspenseWrapper> },
      { path: 'help', element: <SuspenseWrapper><SupportPage /></SuspenseWrapper> },
      { path: 'faq', element: <SuspenseWrapper><SupportPage /></SuspenseWrapper> },

      { path: 'careers', element: <SuspenseWrapper><CareersPage /></SuspenseWrapper> },
      { path: 'press', element: <SuspenseWrapper><PressPage /></SuspenseWrapper> },
      { path: 'blog', element: <SuspenseWrapper><BlogPage /></SuspenseWrapper> },
      { path: 'partners', element: <SuspenseWrapper><PartnersPage /></SuspenseWrapper> },
      { path: 'seller/success-stories', element: <SuspenseWrapper><SellerSuccessStoriesPage /></SuspenseWrapper> },
      { path: 'seller/api', element: <SuspenseWrapper><SellerApiPage /></SuspenseWrapper> },
      { path: 'report', element: <SuspenseWrapper><ReportPage /></SuspenseWrapper> },
      { path: 'accessibility', element: <SuspenseWrapper><AccessibilityPage /></SuspenseWrapper> },
      { path: 'gdpr', element: <SuspenseWrapper><GdprPage /></SuspenseWrapper> },
      { path: 'messages', element: <SuspenseWrapper><ProtectedRoute><MessagesPage /></ProtectedRoute></SuspenseWrapper> },

      { path: '404', element: <SuspenseWrapper><NotFoundPage /></SuspenseWrapper> },
      { path: '403', element: <SuspenseWrapper><UnauthorizedPage /></SuspenseWrapper> },
      { path: 'maintenance', element: <SuspenseWrapper><MaintenancePage /></SuspenseWrapper> },
    ],
  },
  {
    path: '/checkout',
    element: <SuspenseWrapper><ProtectedRoute><CheckoutLayout /></ProtectedRoute></SuspenseWrapper>,
    children: [
      { index: true, element: <SuspenseWrapper><CheckoutPage /></SuspenseWrapper> },
    ],
  },
  {
    element: <SuspenseWrapper><AuthLayout /></SuspenseWrapper>,
    children: [
      { path: 'login', element: <SuspenseWrapper><GuestRoute><LoginPage /></GuestRoute></SuspenseWrapper> },
      { path: 'register', element: <SuspenseWrapper><GuestRoute><RegisterPage /></GuestRoute></SuspenseWrapper> },
      { path: 'forgot-password', element: <SuspenseWrapper><GuestRoute><ForgotPasswordPage /></GuestRoute></SuspenseWrapper> },
      { path: 'reset-password/:token', element: <SuspenseWrapper><GuestRoute><ResetPasswordPage /></GuestRoute></SuspenseWrapper> },
      { path: 'verify-email', element: <SuspenseWrapper><GuestRoute><VerifyEmailPage /></GuestRoute></SuspenseWrapper> },
    ],
  },
  {
    element: <SuspenseWrapper><MainLayout /></SuspenseWrapper>,
    children: [
      { path: '*', element: <SuspenseWrapper><NotFoundPage /></SuspenseWrapper> },
    ],
  },
])
