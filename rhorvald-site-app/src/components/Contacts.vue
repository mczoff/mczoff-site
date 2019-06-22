<template>
    <v-container ma-0 pa-0 fluid id="contacts">
        <v-layout
            text-xs-center
            wrap
        >
            <v-flex>
                <v-card flat color="grey lighten-5">
                    <v-divider></v-divider>
                    <v-card-title>
                        <v-flex ma-3 text-xs-center>
                            <span class="headline font-weight-light blue-grey--text">Contacts</span>
                        </v-flex>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-container fluid>
                            <v-layout justify-space-around wrap row>
                                <v-flex mt-5 mb-5 md8 xs12>
                                    <v-layout justify-center wrap>
                                        <v-flex
                                            text-xs-center
                                            xs4
                                            v-for="contact of contacts"
                                            :key="contact.name"
                                        >
                                            <v-btn fab large icon :href="contact.url" target="_blank" flat>
                                                <v-icon size="60">{{contact.icon}}</v-icon>
                                            </v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs12 mt-5>
                                    <v-layout row>
                                        <v-flex>
                                            <v-icon blue-grey--text>
                                                mail
                                            </v-icon>
                                            <span class="title font-weight-regular blue-grey--text"> rhorvald@gmail.com</span>
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
        name: "Contacts",
        data: () => ({
            contacts: [
                {
                    name: 'github',
                    url: 'https://github.com/',
                    icon: 'mdi-github-box'
                },
                {
                    name: 'telegram',
                    url: 'https://telegram.org/',
                    icon: 'mdi-telegram'
                },
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/',
                    icon: 'mdi-linkedin'
                },
                {
                    name: 'vk.com',
                    url: 'https://vk.com/',
                    icon: 'mdi-vk'
                },
                {
                    name: 'instagram.com',
                    url: 'https://www.instagram.com/',
                    icon: 'mdi-instagram'
                },
            ]
        }),
    }
</script>

<style scoped>

</style>