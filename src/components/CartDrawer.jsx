import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export default function CartDrawer() {
  const { cart, isCartOpen, closeCartDrawer, removeFromCart, updateQuantity, updateSize } = useCartStore();

  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 5000 ? 0 : 250;
  const total = subtotal + shipping;

  const handleSizeChange = (item, newSize) => {
    updateSize(item.id, item.size, newSize);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCartDrawer}
            className="fixed inset-0 bg-black/40 z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-lg bg-white z-[70] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5" />
                <span className="font-semibold text-lg">Shopping Bag</span>
                <span className="text-sm text-gray-500">({cart.length})</span>
              </div>
              <button 
                onClick={closeCartDrawer}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 py-20">
                  <ShoppingBag className="w-16 h-16 mb-4 opacity-30" />
                  <p className="text-gray-500 font-medium">Your bag is empty</p>
                  <button 
                    onClick={closeCartDrawer}
                    className="mt-6 bg-black text-white px-8 py-3 text-sm font-medium tracking-wide"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="p-5 space-y-6">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex gap-4 border-b border-gray-100 pb-6">
                      {/* Image */}
                      <div className="w-28 h-40 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>

                      {/* Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-sm text-gray-900 leading-snug">{item.name}</h3>
                            <button 
                              onClick={() => removeFromCart(item.id, item.size)}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{item.category}</p>
                          <p className="font-semibold text-gray-900 mt-2">₹{item.price.toLocaleString('en-IN')}</p>
                        </div>

                        <div className="space-y-3 mt-3">
                          {/* Size */}
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">Size:</span>
                            <div className="flex gap-1">
                              {['S', 'M', 'L', 'XL'].map((size) => (
                                <button
                                  key={size}
                                  onClick={() => handleSizeChange(item, size)}
                                  className={`px-2 py-1 text-xs rounded border transition-colors
                                    ${item.size === size 
                                      ? 'bg-black text-white border-black' 
                                      : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'}`}
                                >
                                  {size}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Quantity */}
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-500">Qty:</span>
                            <div className="flex items-center border border-gray-300 rounded">
                              <button 
                                onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                className="px-2 py-1 hover:bg-gray-100"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-3 text-sm">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                className="px-2 py-1 hover:bg-gray-100"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-gray-200 bg-gray-50">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-3 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors">
                  Checkout - ₹{total.toLocaleString('en-IN')}
                </button>

                <button 
                  onClick={closeCartDrawer}
                  className="w-full mt-3 text-center text-sm text-gray-500 hover:text-black"
                >
                  or continue shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}