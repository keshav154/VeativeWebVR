describe("testing Human Brain", () => {
  beforeAll(() => {
    // ShowMainMenu();
    SetActive("#MainMenu1", true);
    console.log("SetActive():----", SetActive());
  });
  it("should return exception with no id found", () => {
    // SetActive("pankaj", true);

    var el = SetActive().entityState;
    // function SetActiveT(id, bool, scale = 1) {
    //   if (el.id === null || el.id === "" || el.id === undefined) {
    //     expect(el.id).not.toBe(id);
    //   }
    // }

    if (
      SetActive().id === null ||
      SetActive().id === "" ||
      SetActive().id === undefined
    ) {
      expect(SetActive().id).not.toBe(id); //#MainMenu
    }
  });

  it("should return id", () => {
    var el = document.createElement("a-entity");
    function SetActiveT(id, bool, scale = 1) {
      el.setAttribute("id", id);
      el.setAttribute("setactive", "value:" + bool);
      if (el.id !== null || el.id !== "" || el.id !== undefined) {
        expect(el.id).toBe(id);
      }
    }

    // SetActive("MainMenu", true);
  });
});
