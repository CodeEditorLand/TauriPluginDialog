if ("__TAURI__" in window) {
	var __TAURI_PLUGIN_DIALOG__ = (function (t) {
		"use strict";
		async function n(t, n = {}, e) {
			return window.__TAURI_INTERNALS__.invoke(t, n, e);
		}
		return (
			"function" == typeof SuppressedError && SuppressedError,
			(t.ask = async function (t, e) {
				const i = "string" == typeof e ? { title: e } : e;
				return await n("plugin:dialog|ask", {
					message: t.toString(),
					title: i?.title?.toString(),
					kind: i?.kind,
					okButtonLabel: i?.okLabel?.toString() ?? "Yes",
					cancelButtonLabel: i?.cancelLabel?.toString() ?? "No",
				});
			}),
			(t.confirm = async function (t, e) {
				const i = "string" == typeof e ? { title: e } : e;
				return await n("plugin:dialog|confirm", {
					message: t.toString(),
					title: i?.title?.toString(),
					kind: i?.kind,
					okButtonLabel: i?.okLabel?.toString() ?? "Ok",
					cancelButtonLabel: i?.cancelLabel?.toString() ?? "Cancel",
				});
			}),
			(t.message = async function (t, e) {
				const i = "string" == typeof e ? { title: e } : e;
				await n("plugin:dialog|message", {
					message: t.toString(),
					title: i?.title?.toString(),
					kind: i?.kind,
					okButtonLabel: i?.okLabel?.toString(),
				});
			}),
			(t.open = async function (t = {}) {
				return (
					"object" == typeof t && Object.freeze(t),
					await n("plugin:dialog|open", { options: t })
				);
			}),
			(t.save = async function (t = {}) {
				return (
					"object" == typeof t && Object.freeze(t),
					await n("plugin:dialog|save", { options: t })
				);
			}),
			t
		);
	})({});
	Object.defineProperty(window.__TAURI__, "dialog", {
		value: __TAURI_PLUGIN_DIALOG__,
	});
}
