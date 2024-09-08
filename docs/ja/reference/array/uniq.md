# uniq

配列内の要素の重複を削除します。

この関数は配列を受け取り、元の配列から一意の値のみを含む新しい配列を返します。新しい配列内の要素の順序は、元の配列で最初に登場する順序を維持します。

## インターフェース

```typescript
function uniq<T>(arr: T[]): T[];
```

### パラメータ

- `arr` (`T[]`): 要素の重複を削除する配列です。

### 戻り値

(`T[]`): 元の配列から一意の要素のみを含む新しい配列です。

## 例

```typescript
const array = [1, 2, 2, 3, 4, 4, 5];
const result = uniq(array);
// resultは[1, 2, 3, 4, 5]になります。
```