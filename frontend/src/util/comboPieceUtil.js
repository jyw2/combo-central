import { isEqual } from "lodash";
class ComboPieceUtil {
  // static isEqual(c1, c2) {
  //     // Getting pretty expensive to compare!
  //     return (c1.name === c2.name
  //         && c2.input.command.every((c) => c1.includes(c))
  //         && c2.input.buttons.every((buttonSet) => c1.includes(b)))
  // }

  static isEqualParts(c1Name, c2Name, c1inputs, c2inputs) {
    return c1Name === c2Name && isEqual(c1inputs, c2inputs);
  }

  static getEmptyPiece() {
    return {
      name: "",
      tips: "",
      input: [[
        {
          command: [""],
          buttons: [[]],
        },
      ]],
      playerState: [],
      presetId: null
    };
  }

  static isComboPieceEmpty(inputs) {
    return !inputs?.some(
      (ip) => ip.some(
        (i) =>
          (i?.command?.length > 0 && i?.command?.some((c) => c)) ||
          (i?.buttons?.length > 0 && i?.buttons?.some((b) => b.length > 0))
      )
    );
  }

  static cleanCommand(command, positionMap) {
    let positions = [];
    let chargeIndeces = new Set();
    let index = 0;
    for (let char of command) {
      if (char === "[") {
        chargeIndeces.add(index);
      } else if (char === "]") {
        continue;
      } else {
        positions.push(positionMap[char]);
        index += 1;
      }
    }
    return [positions, chargeIndeces];
  }

  static stringifyButtons(buttons) {
    let stringButtons = ""

    let variantIndex = 0
    for (let buttonVariant of buttons) {
      if (variantIndex !== 0) stringButtons += "/"

      let index = 0
      for (let input of buttonVariant) {
        stringButtons += input + (index === buttonVariant.length - 1 ? "" : ",")
        index += 1
      }

      variantIndex += 1
    }
    return stringButtons
  }

  static unStringifyButtons(stringButtons) {
    let buttons = []
    const stringButtonsSplit = stringButtons.split('/')

    for (let buttonVariantString of stringButtonsSplit) {
      let variant = []
      for (let button of buttonVariantString.split(",")) {
        variant.push(button)
      }
      buttons.push(variant)
    }
    return buttons
  }

  static collapseButtons(ogButtons, collapsePairs) {
    const buttons = structuredClone(ogButtons)
    function doesSequenceMatch(buttonVariantSetIndex, buttonIndex, target) {
      let currentAnnotation = null
      let sharedAnnotation = true

      let targetButtonVariantSetIndex = 0
      for (let targetButtonVariantSet of target) {
        let currentSet = buttons[buttonVariantSetIndex + targetButtonVariantSetIndex]
        if (!currentSet || targetButtonVariantSet.length !== currentSet.length) return [false, null]

        let targetButtonIndex = 0

        for (let targetButton of targetButtonVariantSet) {


          let currentButton = currentSet[buttonIndex + targetButtonIndex]
          if (!currentButton) return [false, null]

          let annotation = null
          if (currentButton.indexOf(":") > -1) {
            // button has annotations
            annotation = currentButton.slice(currentButton.indexOf(":") + 1)
            currentButton = currentButton.slice(0, currentButton.indexOf(":"))
          } else {
            annotation = "" //no annotation
          }

          if (currentButton !== targetButton) return [false, null]

          if (currentAnnotation === null) {
            currentAnnotation = annotation
          } else if (currentAnnotation !== annotation) {
            // not all buttons have the same annotation.
            sharedAnnotation = false
          }

          targetButtonIndex += 1
        }
        targetButtonVariantSetIndex += 1
      }
      return [true && sharedAnnotation, currentAnnotation]
    }


    // let buttonsString = this.stringifyButtons(buttons)
    for (let collapsePair of collapsePairs) {
      const target = collapsePair[0]
      const targetFirstButton = target[0][0]
      const replacement = collapsePair[1]

      let buttonVariantSetIndex = 0
      for (let buttonVariantSet of buttons) {
        let buttonIndex = 0
        for (let button of buttonVariantSet) {

          let cleanedButton = button

          if (button.indexOf(":") > -1) {
            cleanedButton = button.slice(0, button.indexOf(":"))
          }

          if (cleanedButton === targetFirstButton && (buttons.length - buttonVariantSetIndex) >= target.length
            && (buttons[buttonVariantSetIndex].length - buttonIndex) >= target[0].length
          ) {
            const [match, annotation] = doesSequenceMatch(buttonVariantSetIndex, buttonIndex, target)
            const annotatedReplacement = (structuredClone(replacement).map((v) => v.map((b) => annotation ? b + ":" + annotation : b)))
            if (match) buttons.splice(buttonVariantSetIndex, target.length, ...annotatedReplacement)
          }

          buttonIndex += 1
        }
        buttonVariantSetIndex += 1
      }

    }
    return buttons
  }

  static generateAllButtonPermsCollapsePairs(buttonString, replacement, seperator) {
    // use / as the separator for variants

    let permArr = [];
    let usedChars = [];

    if (!buttonString) return []

    function permute(buttonString) {
      if (buttonString) {
        const chars = buttonString.split(seperator);
        for (let i = 0; i < chars.length; i++) {
          const ch = chars.splice(i, 1);
          usedChars.push(ch);
          if (chars.length === 0) {
            permArr[permArr.length] = usedChars.join(seperator);
          }
          permute(chars.join(seperator));
          chars.splice(i, 0, ch)
          usedChars.pop();
        }
      }
      return permArr
    }
    const stringPermsList = permute(buttonString).map(p => [p, replacement])
    return stringPermsList.map((s) => [this.unStringifyButtons(s[0]), s[1]])
  }

  static sortCollapsePairs(pairs) {
    return pairs.sort((a, b) => a[0].length === b[0].length ? 0 : a[0].length > b[0].length ? -1 : 1)
  }

  static formatDetail(detail) {
    return (detail.charAt(0).toUpperCase() + detail.slice(1)).replaceAll(
      "-",
      " "
    );
  }

  static reverseFormatDetail(detail) {
    return (detail.charAt(0).toLowerCase() + detail.slice(1)).replaceAll(
      " ",
      "-"
    );
  }
}


export { ComboPieceUtil };
