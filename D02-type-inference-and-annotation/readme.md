# D01

## 1. 你能不能分辨 TypeScript 型別推論和你能不能分辨 TypeScript 型別推論和註記的差別在哪裡呢？

- 型別推論 (Type inference) : 在宣告時沒有指定變數型別，ts 會自動為他判斷型別。
- 型別註記 (Type annotation) : 宣告變數的同時為變數指定型別。

## 2. Nullable Type 可能會造成的各種烏龍狀況？

nullable type 使用起來跟 any 一樣，隨意 assign 不同型別值給變數時，不會收到 ts 的錯誤。

## 3. 型別推論與註記在原始型別（Primitive Type）的使用時機為何？

宣告變數後若是直接 assign value 就使用 type inference 的 type 即可。
