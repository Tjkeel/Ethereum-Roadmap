## MVC
### Model
The roadmap contains `Path`s, which have a total estimated work. Each path is broken into `Step`s which have a total contribution to the estimated work of the path, as well as an evaluable current progress. The sum of total contributions from all steps in a path should equal the total estimated work of the path. Each step references a `Contribution`, which is a portion of the step completed under a given `Fork`.

```ts
const merge: Path = {
  distributedValidators: 1.1,
  withdrawals: 1.8,
  implementation: 1.1,
};

const misc: Fork = {
  merge: {
    distributedValidators: .4,
    withdrawals: 1.8,
  },
};

const constantinople: Fork = {
  merge: {
    distributedValidators: .7,
  },
};
```
### View
A `Step` is a box which can be filled with a gradient of progress. The colors represent a fork and follow a preset total order which reflects the order of application of the forks. Omitted trailing colors are presumed to have the value 0. The step also has a position within the blocked layout of the path it inhabits.

```tsx
const Merge = () => <Path
  name="merge"
>
  <Progress colors={[
    '#ff0000',
    '#00ff00',
    '#4effd3',
  ]}>
    <Step progress={
      [0, 0, 100]
    }>
      Distributed validators
    </Step>
    <Step progress={
      [0, 20, 0, 40]
    }>
      Withdrawals
    </Step>
  </Progress>
</Path>
```

### Controller
The `Step` accumulates all contributions to its model step and calculates the amount of progress to pass to the view Step.

```ts
const Step = ({
  id, children,
}: React.PropsWithChildren<{
  id: string
}>) => {
  const path = useContext(PathContext);
  const model = useContext(ModelContext);
  const contributions = model.forks.filter(
    (fork) => path in fork && id in fork[path],
  ).map(
    (fork) => [fork, fork[path][id]],
  ).reduce(
    (curr, [fork, contribution]) => ({
      ...curr,
      [fork]: curr[fork] + contribution,
    }),
    Object.fromEntries(orderedForks.map(
      (fork) => [fork, 0],
    )),
  );
  const progress = orderedForks.map(
    (fork) => contributions[fork]
  );
  return <ViewStep progress={progress}>
    { children }
  </ViewStep>;
}
```
