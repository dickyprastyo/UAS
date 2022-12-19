ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32749").setExtent([389360.156231, 9138234.803553, 412329.247465, 9152115.782292]);
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
var format_BatasAdministrasiKecamatanKaligesing_1 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatanKaligesing_1 = format_BatasAdministrasiKecamatanKaligesing_1.readFeatures(json_BatasAdministrasiKecamatanKaligesing_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BatasAdministrasiKecamatanKaligesing_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKecamatanKaligesing_1.addFeatures(features_BatasAdministrasiKecamatanKaligesing_1);
var lyr_BatasAdministrasiKecamatanKaligesing_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdministrasiKecamatanKaligesing_1, 
                style: style_BatasAdministrasiKecamatanKaligesing_1,
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKecamatanKaligesing_1.png" /> Batas Administrasi Kecamatan Kaligesing'
            });
var format_JenisTanahKecamatanKaligesing_2 = new ol.format.GeoJSON();
var features_JenisTanahKecamatanKaligesing_2 = format_JenisTanahKecamatanKaligesing_2.readFeatures(json_JenisTanahKecamatanKaligesing_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JenisTanahKecamatanKaligesing_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JenisTanahKecamatanKaligesing_2.addFeatures(features_JenisTanahKecamatanKaligesing_2);
var lyr_JenisTanahKecamatanKaligesing_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JenisTanahKecamatanKaligesing_2, 
                style: style_JenisTanahKecamatanKaligesing_2,
                interactive: true,
    title: 'Jenis Tanah Kecamatan Kaligesing<br />\
    <img src="styles/legend/JenisTanahKecamatanKaligesing_2_0.png" /> Latosol  Coklat Tua<br />\
    <img src="styles/legend/JenisTanahKecamatanKaligesing_2_1.png" /> Latosol Merah Kuning<br />\
    <img src="styles/legend/JenisTanahKecamatanKaligesing_2_2.png" /> <br />'
        });
var format_IbuKotaKecamatanKaligesing_3 = new ol.format.GeoJSON();
var features_IbuKotaKecamatanKaligesing_3 = format_IbuKotaKecamatanKaligesing_3.readFeatures(json_IbuKotaKecamatanKaligesing_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_IbuKotaKecamatanKaligesing_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IbuKotaKecamatanKaligesing_3.addFeatures(features_IbuKotaKecamatanKaligesing_3);
var lyr_IbuKotaKecamatanKaligesing_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IbuKotaKecamatanKaligesing_3, 
                style: style_IbuKotaKecamatanKaligesing_3,
                interactive: true,
                title: '<img src="styles/legend/IbuKotaKecamatanKaligesing_3.png" /> Ibu Kota Kecamatan Kaligesing'
            });
var format_TransportasiJalanKecamatanKaligesing_4 = new ol.format.GeoJSON();
var features_TransportasiJalanKecamatanKaligesing_4 = format_TransportasiJalanKecamatanKaligesing_4.readFeatures(json_TransportasiJalanKecamatanKaligesing_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_TransportasiJalanKecamatanKaligesing_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransportasiJalanKecamatanKaligesing_4.addFeatures(features_TransportasiJalanKecamatanKaligesing_4);
var lyr_TransportasiJalanKecamatanKaligesing_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TransportasiJalanKecamatanKaligesing_4, 
                style: style_TransportasiJalanKecamatanKaligesing_4,
                interactive: true,
                title: '<img src="styles/legend/TransportasiJalanKecamatanKaligesing_4.png" /> Transportasi Jalan Kecamatan Kaligesing'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BatasAdministrasiKecamatanKaligesing_1.setVisible(true);lyr_JenisTanahKecamatanKaligesing_2.setVisible(true);lyr_IbuKotaKecamatanKaligesing_3.setVisible(true);lyr_TransportasiJalanKecamatanKaligesing_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BatasAdministrasiKecamatanKaligesing_1,lyr_JenisTanahKecamatanKaligesing_2,lyr_IbuKotaKecamatanKaligesing_3,lyr_TransportasiJalanKecamatanKaligesing_4];
lyr_BatasAdministrasiKecamatanKaligesing_1.set('fieldAliases', {'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'LAB_DESA': 'LAB_DESA', });
lyr_JenisTanahKecamatanKaligesing_2.set('fieldAliases', {'FID_JENIS_': 'FID_JENIS_', 'JNS_TNH': 'JNS_TNH', 'SUMBER': 'SUMBER', 'FID_Kecama': 'FID_Kecama', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER_1': 'SUMBER_1', 'KELURAHAN_': 'KELURAHAN_', 'Luas_Ha': 'Luas_Ha', });
lyr_IbuKotaKecamatanKaligesing_3.set('fieldAliases', {'Klasifikas': 'Klasifikas', 'Jenis_Utam': 'Jenis_Utam', 'Jenis': 'Jenis', 'Kegiatan_O': 'Kegiatan_O', 'Nama_Objek': 'Nama_Objek', 'Pemerintah': 'Pemerintah', });
lyr_TransportasiJalanKecamatanKaligesing_4.set('fieldAliases', {'Lebar': 'Lebar', 'Fungsi_Jln': 'Fungsi_Jln', 'Nama_Jln_1': 'Nama_Jln_1', });
lyr_BatasAdministrasiKecamatanKaligesing_1.set('fieldImages', {'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', 'LAB_DESA': 'TextEdit', });
lyr_JenisTanahKecamatanKaligesing_2.set('fieldImages', {'FID_JENIS_': 'TextEdit', 'JNS_TNH': 'TextEdit', 'SUMBER': 'TextEdit', 'FID_Kecama': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER_1': 'TextEdit', 'KELURAHAN_': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_IbuKotaKecamatanKaligesing_3.set('fieldImages', {'Klasifikas': 'TextEdit', 'Jenis_Utam': 'TextEdit', 'Jenis': 'TextEdit', 'Kegiatan_O': 'TextEdit', 'Nama_Objek': 'TextEdit', 'Pemerintah': 'TextEdit', });
lyr_TransportasiJalanKecamatanKaligesing_4.set('fieldImages', {'Lebar': 'TextEdit', 'Fungsi_Jln': 'TextEdit', 'Nama_Jln_1': 'TextEdit', });
lyr_BatasAdministrasiKecamatanKaligesing_1.set('fieldLabels', {'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'LAB_DESA': 'no label', });
lyr_JenisTanahKecamatanKaligesing_2.set('fieldLabels', {'FID_JENIS_': 'no label', 'JNS_TNH': 'no label', 'SUMBER': 'no label', 'FID_Kecama': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER_1': 'no label', 'KELURAHAN_': 'no label', 'Luas_Ha': 'no label', });
lyr_IbuKotaKecamatanKaligesing_3.set('fieldLabels', {'Klasifikas': 'no label', 'Jenis_Utam': 'no label', 'Jenis': 'no label', 'Kegiatan_O': 'no label', 'Nama_Objek': 'no label', 'Pemerintah': 'no label', });
lyr_TransportasiJalanKecamatanKaligesing_4.set('fieldLabels', {'Lebar': 'no label', 'Fungsi_Jln': 'no label', 'Nama_Jln_1': 'no label', });
lyr_TransportasiJalanKecamatanKaligesing_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});