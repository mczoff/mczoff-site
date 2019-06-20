<template>
    <v-container fluid ma-0 pa-0 id="skills">
        <v-layout
            text-xs-center
            wrap
        >
            <v-flex>
                <v-card flat color="grey lighten-4">
                    <v-divider></v-divider>
                    <v-card-title>
                        <v-flex ma-3 text-xs-center>
                            <span class="headline font-weight-light blue-grey--text">Skills</span>
                        </v-flex>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-container fluid>
                            <v-layout justify-space-around wrap row>
                                <v-flex
                                    xs5
                                    v-for="skill of skills"
                                    :key="skill.name"
                                >
                                    <v-layout justify-start column wrap>
                                        <v-flex text-xs-left>
                                            <img :src="skill.logourl" height="18" width="18"/>
                                            <span class="text-xl-left blue-grey--text">{{skill.name}}</span>
                                        </v-flex>
                                        <v-flex>
                                            <v-progress-linear
                                                class="mt-1 mb-2"
                                                rounded
                                                :color="skill.color"
                                                height="8"
                                                :value="skill.value"
                                            ></v-progress-linear>
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
        name: "Skills",
        data: () => ({
            skills: [
                {
                    name: 'C#',
                    color: 'blue',
                    value: 10,
                    logourl: require('../assets/logo.png')
                },
                {
                    name: 'C++',
                    color: 'indigo',
                    value: 10,
                    logourl: require('../assets/logo.png')
                },
                {
                    name: 'ADO .NET',
                    color: 'grey',
                    value: 10,
                    logourl: require('../assets/logo.png')
                },
                {
                    name: 'ASP .NET CORE',
                    color: 'green',
                    value: 50,
                    logourl: require('../assets/logo.png')
                }
            ]
        }),
        computed: {
            getLogoSkill: function () {
                return require('../assets/logo.png');
            }
        }
    }
</script>

<style scoped>

</style>