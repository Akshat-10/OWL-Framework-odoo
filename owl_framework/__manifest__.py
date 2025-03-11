# -*- coding: utf-8 -*-

{
    'name': "OWL Framework ",

    'summary': """
    OWL Javascript Framework for Odoo 16""",

    'description': """
        OWL Javascript Framework
    """,
    'sequence': -11,
    'author': "TCB",
    'category': 'OWL',
    'version': '0.0.1.0',

    'depends': ['base', 'web'],

    'data': [
        'security/ir.model.access.csv',
        'views/todo_list.xml',
        'views/res_partner.xml',
        'views/todo.xml',
        'views/odoo_services.xml',
        "views/external_libraries.xml",

    ],
    'assets': {
        'web.assets_backend': [
           'owl_framework/static/src/components/*/*.js',
            'owl_framework/static/src/components/*/*.xml',
            'owl_framework/static/src/components/*/*.scss',

        ],
    },
    
    'auto_install': False,
    'installable': True,
    'application': True
}