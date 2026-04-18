import { createContext } from 'react';

export const ComboRenderContext = createContext({
    buttonRender: { "render": null, "name": "" },
    setButtonRender: (render) => { },
    buttonRenderChoices: null,
    motionRenderName: "renderType",
    setMotionRenderName: (motion) => { },
    motionRenderChoices: null,
    getMotionComponent: (props) => null,
    motionDirection: "right or left",
    setMotionDirection: () => null,
    collapseButtonRender: false,
    setCollapseButtonRender: () => null,
    showAllTags: Boolean,
    setShowAllTags: () => null,
    hideActionName: Boolean,
    setHideActionName: () => null,
    comboSize: "",
    setComboSize: () => null
});