<template>
    <v-container fluid ma-0 pa-0 id="projects">
        <v-layout
                text-xs-center
                wrap
        >
            <v-flex>
                <v-card flat color="grey lighten-4">
                    <v-divider></v-divider>
                    <v-card-title>
                        <v-flex ma-3 text-xs-center>
                            <span class="headline font-weight-light blue-grey--text">Projects</span>
                        </v-flex>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-container fluid>
                            <v-layout justify-space-around>
                                <v-flex md8 xs10>
                                    <v-layout justify-space-around row wrap>
                                        <v-flex md3 xs4 ma-4
                                                v-for="project in projects"
                                                :key="project.name">
                                            <v-card
                                                class="mx-auto"
                                            >
                                                <v-layout justify-space-around>
                                                    <v-flex class="blue-grey lighten-5">
                                                        <v-img :src="project.image">
                                                            <v-layout mt-2>
                                                                <v-spacer/>
                                                                <div v-if="project.doneType === 0">
                                                                    <v-tooltip bottom>
                                                                        <template v-slot:activator="{ on }">
                                                                            <v-icon
                                                                                v-on="on"
                                                                                class="green--text text--darken-2"
                                                                                large
                                                                                left
                                                                            >
                                                                                mdi-calendar-check
                                                                            </v-icon>
                                                                        </template>
                                                                        <span>The project has been completed</span>
                                                                    </v-tooltip>
                                                                </div>
                                                                <div v-if="project.doneType === 1">
                                                                    <v-tooltip bottom>
                                                                        <template v-slot:activator="{ on }">
                                                                            <v-icon
                                                                                v-on="on"
                                                                                class="yellow--text text--darken-3"
                                                                                large
                                                                                left
                                                                            >
                                                                                mdi-calendar-clock
                                                                            </v-icon>
                                                                        </template>
                                                                        <span>The project in progress</span>
                                                                    </v-tooltip>

                                                                </div>
                                                                <div v-else-if="project.doneType === 2">
                                                                    <v-tooltip bottom>
                                                                        <template v-slot:activator="{ on }">
                                                                            <v-icon
                                                                                v-on="on"
                                                                                class="red--text text--darken-2"
                                                                                large
                                                                                left
                                                                            >
                                                                                mdi-calendar-remove
                                                                            </v-icon>
                                                                        </template>
                                                                        <span>The project was closed</span>
                                                                    </v-tooltip>
                                                                </div>
                                                            </v-layout>
                                                        </v-img>
                                                    </v-flex>
                                                </v-layout>
                                                <v-divider></v-divider>

                                                <v-card-text>
                                                    <v-layout column>
                                                        <v-flex height="200">
                                                            <h2 class="title blue-grey--text text--darken-4 mb-3">{{project.name}}</h2>
                                                            {{project.description}}
                                                        </v-flex>
                                                    </v-layout>
                                                </v-card-text>
                                                <v-divider></v-divider>
                                                <v-card-title>
                                                    <v-divider/>
                                                    <v-container ma-0 pa-0 fluid>
                                                        <v-layout row>
                                                            <v-flex v-if="project.links.length !== 0">
                                                                <v-layout>
                                                                    <v-flex
                                                                        v-for="link in project.links"
                                                                        :key="link.url"
                                                                    >
                                                                        <v-tooltip bottom>
                                                                            <template v-slot:activator="{ on }">
                                                                                <v-btn icon :href="link.url" target="_blank" v-on="on">
                                                                                    <v-icon>
                                                                                        {{link.icon}}
                                                                                    </v-icon>
                                                                                </v-btn>
                                                                            </template>
                                                                            <span>{{link.tooltip}}</span>
                                                                        </v-tooltip>
                                                                    </v-flex>
                                                                </v-layout>
                                                            </v-flex>
                                                            <v-divider v-if="project.links.length !== 0" vertical/>
                                                            <v-flex>
                                                                <v-layout>
                                                                    <v-flex
                                                                        v-for="technology in project.technologies"
                                                                        :key="technology.url"
                                                                    >
                                                                        <v-tooltip top>
                                                                            <template v-slot:activator="{ on }">
                                                                                <v-btn icon :href="technology.url" target="_blank" v-on="on">
                                                                                    <img :src="technology.logo" height="25" width="25"/>
                                                                                </v-btn>
                                                                            </template>
                                                                            <span>{{technology.tooltip}}</span>
                                                                        </v-tooltip>
                                                                    </v-flex>
                                                                </v-layout>
                                                            </v-flex>
                                                        </v-layout>
                                                    </v-container>
                                                </v-card-title>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-actions>
                </v-card>
                <v-divider></v-divider>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Projects",
        data: () => ({
            overlay: false,
            projects: [
                {
                    name: 'Hunter Freelance Work',
                    description: 'A system of programs that solves the problems of finding an order by freelancers.',
                    processing: true,
                    image: require('../assets/project-logo-empty.png'),
                    doneType: 1,
                    links: [],
                    technologies: [
                        {
                            logo: require('../assets/tech/csharp.png'),
                            url: 'https://docs.microsoft.com/ru-ru/dotnet/csharp/tour-of-csharp/',
                            tooltip: 'C#'
                        },
                        {
                            logo: require('../assets/tech/netcore.png'),
                            url: 'https://dotnet.microsoft.com/download/dotnet-core',
                            tooltip: '.NET Core'
                        },
                        {
                            logo: require('../assets/tech/net.png'),
                            url: 'https://dotnet.microsoft.com/',
                            tooltip: '.NET'
                        },
                        {
                            logo: require('../assets/tech/mssql.png'),
                            url: 'https://www.microsoft.com/ru-ru/sql-server/sql-server-2019',
                            tooltip: 'SQL Server'
                        },

                    ]
                },
                {
                    name: 'Hello world live',
                    description: 'Project streaming portal for coders with books and tutorials',
                    processing: true,
                    image: require('../assets/project-logo-empty.png'),
                    doneType: 1,
                    links: [],
                    technologies: [
                        {
                            logo: require('../assets/tech/js.png'),
                            url: 'https://www.microsoft.com/ru-ru/sql-server/sql-server-2019',
                            tooltip: 'JavaScript'
                        },
                        {
                            logo: require('../assets/tech/nodejs.png'),
                            url: 'https://www.microsoft.com/ru-ru/sql-server/sql-server-2019',
                            tooltip: 'NodeJS'
                        },
                        {
                            logo: require('../assets/tech/react.png'),
                            url: 'https://www.microsoft.com/ru-ru/sql-server/sql-server-2019',
                            tooltip: 'ReactJS'
                        },
                        {
                            logo: require('../assets/tech/mongo.png'),
                            url: 'https://www.mongodb.com/',
                            tooltip: 'MongoDB'
                        }
                    ]
                },
                {
                    name: 'Http Server',
                    description: 'Template for quick deployment of simple http services',
                    processing: true,
                    image: require('../assets/project-logo-empty.png'),
                    doneType: 1,
                    links: [
                        {
                            icon: 'mdi-github-box',
                            url: 'https://github.com/mczoff/HttpServer',
                            tooltip: 'Github'
                        },
                    ],
                    technologies: [
                        {
                            logo: require('../assets/tech/csharp.png'),
                            url: 'https://docs.microsoft.com/ru-ru/dotnet/csharp/tour-of-csharp/',
                            tooltip: 'C#'
                        },
                        {
                            logo: require('../assets/tech/net.png'),
                            url: 'https://dotnet.microsoft.com/',
                            tooltip: '.NET'
                        },
                    ]
                },
                {
                    name: 'RestMOXA utilities',
                    description: 'Two simple projects that facilitate the development of applications with physical modules',
                    processing: true,
                    image: require('../assets/project-logo-empty.png'),
                    doneType: 0,
                    links: [
                        {
                            icon: 'mdi-github-box',
                            url: 'https://github.com/mczoff/ImitationRestMOXA',
                            tooltip: 'Github'
                        }
                    ],
                    technologies: [
                        {
                            logo: require('../assets/tech/csharp.png'),
                            url: 'https://docs.microsoft.com/ru-ru/dotnet/csharp/tour-of-csharp/',
                            tooltip: 'C#'
                        },
                        {
                            logo: require('../assets/tech/net.png'),
                            url: 'https://dotnet.microsoft.com/',
                            tooltip: '.NET'
                        },
                    ]
                }
            ]
        })
    }
</script>

<style scoped>

</style>