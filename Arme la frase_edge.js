/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im = 'images/',
            aud = 'media/',
            vid = 'media/',
            js = 'js/',
            fonts = {
                'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'},
    opts = {
        'gAudioPreloadPreference': 'auto',
        'gVideoPreloadPreference': 'auto'
    },
    resources = [
    ],
            scripts = [
                js + "jquery-1.10.2.js"
            ],
            symbols = {
                "stage": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                id: 'Reproducir2',
                                symbolName: 'Reproducir',
                                type: 'rect',
                                rect: ['38', '205', '275', '101', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'Group',
                                type: 'group',
                                rect: ['-1px', '100px', '367px', '50', 'auto', 'auto'],
                                c: [
                                    {
                                        id: 'Text',
                                        type: 'text',
                                        rect: ['15px', '0px', '344px', '50px', 'auto', 'auto'],
                                        text: "<p style=\"margin: 0px;\"><span style=\"color: rgb(0, 128, 148);\">Instrucción: </span>Observe la imagen y haga clic para seleccionar la respuesta que corresponda.​</p>",
                                        font: ['source-sans-pro, sans-serif', [14, "px"], "rgba(0,0,51,1.00)", "600", "none", "", "break-word", "normal"]
                                    }]
                            },
                            {
                                id: 'recuadro_actividad',
                                symbolName: 'recuadro_actividad',
                                type: 'rect',
                                rect: ['379', '84', '653', '310', 'auto', 'auto']
                            },
                            {
                                id: 'Enviar_activo',
                                symbolName: 'Enviar_activo',
                                display: 'none',
                                type: 'rect',
                                rect: ['865', '177', '106', '40', 'auto', 'auto']
                            },
                            {
                                id: 'Instruccion',
                                symbolName: 'Instruccion',
                                type: 'rect',
                                rect: ['-1', '1', '1034', '76', 'auto', 'auto']
                            }
                        ],
                        style: {
                            '${Stage}': {
                                isStage: true,
                                rect: ['null', 'null', '1032px', '394px', 'auto', 'auto'],
                                overflow: 'hidden',
                                fill: ["rgba(255,255,255,1)"]
                            }
                        }
                    },
                    timeline: {
                        duration: 1403,
                        autoPlay: true,
                        data: [
                            [
                                "eid81",
                                "display",
                                0,
                                0,
                                "linear",
                                "${Enviar_activo}",
                                'none',
                                'none'
                            ]
                        ]
                    }
                },
                "btn_enviar": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                transform: [[], [], [], ['0', '0']],
                                id: 'ENVIAR_inactivo',
                                type: 'image',
                                rect: ['0px', '0px', '106px', '40px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/ENVIAR_inactivo.png', '0px', '0px']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '106px', '40px']
                            }
                        }
                    },
                    timeline: {
                        duration: 1000,
                        autoPlay: true,
                        data: [
                            [
                                "eid7",
                                "scaleX",
                                643,
                                357,
                                "easeOutBack",
                                "${ENVIAR_inactivo}",
                                '0',
                                '1'
                            ],
                            [
                                "eid8",
                                "scaleY",
                                643,
                                357,
                                "easeOutBack",
                                "${ENVIAR_inactivo}",
                                '0',
                                '1'
                            ]
                        ]
                    }
                },
                "Reproducir": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                type: 'image',
                                rect: ['-323px', '0px', '275px', '101px', 'auto', 'auto'],
                                id: 'Reproducir',
                                opacity: '0',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/Reproducir.png', '0px', '0px']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '275px', '101px']
                            }
                        }
                    },
                    timeline: {
                        duration: 750,
                        autoPlay: true,
                        data: [
                            [
                                "eid15",
                                "left",
                                0,
                                750,
                                "easeOutBack",
                                "${Reproducir}",
                                '-323px',
                                '0px'
                            ],
                            [
                                "eid20",
                                "opacity",
                                0,
                                750,
                                "easeOutBack",
                                "${Reproducir}",
                                '0',
                                '1'
                            ]
                        ]
                    }
                },
                "recuadro": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                type: 'image',
                                id: 'recuadro',
                                rect: ['0px', '0px', '650px', '310px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.23', '0.23']],
                                fill: ['rgba(0,0,0,0)', 'images/recuadro.png', '0px', '0px']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '650px', '310px']
                            }
                        }
                    },
                    timeline: {
                        duration: 1000,
                        autoPlay: true,
                        data: [
                            [
                                "eid50",
                                "scaleY",
                                0,
                                1000,
                                "swing",
                                "${recuadro}",
                                '0.23',
                                '1'
                            ],
                            [
                                "eid51",
                                "scaleX",
                                0,
                                1000,
                                "swing",
                                "${recuadro}",
                                '0.23',
                                '1'
                            ]
                        ]
                    }
                },
                "palabra_1": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '106px', '40px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "palabra_2": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '108px', '39px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "palabra_3": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '108px', '40px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "palabra_4": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '112px', '40px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "palabra_5": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '109px', '40px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "marco": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                type: 'image',
                                id: 'recuadro',
                                rect: ['3px', '0px', '650px', '310px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/recuadro.png', '0px', '0px']
                            },
                            {
                                rect: ['0px', '7px', '653px', '100px', 'auto', 'auto'],
                                id: 'barra_espacio_2',
                                opacity: '0',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/barra_espacio_2.png', '0px', '0px']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '653px', '310px']
                            }
                        }
                    },
                    timeline: {
                        duration: 563.3046875,
                        autoPlay: true,
                        data: [
                            [
                                "eid74",
                                "scaleY",
                                0,
                                0,
                                "linear",
                                "${recuadro}",
                                '1',
                                '1'
                            ],
                            [
                                "eid69",
                                "opacity",
                                250,
                                313,
                                "linear",
                                "${barra_espacio_2}",
                                '0',
                                '1'
                            ],
                            [
                                "eid72",
                                "scaleX",
                                0,
                                0,
                                "linear",
                                "${recuadro}",
                                '1',
                                '1'
                            ]
                        ]
                    }
                },
                "Palabra_1": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                rect: ['0px', '0px', '135px', '35px', 'auto', 'auto'],
                                id: 'columna_amarilla_2',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/columna_amarilla.png', '0px', '0px']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,51,1)', '600', 'none solid rgb(0, 0, 51)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text11',
                                text: 'La',
                                align: 'center',
                                rect: ['19px', '2px', '115px', '35px', 'auto', 'auto']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '135px', '37px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "opcion_2": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                rect: ['0px', '0px', '135px', '35px', 'auto', 'auto'],
                                id: 'columna_amarilla_1',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/columna_amarilla.png', '0px', '0px']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,51,1)', '600', 'none solid rgb(0, 0, 51)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text3',
                                text: 'el',
                                align: 'center',
                                rect: ['18px', '3px', '106px', '35px', 'auto', 'auto']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '135px', '38px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "opcion_3": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                rect: ['0px', '0px', '135px', '35px', 'auto', 'auto'],
                                id: 'columna_amarilla_3',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/columna_amarilla.png', '0px', '0px']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,51,1)', '600', 'none solid rgb(0, 0, 51)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text5',
                                text: 'Los',
                                align: 'center',
                                rect: ['19px', '3px', '106px', '35px', 'auto', 'auto']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '135px', '38px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "opcion_4": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                rect: ['0px', '0px', '135px', '35px', 'auto', 'auto'],
                                id: 'columna_azul_1',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/columna_azul.png', '0px', '0px']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,51,1)', '600', 'none solid rgb(0, 0, 51)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text6',
                                text: 'casa',
                                align: 'center',
                                rect: ['16px', '2px', '115px', '35px', 'auto', 'auto']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '135px', '37px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "opcion_5": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                rect: ['0px', '0px', '135px', '35px', 'auto', 'auto'],
                                id: 'columna_azul_2',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/columna_azul.png', '0px', '0px']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,51,1)', '600', 'none solid rgb(0, 0, 51)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text9',
                                text: 'es',
                                align: 'center',
                                rect: ['16px', '3px', '115px', '35px', 'auto', 'auto']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '135px', '38px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "opcion_7": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                rect: ['0px', '0px', '135px', '35px', 'auto', 'auto'],
                                id: 'columna_azul_3',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/columna_azul.png', '0px', '0px']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,51,1)', '600', 'none solid rgb(0, 0, 51)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text8',
                                text: 'perro',
                                align: 'center',
                                rect: ['16px', '2px', '115px', '35px', 'auto', 'auto']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '135px', '37px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "opcion_8": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                rect: ['0px', '0px', '135px', '35px', 'auto', 'auto'],
                                id: 'Colunma_naranja_1',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Colunma_naranja.png', '0px', '0px']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,51,1)', '600', 'none solid rgb(0, 0, 51)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text12',
                                text: 'bonita',
                                align: 'center',
                                rect: ['19px', '3px', '115px', '35px', 'auto', 'auto']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '135px', '38px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "opcion_9": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                rect: ['0px', '0px', '135px', '35px', 'auto', 'auto'],
                                id: 'Colunma_naranja_3',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Colunma_naranja.png', '0px', '0px']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,51,1)', '600', 'none solid rgb(0, 0, 51)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text14',
                                text: 'grande',
                                align: 'center',
                                rect: ['19px', '2px', '115px', '35px', 'auto', 'auto']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '135px', '37px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "opcion-8": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                rect: ['0px', '0px', '135px', '35px', 'auto', 'auto'],
                                id: 'Colunma_naranja_2',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Colunma_naranja.png', '0px', '0px']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,51,1)', '600', 'none solid rgb(0, 0, 51)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text13',
                                text: 'fea',
                                align: 'center',
                                rect: ['20px', '3px', '115px', '35px', 'auto', 'auto']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '135px', '38px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "columna_1": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                type: 'rect',
                                id: 'opcion_3',
                                symbolName: 'opcion_3',
                                cursor: 'pointer',
                                rect: ['0px', '95px', '135', '38', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'opcion_2',
                                symbolName: 'opcion_2',
                                cursor: 'pointer',
                                rect: ['0px', '48px', '135', '38', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'opcion_1',
                                symbolName: 'Palabra_1',
                                cursor: 'pointer',
                                rect: ['0px', '0px', '135', '37', 'auto', 'auto']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '135px', '133px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "columna_2": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                type: 'rect',
                                id: 'opcion_6',
                                symbolName: 'opcion_7',
                                cursor: 'pointer',
                                rect: ['0px', '94px', '135', '37', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'opcion_5',
                                symbolName: 'opcion_5',
                                cursor: 'pointer',
                                rect: ['0px', '47px', '135', '38', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'opcion_4',
                                symbolName: 'opcion_4',
                                cursor: 'pointer',
                                rect: ['0px', '0px', '135', '37', 'auto', 'auto']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '135px', '131px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "columna_3": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                type: 'rect',
                                id: 'opcion_9',
                                symbolName: 'opcion_9',
                                cursor: 'pointer',
                                rect: ['0px', '94px', '135', '37', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'opcion_8',
                                symbolName: 'opcion-8',
                                cursor: 'pointer',
                                rect: ['0px', '46px', '135', '38', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'opcion_7',
                                symbolName: 'opcion_8',
                                cursor: 'pointer',
                                rect: ['0px', '0px', '135', '38', 'auto', 'auto']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '135px', '131px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "campos_vacios": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                transform: [[], [], [], ['1.04717']],
                                id: 'palabra_1',
                                symbolName: 'palabra_1',
                                rect: ['3px', '0px', '106', '40', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                rect: ['112px', '1px', '108', '39', 'auto', 'auto'],
                                id: 'palabra_2',
                                symbolName: 'palabra_2',
                                type: 'rect'
                            },
                            {
                                rect: ['221px', '0px', '108', '40', 'auto', 'auto'],
                                id: 'palabra_3',
                                symbolName: 'palabra_3',
                                type: 'rect'
                            },
                            {
                                rect: ['329px', '1px', '112', '40', 'auto', 'auto'],
                                id: 'palabra_4',
                                symbolName: 'palabra_4',
                                type: 'rect'
                            },
                            {
                                rect: ['440px', '1px', '109', '40', 'auto', 'auto'],
                                id: 'palabra_5',
                                symbolName: 'palabra_5',
                                type: 'rect'
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '548px', '41px']
                            }
                        }
                    },
                    timeline: {
                        duration: 1403,
                        autoPlay: true,
                        data: [
                            [
                                "eid53",
                                "top",
                                1403,
                                0,
                                "swing",
                                "${palabra_2}",
                                '1px',
                                '1px'
                            ],
                            [
                                "eid55",
                                "top",
                                1403,
                                0,
                                "swing",
                                "${palabra_1}",
                                '0px',
                                '0px'
                            ],
                            [
                                "eid54",
                                "top",
                                1403,
                                0,
                                "swing",
                                "${palabra_5}",
                                '1px',
                                '1px'
                            ],
                            [
                                "eid58",
                                "scaleX",
                                1403,
                                0,
                                "swing",
                                "${palabra_1}",
                                '1.04717',
                                '1.04717'
                            ],
                            [
                                "eid59",
                                "left",
                                1403,
                                0,
                                "swing",
                                "${palabra_1}",
                                '3px',
                                '3px'
                            ],
                            [
                                "eid56",
                                "top",
                                1403,
                                0,
                                "swing",
                                "${palabra_4}",
                                '1px',
                                '1px'
                            ],
                            [
                                "eid52",
                                "top",
                                1403,
                                0,
                                "swing",
                                "${palabra_3}",
                                '0px',
                                '0px'
                            ]
                        ]
                    }
                },
                "Instruccion": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                rect: ['0px', '0px', '1034px', '76px', 'auto', 'auto'],
                                id: 'recuadro_introductorio',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/textointroductorio.png', '0px', '0px']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [14, 'px'], 'rgba(0,0,51,1)', '600', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'instruccion',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibueget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pelle natoque penatibueget dolor. Aenean massa. Cum sociis natoque penatibus et magnis ntesque eu.</p>',
                                rect: ['20px', '11px', '991px', '50px', 'auto', 'auto']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                rect: [null, null, '1034px', '76px']
                            }
                        }
                    },
                    timeline: {
                        duration: 0,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "recuadro_actividad": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                id: 'marco',
                                symbolName: 'marco',
                                rect: ['0px', '0px', '653', '310', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'btn_enviar',
                                symbolName: 'btn_enviar',
                                rect: ['485px', '93px', '106', '40', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'campos_vacios',
                                symbolName: 'campos_vacios',
                                rect: ['52px', '24px', '548', '41', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'columna_2',
                                symbolName: 'columna_2',
                                rect: ['257px', '152px', '135', '131', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'columna_1',
                                symbolName: 'columna_1',
                                rect: ['40px', '152px', '135', '133', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                id: 'columna_3',
                                symbolName: 'columna_3',
                                rect: ['485px', '152px', '135', '131', 'auto', 'auto'],
                                type: 'rect'
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                isStage: 'true',
                                rect: [undefined, undefined, '653px', '310px']
                            }
                        }
                    },
                    timeline: {
                        duration: 1403,
                        autoPlay: true,
                        data: [
                        ]
                    }
                },
                "Enviar_activo": {
                    version: "6.0.0",
                    minimumCompatibleVersion: "5.0.0",
                    build: "6.0.0.400",
                    scaleToFit: "none",
                    centerStage: "none",
                    resizeInstances: false,
                    content: {
                        dom: [
                            {
                                rect: ['0px', '0px', '106px', '40px', 'auto', 'auto'],
                                type: 'image',
                                display: 'none',
                                id: 'ENVIAR_Activo',
                                opacity: '0',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/ENVIAR_Activo.png', '0px', '0px']
                            }
                        ],
                        style: {
                            '${symbolSelector}': {
                                isStage: 'true',
                                rect: [undefined, undefined, '106px', '40px']
                            }
                        }
                    },
                    timeline: {
                        duration: 1363,
                        autoPlay: true,
                        data: [
                            [
                                "eid78",
                                "opacity",
                                1000,
                                363,
                                "linear",
                                "${ENVIAR_Activo}",
                                '0',
                                '1'
                            ],
                            [
                                "eid80",
                                "display",
                                0,
                                0,
                                "linear",
                                "${ENVIAR_Activo}",
                                'none',
                                'none'
                            ],
                            [
                                "eid79",
                                "display",
                                1000,
                                0,
                                "linear",
                                "${ENVIAR_Activo}",
                                'none',
                                'block'
                            ]
                        ]
                    }
                }
            };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode)
        AdobeEdge.getComposition(compId).load("Arme%20la%20frase_edgeActions.js");
    if (!window.edge_authoring_mode)
        AdobeEdge.getComposition(compId).load("js/main.js");
})("EDGE-327212");
