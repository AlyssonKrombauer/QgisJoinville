var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DomiciliarTurnosJoinville_1 = new ol.format.GeoJSON();
var features_DomiciliarTurnosJoinville_1 = format_DomiciliarTurnosJoinville_1.readFeatures(json_DomiciliarTurnosJoinville_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DomiciliarTurnosJoinville_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DomiciliarTurnosJoinville_1.addFeatures(features_DomiciliarTurnosJoinville_1);
var lyr_DomiciliarTurnosJoinville_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DomiciliarTurnosJoinville_1, 
                style: style_DomiciliarTurnosJoinville_1,
                interactive: true,
                title: '<img src="styles/legend/DomiciliarTurnosJoinville_1.png" /> Domiciliar - Turnos — Joinville'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DomiciliarTurnosJoinville_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DomiciliarTurnosJoinville_1];
lyr_DomiciliarTurnosJoinville_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'MACROSETOR': 'MACROSETOR', 'SETOR': 'SETOR', 'Horario': 'Horario', 'Frequencia': 'Frequencia', });
lyr_DomiciliarTurnosJoinville_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'MACROSETOR': 'TextEdit', 'SETOR': 'TextEdit', 'Horario': 'TextEdit', 'Frequencia': 'TextEdit', });
lyr_DomiciliarTurnosJoinville_1.set('fieldLabels', {'Name': 'inline label', 'description': 'inline label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'MACROSETOR': 'inline label', 'SETOR': 'inline label', 'Horario': 'inline label', 'Frequencia': 'inline label', });
lyr_DomiciliarTurnosJoinville_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});