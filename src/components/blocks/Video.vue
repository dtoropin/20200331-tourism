<template lang="pug">
  .video
    .video__ratio.video__ratio--16x9
    iframe.video__content(src='https://www.youtube.com/embed/k04N5NI3TUc' gesture="media" allow="encrypted-media" allowfullscreen)
</template>

<style lang="postcss" scoped>
.video {
	position: relative;
	max-width: 800px;
	margin: 0 auto;
  box-shadow: 0 0 10px #000;
}
.video__ratio {
	height: 0;
	padding-top: 50%; /* 2x1 default */
}
.video__ratio--16x9 {
	padding-top: 56.25%;
}
.video__ratio--16x10 {
	padding-top: 62.5%;
}
.video__ratio--4x3 {
	padding-top: 75%;
}
.video__content {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}
iframe {
	border: 0;
}
</style>