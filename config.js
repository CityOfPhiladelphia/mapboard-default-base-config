(function () {
  return function (opts) {
    return {
      geocoder: {
        url: function (input) {
          var inputEncoded = encodeURIComponent(input);
          return 'https://api.phila.gov/ais/v1/search/' + inputEncoded;
        },
        params: {
          gatekeeperKey: opts.gatekeeperKey,
          include_units: true,
        },
      },
      mbStyle: {
        version: 8,
        sources: {},
        // glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
        glyphs: 'http://fonts.openmaptiles.org/{fontstack}/{range}.pbf',
        layers: [],
      },
      map: {
        center: [-75.163471, 39.953338],
        minZoom: 11,
        maxZoom: 22,
        zoom: 12,
        scales: {
          22: 282.124305,
          21: 564.24861,
          20: 1128.497220,
          19: 2256.994440,
          18: 4513.988880,
          17: 9027.977761,
          16: 18055.955520,
          15: 36111.911040,
          14: 72223.822090,
          13: 144447.644200,
          12: 288895.288400,
          11: 577790.576700,
          10: 1155581.153000,
          9: 2311162.307000,
          8: 4622324.614000,
          7: 9244649.227000,
          6: 18489298.450000,
          5: 36978596.910000,
          4: 73957193.820000,
          3: 147914387.600000,
          2: 295828775.300000,
          1: 591657550.500000,
        },
        basemapSources: {
          pwd: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'pwd',
              type: 'raster',
            },
          },
          dor: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/DORBasemap/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'dor',
              type: 'raster',
            },
          },
          imagery2019: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2019_3in/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'imagery2019',
              type: 'raster',
            },
          },
          imagery2018: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2018_3in/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'imagery2018',
              type: 'raster',
            },
          },
          imagery2017: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2017_3in/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'imagery2017',
              type: 'raster',
            },
          },
          imagery2016: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2016_3in/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'imagery2016',
              type: 'raster',
            },
          },
          imagery2015: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2015_3in/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'imagery2015',
              type: 'raster',
            },
          },
          imagery2012: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2012_3in/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'imagery2012',
              type: 'raster',
            },
          },
          imagery2010: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2010_3in/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'imagery2010',
              type: 'raster',
            },
          },
          imagery2008: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2008_3in/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'imagery2008',
              type: 'raster',
            },
          },
          imagery2004: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2004_6in/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'imagery2004',
              type: 'raster',
            },
          },
          imagery1996: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_1996_6in/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'imagery1996',
              type: 'raster',
            },
          },
          historic1962: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricLandUse_1962/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'historic1962',
              type: 'raster',
            },
          },
          historic1942: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricLandUse_1942/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'historic1942',
              type: 'raster',
            },
          },
          historic1910: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricBromleyAtlas_1910/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'historic1910',
              type: 'raster',
            },
          },
          historic1895: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricBromleyAtlas_1895/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'historic1895',
              type: 'raster',
            },
          },
          historic1875: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricGMHopkinsAtlas_1875/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'historic1875',
              type: 'raster',
            },
          },
          historic1860: {
            source: {
              tiles: [
                'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricHexamerLocherAtlas_1860/MapServer/tile/{z}/{y}/{x}',
              ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'historic1860',
              type: 'raster',
            },
          },
        },
        parcelOutlineSources: {
          pwdParcels: {
            layer: {
              id: 'pwdParcels',
              type: 'raster',
              minzoom: 0,
              maxzoom: 22,
            },
            source: {
              tiles: [ '\
https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/PWDParcel_ImageryOverlay/MapServer/export?dpi=110\
&transparent=true\
&format=png36\
&bbox={bbox-epsg-3857}\
&bboxSR=3857\
&imageSR=3857\
&size=512,512\
&f=image\
            ' ],
              // type: 'raster',
              // tileSize: 256,
            }
          }
        },
        basemapLabelSources:{
          cityBasemapLabels: {
            source: {
              tiles: [ 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}' ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'cityBasemapLabels',
              type: 'raster',
            },
          },
          dorBasemapLabels: {
            source: {
              tiles: [ 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/DORBasemap_Labels/MapServer/tile/{z}/{y}/{x}' ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'dorBasemapLabels',
              type: 'raster',
            },
          },
          imageryBasemapLabels: {
            source: {
              tiles: [ 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_Labels/MapServer/tile/{z}/{y}/{x}' ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'imageryBasemapLabels',
              type: 'raster',
            },
          },
        },
        tiledOverlaySources: {
          parcels: {
            source: {
              tiles: [ 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/PWDParcel_ImageryOverlay/MapServer/tile/{z}/{y}/{x}' ],
              type: 'raster',
              tileSize: 256,
            },
            layer: {
              id: 'parcels',
              type: 'raster',
            },
          }
        },
        overlaySources: {
          zoning: {
            layer: {
              id: 'zoning',
              type: 'raster',
              minzoom: 0,
              maxzoom: 22,
            },
            source: {
              tileSize: 2048,
              tiles: [ '\
        https://gis-svc.databridge.phila.gov/arcgis/rest/services/Atlas/ZoningMap/MapServer/export?dpi=110\
        &transparent=true\
        &format=png36\
        &bbox={bbox-epsg-3857}\
        &bboxSR=3857\
        &imageSR=3857\
        &size=2300,2300\
        &f=image\
            ' ],
            },
          },
          stormwater: {
            layer: {
              id: 'stormwater',
              type: 'raster',
              minzoom: 0,
              maxzoom: 22,
            },
            source: {
              // tileSize: 2048,
              tiles: [ '\
        https://stormwater.phila.gov/arcgis/rest/services/parcel_viewer/pv_data/MapServer/export?dpi=110\
        &transparent=true\
        &format=png36\
        &bbox={bbox-epsg-3857}\
        &bboxSR=3857\
        &imageSR=3857\
        &size=512,512\
        &f=image\
            ' ],
            },
          },
        },

        basemaps: {
          pwd: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer',
            tiledLayers: [
              'cityBasemapLabels'
            ],
            type: 'featuremap',
            attribution: 'Parcels: Philadelphia Water'
          },
          dor: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/DORBasemap/MapServer',
            tiledLayers: [
              'dorBasemapLabels'
            ],
            type: 'featuremap',
            attribution: 'Parcels: Department of Records'
          },
          imagery2019: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2019_3in/MapServer/',
            label: '2019',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2019,
            attribution: 'Imagery 2019'
          },
          imagery2018: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2018_3in/MapServer/',
            label: '2018',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2018,
            attribution: 'Imagery 2018'
          },
          imagery2017: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2017_3in/MapServer',
            label: '2017',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2017,
            attribution: 'Imagery 2017'
          },
          imagery2016: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2016_3in/MapServer',
            label: '2016',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2016,
            attribution: 'Imagery 2016'
          },
          imagery2015: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2015_3in/MapServer',
            label: '2015',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2015,
            attribution: 'Imagery 2015'
          },
          imagery2012: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2012_3in/MapServer',
            label: '2012',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2012,
            attribution: 'Imagery 2012'
          },
          imagery2010: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2010_3in/MapServer',
            label: '2010',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2010,
            attribution: 'Imagery 2010'
          },
          imagery2008: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2008_3in/MapServer',
            label: '2008',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2008,
            attribution: 'Imagery 2008'
          },
          imagery2004: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2004_6in/MapServer',
            label: '2004',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2004,
            attribution: 'Imagery 2004'
          },
          imagery1996: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_1996_6in/MapServer',
            label: '1996',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 1996,
            attribution: 'Imagery 1996'
          },
          historic1962: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricLandUse_1962/MapServer',
            label: '1962',
            tiledLayers: [],
            type: 'historic',
            year: 1962,
            attribution: 'Historic Land Use 1962'
          },
          historic1942: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricLandUse_1942/MapServer',
            label: '1942',
            tiledLayers: [],
            type: 'historic',
            year: 1942,
            attribution: 'Historic Land Use 1942'
          },
          historic1910: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricBromleyAtlas_1910/MapServer',
            label: '1910',
            tiledLayers: [],
            type: 'historic',
            year: 1910,
            attribution: 'Historic Bromley Atlas 1910'
          },
          historic1895: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricBromleyAtlas_1895/MapServer',
            label: '1895',
            tiledLayers: [],
            type: 'historic',
            year: 1895,
            attribution: 'Historic Bromley Atlas 1895'
          },
          historic1875: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricGMHopkinsAtlas_1875/MapServer',
            label: '1875',
            tiledLayers: [],
            type: 'historic',
            year: 1875,
            attribution: 'Historic G.M. Hopkins Atlas 1875'
          },
          historic1860: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricHexamerLocherAtlas_1860/MapServer',
            label: '1860',
            tiledLayers: [],
            type: 'historic',
            year: 1860,
            attribution: 'Historic Hexamer Locher Atlas 1860'
          },
        },
        imageryTypes: {
          imagery: {
            label: 'Imagery'
          },
          historic: {
            label: 'Historic'
          }
        },
        tiledLayers: {
          cityBasemapLabels: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer',
            zIndex: '3',
          },
          dorBasemapLabels: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/DORBasemap_Labels/MapServer',
            zIndex: '3',
          },
          imageryBasemapLabels: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_Labels/MapServer',
            zIndex: '3',
            attribution: 'overwrite',
          },
          parcels: {
            url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/PWDParcel_ImageryOverlay/MapServer/',
            zIndex: '2',
          },
        },
        dynamicMapLayers: {
          stormwater: {
            url: 'https://stormwater.phila.gov/arcgis/rest/services/parcel_viewer/pv_data/MapServer',
            opacity: 1.0
          },
          zoning: {
            url: 'https://gis-svc.databridge.phila.gov/arcgis/rest/services/Atlas/ZoningMap/MapServer',
            opacity: 1.0
          },
          regmaps: {
            url: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/MASTERMAPINDEX/FeatureServer/',
            opacity: 0.5
          },
        },
        featureLayers: {
          dorParcels: {
            url: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/DOR_Parcel/FeatureServer/0',
          },
          pwdParcels: {
            url: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/PWD_PARCELS/FeatureServer/0',
          },
          streetTrees: {
            url: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/Philadelphia_Street_Trees/FeatureServer/0',
            type: 'http-get-nearby',
            color: 'orange',
            fillColor: 'orange',
            fillOpacity: 0.5,
            weight: 1,
            minZoom: 16

          },
          vacantLand: {
            url: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/Vacant_Indicators_Land/FeatureServer/0',
            color: 'orange',
            fillColor: 'orange',
            fillOpacity: 0.5,
            weight: 1,
            minZoom: 16
          },
          vacantBuilding: {
            url: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/Vacant_Indicators_Bldg/FeatureServer/0',
            color: 'purple',
            fillColor: 'purple',
            fillOpacity: 0.5,
            weight: 1,
            minZoom: 16
          }
        },
        tools: {
          buffer: {
            url: 'https://gis-utils.databridge.phila.gov/arcgis/rest/services/Utilities/Geometry/GeometryServer/buffer'
          },
          distance: {
            url: 'https://gis-utils.databridge.phila.gov/arcgis/rest/services/Utilities/Geometry/GeometryServer/distance'
          }
        }
      },
      carto: {
        baseUrl: 'https://phl.carto.com/api/v2/sql',
      },
    };
  }
})();
