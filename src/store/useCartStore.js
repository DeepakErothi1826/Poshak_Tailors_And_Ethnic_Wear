import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  cart: [],
  isCartOpen: false,

  toggleCartDrawer: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  
  openCartDrawer: () => set({ isCartOpen: true }),
  
  closeCartDrawer: () => set({ isCartOpen: false }),

  addToCart: (product, size = 'M') => set((state) => {
    const existingItem = state.cart.find((item) => item.id === product.id && item.size === size);
    if (existingItem) {
      return {
        cart: state.cart.map((item) =>
          item.id === product.id && item.size === size 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        ),
        isCartOpen: true,
      };
    }
    return {
      cart: [...state.cart, { ...product, quantity: 1, size }],
      isCartOpen: true,
    };
  }),

  removeFromCart: (productId, size) => set((state) => ({
    cart: state.cart.filter((item) => !(item.id === productId && item.size === size)),
  })),

  updateQuantity: (productId, size, quantity) => set((state) => {
    if (quantity <= 0) {
      return {
        cart: state.cart.filter((item) => !(item.id === productId && item.size === size)),
      };
    }
    return {
      cart: state.cart.map((item) =>
        item.id === productId && item.size === size ? { ...item, quantity } : item
      ),
    };
  }),

  updateSize: (productId, oldSize, newSize) => set((state) => {
    const itemToUpdate = state.cart.find((item) => item.id === productId && item.size === oldSize);
    const existingWithNewSize = state.cart.find((item) => item.id === productId && item.size === newSize);
    
    if (existingWithNewSize) {
      const newCart = state.cart.filter((item) => !(item.id === productId && item.size === oldSize));
      return {
        cart: newCart.map((item) =>
          item.id === productId && item.size === newSize 
            ? { ...item, quantity: item.quantity + itemToUpdate.quantity } 
            : item
        ),
      };
    }
    
    return {
      cart: state.cart.map((item) =>
        item.id === productId && item.size === oldSize ? { ...item, size: newSize } : item
      ),
    };
  }),

  getCartTotal: () => {
    const state = get();
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}));