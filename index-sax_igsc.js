import { r, j as e } from "./main-BvELR9T7.js";
const v = [
    {
      id: "bocadillo-1",
      name: "Lomo",
      description: "Lechuga, tomate, huevo, salsa y beicon",
      price: 4,
      category: "Bocadillos",
      emoji: "",
    },
    {
      id: "bocadillo-2",
      name: "Bacon",
      description: "Lechuga, tomate, huevo, salsa y beicon",
      price: 4,
      category: "Bocadillos",
      emoji: "",
    },
    {
      id: "bocadillo-3",
      name: "Salchicha",
      description: "Lechuga, tomate, huevo, salsa y beicon",
      price: 4,
      category: "Bocadillos",
      emoji: "",
    },
    {
      id: "bocadillo-4",
      name: "Pechuga",
      description: "Lechuga, tomate, huevo, salsa y beicon",
      price: 4,
      category: "Bocadillos",
      emoji: "",
    },
    {
      id: "bocadillo-5",
      name: "Pechuga empanada",
      description: "Lechuga, tomate, huevo, salsa y beicon",
      price: 4.50,
      category: "Bocadillos",
      emoji: "",
    },
    {
      id: "bocadillo-6",
      name: "Hamburguesa",
      description: "Lechuga, tomate, huevo, salsa y beicon",
      price: 4,
      category: "Bocadillos",
      emoji: "",
    },
    {
      id: "bocadillo-7",
      name: "Calamar",
      description: "Lechuga, tomate, huevo, salsa y beicon",
      price: 5,
      category: "Bocadillos",
      emoji: "",
    },
    {
      id: "bocadillo-8",
      name: "Sepia",
      description: "Lechuga, tomate, huevo, salsa y beicon",
      price: 5.50,
      category: "Bocadillos",
      emoji: "",
    },
    // --- SECCIÓN DE EXTRAS ---
    {
      id: "extra-queso",
      name: "Extra Queso",
      description: "Suplemento de queso",
      price: 0.50,
      category: "Extras",
      emoji: "",
    },
    {
      id: "extra-tomate",
      name: "Extra Tomate",
      description: "Rodajas de tomate natural",
      price: 0.30,
      category: "Extras",
      emoji: "",
    },
    {
      id: "extra-lechuga",
      name: "Extra Lechuga",
      description: "Lechuga fresca",
      price: 0.30,
      category: "Extras",
      emoji: "",
    },
    {
      id: "extra-mayonesa",
      name: "Extra Mayonesa",
      description: "Salsa mayonesa",
      price: 0.20,
      category: "Extras",
      emoji: "",
    },
    {
      id: "extra-huevo",
      name: "Extra Huevo",
      description: "Huevo frito o a la plancha",
      price: 0.80,
      category: "Extras",
      emoji: "",
    },
    {
      id: "extra-beicon",
      name: "Extra Beicon",
      description: "Suplemento de beicon crujiente",
      price: 0.80,
      category: "Extras",
      emoji: "",
    }
  ],
  $ = ["Bocadillos", "Extras"];
