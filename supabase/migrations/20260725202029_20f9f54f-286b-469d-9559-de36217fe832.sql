DELETE FROM public.news;
DELETE FROM public.events;
DELETE FROM public.resources;

INSERT INTO public.news (title, excerpt, body, cover_image_url, is_published, published_at) VALUES (
  'Cocoa Stakeholder Meeting and Inauguration of the Sustainable Cocoa Multi-Stakeholder Platform (MSP) in Ondo State',
  'Stakeholders across the cocoa value chain convened in Akure on 23 July 2026 to formally inaugurate the Sustainable Cocoa Multi-Stakeholder Platform (MSP) in Ondo State.',
  E'On behalf of the VACE – Value Chains for Agribusiness, Climate & Employment Programme, jointly co-financed by the European Union and the German Federal Ministry for Economic Cooperation and Development (BMZ) and implemented by GIZ, stakeholders were convened for the Cocoa Stakeholder Meeting and Inauguration of the Sustainable Cocoa Multi-Stakeholder Platform (MSP) in Ondo State.\n\nThe meeting brought together key stakeholders across the cocoa value chain to present the project''s interventions and implementation approach toward a coordinated and sustainable cocoa value chain, and to formally inaugurate the Sustainable Cocoa Multi-Stakeholder Platform (MSP) in Ondo State. The platform aims to foster collaboration and dialogue, address growth barriers within the cocoa value chain, and drive collective action toward a more sustainable, inclusive, and competitive cocoa sector in the state.\n\nEvent details:\nDate: Thursday, 23rd July 2026\nTime: 9:00am – 4:30pm\nVenue: Royal Bird Hotel and Towers, Alagbaka, Akure',
  '/__l5e/assets-v1/04035a64-820a-450b-886c-a6aec42ebf64/msp-inauguration-group-1.jpg',
  true,
  '2026-07-23T09:00:00+01:00'
);

INSERT INTO public.events (title, description, event_type, location, start_time, end_time, is_published) VALUES (
  'Cocoa Stakeholder Meeting and Inauguration of the Sustainable Cocoa MSP',
  'Formal inauguration of the Sustainable Cocoa Multi-Stakeholder Platform in Ondo State, convened under the VACE Programme (EU / BMZ / GIZ).',
  'meeting',
  'Royal Bird Hotel and Towers, Alagbaka, Akure',
  '2026-07-23T09:00:00+01:00',
  '2026-07-23T16:30:00+01:00',
  true
);