# React Performance Optimization Guide

This guide focuses on the most critical React performance optimization techniques that deliver the highest impact. Based on a comprehensive analysis of performance patterns, these guidelines will help you build fast and responsive React applications.

---

## Core Performance Principles

### 1. The Golden Rule of React Performance

Not doing something is faster than doing something!

- Component hierarchy and state management solutions are ALWAYS preferable to memoization.
- Sometimes skipping work is less expensive than doing it (Memoization).
- Sometimes you can postpone work (Suspense API).
- Do urgent things now, non-urgent things later (Transition API).

### 2. Optimization Priority Order

1. **Fix component hierarchy and state management**
2. **Use memoization strategically when it pays off**
3. **Leverage modern React features** (Suspense, Transitions)
4. **Use complex optimization techniques only as a last resort**

---

## Component Hierarchy & State Management

### State Placement Strategy

```tsx
// ❌ Bad - State too high, triggers unnecessary re-renders
function App() {
  const [count, setCount] = useState(0);
  const [expensiveData, setExpensiveData] = useState([]);
  return (
    <div>
      <Counter count={count} setCount={setCount} />
      <ExpensiveComponent data={expensiveData} />
    </div>
  );
}

// ✅ Good - Push state as low as possible
function App() {
  const [expensiveData, setExpensiveData] = useState([]);
  return (
    <div>
      <CounterWrapper />
      <ExpensiveComponent data={expensiveData} />
    </div>
  );
}

function CounterWrapper() {
  const [count, setCount] = useState(0);
  return <Counter count={count} setCount={setCount} />;
}
```

### Children Pattern for Performance

```tsx
function ExpensiveParent({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState();

  return (
    <div>
      <SomeExpensiveLogic state={state} />
      {children}
    </div>
  );
}

// Usage
<ExpensiveParent>
  <StableComponent />
</ExpensiveParent>;
```

---

## Understanding React’s Render Cycle

- **Trigger**: State update (useState, useReducer, context update).
- **Render Phase**: React runs component functions and calculates changes.
- **Commit Phase**: React updates the DOM with minimal changes.
- **Cleanup**: Effects and cleanup run.

**Key insights:**

- Parent re-renders trigger all children re-renders by default.
- Every function in a component is recreated per render (closure scope).

---

## Strategic Memoization

### React.memo Guidelines

```tsx
const ExpensiveComponent = React.memo(({ data, onAction }: Props) => {
  return <ComplexVisualization data={data} />;
});
```

### useMemo for Heavy Computations

```tsx
function DataProcessor({ items, filters }: Props) {
  const processedData = useMemo(() => {
    return items
      .filter(applyFilters(filters))
      .sort(expensiveSort)
      .map(complexTransformation);
  }, [items, filters]);

  return <DataVisualization data={processedData} />;
}
```

### useCallback for Stable Functions

```tsx
function Parent({ items }: Props) {
  const handleRemove = useCallback((id: string) => {
    setItems((items) => items.filter((item) => item.id !== id));
  }, []);

  return (
    <div>
      {items.map((item) => (
        <MemoizedItem key={item.id} item={item} onRemove={handleRemove} />
      ))}
    </div>
  );
}
```

---

## Context Optimization

- Split contexts based on update frequency.
- Memoize context values to avoid new objects every render.

---

## List Rendering Optimization

- Use **stable keys** (avoid array index when order can change).
- Use **virtualization** (`react-window`, `react-virtualized`) for large lists.

---

## Modern React Features (React 18+)

- **useTransition**: Handle urgent vs non-urgent updates.
- **useDeferredValue**: Defer expensive derived computations.
- **Suspense**: Code splitting and async rendering.

---

## Performance Profiling & Monitoring

- Profile in **production builds**.
- Use **React DevTools Profiler**.
- Measure before optimizing.
- Integrate **Core Web Vitals** monitoring.

---

## Common Anti-Patterns to Avoid

- Over-memoization.
- Inline objects/functions.
- Importing entire libraries instead of tree-shaking.

---

⚠️ **Remember:** Premature optimization is harmful. Always measure first, optimize based on real bottlenecks, and validate improvements.
