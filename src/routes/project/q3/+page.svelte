<script>
	import Project from '../../../components/project/Project.svelte';
	import ProjectDescription from '../../../components/project/ProjectDescription.svelte';
	import ProjectMedia from '../../../components/project/ProjectMedia.svelte';
	import ProjectFeature from '../../../components/project/ProjectFeature.svelte';
	import ProjectFeatures from '../../../components/project/ProjectFeatures.svelte';
	import ProjectContributions from '../../../components/project/ProjectContributions.svelte';
	import ProjectContribution from '../../../components/project/ProjectContribution.svelte';

	const media = [
		{
			url: `/q3/q4dashboard.mp4`,
			description: 'The application demo video.'
		},
		{
			url: `/q3/q4dashboard.mp4`,
			description: 'The application demo video v2.'
		},
		{
			url: `/q3/q4dashboard.mp4`,
			description: 'The application demo video v3.'
		}
	]

</script>

<Project projectIdentifier="q3">
	<ProjectDescription>
		This project focused on creating a dashboard for Q3 Concept B.V. that allows users to monitor machines and molds in real-time. Using the dashboard, users can also plan maintenance for molds using a manual or milestone-based approach.
	</ProjectDescription>
	<ProjectMedia media={media} />
	<ProjectFeatures>
		<ProjectFeature>
			<span class="block">
				Real-time monitoring of machines and molds.
			</span>
			<small class="text-neutral-400">Powered by Supabase</small>
		</ProjectFeature>
		<ProjectFeature>
			Ability to plan maintenance for molds using a manual or milestone-based approach.
		</ProjectFeature>
		<ProjectFeature>
			Historical usage insights for machines and molds, optimized using materialized views.
		</ProjectFeature>
		<ProjectFeature>
			Sleek and responsive user interface.
		</ProjectFeature>
	</ProjectFeatures>
	<ProjectContributions>
		<ProjectContribution>
			Programmed the maintenance calendar.
		</ProjectContribution>
		<ProjectContribution>
			Created a mold health assessment using patterns in historical data.
		</ProjectContribution>
		<ProjectContribution>
			Assisted in database design.
		</ProjectContribution>
		<ProjectContribution>
			Designed front-end elements using Figma.
		</ProjectContribution>
	</ProjectContributions>
</Project>