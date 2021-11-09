# Note

## Creating tree from array in a level order fashion

Given an `Array` `[2, null, 1, 3, null, 4, 7]`. The tree on the left is the actual tree, and the tree on the right shows the indices of each element in the tree (`*` stands for `null`).

```text
            tree      |     index
                      |
level 0       2       |       0
             / \      |      / \
level 1     *   1     |     1   2
               / \    |        / \
level 2       3   *   |       3   4
             / \      |      / \
level 3     4   7     |     5   6
```

To build this tree, we need a queue to keep track of the nodes that are created, we will also need to have a flag that indicates whether the next node to be added should be a left node or a right node, in this case we'll use `isLeft: boolean`.
