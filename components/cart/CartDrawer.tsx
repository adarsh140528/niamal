"use client";

import React, { useState } from "react";
import { useCart } from "@/lib/context/cart-context";
import { formatPrice } from "@/lib/utils";
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    totalItems,
    clearCart,
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      clearCart();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Drawer Body */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-md bg-[#0A0D14] border-l border-white/10 h-full flex flex-col justify-between z-10 shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-azure-400" />
                <h3 className="font-serif text-xl text-foreground font-normal tracking-wide">
                  Shopping Bag
                </h3>
                <span className="text-xs text-muted font-sans">
                  ({totalItems} {totalItems === 1 ? "item" : "items"})
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-muted hover:text-foreground transition-colors focus:outline-none cursor-pointer"
                aria-label="Close Shopping Bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {orderComplete ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-16 h-16 rounded-full bg-azure-500/15 border border-azure-400/40 flex items-center justify-center text-azure-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-foreground font-normal">
                    Order Reserved with Honour
                  </h4>
                  <p className="text-xs font-sans text-muted max-w-xs leading-relaxed font-light">
                    Your acquisition has been registered with NIAMAL Concierge. A confirmation has been prepared for dispatch.
                  </p>
                  <MagneticButton
                    variant="primary"
                    onClick={() => {
                      setOrderComplete(false);
                      closeCart();
                    }}
                    className="mt-4"
                  >
                    Continue Exploring
                  </MagneticButton>
                </div>
              ) : items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                  <ShoppingBag className="w-12 h-12 text-muted-dark stroke-1" />
                  <p className="font-serif text-lg text-muted-light">
                    Your shopping bag is empty
                  </p>
                  <p className="text-xs text-muted max-w-xs font-sans font-light">
                    Explore our fine perfume macerations and handcrafted accessories to begin.
                  </p>
                  <MagneticButton
                    variant="secondary"
                    onClick={closeCart}
                    className="mt-4"
                  >
                    Explore Catalog
                  </MagneticButton>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Complimentary Shipping Banner */}
                  <div className="p-3.5 rounded-xl bg-surface border border-azure-400/20 text-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-azure-300 font-sans block font-medium">
                      Complimentary White-Glove Shipping & Gift Boxing Included
                    </span>
                  </div>

                  {/* Items List */}
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-4 rounded-xl bg-surface border border-white/5 flex gap-4 items-center"
                    >
                      <div className="w-16 h-16 rounded-lg bg-[#06080C] p-2 border border-white/5 flex items-center justify-center shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0 space-y-1">
                        <h4 className="font-serif text-sm text-foreground truncate">
                          {item.product.name}
                        </h4>
                        <span className="text-[10px] uppercase tracking-wider text-muted font-sans block font-light">
                          {item.selectedVariant || item.product.volume || item.product.subTitle}
                        </span>
                        <div className="font-serif text-xs text-azure-300">
                          {formatPrice(item.product.price)}
                        </div>
                      </div>

                      {/* Quantity Modifier */}
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-muted-dark hover:text-red-400 transition-colors p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-center gap-2 border border-white/10 rounded px-2 py-0.5 bg-black/40">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="text-muted hover:text-foreground text-xs cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono px-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="text-muted hover:text-foreground text-xs cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {items.length > 0 && !orderComplete && (
              <div className="p-6 border-t border-white/10 bg-[#06080C] space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-sans text-muted">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-sans text-muted">
                    <span>Shipping</span>
                    <span className="text-azure-300">Complimentary</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between font-serif text-lg text-foreground">
                    <span>Total</span>
                    <span className="text-azure-300 font-light">{formatPrice(subtotal)}</span>
                  </div>
                </div>

                <MagneticButton
                  variant="primary"
                  className="w-full justify-center"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? "Preparing Concierge..." : "Proceed to Secure Checkout"}
                </MagneticButton>

                <div className="flex items-center justify-center gap-2 text-[10px] text-muted-dark font-sans uppercase tracking-wider pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-azure-400" />
                  <span>256-Bit Encrypted Luxury Checkout</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
