describe("Lewis Dot Structures - SetActive()", () => {
    it("should return false with no values provided", () => {
        var SetActiveCurrentState = SetActive();
        if (SetActiveCurrentState.el == "undefined") {
            if (SetActiveCurrentState.entityState == null) {
                expect(SetActiveCurrentState.entityState).toBeFalsy();
                expect(SetActiveCurrentState.exception).toBe(
                    "Exception : Id not found undefined"
                );
            }
        }
    });

    it("should return values if Bool is True", () => {
        var SetActiveCurrentState = SetActive("MainMenu", true, true);
        if (SetActiveCurrentState.visible == "true") {
            expect(SetActiveCurrentState.entityState).toBeTruthy();
            expect(SetActiveCurrentState.entityState.outerHTML).toContain("MainMenu");
            expect(SetActiveCurrentState.entityState.id).toBe("MainMenu");
            expect(SetActiveCurrentState.visible).toBe("true");
            expect(SetActiveCurrentState.scale.x).toBe(1);
            expect(SetActiveCurrentState.scale.y).toBe(1);
            expect(SetActiveCurrentState.scale.z).toBe(1);
        }
    });

    it("should return values if Bool is False", () => {
        var SetActiveCurrentState = SetActive("MainMenu", false, true);
        if (SetActiveCurrentState.visible == "false") {
            expect(SetActiveCurrentState.entityState).toBeTruthy();
            expect(SetActiveCurrentState.entityState.outerHTML).toContain("MainMenu");
            expect(SetActiveCurrentState.entityState.id).toBe("MainMenu");
            expect(SetActiveCurrentState.visible).toBe("false");
            expect(SetActiveCurrentState.scale.x).toBe(0);
            expect(SetActiveCurrentState.scale.y).toBe(0);
            expect(SetActiveCurrentState.scale.z).toBe(0);
        }
    });
});

describe("Lewis Dot Structures - SetOnClickListener() ", () => {
    it("should return false with no values provided", () => {
        var SetOnClickListenerCurrentState = SetOnClickListener();
        if (SetOnClickListenerCurrentState.el == undefined) {
            if (SetOnClickListenerCurrentState.entity != null) {
                expect(SetOnClickListenerCurrentState.exception).toBe(
                    "Exception : Id not found ID: undefined"
                );
            }
        }
    });

    it("should return values", () => {
        var SetOnClickListenerCurrentState = SetOnClickListener(
            "highlight_oxygen",
            "",
            true
        );
        expect(SetOnClickListenerCurrentState.id).toBe("highlight_oxygen");
        expect(SetOnClickListenerCurrentState.entity.outerHTML).toContain(
            "highlight_oxygen"
        );
        expect(SetOnClickListenerCurrentState.entity.onclick).toBeTruthy();
    });
});

describe("Lewis Dot Structures - PlayAnimation() ", () => {
    it("should return false with no values provided", () => {
        var PlayAnimationCurrentState = PlayAnimation();
        if (PlayAnimationCurrentState.el == undefined) {
            if (PlayAnimationCurrentState.entity == null) {
                expect(PlayAnimationCurrentState.exception).toBe(
                    "Exception : Id not found ID: undefined"
                );
                expect(PlayAnimationCurrentState.id).toBeFalsy();
                expect(PlayAnimationCurrentState.entity).toBeFalsy();
            }
        }
    });

    it("should return values", () => {
        var PlayAnimationCurrentState = PlayAnimation("highlight_oxygen", true);
        expect(PlayAnimationCurrentState.id).toBe("highlight_oxygen");
        expect(PlayAnimationCurrentState.entity.outerHTML).toContain(
            "highlight_oxygen"
        );
        expect(PlayAnimationCurrentState.entity.outerHTML).toContain("animation");
    });
});

//------------------------------------------------------------------------------
describe("Lewis Dot Structures - AddAnimationCallBack() ", () => {
    it("should return false with no values provided", () => {
        var AddAnimationCallBackCurrentState = AddAnimationCallBack();

        if (AddAnimationCallBackCurrentState.el == undefined) {
            if (AddAnimationCallBackCurrentState.entity == null) {
                expect(AddAnimationCallBackCurrentState.exception).toBe(
                    "Exception : Id not found ID: undefined"
                );
                expect(AddAnimationCallBackCurrentState.id).toBeFalsy();
                expect(AddAnimationCallBackCurrentState.entity).toBeFalsy();
            }
        }
    });

    it("should return values", () => {
        function animate() {}
        var AddAnimationCallBackCurrentState = AddAnimationCallBack(
            "highlight_oxygen",
            animate(),
            true
        );
        expect(AddAnimationCallBackCurrentState.id).toBe("highlight_oxygen");
        expect(AddAnimationCallBackCurrentState.entity.outerHTML).toContain(
            "highlight_oxygen"
        );

        //Note: addEventListener testing pending
    });
});

