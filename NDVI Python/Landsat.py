# from flask import Flask, render_template , Response, request, redirect, url_for
import ee
import geemap
import folium

# def displayMap():
ee.Authenticate()
ee.Initialize()
Landsat1999 = ee.ImageCollection("LANDSAT/LE7_TOA_5YEAR/1999_2003")
Landsat2008 = ee.ImageCollection("LANDSAT/LE7_TOA_5YEAR/2008_2012")
ndvi1999=Landsat1999.select('B4').subtract(Landsat1999.select('B3')).divide(Landsat1999.select('B4').add(Landsat1999.select('B3')))

ndvi2008=Landsat2008.normalizedDifference(["B4","B3"])

ndviParams = {"palette":["red","orange","yellow","yellowgreen","green","black"]}

def add_ee_layer(self,ee_image_object,vis_params,name):
    map_id_dict = ee.Image(ee_image_object).getMapId(vis_params)
    folium.raster_layers.TileLayer(
        
        tiles=map_id_dict['tile_fetcher'].url_format,
        attr='Map Data &copy; <a href="https://earthengine.google.com/">Google Earth Engine</a>',
        name=name,
        overlay=True,
        control=True
    ).add_to(self)
    
folium.Map.add_ee_layer=add_ee_layer

my_map=folium.Map(location=[30.37,69.34],zoom_start=2)

my_map.add_ee_layer(ndvi1999,ndviParams,'ndvi1999')
my_map.add_ee_layer(ndvi2008,ndviParams,'ndvi2008')

my_map.add_child(folium.LayerControl())

display(my_map)

# def index():
#     return render_template('Landsat.html')

# app = Flask(__name__)
# @app.route('/your_flask_funtion')
