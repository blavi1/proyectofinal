<?php
function intelli_noticias_rss_vs() {
    vc_map( array(
        "name"      => 'Noticias con rss',
        "base"      => "intelli_noticias_rss",
        "class"     => "",
        "icon"      => "intelligenia-icon",
        "category"  => 'content',
        "params"    => array(
            array(
                "type" => "textfield",
                "holder" => "div",
                "class" => "",
                "heading" => "Facebook",
                "param_name" => "facebook",
                "value" => "",
                "description" => "Url de Facebook"
            ),
            array(
                "type" => "textfield",
                "holder" => "div",
                "class" => "",
                "heading" => "Twitter",
                "param_name" => "twitter",
                "value" => "",
                "description" => "Url de Twitter"
            ),
            array(
                "type" => "textfield",
                "holder" => "div",
                "class" => "",
                "heading" => "Linkedin",
                "param_name" => "linkedin",
                "value" => "",
                "description" => "Url de Linkedin"
            ),
            array(
                "type" => "textfield",
                "holder" => "div",
                "class" => "",
                "heading" => "RSS",
                "param_name" => "rss",
                "value" => "",
                "description" => "Url de RSS"
            ),
            array(
                "type" => "textfield",
                "holder" => "div",
                "class" => "",
                "heading" => "Google Plus",
                "param_name" => "googleplus",
                "value" => "",
                "description" => "Url de Google Plus"
            ),
            array(
                "type" => "textfield",
                "holder" => "div",
                "class" => "",
                "heading" => "Instagram",
                "param_name" => "instagram",
                "value" => "",
                "description" => "Url de Instagram"
            ),
            array(
                "type" => "textfield",
                "holder" => "div",
                "class" => "",
                "heading" => "YouTube",
                "param_name" => "youtube",
                "value" => "",
                "description" => "Url de YouTube"
            )
    )));
}
add_action("vc_before_init", "intelli_noticias_rss_vs");

function intelli_casos_exito_vs() {
    vc_map( array(
        "name"      => 'Casos de éxito carousel',
        "base"      => "intelli_casos_exito",
        "class"     => "",
        "icon"      => "intelligenia-icon",
        "category"  => 'content',
        "params"    => array()
        ));
}
add_action("vc_before_init", "intelli_casos_exito_vs");

function intelli_custom_posts_vs() {
    vc_map( array(
        "name"      => 'Lista de posts',
        "base"      => "intelli_custom_posts",
        "class"     => "",
        "icon"      => "intelligenia-icon",
        "category"  => 'content',
        "params"    => array(
            array(
                "type" => "textfield",
                "admin_label" => false,
                "class" => "",
                "heading" => __( "Tipo de post"),
                "param_name" => "post_type",
                "value" => "",
                "description" => __( ""),
            ),
            array(
                "type" => "textfield",
                "admin_label" => false,
                "class" => "",
                "heading" => __( "Categoría del post"),
                "param_name" => "categoriavc",
                "value" => "",
                "description" => __( ""),
            )
    )));
}
add_action("vc_before_init", "intelli_custom_posts_vs");

function intelli_acordeon_vs() {
    vc_map( array(
        "name"      => 'Lista de posts en acordeon',
        "base"      => "intelli_acordeon",
        "class"     => "",
        "icon"      => "intelligenia-icon",
        "category"  => 'content',
        "params"    => array(
            array(
                "type" => "textfield",
                "admin_label" => false,
                "class" => "",
                "heading" => __( "Tipo de post"),
                "param_name" => "post_type",
                "value" => "",
                "description" => __( ""),
            ),
            array(
                "type" => "textfield",
                "admin_label" => false,
                "class" => "",
                "heading" => __( "Categoría del post"),
                "param_name" => "categoriavc",
                "value" => "",
                "description" => __( ""),
            )
    )));
}
add_action("vc_before_init", "intelli_acordeon_vs");

function itcasosexito_vs() {
    vc_map( array(
        "name"      => 'Lista de casos de éxito',
        "base"      => "itcasosexito",
        "class"     => "",
        "icon"      => "intelligenia-icon",
        "category"  => 'content',
        "params"    => array(
            array(
                "type" => "textfield",
                "admin_label" => false,
                "class" => "",
                "heading" => __( "Tipo de post"),
                "param_name" => "post_type",
                "value" => "",
                "description" => __( ""),
            ),
            array(
                "type" => "textfield",
                "admin_label" => false,
                "class" => "",
                "heading" => __( "Categoría del post"),
                "param_name" => "categoriavc",
                "value" => "",
                "description" => __( ""),
            )
    )));
}
add_action("vc_before_init", "itcasosexito_vs");