describe("Lewis Dot Structures - SetPosition() ", () => {
    it("should return false with no values provided", () => {
        var SetPositionCurrentState = SetPosition();
        expect(SetPositionCurrentState.id).toBeFalsy();
        expect(SetPositionCurrentState.exception).toBe(
            "Exception : Id not found undefined"
        );
    });

    it("should return values", () => {
        var SetPosition_el = true;
        var SetPositionCurrentState = SetPosition(
            label_Oxygen1Lvl1Id,
            2.1,
            3.2,
            4.3,
            SetPosition_el
        );
        expect(SetPositionCurrentState.id).toBe(label_Oxygen1Lvl1Id);
        expect(SetPositionCurrentState.entity.attributes[1].nodeName).toBe("pos");
        expect(SetPositionCurrentState.entity.attributes[1].value).toBe(
            JSON.stringify({
                x: 2.1,
                y: 3.2,
                z: 4.3
            })
        );
    });
});

////////////////////////////////////////////////////////////////////

describe("Lewis Dot Structures - SetRotation() ", () => {
    it("should return false with no values provided", () => {
        var SetRotationCurrentState = SetRotation();
        expect(SetRotationCurrentState).toBeFalsy();
    });

    it("should return values", () => {
        var SetRotation_el = true;
        var SetRotationCurrentState = SetRotation(
            label_Oxygen1Lvl1Id,
            2.2,
            3.3,
            4.4,
            SetRotation_el
        );
        expect(SetRotationCurrentState.id).toBe(label_Oxygen1Lvl1Id);
        expect(SetRotationCurrentState.entity.attributes[1].value).toBe(
            JSON.stringify({
                x: 2.2,
                y: 3.3,
                z: 4.4
            })
        );
    });
});

describe("Lewis Dot Structures - GetEntityById() ", () => {
    it("should return false with no values provided", () => {
        var GetEntityByIdCurrentState = GetEntityById();
        expect(GetEntityByIdCurrentState).not.toBe(true);
    });

    it("should return values", () => {
        var GetEntityById_el = true;
        var GetEntityByIdCurrentState = GetEntityById(
            label_Oxygen1Lvl1Id,
            GetEntityById_el
        );
        expect(GetEntityByIdCurrentState.entity.outerHTML).toContain(label_Oxygen1Lvl1Id);
    });
});
///////////////////////////////////////////////////////////////////////////////////////////////
describe("Lewis Dot Structures - ClickSound() ", () => {
    it("should return false with no values provided", () => {
        var ClickSoundCurrentState = ClickSound();
        expect(ClickSoundCurrentState).not.toBe(true);
    });

    it("should return values", () => {
        var ClickSound_el = true;
        var ClickSoundCurrentState = ClickSound(
            label_Oxygen1Lvl1Id,
            true,
            ClickSound_el
        );

        expect(ClickSoundCurrentState.entity.id).toBe(label_Oxygen1Lvl1Id);
        expect(ClickSoundCurrentState.bool).toBe(true);
        expect(ClickSoundCurrentState.entity).toBeTruthy();
        expect(ClickSoundCurrentState.entity.attributes[1].name).toBe("click_sounds");
        expect(ClickSoundCurrentState.entity.attributes[1].value).toBe("enable");
        // expect(ClickSoundCurrentState.attr.length).toBeGreaterThan(0);
        // expect(ClickSoundCurrentState.bool).toBeTruthy();
    });

    it("should return values", () => {
        var ClickSound_el = true;
        var ClickSoundCurrentState = ClickSound(
            label_Oxygen1Lvl1Id,
            false,
            ClickSound_el
        );

        expect(ClickSoundCurrentState.entity.id).toBe(label_Oxygen1Lvl1Id);
        expect(ClickSoundCurrentState.bool).toBe(false);
        expect(ClickSoundCurrentState.entity).toBeTruthy();
        expect(ClickSoundCurrentState.entity.attributes[1].name).toBe("click_sounds");
        expect(ClickSoundCurrentState.entity.attributes[1].value).toBe("enable");
    });
});

describe("Lewis Dot Structures - utility_changeText() ", () => {
    it("should return false with no values provided", () => {
        var utility_changeTextCurrentState = utility_changeText();
        expect(utility_changeTextCurrentState).not.toBe(true);
    });

    it("should return values", () => {
        var utility_changeTextCurrentState = utility_changeText(
            "#score_percentage",
            56,
            true
        );
        expect(utility_changeTextCurrentState.id).toBe("#score_percentage");
        expect(utility_changeTextCurrentState.attrs.length).toBeGreaterThan(0);
        expect(utility_changeTextCurrentState.value).toBe(56);
    });
});