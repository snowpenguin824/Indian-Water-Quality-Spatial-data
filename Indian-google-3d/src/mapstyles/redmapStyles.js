export const mapStyles = [
  {
    featureType: "administrative.locality",
    elementType: "all",
    stylers: [
      {
        hue: "#ff0200",
      },
      {
        saturation: 7,
      },
      {
        lightness: 19,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
      {
        saturation: "-3",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#748ca3",
      },
    ],
  },
  // {
  //   featureType: "landscape",
  //   elementType: "all",
  //   stylers: [
  //     {
  //       hue: "#ff0200",
  //     },
  //     {
  //       saturation: -100,
  //     },
  //     {
  //       lightness: 100,
  //     },
  //     {
  //       visibility: "simplified",
  //     },
  //   ],
  // },

  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
      {
        hue: "#0051ff",
      },
      {
        saturation: "-100",
      },
      {
        lightness: "0",
      },
      {
        gamma: "1.00",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
      {
        gamma: "0.25",
      },
      {
        lightness: "0",
      },
      {
        saturation: "0",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on",
      },
      {
        lightness: "47",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        hue: "#ff0000",
      },
      {
        weight: "0.50",
      },
      {
        saturation: "-100",
      },
      {
        lightness: "-10",
      },
      {
        gamma: "1.00",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.natural.landcover",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "off",
      },
      {
        saturation: "-100",
      },
    ],
  },
  {
    featureType: "landscape.natural.landcover",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.natural.landcover",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.natural.terrain",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.natural.terrain",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "off",
      },
      {
        saturation: "-100",
      },
    ],
  },
  {
    featureType: "landscape.natural.terrain",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "off",
      },
      {
        saturation: "-100",
      },
    ],
  },
  {
    featureType: "landscape.natural.terrain",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        hue: "#ff0200",
      },
      {
        saturation: "23",
      },
      {
        lightness: "20",
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.school",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffdbda",
      },
      {
        saturation: "0",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        hue: "#ff0200",
      },
      {
        saturation: "100",
      },
      {
        lightness: 31,
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#f39247",
      },
      {
        saturation: "0",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        hue: "#008eff",
      },
      {
        saturation: -93,
      },
      {
        lightness: 31,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#ffe5e5",
      },
      {
        saturation: "0",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels",
    stylers: [
      {
        hue: "#bbc0c4",
      },
      {
        saturation: -93,
      },
      {
        lightness: -2,
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        hue: "#ff0200",
      },
      {
        saturation: -90,
      },
      {
        lightness: -8,
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        hue: "#e9ebed",
      },
      {
        saturation: 10,
      },
      {
        lightness: 69,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        hue: "#e9ebed",
      },
      {
        saturation: -78,
      },
      {
        lightness: 67,
      },
      {
        visibility: "simplified",
      },
    ],
  },
];
