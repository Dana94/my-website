<template>
	<div class="author">

		<!-- <g-image alt="Author image" class="author__image" src="~/assets/images/author.jpg" width="180" height="180" blur="5" /> -->

		<h1 v-if="showTitle" class="author__site-title">
			Hi, I'm Dana.
			<!-- {{ $static.metaData.siteName }} -->
		</h1>

		<p class="author__intro">
			A software developer who enjoys puzzles and embracing my creative side in my work.
		</p>

		<p class="author__links">
			<a href="https://github.com/Dana94" target="_blank"><font-awesome :icon="['fab', 'github']" class="fa-2x icon"/></a>
			<a href="https://www.linkedin.com/in/danaottaviani/" target="_blank"><font-awesome :icon="['fab', 'linkedin']" class="fa-2x icon"/></a>
		</p>

	</div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
	props: ['showTitle']
}
</script>

<style lang="scss" scoped>
.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		margin-top: -.5em;
		.icon {
			margin: 0 .5rem;
		}
	}
}
</style>