function M() {
  const [m, o] = r.useState({}),
    [c, x] = r.useState(""),
    [d, b] = r.useState(""),
    [u, h] = r.useState(""),
    [p, g] = r.useState(""),
    [S, f] = r.useState(!1),
    [j, y] = r.useState(!1),
    [N, i] = r.useState(""),
    k = (t) => o((s) => ({ ...s, [t]: (s[t] ?? 0) + 1 })),
    C = (t) =>
      o((s) => {
        const a = { ...s };
        return ((a[t] ?? 0) <= 1 ? delete a[t] : a[t]--, a);
      }),
    n = Object.entries(m)
      .filter(([, t]) => t > 0)
      .map(([t, s]) => ({ item: v.find((a) => a.id === t), quantity: s })),
    l = n.reduce((t, { item: s, quantity: a }) => t + s.price * a, 0),
    w = n
      .map(({ item: t, quantity: s }) => `${s}x ${t.name} ($${t.price})`)
      .join(", "),
    P = async (t) => {
      if ((t.preventDefault(), n.length === 0)) {
        i("Please select at least one item from the menu.");
        return;
      }
      (i(""), y(!0));
      try {
        const s = new URLSearchParams({
          "form-name": "restaurant-order",
          name: c,
          email: d,
          "table-number": u,
          "order-items": w,
          "order-total": `$${l.toFixed(2)}`,
          notes: p,
          "bot-field": "",
        });
        (
          await fetch("/__forms.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: s.toString(),
          })
        ).ok
          ? f(!0)
          : i("Something went wrong. Please try again.");
      } catch {
        i("Network error. Please try again.");
      } finally {
        y(!1);
      }
    };
  return S
    ? e.jsx("div", {
        className:
          "min-h-screen bg-amber-50 flex items-center justify-center p-6",
        children: e.jsxs("div", {
          className:
            "bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center",
          children: [
            e.jsx("div", { className: "text-6xl mb-4", children: "🎉" }),
            e.jsx("h2", {
              className: "text-3xl font-bold text-amber-900 mb-3",
              children: "Order Received!",
            }),
            e.jsxs("p", {
              className: "text-amber-700 mb-2",
              children: [
                "Thank you, ",
                e.jsx("strong", { children: c }),
                "! Your order has been sent to the kitchen.",
              ],
            }),
            e.jsxs("p", {
              className: "text-amber-600 text-sm mb-6",
              children: [
                "A confirmation will be sent to ",
                e.jsx("strong", { children: d }),
                ".",
              ],
            }),
            e.jsxs("div", {
              className: "bg-amber-50 rounded-xl p-4 text-left mb-6",
              children: [
                e.jsx("p", {
                  className: "font-semibold text-amber-900 mb-2",
                  children: "Your order:",
                }),
                n.map(({ item: t, quantity: s }) =>
                  e.jsxs(
                    "div",
                    {
                      className: "flex justify-between text-sm text-amber-800",
                      children: [
                        e.jsxs("span", { children: [s, "× ", t.name] }),
                        e.jsxs("span", {
                          children: ["$", (t.price * s).toFixed(2)],
                        }),
                      ],
                    },
                    t.id,
                  ),
                ),
                e.jsxs("div", {
                  className:
                    "border-t border-amber-200 mt-2 pt-2 flex justify-between font-bold text-amber-900",
                  children: [
                    e.jsx("span", { children: "Total" }),
                    e.jsxs("span", { children: ["$", l.toFixed(2)] }),
                  ],
                }),
              ],
            }),
            e.jsx("button", {
              onClick: () => {
                (f(!1), o({}), x(""), b(""), h(""), g(""));
              },
              className:
                "w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors",
              children: "Place Another Order",
            }),
          ],
        }),
      })
    : e.jsxs("div", {
        className: "min-h-screen bg-amber-50",
        children: [
          e.jsxs("header", {
            className:
              "bg-amber-900 text-white py-8 px-6 text-center shadow-md",
            children: [
              e.jsx("div", { className: "text-4xl mb-2", children: "🍽️" }),
              e.jsx("h1", {
                className: "text-4xl font-black tracking-tight mb-1",
                children: "Bar Ángel",
              }),
              e.jsx("p", {
                className: "text-amber-200 text-lg",
                children: "",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8",
            children: [
              e.jsxs("div", {
                className: "lg:col-span-2 space-y-8",
                children: [
                  e.jsx("h2", {
                    className: "text-2xl font-bold text-amber-900",
                    children: "Our Menu",
                  }),
                  $.map((t) =>
                    e.jsxs(
                      "section",
                      {
                        children: [
                          e.jsx("h3", {
                            className:
                              "text-lg font-semibold text-amber-700 uppercase tracking-widest mb-4 border-b border-amber-200 pb-2",
                            children: t,
                          }),
                          e.jsx("div", {
                            className: "space-y-3",
                            children: v
                              .filter((s) => s.category === t)
                              .map((s) => {
                                const a = m[s.id] ?? 0;
                                return e.jsxs(
                                  "div",
                                  {
                                    className:
                                      "bg-white rounded-xl p-4 flex items-start gap-4 shadow-sm",
                                    children: [
                                      e.jsx("span", {
                                        className: "text-3xl",
                                        children: s.emoji,
                                      }),
                                      e.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center justify-between gap-2",
                                            children: [
                                              e.jsx("p", {
                                                className:
                                                  "font-semibold text-amber-900",
                                                children: s.name,
                                              }),
                                              e.jsxs("p", {
                                                className:
                                                  "text-amber-700 font-bold shrink-0",
                                                children: ["$", s.price],
                                              }),
                                            ],
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "text-sm text-gray-500 mt-0.5",
                                            children: s.description,
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 shrink-0 mt-1",
                                        children: [
                                          a > 0 &&
                                            e.jsxs(e.Fragment, {
                                              children: [
                                                e.jsx("button", {
                                                  type: "button",
                                                  onClick: () => C(s.id),
                                                  className:
                                                    "w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold flex items-center justify-center transition-colors",
                                                  children: "−",
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "w-5 text-center font-semibold text-amber-900",
                                                  children: a,
                                                }),
                                              ],
                                            }),
                                          e.jsx("button", {
                                            type: "button",
                                            onClick: () => k(s.id),
                                            className:
                                              "w-8 h-8 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold flex items-center justify-center transition-colors",
                                            children: "+",
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  s.id,
                                );
                              }),
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                ],
              }),
              e.jsx("div", {
                className: "lg:col-span-1",
                children: e.jsxs("div", {
                  className: "sticky top-6 bg-white rounded-2xl shadow-lg p-6",
                  children: [
                    e.jsx("h2", {
                      className: "text-xl font-bold text-amber-900 mb-4",
                      children: "Your Order",
                    }),
                    n.length === 0
                      ? e.jsx("p", {
                          className: "text-gray-400 text-sm mb-6",
                          children: "No items selected yet.",
                        })
                      : e.jsxs("div", {
                          className: "space-y-2 mb-4",
                          children: [
                            n.map(({ item: t, quantity: s }) =>
                              e.jsxs(
                                "div",
                                {
                                  className: "flex justify-between text-sm",
                                  children: [
                                    e.jsxs("span", {
                                      className: "text-gray-700",
                                      children: [s, "× ", t.name],
                                    }),
                                    e.jsxs("span", {
                                      className: "font-medium text-amber-800",
                                      children: ["$", (t.price * s).toFixed(2)],
                                    }),
                                  ],
                                },
                                t.id,
                              ),
                            ),
                            e.jsxs("div", {
                              className:
                                "border-t border-gray-100 pt-2 flex justify-between font-bold text-amber-900",
                              children: [
                                e.jsx("span", { children: "Total" }),
                                e.jsxs("span", {
                                  children: ["$", l.toFixed(2)],
                                }),
                              ],
                            }),
                          ],
                        }),
                    e.jsxs("form", {
                      onSubmit: P,
                      className: "space-y-4",
                      noValidate: !0,
                      children: [
                        e.jsx("input", {
                          type: "hidden",
                          name: "form-name",
                          value: "restaurant-order",
                        }),
                        e.jsx("input", {
                          type: "hidden",
                          name: "order-items",
                          value: w,
                        }),
                        e.jsx("input", {
                          type: "hidden",
                          name: "order-total",
                          value: `$${l.toFixed(2)}`,
                        }),
                        e.jsx("p", {
                          style: { display: "none" },
                          children: e.jsxs("label", {
                            children: [
                              "Don't fill: ",
                              e.jsx("input", { name: "bot-field" }),
                            ],
                          }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-1",
                              children: [
                                "Your Name ",
                                e.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            e.jsx("input", {
                              type: "text",
                              value: c,
                              onChange: (t) => x(t.target.value),
                              required: !0,
                              placeholder: "Full name",
                              className:
                                "w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-1",
                              children: [
                                "Email ",
                                e.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            e.jsx("input", {
                              type: "email",
                              value: d,
                              onChange: (t) => b(t.target.value),
                              required: !0,
                              placeholder: "your@email.com",
                              className:
                                "w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-1",
                              children: "Table Number",
                            }),
                            e.jsx("input", {
                              type: "text",
                              value: u,
                              onChange: (t) => h(t.target.value),
                              placeholder: "e.g. Table 5",
                              className:
                                "w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-1",
                              children: "Special Requests / Notes",
                            }),
                            e.jsx("textarea", {
                              value: p,
                              onChange: (t) => g(t.target.value),
                              rows: 3,
                              placeholder: "Allergies, dietary requirements...",
                              className:
                                "w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm resize-none",
                            }),
                          ],
                        }),
                        N &&
                          e.jsx("p", {
                            className: "text-red-500 text-sm",
                            children: N,
                          }),
                        e.jsx("button", {
                          type: "submit",
                          disabled: j,
                          className:
                            "w-full py-3 bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white font-semibold rounded-xl transition-colors",
                          children: j ? "Placing Order…" : "Place Order",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsx("footer", {
            className: "text-center py-6 text-amber-700 text-sm",
            children: "© 2024 Bar Ángel · All rights reserved",
          }),
        ],
      });
}
function O() {
  return e.jsx(M, {});
}
export { O as component };
