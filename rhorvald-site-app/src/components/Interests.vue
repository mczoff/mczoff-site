<template>
    <v-container ma-0 pa-0 fluid id="interests">
        <v-layout
                text-xs-center
                wrap
        >
            <v-flex>
                <v-card flat color="grey lighten-4">
                    <v-divider></v-divider>
                    <v-card-title>
                        <v-flex ma-3 text-xs-center>
                            <span class="headline font-weight-light blue-grey--text">Interests</span>
                        </v-flex>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-container fluid>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-layout wrap row>
                                        <v-flex
                                                pa-5
                                                xs4
                                                v-for="interest of interests"
                                                :key="interest.name">
                                            <v-layout column>
                                                <v-flex>
                                                    <v-icon large >{{interest.icon}}</v-icon>
                                                </v-flex>
                                                <v-flex>
                                                    <span class="blue-grey--text">{{interest.name}}</span>
                                                </v-flex>
                                            </v-layout>
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
        name: "Interests",
        data: () => ({
            interests: [
                {
                    name: 'Women',
                    icon: 'help'
                },
                {
                    name: 'Men',
                    icon: 'help'
                },
                {
                    name: 'Peoples',
                    icon: 'help'
                },
                {
                    name: 'Women',
                    icon: 'help'
                },
                {
                    name: 'Men',
                    icon: 'help'
                },
                {
                    name: 'Peoples',
                    icon: 'help'
                }
            ]
        })
    }
</script>

<style scoped>

</style>