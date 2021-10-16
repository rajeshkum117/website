<script>
	import '../styles/index.scss';
</script>

<header>
	<div class="logo has-subtext">
		<img src="/logo.png" alt="" />
		<h1>Home Of Stilic</h1>
	</div>
	<p><i>I do strange stuff.</i></p>
	<nav>
		<a href="/">home</a>
		<a href="/about">about me</a>
		<a href="/blog">blog</a>
	</nav>
    <hr />
</header>

<slot />

<footer>
	<hr />
	<strong>what da dog doin????</strong>
</footer>

<style lang="scss">
	nav a {
		&::before {
			content: '[';
		}
		&::after {
			content: ']';
		}
	}

	.logo {
		display: flex;
		img {
			margin-right: 1em;
			width: 75px;
			height: 5em;
			border-radius: 100%;
			align-self: center;
		}
		h1 {
			padding: 0.25em;
			background-color: green;
			color: white;
			box-shadow: 4px 4px 0px 0px rgb(4, 4, 148), 8px 8px 0px 0px rgb(168, 0, 0);
		}
	}

	footer hr {
		margin-top: 0;
	}
</style>
