(() => {
	const ta = document.getElementById("css-plus-code");
	if (!ta) { return; }
	const editor = CodeMirror.fromTextArea(ta, {
		mode: "text/css",
		autoRefresh: true,
		lineNumbers: true,
		lineWrapping: true,
		styleActiveLine: true,
		theme: "neo",
		indentUnit: 4,
		indentWithTabs: true
	});
	editor.on("changes", (inst) => {
		ta.value = inst.getValue();
	});
})();
