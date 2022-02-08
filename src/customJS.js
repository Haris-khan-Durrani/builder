// /* eslint-disable */

// unlayer.registerTool({
//   name: "dy_recommendation",
//   label: "RECS",
//   icon: "fa-layer-group",
//   supportedDisplayModes: ["email"],
//   options: {
//     html: {
//       title: "DY widget", // Title for Property Group
//       position: 1, // Position of Property Group
//       options: {
//         html: {
//           label: "HTML",
//           widget: "html"
//         }
//       }
//     }
//   },
//   values: {},
//   renderer: {
//     Viewer: unlayer.createViewer({
//       // how to set value from values.data.html before render?
//       // onClick trigger custom event?
//       // if values.data.html updated outside - how to rerender?
//       render(values) {
//         console.log(arguments, "values.data.html");
//         if (!values.html) return values.data.html;
//         return values.html;
//       }
//     }),
//     head: {
//       css: function (values) {},
//       js: function (values) {
//         // maybe we can register custom event here?
//       }
//     }
//   }
// });
