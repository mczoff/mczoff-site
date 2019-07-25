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
                                <v-flex md10>
                                    <v-layout justify-space-around row wrap>
                                        <v-flex md3 xs4 ma-4
                                                v-for="project in projects"
                                                :key="project.name">
                                            <v-card
                                                    class="mx-auto"
                                            >

                                                <v-layout justify-space-around>
                                                    <v-flex class="blue-grey lighten-5">
                                                        <v-img :src="project.image" ></v-img>
                                                    </v-flex>

                                                </v-layout>


                                                <v-card-text>
                                                    <v-layout column>
                                                        <v-flex height="200" >
                                                            <h2 class="title blue-grey--text lighten-4 mb-3">{{project.name}}</h2>
                                                            {{project.description}}
                                                        </v-flex>
                                                    </v-layout>
                                                </v-card-text>

                                                <v-card-title>
                                                    <v-divider/>
                                                    <v-container ma-0 pa-0 fluid>
                                                        <v-layout row>
                                                            <v-flex>
                                                                <v-layout>
                                                                    <v-flex
                                                                            v-for="link in project.links"
                                                                            :key="link.url"
                                                                    >
                                                                        <v-btn icon :href="link.url" target="_blank">
                                                                            <v-icon>
                                                                                {{link.icon}}
                                                                            </v-icon>
                                                                        </v-btn>
                                                                    </v-flex>
                                                                </v-layout>
                                                            </v-flex>
                                                            <v-divider vertical/>
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
                    links: [
                        {
                            icon: 'mdi-github-box',
                            url: 'github.com'
                        }
                    ],
                    technologies: [
                        {
                            logo: require('../assets/tech/csharp.png'),
                            url: 'https://docs.microsoft.com/ru-ru/dotnet/csharp/tour-of-csharp/',
                            tooltip: 'C#'
                        },
                        {
                            logo: require('../assets/tech/netcore.png'),
                            url: 'https://www.microsoft.com/ru-ru/sql-server/sql-server-2019',
                            tooltip: '.NET Core'
                        },
                        {
                            logo: require('../assets/tech/net.png'),
                            url: 'https://www.microsoft.com/ru-ru/sql-server/sql-server-2019',
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
                    description: 'Hi im description',
                    processing: true,
                    image: require('../assets/project-logo-empty.png'),
                    links: [
                        {
                            icon: 'mdi-github-box',
                            url: 'github.com'
                        }
                    ],
                    technologies: [
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
                    name: 'Http-Server',
                    description: 'asd',
                    processing: true,
                    image: require('../assets/project-logo-empty.png'),
                    links: [
                        {
                            icon: 'mdi-github-box',
                            url: 'github.com'
                        }
                    ],
                    technologies: [
                        {
                            logo: require('../assets/tech/csharp.png'),
                            url: 'https://docs.microsoft.com/ru-ru/dotnet/csharp/tour-of-csharp/',
                            tooltip: 'C#'
                        }
                    ]
                },
                {
                    name: 'Http-Server',
                    description: 'asd',
                    processing: true,
                    image: require('../assets/project-logo-empty.png'),
                    links: [
                        {
                            icon: 'mdi-github-box',
                            url: 'github.com'
                        }
                    ]
                },
                {
                    name: 'Http-Server',
                    description: 'asd',
                    processing: true,
                    image: require('../assets/project-logo-empty.png'),
                    links: [
                        {
                            icon: 'mdi-github-box',
                            url: 'github.com'
                        }
                    ]
                },
                {
                    name: 'Http-Server',
                    description: 'asd',
                    processing: true,
                    image: require('../assets/project-logo-empty.png'),
                    links: [
                        {
                            icon: 'mdi-github-box',
                            url: 'github.com'
                        }
                    ]
                }
            ]

        })
    }
</script>

<style scoped>

</style>