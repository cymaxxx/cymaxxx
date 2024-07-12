document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');

    const defaultMarkdown = `# Heading 1
## Heading 2
Link
\`inline code\`
\`\`\`
code block
\`\`\`
- List item
> Blockquote
!Image
**Bold text**`;

    editor.value = defaultMarkdown;
    preview.innerHTML = marked.parse(defaultMarkdown);

    editor.addEventListener('input', () => {
        preview.innerHTML = marked.parse(editor.value);
    });
});
