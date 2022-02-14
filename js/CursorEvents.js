AFRAME.registerComponent("cursorevent", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnter();
    this.handleMouseLeave();
  },
  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = ["spider-man", "super-man"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursorevent", {
        ItemId: id,
      });
      this.el.setAttribute("material", {
        color: "orange",
        opacity: 1,
      });
    }
  },
  handleMouseEnter: function () {

    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeave: function () {

    this.el.addEventListener("mouseleave", () => {
      const { ItemId } = this.data;
      if (ItemId) {
        const el = document.querySelector(`#${ItemId}`);
        const id = el.getAttribute("id");
        if (id == ItemId) {
          el.setAttribute("material", {
            color: "blue",
            opacity: 1,
          });
        }
      }
    });

  },
});
