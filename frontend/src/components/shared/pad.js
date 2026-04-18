import { useTheme } from "@mui/material/styles";
import { animated, useSpring } from "@react-spring/web";
import { ComboPieceUtil } from "util/comboPieceUtil";

function Pad(props) {
  const { small, medium } = props;
  const theme = useTheme();

  let padCircum = 30;
  let padRadius = padCircum / 2;
  let circleCircum = 10;
  let circleRadius = circleCircum / 2;

  const positionCoords = {
    7: [0, 0],
    8: [0, 1],
    9: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    1: [2, 0],
    2: [2, 1],
    3: [2, 2],
  };

  const positionMap = {
    1: { y: padCircum - 2 * circleRadius, x: 0 },
    2: { y: padCircum - circleRadius, x: padRadius - circleRadius },
    3: { y: padCircum - 2 * circleRadius, x: padCircum - 2 * circleRadius },
    4: { y: padRadius - circleRadius, x: 0 - circleRadius },
    5: { y: padRadius - circleRadius, x: padRadius - circleRadius },
    6: { y: padRadius - circleRadius, x: padCircum - circleRadius },
    7: { y: 0, x: 0 },
    8: { y: 0 - circleRadius, x: padRadius - circleRadius },
    9: { y: 0, x: padCircum - 2 * circleRadius },
  };
  const [positions, chargeIndeces] = ComboPieceUtil.cleanCommand(
    props.command,
    positionMap
  ); // must be 2 or greater
  const springs = useSpring({
    from: { background: theme.palette.text.primary, ...positions[0] },
    to: async (next, cancel) => {
      const isDashInput = positions.length > 1 && positions[0].x === positions[1].x && positions[0].y === positions[1].y

      await next({
        background: theme.palette.text.primary,
        config: {
          duration: isDashInput ? 60 : 200,
        },
      });

      if (!isDashInput) await new Promise((r) => setTimeout(r, 200));

      let index = 1;
      for (const pos of positions.slice(1)) {
        if (chargeIndeces.has(index - 1)) {
          await new Promise((r) => setTimeout(r, 700));
        }
        const prevPos = positions[index - 1];
        const eucDistance = Math.sqrt(
          (pos.x - prevPos.x) ** 2 + (pos.y - prevPos.y) ** 2
        );

        if (eucDistance === 0) {
          // for dashes and down down inputs
          await new Promise((r) => setTimeout(r, 100));
          await next({ background: "rgba(0, 0, 0, 0)", config: { duration: 60 } })
          await next({ background: theme.palette.text.primary, config: { duration: 60 } })
          await new Promise((r) => setTimeout(r, 100));

        
        } else {
          await next({ ...pos, config: { duration: eucDistance * 6 } });
        }

        index += 1;
        // await new Promise(r => setTimeout(r, 50));
      }
      // Maybe animate the buttons getting pressed here
      await new Promise((r) => setTimeout(r, 300));
      await next({
        background: "rgba(0, 0, 0, 0)",
        config: {
          duration: 300,
        },
      });
      await new Promise((r) => setTimeout(r, 300));
    },
    loop: true,
    config: {
      duration: positions.length * 20,
    },
  });
  function renderHead() {
    if (positions.length > 1) {
      return (
        <animated.div
          style={{
            width: circleCircum,
            height: circleCircum,
            borderRadius: 50,
            transformOrigin: "center",
            ...springs,
          }}
        />
      );
    } else if (positions.length === 1) {
      return (
        <animated.div
          style={{
            background: theme.palette.text.primary,
            width: circleCircum,
            height: circleCircum,
            borderRadius: 50,
            transformOrigin: "center",
            ...positions[0],
          }}
        />
      );
    } else {
      return <div></div>;
    }
  }
  return (
    <div
      style={{
        position: "relative",
        marginTop: "auto",
        marginBottom: "auto",
        width: `${padCircum}px`,
        height: `${padCircum}px`,
        border: `solid 2px ${theme.palette.text.primary}`,
        borderRadius: 50,
        transform: small ? "scale(0.6)" : medium ? "scale(0.75)" : "",
        marginRight: small ? "-10px" : "",
        marginleft: small ? "-10px" : "",
      }}
    >
      {renderHead()}
      <div
        style={{
          width: circleCircum / 3,
          height: circleCircum / 3,
          borderRadius: 50,
          margin: "auto",
          marginTop: circleCircum / 2 - circleCircum / 6,
          background: theme.palette.text.primary,
          transformOrigin: "center",
        }}
      />
    </div>
  );
}

export default Pad;
