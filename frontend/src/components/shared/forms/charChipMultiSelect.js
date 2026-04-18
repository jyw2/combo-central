import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import FormHelperText from "@mui/material/FormHelperText";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { ComboPieceUtil } from "util/comboPieceUtil";
import {rootPath} from "../../../util/envResolverUtilEs6"

export default function CharChipMultiSelect(props) {
    // Has "ALL" as a discrete value

    let { _value, setVal, valuePool, label, useIcons, charSelect } = props;
    const allValue = "all-characters"

    function handleSelect(event) {
        let oldValue = _value;
        const {
            target: { value },
        } = event;
        let newValue = value;

        const newValueAsArray = (typeof newValue === "string" ? newValue.split(",") : newValue)
        const hadAllSelected = oldValue.indexOf(allValue) !== -1
        const hasAllSeleced = newValueAsArray.indexOf(allValue) !== -1
        if (hasAllSeleced) {
            if (hadAllSelected) {
                setVal(newValueAsArray.splice(newValueAsArray.indexOf(allValue, 1)));
            } else {
                setVal([allValue]);
            }
        } else {
            if (newValue.length === valuePool.length - 1) {
                setVal([allValue]);
            } else {
                setVal(newValueAsArray);
            }
        }
    }

    return (
        <Stack style={{ flexGrow: 1 }}>
            <FormHelperText align="left" variant="caption" sx={{ pt: 1 }}>
                {label}
            </FormHelperText>
            <Select
                style={{ fontSize: "14px", width: "100%", maxWidth: "300px" }}
                multiple
                size="small"
                value={_value}
                onChange={handleSelect}
                renderValue={(_value) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {_value.map((_value) => (
                            <Chip avatar={charSelect ? <Avatar alt={_value} src={require(`../../../${rootPath}/images/${_value}-chip-icon.png`)} /> : null} size="small"
                                key={_value}
                                label={charSelect ? ComboPieceUtil.formatDetail(_value) : _value} />
                        ))}
                    </Box>
                )}
            >
                {valuePool.map((v) => (
                    <MenuItem value={v} key={v}>
                        <Checkbox checked={_value.indexOf(v) > -1} />
                        <ListItemText primary={charSelect ? ComboPieceUtil.formatDetail(v) : v} />
                    </MenuItem>
                ))}
            </Select>
        </Stack>
    );
}
