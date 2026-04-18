import { ComboPieceUtil } from "util/comboPieceUtil"

const collapsePairs = ComboPieceUtil.sortCollapsePairs([
    [[["A"], ["B"], ["RB"]], [["P"]]],
    [[["A", "B"], ["A", "RB"], ["B", "RB"]], [["PP"]]],
    [[["D"], ["C"], ["RT"]], [["P"]]],
    [[["D", "C"], ["D", "RT"], ["C", "RT"]], [["PP"]]],
])

export { collapsePairs }