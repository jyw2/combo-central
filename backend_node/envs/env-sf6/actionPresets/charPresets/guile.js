const common = require("../../sf6-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "full bullet magnum",
        input: [[
          {
            buttons: [["B"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "spinning back knuckle",
        input: [[
          {
            buttons: [["RB"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "burning straight",
        input: [[
          {
            buttons: [["RB"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "knee bazooka",
        input: [[
          {
            buttons: [["D"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "rolling sobat",
        input: [[
          {
            buttons: [["C"]],
            command: ["4", "6"],
          },
        ]],
      },
      {
        name: "reverse spin kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "guile high kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["3"],
          },
        ]],
      },
    ]
  ],
  "Target Combos": [
    [
      {
        name: "recoil cannon",
        input: [[
          {
            buttons: [["B"]],
            command: [""],
          },
        ], [
          {
            buttons: [["RB"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "double shot",
        input: [[
          {
            buttons: [["B"]],
            command: ["2"],
          },
        ], [
          {
            buttons: [["B"]],
            command: ["2"],
          },
        ],],
      },
      {
        name: "drake fang",
        input: [[
          {
            buttons: [["C"]],
            command: ["2"],
          },
        ], [
          {
            buttons: [["B"]],
            command: ["6"],
          },
        ],],
      },
      {
        name: "phantom cutter",
        input: [[
          {
            buttons: [["RT"]],
            command: ["2"],
          },
        ], [
          {
            buttons: [["RT"]],
            command: ["3"],
          },
        ],],
      },
    ],
  ],
  Specials: [
    [
      {
        name: "light sonic blade",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium sonic blade",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy sonic blade",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive sonic blade",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["214"],
          },
        ]],
      },
      {
        name: "sonic cross",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["6"],
          },
        ]],
        dependencies: ["guile-overdrive-sonic-blade|guile-light-sonic-blade|guile-medium-sonic-blade|guile-heavy-sonic-blade|"]
      },
      {
        name: "perfect sonic cross",
        input: [[
          {
            buttons: [["A:(same time as direction press)"], ["B:(same time as direction press)"], ["RB:(same time as direction press)"]],
            command: ["6"],
          },
        ]],
        dependencies: ["guile-overdrive-sonic-blade|guile-light-sonic-blade|guile-medium-sonic-blade|guile-heavy-sonic-blade|"]
      },
      {
        name: "overdrive sonic cross",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["6"],
          },
        ]],
        dependencies: ["guile-overdrive-sonic-blade|guile-light-sonic-blade|guile-medium-sonic-blade|guile-heavy-sonic-blade|"]
      },
    ],
    [
      {
        name: "light sonic boom",
        input: [[
          {
            buttons: [["A"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "medium sonic boom",
        input: [[
          {
            buttons: [["B"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "heavy sonic boom",
        input: [[
          {
            buttons: [["RB"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "overdrive sonic boom",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["[4]6"],
          },
        ]],
      },
    ],
    [
      {
        name: "perfect light sonic boom",
        input: [[
          {
            buttons: [["A:(same time as direction press)"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "perfect medium sonic boom",
        input: [[
          {
            buttons: [["B:(same time as direction press)"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "perfect heavy sonic boom",
        input: [[
          {
            buttons: [["RB:(same time as direction press)"]],
            command: ["[4]6"],
          },
        ]],
      },
    ],
    [
    {
      name: "light somersault kick",
      input: [[
        {
          buttons: [["D"]],
          command: ["[2]8"],
        },
      ]],
    },
    {
      name: "medium somersault kick",
      input: [[
        {
          buttons: [["C"]],
          command: ["[2]8"],
        },
      ]],
    },
    {
      name: "heavy somersault kick",
      input: [[
        {
          buttons: [["RT"]],
          command: ["[2]8"],
        },
      ]],
    },
    {
      name: "overdrive somersault kick",
      input: [[
        {
          buttons: common.any2Kicks,
          command: ["[2]8"],
        },
      ]],
    },
    ],
  ],
  "Super Arts": [
    [
      {
        name: "sonic hurricane",
        input: [[
          {
            buttons: [["A"], ["B"]],
            command: ["[4]646"],
          },
        ]],
      },
      {
        name: "upwards sonic hurricane",
        input: [[
          {
            buttons: [["RB"]],
            command: ["[4]646"],
          },
        ]],
      },
    ],
    [
      {
        name: "solid puncher",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214214"],
          },
        ]],
      },
      {
        name: "sonic break",
        input: [[
          {
            buttons: common.any2Punches,
            command: [""],
          },
        ]],
        playerState: ["solid puncher"]
      },
      {
        name: "fast sonic break",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["6", "3"],
          },
        ]],
        playerState: ["solid puncher"]

      },
      {
        name: "slow sonic break",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["4", "1"],
          },
        ]],
        playerState: ["solid puncher"]

      },
      {
        name: "light followup sonic break",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        playerState: ["solid puncher"],
        dependencies: ["guile-overdrive-sonic-boom|guile-heavy-sonic-boom|guile-medium-sonic-boom|guile-light-sonic-boom|guile-overdrive-sonic-cross|guile-sonic-cross"]
      },
      {
        name: "medium followup sonic break",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        playerState: ["solid puncher"],
        dependencies: ["guile-overdrive-sonic-boom|guile-heavy-sonic-boom|guile-medium-sonic-boom|guile-light-sonic-boom|guile-overdrive-sonic-cross|guile-sonic-cross"]
      },
      {
        name: "heavy followup sonic break",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        playerState: ["solid puncher"],
        dependencies: ["guile-overdrive-sonic-boom|guile-heavy-sonic-boom|guile-medium-sonic-boom|guile-light-sonic-boom|guile-overdrive-sonic-cross|guile-sonic-cross"]
      },
    ], [
      {
        name: "crossfire somersault",
        input: [[
          {
            buttons: common.anyKick,
            command: ["[4]646"],
          },
        ]],
      },
    ]
  ],
};
generatePresetIds(preset, "guile")

module.exports = { preset };
