import xss from 'xss';
import marked from 'marked';

marked.setOptions({ breaks: true });

export default class Markdown extends React.Component {
	state = {
		text:
			'# Make a header like this\n## Make a subheader like this\n**Make bold text like this**\n[Make a link like this](https://www.google.com)\n`Make inline code like this`\n```\nMake a block of code like this\n```\n![Make an image with alt text like this](https://camo.githubusercontent.com/a72e0b86ffbdcf7bfcb753fca5084d4a58a3037c/68747470733a2f2f63646e302e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b646f776e2d3235362e706e67)\n- Make\n- a\n- list\n- like\n- this\n> Make a blockquote like this'
	};

	update = event => {
		this.setState({ text: event.target.value });
	};

	render() {
		//Use anchor tag instead of link to get rid of CDN if needed
		return (
			<div id='container'>
				<h1 id='title'>Markdown Previewer</h1>
				<textarea id='editor' onChange={this.update} value={this.state.text} />
				<div
					dangerouslySetInnerHTML={{ __html: xss(marked(this.state.text)) }}
					id='preview'
				/>
			</div>
		);
	}
}
