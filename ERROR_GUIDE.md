# Error Guide for AccuRack

## Common Errors

### ❌ useAuth must be used within AuthProvider
**Fix**: Wrap your app in `<AuthProvider>` in `layout.tsx`.

### ❌ Module not found: Can't resolve '@/components/...'
**Fix**: Check if you are using correct path alias or relative import.

### ❌ TypeScript type mismatch
**Fix**: Ensure types are correctly imported from `user.ts`.

---

## Add more errors as you face them.
