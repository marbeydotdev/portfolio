<script lang="ts">
	import Project from '../../../components/project/Project.svelte';
	import ProjectDescription from '../../../components/project/ProjectDescription.svelte';
	import ProjectMedia from '../../../components/project/ProjectMedia.svelte';

	const media = [
		{
			url: `/power2go/info.mp4`,
			description: 'Infomercial'
		},
		{
			url: `/power2go/accountinfo.png`,
			description: 'Account page'
		},
		{
			url: `/power2go/history.png`,
			description:
				'History page'
		},
		{
			url: `/power2go/homescreen.png`,
			description: 'Landing page'
		},
		{
			url: `/power2go/login.png`,
			description: 'Login page'
		},
		{
			url: `/power2go/stations.png`,
			description: 'Powerbank search page'
		}
	]
</script>

<Project projectIdentifier="power2go">
	<ProjectDescription>

	</ProjectDescription>
	<ProjectMedia media={media} />
</Project>