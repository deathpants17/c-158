AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "spider-man",
        title: "SPIDER MAN",
        url: "./assets/thumbnails/STL184810.jpg",
      },


      {
        id: "super-man",
        title: "SUPER MAN",
        url: "./assets/thumbnails/ACTIONCOMICS_Cv1033.jpg",
      },

    ];

    let prevoiusXPosition = -40;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

      // Title Text Element
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },


  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width:19,
      height: 25,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "blue",
      opacity: 1,
    });

    entityEl.setAttribute("cursorevent", {});

    return entityEl;
  },

  createThumbNail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width:15,
      height: 20,
    });
    entityEl.setAttribute("position", { x: 0, y: 0, z: 0.1 });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },


  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    
    return entityEl;
  },
});
