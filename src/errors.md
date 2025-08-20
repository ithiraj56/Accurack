# AccuRack Error Log

## Common Dev Errors

### 1. State Update Not Triggering
**Cause**: Missing `key` in React list
**Fix**: Always use `product.id` as key

```tsx
// ❌ Wrong
{products.map((product) => (
  <tr>...</tr>
))}

// ✅ Correct
{products.map((product) => (
  <tr key={product.id}>...</tr>
))}
```

### 2. Modal not closing on submit
**Cause**: Missing call to `onClose()` after submit
**Fix**: Ensure you call `onClose()` in modal after calling `onSubmit()`

```tsx
// ❌ Wrong
const handleSubmit = (productData) => {
  onSubmit(productData);
  // Missing onClose()
};

// ✅ Correct
const handleSubmit = (productData) => {
  onSubmit(productData);
  onClose(); // Always close after submit
};
```

### 3. Editing wrong product
**Cause**: `initialData` not passed correctly
**Fix**: Log the selected product to console before passing

```tsx
// ✅ Debug approach
const handleEdit = (product) => {
  console.log('Editing product:', product);
  setEditingProduct(product);
  setIsModalOpen(true);
};
```

### 4. Tailwind styles not showing
**Cause**: Tailwind not configured with `content` path to `/src`
**Fix**: Ensure `tailwind.config.js` includes `./src/**/*.{js,ts,jsx,tsx}`

```js
// ✅ Correct tailwind.config.js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  // ...
}
```

## Search & Filter Errors

### 5. Search not working
**Cause**: Not using `.toLowerCase()` or filtering after state update
**Fix**: Use `.toLowerCase()` and ensure filter logic is inside render/return

```tsx
// ❌ Wrong - Case sensitive search
const filteredProducts = products.filter(product =>
  product.name.includes(searchQuery)
);

// ✅ Correct - Case insensitive search
const filteredProducts = products.filter(product =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
);
```

### 6. Category filter doesn't update
**Cause**: Missing `onChange` handler or default value
**Fix**: Set `value` and `onChange` properly on `<select>`

```tsx
// ❌ Wrong - Missing controlled component setup
<select>
  <option value="All">All Categories</option>
</select>

// ✅ Correct - Properly controlled select
<select
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
>
  <option value="All Categories">All Categories</option>
  {categories.map(category => (
    <option key={category} value={category}>{category}</option>
  ))}
</select>
```

## Modal Errors

### 7. Modal not opening
**Cause**: `selectedProduct` not set
**Fix**: Ensure product card has correct `onClick` handler

```tsx
// ❌ Wrong - Missing onClick or incorrect handler
<tr className="cursor-pointer">
  <td>{product.name}</td>
</tr>

// ✅ Correct - Proper onClick handler
<tr 
  className="cursor-pointer"
  onClick={() => setSelectedProduct(product)}
>
  <td>{product.name}</td>
</tr>
```

### 8. Modal closes instantly
**Cause**: `selectedProduct` reset or modal unmounting unexpectedly
**Fix**: Check state flow and parent conditional rendering

```tsx
// ❌ Wrong - State might be reset elsewhere
const handleSomething = () => {
  setSelectedProduct(null); // Accidentally clearing state
};

// ✅ Correct - Proper conditional rendering
{selectedProduct && (
  <ProductDetailModal
    product={selectedProduct}
    onClose={() => setSelectedProduct(null)}
  />
)}
```

### 9. Dialog not styled properly
**Cause**: Missing proper styling classes or incorrect component structure
**Fix**: Use correct shadcn `Dialog` component and layout class names

```tsx
// ❌ Wrong - Missing proper styling
<div className="modal">
  <div className="content">
    {/* Content */}
  </div>
</div>

// ✅ Correct - Proper modal styling
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-white rounded-xl p-6 max-w-lg w-full mx-4 shadow-2xl max-h-[80vh] overflow-y-auto">
    {/* Content */}
  </div>
</div>
```

## Runtime Errors

### 10. Cannot read property 'id' of undefined
**Cause**: Trying to access product properties when product is null
**Fix**: Add null checks before accessing properties

```tsx
// ❌ Wrong
const productName = editingProduct.name;

// ✅ Correct
const productName = editingProduct?.name || '';
```

### 11. Form not pre-filling in edit mode
**Cause**: `useEffect` dependency array missing `isOpen`
**Fix**: Include `isOpen` in dependency array to reset form when modal opens

```tsx
// ✅ Correct useEffect
useEffect(() => {
  if (initialData) {
    setFormData({ ...initialData });
  } else {
    setFormData(defaultFormData);
  }
}, [initialData, isOpen]); // Include isOpen
```

### 12. Duplicate IDs when adding products
**Cause**: Using `Math.random()` or `Date.now()` alone for ID generation
**Fix**: Combine timestamp with random for better uniqueness

```tsx
// ✅ Better ID generation
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
```

## TypeScript Errors

### 13. Property does not exist on type
**Cause**: Missing interface definition or incorrect typing
**Fix**: Define proper interfaces and use them consistently

```tsx
// ✅ Proper interface
interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  status: string;
}
```

### 14. Argument of type 'X' is not assignable to parameter of type 'Y'
**Cause**: Type mismatch in function calls
**Fix**: Ensure types match or use proper type casting

```tsx
// ✅ Proper typing
const handleSubmit = (productData: Product) => {
  // productData is properly typed
};
```

## Next.js Specific Errors

### 15. Hydration mismatch
**Cause**: Server and client rendering different content
**Fix**: Use `'use client'` directive for components with state

```tsx
// ✅ Client component
'use client';
import { useState } from 'react';
```

### 16. Module not found: Can't resolve '@/...'
**Cause**: Path alias not configured in `tsconfig.json`
**Fix**: Ensure `baseUrl` and `paths` are set correctly

```json
// ✅ Correct tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Performance Issues

### 17. Component re-rendering too often
**Cause**: Creating new objects/functions in render
**Fix**: Use `useCallback` and `useMemo` for optimization

```tsx
// ✅ Optimized
const handleEdit = useCallback((product: Product) => {
  setEditingProduct(product);
  setIsModalOpen(true);
}, []);
```

## Debugging Tips

### General Debugging
1. **Console.log strategically**: Log state changes and prop values
2. **React DevTools**: Use to inspect component state and props
3. **Network tab**: Check for failed API calls (when implemented)
4. **TypeScript errors**: Fix all TypeScript errors before testing

### Modal Debugging
1. **Check `isOpen` prop**: Ensure it's being passed correctly
2. **Verify `initialData`**: Log the data being passed to modal
3. **Form state**: Check if form data is updating correctly
4. **Event handlers**: Ensure all handlers are bound correctly

---

## Quick Fixes Checklist

When something isn't working:

- [ ] Check console for errors
- [ ] Verify all imports are correct
- [ ] Ensure `key` props are set on list items
- [ ] Check TypeScript errors
- [ ] Verify state is updating correctly
- [ ] Test with React DevTools
- [ ] Check Tailwind classes are applied
- [ ] Ensure `'use client'` is added where needed 