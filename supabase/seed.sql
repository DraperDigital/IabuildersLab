-- Supabase Seed File - Restructured Prompts & SOPs
-- Generated automatically from IabuildersLab mock data

-- Schema Adjustments
ALTER TYPE public.content_type ADD VALUE IF NOT EXISTS 'text_prompt';
ALTER TABLE public.content_items ADD COLUMN IF NOT EXISTS featured_image_url text;
ALTER TABLE public.content_items ADD COLUMN IF NOT EXISTS prompt_text text;
ALTER TABLE public.content_items ADD COLUMN IF NOT EXISTS system_type text;
ALTER TABLE public.content_items ADD COLUMN IF NOT EXISTS process_state text;
ALTER TABLE public.content_items ADD COLUMN IF NOT EXISTS customization_guide text;
ALTER TABLE public.content_items ADD COLUMN IF NOT EXISTS reference_image_guide text;

TRUNCATE public.content_tags, public.content_items, public.tags CASCADE;

-- Seed Tags
INSERT INTO public.tags (id, name, slug) VALUES ('9ffafdbb-ef6a-4693-8a9d-3c17860f1ce8', '3D', '3d') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('34f7e52b-c3b9-421c-8194-317539437e92', '90s', '90s') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('624edc5c-92d2-4dbc-88ca-b5fa9c45cb4e', 'Ads', 'ads') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('ae51ff61-6ca5-4aee-8c3e-3acd0ef608df', 'Agents', 'agents') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('191f8f65-5bf6-4fae-8250-03421671d10f', 'AI Infrastructure', 'ai-infrastructure') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('d13eb291-a2d0-48ea-8719-1864c37ec4ab', 'Anuncios', 'anuncios') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('490f42f6-27ee-4daa-82bf-692ff4217c90', 'API Integration', 'api-integration') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('2f86e631-724d-45a2-8b7e-d654167d630b', 'Apify', 'apify') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('29a098fb-6b07-4fde-80b0-3a006069c43f', 'Arcade', 'arcade') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('0e5f526a-c3e3-4194-8af5-73d2e1e3bb7a', 'Arcads', 'arcads') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('8c0b06eb-8aa8-4cb0-8a95-fb02f709d414', 'Art', 'art') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('b6e1e1df-5bb3-4020-8c9f-985bb023780f', 'Artistic', 'artistic') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('22f43233-21b3-46d0-8abe-2b5292a5e3ad', 'Automation', 'automation') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('65b9e768-56a5-4273-8b81-f8d28c497914', 'Avant-Garde', 'avant-garde') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('61a3c407-bef7-4162-820a-bfca8dbdd1fd', 'B&W', 'black-white') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('f7137bf7-c49d-4a8e-8c77-e78df466dbed', 'B2B', 'b2b') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('00adb4a6-b424-4745-84bd-4d697e34ac04', 'Beauty', 'beauty') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('839ae9e7-b490-4d4f-8d29-fcce365aa1f0', 'Blonde', 'blonde') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('26f26acd-2b41-4ff5-8b87-c11b85789d26', 'Branding', 'branding') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('a2120663-fc2d-4579-87ea-c94abf146a22', 'Bridal', 'bridal') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('8565d138-edcd-4651-8f31-56e4afe693aa', 'Business', 'business') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('4119e704-b41f-42c2-88e3-9ebb6eecede2', 'Chibi', 'chibi') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('044ad576-82ed-497e-8d81-e95675487f29', 'Cierre de Ventas', 'cierre-de-ventas') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('39b84df0-b2fc-4187-87ba-d6dd2b217bed', 'Cinematic', 'cinematic') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('135489c6-3e83-43a1-87c2-ded4aa421047', 'Claude', 'claude') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('a8560299-366c-48c0-890e-7d75ce7ea470', 'Claude Code', 'claude-code') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('d2198a49-6933-4c0d-8958-145c4526323b', 'CLI', 'cli') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('ce77fb6c-856b-4b9f-8842-0af2198ad9d4', 'Close-up', 'closeup') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('ee04bee5-d0db-4caa-88dd-2796b60ca5ec', 'Closing', 'closing') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('36b17a19-bbe7-485e-8d21-d84900ca77a2', 'Cold Email', 'cold-email') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('8951aa14-a722-492a-81ec-7f55e290a183', 'Collage', 'collage') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('77032e7b-fe62-487e-8813-c8d9e346b502', 'Competitors', 'competitors') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('38b6a8bc-3739-41f6-850f-fa1fd6ed23f2', 'Concept', 'concept') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('d341c67c-fe6c-43af-8590-1177e2116b28', 'Conceptual', 'conceptual') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('ae55175a-3a78-43a8-87b0-1319cbe20796', 'Content', 'content') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('c89e4a96-b22a-4760-82f8-619e21e333a3', 'Copy', 'copy') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('d870301f-5cd9-47a8-829d-e1099109185a', 'Copywriting', 'copywriting') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('00b3a0ce-6fad-4c3a-8d9d-1419593018ce', 'Cosplay', 'cosplay') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('bf4d518b-880f-498f-85db-fca25118d772', 'Cottagecore', 'cottagecore') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('7a2110f9-46cd-4f0b-895f-b1ea221681de', 'Couple', 'couple') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('e7ac43de-f671-44f6-8691-9c743fdb3553', 'Cozy', 'cozy') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('6f448522-3e5e-41c9-8d36-a9e36331b356', 'Creative', 'creative') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('b494bcf3-c32e-4fc1-8e44-2bbb3f950cf0', 'Crimson', 'crimson') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('66db8214-76fd-4b69-8c37-5956e98f4072', 'CRM', 'crm') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('918e36fa-6e9e-482a-88b9-0410e6af5770', 'Cute', 'cute') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('23e74b4b-008a-4a0d-870b-f8297beba9c9', 'Cyberpunk', 'cyberpunk') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('0da6e438-1784-4a94-8120-52a12ee566de', 'Dark', 'dark') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('b751ea3a-f9a4-40a6-87b2-c95cabb40eb5', 'Denim', 'denim') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('a744de6d-2cd6-415a-8e4c-b1d554cb079a', 'Discovery', 'discovery') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('99822333-8240-4992-8c9e-284aac14847c', 'DM Automation', 'dm-automation') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('7a499757-e8ee-4bc1-870f-0501c938bf60', 'Dreamy', 'dreamy') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('24be544a-e87d-4391-8d5e-b386a8cae31a', 'E-Girl', 'e-girl') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('d164f509-a838-43ac-8459-2c7dad280356', 'Editorial', 'editorial') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('adb1622e-2b1b-4315-804d-f383a1448993', 'Ejecutivos', 'ejecutivos') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('e996d2a2-f1bc-4dcc-8697-788aae049d71', 'Elegant', 'elegant') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('4b0df260-f2e8-4d55-8706-bb1a2192f6f1', 'Ethereal', 'ethereal') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('1118fd3b-4a65-4848-822b-dcdb710ebb33', 'Facebook', 'facebook') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('7da0f422-6c2e-46b1-8e1c-2068508344e1', 'Facebook Ads', 'facebook-ads') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('e223660d-3be5-4867-8665-1b1bf6864a7a', 'FanArt', 'fanart') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('28c9b38f-2f25-4ce6-86a9-f7bc21227203', 'Fantasy', 'fantasy') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('179bf2c6-0bb3-43a3-8654-673782bc8069', 'Fashion', 'fashion') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('cb2c9ced-f65c-432d-8a0f-a39443b6f723', 'Film', 'film') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('76cbf2d5-3aa0-4204-845d-b89118da12ab', 'Film Photography', 'film-photography') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('192f3189-453a-4522-801c-7d96c2652c50', 'Fine Art', 'fine-art') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('e65aed91-4fab-4574-8f48-5d9390a5be00', 'Fitness', 'fitness') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('d59bbabd-307c-41ad-8539-f85e96ed30ca', 'Flash Photography', 'flash-photography') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('0b568b09-1fa1-42ca-8609-3e4ce6294e67', 'Floral', 'floral') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('1c683178-517d-457a-8527-9c6c289718f3', 'Fotografía', 'fotografía') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('549d1ac8-ef43-4e3a-8651-21b6aa47bb18', 'Freedom', 'freedom') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('efd6306e-5b6a-49bd-8ec6-632ba41bb27d', 'Futuristic', 'futuristic') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('6e4f151f-3670-4f67-8a36-02135c22915c', 'Gaming', 'gaming') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('c21ef249-6300-4dd5-8a3f-28f70f40978e', 'Glassmorphism', 'glassmorphism') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('f3380b2f-b68d-4186-8fd3-550998a46e81', 'Golden Hour', 'golden-hour') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('f17c8880-8ca9-42df-81a4-00d54d66bcb9', 'Grid', 'grid') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('694ec935-a876-4684-8d0c-6b8022458552', 'Growth', 'growth') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('c050d129-71ed-4ba7-8b8a-27de1def65fe', 'Guiones', 'guiones') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('41d8c9ef-d8ae-483d-87ec-9cf6792c0e74', 'Gym', 'gym') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('c2a6e71c-4977-4fa5-8413-af8c13ae3ba8', 'Halloween', 'halloween') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('afcf34a4-71d6-412e-8b63-575d2ee59764', 'Halo', 'halo') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('aba4effc-6065-44c3-8f11-617dc3114ff3', 'Hardware', 'hardware') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('6a91c87a-baeb-4fae-8c23-907536c9cdd1', 'High Ticket', 'high-ticket') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('62debbdf-d74f-4103-88e1-2327c1dd79f1', 'Holiday', 'holiday') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('0f5b7c3f-fb24-42d7-8543-e2194edc9602', 'Home', 'home') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('fef86d52-82e9-4fbd-8420-6a315ef0ad03', 'Horror', 'horror') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('6121296b-e11e-4b6b-8bd3-648139c36d37', 'Imported', 'imported') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('b53711bb-5c3b-4d1f-8176-4ddb47ebeaf8', 'Indoor', 'indoor') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('6311fecc-7319-4faf-858b-04ef6724f241', 'Intimate', 'intimate') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('39e6ba14-3546-45c6-8436-7042224a2f83', 'Jewelry', 'jewelry') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('630f4208-ab2d-4eb1-84d8-4cbe36c155b2', 'Lifestyle', 'lifestyle') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('470cbea3-705e-4662-8890-8e4b972f7ecb', 'Lighting', 'lighting') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('2cf60b2d-5678-464d-896d-07717f27d620', 'Long Exposure', 'long-exposure') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('a4b8d0e2-a04c-445c-80f6-a6fe34f5d6b2', 'Lujo', 'lujo') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('60514d83-4505-48ee-87c7-40d282bc13f9', 'Luxury', 'luxury') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('c7da402b-620d-4e6e-87d7-9079c61dfa27', 'ManyChat', 'manychat') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('9a12bf6f-2491-4a03-8f79-ce24426643f3', 'Market Research', 'market-research') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('6794068b-f704-46d3-8ee8-5f0c84b2ffad', 'Marketing', 'marketing') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('3715df9a-9b4c-4cf1-85fc-addad7f03bba', 'Marketing Skills', 'marketing-skills') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('4427ff03-effe-4519-8262-7911e87c3460', 'Masterclass', 'masterclass') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('3cee3919-96e2-4f87-8a12-9cab4d5c1274', 'Matriz de Contenido', 'matriz-de-contenido') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('e243029d-e4e7-41fe-8b2a-6bec8808f4be', 'Media Buying', 'media-buying') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('744ba3c0-a9c8-4b1b-88a0-af6e982a9823', 'Meta Ads', 'meta-ads') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('7d53481c-956d-4ed9-8963-b1d02e7e983f', 'Midjourney', 'midjourney') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('356ee647-71f8-4602-85be-d9139e09edec', 'Minimal', 'minimal') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('96fb9cf9-2092-40ac-86b3-320fec3cd019', 'Minimalista', 'minimalista') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('f1d11f80-ccff-4409-83b7-520e0c92da87', 'Mirror Selfie', 'mirror-selfie') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('4ac01170-ed90-4ced-8bef-a0de5b03e202', 'Mirror Water', 'mirror-water') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('99464f8a-cb41-4870-88fa-93727b359000', 'Moody', 'moody') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('24739888-0e50-41f4-82c8-9ea609fc457e', 'Music', 'music') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('364740dd-8304-4032-8c49-f3d9d8aadb89', 'n8n', 'n8n') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('f40bc665-4479-4af3-8857-c444d89ecd24', 'Nano Banana', 'nano-banana') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('cda8407e-00a7-4c33-88ef-08792370b94f', 'Natural', 'natural') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('a786e011-fb3c-4dec-804d-66510df1dd79', 'Neon', 'neon') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('35cda63b-9cc3-436e-8635-96383ae7fabb', 'Night Photography', 'night-photography') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('b5090154-1437-4778-8ce2-f27695430547', 'NodeJS', 'nodejs') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('ec694f99-cfb9-45c8-8773-16d8073dc205', 'Noir', 'noir') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('f045fbbb-064a-443d-85d0-8578561cf4b8', 'Obsidian', 'obsidian') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('18f01d16-011e-4479-88d6-b05a0b3d616a', 'Ofertas', 'ofertas') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('03dc1bb9-cf81-4eba-8942-51579cd0f5fe', 'Omnicanal', 'omnicanal') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('89628a8c-5093-4eb1-884e-b3caa87db979', 'Open Source', 'open-source') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('304e2dd5-b6fd-4c9a-82cf-5eb24b306259', 'Operations', 'operations') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('63636fb4-1990-4e4b-86aa-57e06467efd3', 'Outdoor', 'outdoor') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('a1c36205-cd84-4112-8530-d981e7a37724', 'Outreach', 'outreach') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('8c359586-d240-4165-8bbd-db9053f731ec', 'Paparazzi', 'paparazzi') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('6bea1a96-8ecc-4538-81d7-802322ec4336', 'Pastel', 'pastel') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('a4fb7cad-a409-40af-8d21-4add9d147036', 'Pets', 'pets') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('0c12b7c3-d97c-41d8-83fd-d9f94d7e1d0a', 'Photography', 'photography') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('71c0e984-340f-454a-863b-e4f9de5c9e6b', 'Pink', 'pink') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('33cd32a1-160b-4cc7-8943-61b417ae1df1', 'Pitches', 'pitches') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('f51b5ce1-b5f4-48ff-805f-714bf93f1daa', 'Polaroid', 'polaroid') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('872f0a0e-0193-44ce-8116-d5b07c00942b', 'Pop Art', 'pop-art') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('3a8d5248-3879-4712-8352-03076643a662', 'Portrait', 'portrait') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('f8e34eef-2319-428d-839c-d2a1b1c1a43e', 'Power', 'power') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('920d64fd-0c51-4402-8cc4-26310a501802', 'Producto', 'producto') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('f0edcde4-94ab-4cbb-8324-2ed5aeff4225', 'Professional', 'professional') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('b3c2183f-3da9-4673-896d-6e83fab00d8f', 'PromptGather', 'promptgather') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('4ea18b70-962c-466e-8ec5-fd54b115782a', 'Prospección', 'prospección') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('597d0932-6a36-4ec5-801b-f363602afddc', 'Puppy', 'puppy') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('b09a2ddd-9b88-4912-8ed1-9072aa0c7ce4', 'Red', 'red') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('28ab98e0-67b7-4f3f-8186-2206d9cb5f15', 'Rembrandt', 'rembrandt') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('dd420011-0dcb-421f-820b-60905f13d7da', 'Remotion', 'remotion') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('f72204c3-e8a5-40af-8946-298b63fc68b1', 'Retratos', 'retratos') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('74349942-442a-40fa-82d2-750bd22da89e', 'Retro', 'retro') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('88c53690-97af-4900-83fb-1d38652c8d2e', 'Romance', 'romance') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('916ce1fd-375e-4ac3-838b-50caf817cad2', 'Romantic', 'romantic') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('765ff5de-7eca-437b-8937-a0581329e261', 'SaaS', 'saas') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('c97d1262-59ee-46e5-8d5d-a76b3f13b48e', 'Sales', 'sales') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('0ee5ebbb-e34a-4294-8b26-78ae4453396e', 'Sci-Fi', 'sci-fi') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('8f52145b-d9ad-4ad4-8eec-3220757fe8fc', 'Scraping', 'scraping') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('51cd2e03-9be8-42d1-8d84-2a56f8077243', 'Selfie', 'selfie') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('da075503-7af3-4b87-8510-51204363e64b', 'Servers', 'servers') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('4b01fc96-68cc-4c2a-8111-8002239cd312', 'Setup', 'setup') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('b78afbc0-3986-4381-8aa5-51bf31877a08', 'Shadow', 'shadow') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('1a9c0f2a-531d-416d-8537-70c17cfc4ec8', 'SOP', 'sop') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('75615c42-fbb6-4999-80f0-db023929a962', 'Sports', 'sports') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('ce38b0f1-cefd-435f-81cf-11189d218f9c', 'Studio', 'studio') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('221b2f13-388c-4c70-8cfa-0be8c8b8d1b9', 'Suit', 'suit') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('da1092e5-3f78-4a6f-8bdd-ac7d7b53c0a7', 'Summer', 'summer') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('372551a3-37df-4c0f-83c4-cbda4664b331', 'Sunglasses', 'sunglasses') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('b5a9bf83-07fe-4ac0-89f2-56e90d7a69a9', 'Surreal', 'surreal') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('77495ed8-df99-4a2d-8fa5-be3aabfa5411', 'Swimwear', 'swimwear') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('b21839ae-9c52-4737-86c4-7eaf80da2fd3', 'Tailwind', 'tailwind') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('ca4fe112-b77c-4c5f-868d-163de854f9dc', 'Tech', 'tech') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('f9556543-df66-40a4-8254-fdf95accf50b', 'Tools', 'tools') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('3bdcbcf8-8e36-409c-89d4-b433347525a1', 'Travel', 'travel') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('1fcb7506-df10-45f3-831a-6ebcc639046e', 'UGC', 'ugc') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('ad8794d3-9a60-4fef-87a1-2acc7763376a', 'UI', 'ui') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('4a2fc157-9240-461a-8603-4397ecb46b33', 'UI/UX', 'ui/ux') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('575e4ebd-f06b-4993-8199-933aeaf56baa', 'Urban', 'urban') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('efd09422-b942-490c-8093-37971443a52e', 'UX', 'ux') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('57c16b10-fa80-4964-80fe-ac3eb040f8b5', 'Ventas', 'ventas') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('4270fc57-7856-4b16-81ab-370f3e654a81', 'VHS', 'vhs') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('e7e7135e-c9c4-460b-838d-c77e34f1fcb9', 'Vibrant', 'vibrant') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('e490492c-b837-4981-8514-6013481930ff', 'Video', 'video') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('aedce7d4-f776-4a27-8713-6a63166906a8', 'Video Marketing', 'video-marketing') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('885ab67c-af6d-405a-8ca1-a6f2f0cbcdf8', 'Voz de Marca', 'voz-de-marca') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('4a12e39d-2f12-4990-8f8b-eef0d79f83eb', 'VSL', 'vsl') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('8a825204-ae80-4bb3-8a48-7f029f852268', 'Warm', 'warm') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('a38533b6-c17e-4499-86ff-90e5d8fb4d3c', 'Water', 'water') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('17befd14-0c73-45f6-85f8-929e4f627d46', 'Web Design', 'web-design') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('275e6e11-97c3-46f6-80a3-c6a1e24ba222', 'Webinars', 'webinars') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('f9b86224-212f-4a88-8d45-c8a30140e485', 'Wet Look', 'wet-look') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('8a796d72-abff-4a35-8a51-a538bc4abdaa', 'Winter', 'winter') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('6600ed84-69d2-4f99-8952-8979c19788c5', 'Workflows', 'workflows') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('dc09f376-c86b-4590-8cb3-43f2d33da56c', 'Y2K', 'y2k') ON CONFLICT (slug) DO NOTHING;
INSERT INTO public.tags (id, name, slug) VALUES ('50f2c7de-4f4f-4507-8ae8-b4b684982af8', 'YouTube', 'youtube') ON CONFLICT (slug) DO NOTHING;

-- Seed Content Items & Content Tags
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('26316d35-5182-4315-813a-3c6cf5889941', 'system', 'SOP: Arquitectura de Ofertas Irresistibles y Bonos Apilables', 'sop-arquitectura-ofertas-irresistibles', 'Marco estratégico D.R.A.P.E.R. para transformar servicios y productos commodities en ofertas irresistibles de alto valor percibido con garantía, bonos estratégicos y estructura de precios.', '
# SOP: Arquitectura de Ofertas Irresistibles y Bonos Apilables

Marco estratégico para transformar productos commodities en ofertas irresistibles de alto valor percibido con garantía de inversión, bonos estratégicos y estructura de precios.

---

## 🛠️ Prompt Maestro de Ejecución

```text
Actúa como un Copywriter y Arquitecto de Ofertas Senior especializado en ofertas de alto valor (High-Ticket Offers).
Tu objetivo es rediseñar una propuesta de valor commodity y transformarla en una "Oferta Irresistible" aplicando la Metodología D.R.A.P.E.R.

DATOS DE ENTRADA:
- Producto / Servicio: [INSERTAR PRODUCTO O SERVICIO]
- Cliente Ideal (ICP): [INSERTAR CLIENTE IDEAL]
- Precio Actual: [INSERTAR PRECIO]
- Principal Dolor del Cliente: [INSERTAR DOLOR PRINCIPAL]

ESTRUCTURA DE SALIDA REQUERIDA:

1. DIAGNÓSTICO DEL VALOR PERCIBIDO
- Define la Ecuación del Valor: (Resultado Soñado x Probabilidad Percibida de Éxito) / (Tiempo de Espera x Esfuerzo y Sacrificio).
- Identifica 3 fricciones clave que frenan al cliente antes de comprar.

2. REDISEÑO DE LA PROMESA MAESTRA (THE BIG PROMISE)
- Escribe 3 titulares disruptivos con la fórmula: "[Resultado Deseado] en [Tiempo] sin [Mayor Miedo/Dolor]".

3. APILAMIENTO DE BONOS ESTRATÉGICOS (BONUS STACK)
- Diseña 3 bonos de alto valor percibido que resuelvan el "siguiente problema" del cliente al usar el producto principal.
- Asigna un valor monetario ficticio razonable a cada bono.

4. INGENIERÍA DE GARANTÍAS Y REDUCCIÓN DE RIESGO
- Crea 2 opciones de garantías éticas (Garantía condicional basada en resultados vs Garantía incondicional de satisfacción).

5. LLAMADA A LA ACCIÓN Y DISPARADORES DE URGENCIA ÉTICA
- Redacta la sección de cierre de la oferta con un resumen del valor total ($ Total Value vs $ Real Price).
```
', 'Páginas de Ventas', 'copywriting', 'build', 'advanced', NULL, 'Actúa como un Copywriter y Arquitecto de Ofertas Senior especializado en ofertas de alto valor (High-Ticket Offers).
Tu objetivo es rediseñar una propuesta de valor commodity y transformarla en una "Oferta Irresistible" aplicando la Metodología D.R.A.P.E.R.

DATOS DE ENTRADA:
- Producto / Servicio: [INSERTAR PRODUCTO O SERVICIO]
- Cliente Ideal (ICP): [INSERTAR CLIENTE IDEAL]
- Precio Actual: [INSERTAR PRECIO]
- Principal Dolor del Cliente: [INSERTAR DOLOR PRINCIPAL]

ESTRUCTURA DE SALIDA REQUERIDA:

1. DIAGNÓSTICO DEL VALOR PERCIBIDO
- Define la Ecuación del Valor: (Resultado Soñado x Probabilidad Percibida de Éxito) / (Tiempo de Espera x Esfuerzo y Sacrificio).
- Identifica 3 fricciones clave que frenan al cliente antes de comprar.

2. REDISEÑO DE LA PROMESA MAESTRA (THE BIG PROMISE)
- Escribe 3 titulares disruptivos con la fórmula: "[Resultado Deseado] en [Tiempo] sin [Mayor Miedo/Dolor]".

3. APILAMIENTO DE BONOS ESTRATÉGICOS (BONUS STACK)
- Diseña 3 bonos de alto valor percibido que resuelvan el "siguiente problema" del cliente al usar el producto principal.
- Asigna un valor monetario ficticio razonable a cada bono.

4. INGENIERÍA DE GARANTÍAS Y REDUCCIÓN DE RIESGO
- Crea 2 opciones de garantías éticas (Garantía condicional basada en resultados vs Garantía incondicional de satisfacción).

5. LLAMADA A LA ACCIÓN Y DISPARADORES DE URGENCIA ÉTICA
- Redacta la sección de cierre de la oferta con un resumen del valor total ($ Total Value vs $ Real Price).', NULL, NULL, TRUE, TRUE, 'access', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('26316d35-5182-4315-813a-3c6cf5889941', 'd870301f-5cd9-47a8-829d-e1099109185a') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('26316d35-5182-4315-813a-3c6cf5889941', '18f01d16-011e-4479-88d6-b05a0b3d616a') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('26316d35-5182-4315-813a-3c6cf5889941', '57c16b10-fa80-4964-80fe-ac3eb040f8b5') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('26316d35-5182-4315-813a-3c6cf5889941', '6a91c87a-baeb-4fae-8c23-907536c9cdd1') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('7e432609-be46-40bd-8024-5b9edd30456b', 'system', 'SOP: Guion para VSL de Alta Conversión (Video Sales Letter)', 'sop-guion-vsl-alta-conversion', 'Estructura paso a paso de 5 bloques para guiones VSL de 10 a 15 minutos: Hook de atención, historia de origen, mecanismo único, prueba social y oferta irresistible.', '
# SOP: Guion para VSL de Alta Conversión (Video Sales Letter)

Estructura paso a paso de 5 bloques para guiones VSL de 10 a 15 minutos: Hook de atención, historia de origen, mecanismo único, prueba social y oferta irresistible.

---

## 🛠️ Prompt Maestro de Ejecución

```text
Actúa como un Guionista de VSL (Video Sales Letter) de respuesta directa que ha generado millones de dólares en ventas digitales.
Escribe la estructura completa y el guion narrativo para un VSL de 10 minutos enfocado en vender [PRODUCTO/SERVICIO].

PARÁMETROS DEL PROYECTO:
- Producto/Servicio: [INSERTAR PRODUCTO/SERVICIO]
- Audiencia Objetivo: [INSERTAR AUDIENCIA]
- Mecanismo Único de Solución: [INSERTAR MECANISMO ÚNICO O METODOLOGÍA]

BLOQUES DEL GUION (PALABRA POR PALABRA):
1. EL HOOK DE IMPACTO (Primeros 60 segundos): Retén la atención cuestionando un mito de la industria.
2. LA HISTORIA DE ORIGEN Y EL PUNTO DE QUIEBRE (Minuto 1 a 4): Transición emocional del dolor al descubrimiento.
3. REVELACIÓN DEL MECANISMO ÚNICO (Minuto 4 a 7): Explica por qué los métodos tradicionales fallan y por qué tu sistema es matemáticamente superior.
4. PRESENTACIÓN DEL PRODUCTO Y PRUEBA SOCIAL (Minuto 7 a 10): Muestra testimonios y desglose de módulos/beneficios.
5. LA LLAMADA A LA ACCIÓN FINAL (Minuto 10 a 12): Establece un ultimátum claro entre continuar igual o tomar acción hoy.
```
', 'Ventas y Calificación', 'sales', 'build', 'advanced', NULL, 'Actúa como un Guionista de VSL (Video Sales Letter) de respuesta directa que ha generado millones de dólares en ventas digitales.
Escribe la estructura completa y el guion narrativo para un VSL de 10 minutos enfocado en vender [PRODUCTO/SERVICIO].

PARÁMETROS DEL PROYECTO:
- Producto/Servicio: [INSERTAR PRODUCTO/SERVICIO]
- Audiencia Objetivo: [INSERTAR AUDIENCIA]
- Mecanismo Único de Solución: [INSERTAR MECANISMO ÚNICO O METODOLOGÍA]

BLOQUES DEL GUION (PALABRA POR PALABRA):
1. EL HOOK DE IMPACTO (Primeros 60 segundos): Retén la atención cuestionando un mito de la industria.
2. LA HISTORIA DE ORIGEN Y EL PUNTO DE QUIEBRE (Minuto 1 a 4): Transición emocional del dolor al descubrimiento.
3. REVELACIÓN DEL MECANISMO ÚNICO (Minuto 4 a 7): Explica por qué los métodos tradicionales fallan y por qué tu sistema es matemáticamente superior.
4. PRESENTACIÓN DEL PRODUCTO Y PRUEBA SOCIAL (Minuto 7 a 10): Muestra testimonios y desglose de módulos/beneficios.
5. LA LLAMADA A LA ACCIÓN FINAL (Minuto 10 a 12): Establece un ultimátum claro entre continuar igual o tomar acción hoy.', NULL, NULL, TRUE, TRUE, 'access', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('7e432609-be46-40bd-8024-5b9edd30456b', '4a12e39d-2f12-4990-8f8b-eef0d79f83eb') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('7e432609-be46-40bd-8024-5b9edd30456b', 'c050d129-71ed-4ba7-8b8a-27de1def65fe') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('7e432609-be46-40bd-8024-5b9edd30456b', 'aedce7d4-f776-4a27-8713-6a63166906a8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('7e432609-be46-40bd-8024-5b9edd30456b', '57c16b10-fa80-4964-80fe-ac3eb040f8b5') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('d0eccf40-f054-4b93-816b-b45fb9de4a17', 'system', 'SOP: Secuencia de Prospección Fría B2B por Email (Cold Outreach)', 'sop-secuencia-prospeccion-fria-b2b', 'Secuencia de 4 correos fríos para tomadores de decisiones (CEOs, CMOs, Directors) centrada en personalizar puntos de dolor, aportar valor sin vender y agendar llamadas.', '
# SOP: Secuencia de Prospección Fría B2B por Email (Cold Outreach)

Secuencia de 4 correos fríos para tomadores de decisiones (CEOs, CMOs, Directors) centrada en personalizar puntos de dolor, aportar valor sin vender y agendar llamadas.

---

## 🛠️ Prompt Maestro de Ejecución

```text
Escribe una secuencia de 4 correos de prospección fría B2B dirigidos a [CARGO DEL DECISOR, EJ: DIRECTOR DE MARKETING] en la industria de [INDUSTRIA].

REGLAS DE COPYWRITING:
- Cero lenguaje vendedor ni "espero que estés bien".
- Máximo 75-100 palabras por correo.
- Formato de texto plano profesional.

SECUENCIA DE CORREOS:
1. EMAIL 1 (El Hook de Observación): Menciona una observación específica del negocio del prospecto y sugiere un diagnóstico corto.
2. EMAIL 2 (El Caso de Estudio de 3 Oraciones): Muestra cómo ayudaste a un cliente similar a lograr [RESULTADO] en [TIEMPO].
3. EMAIL 3 (Aporte de Valor Gratuito): Entrega un recurso sin pedir nada a cambio (ej: "Grabé un video de 2 minutos analizando X").
4. EMAIL 4 (El Breakup Email): Cierre cordial avisando que no volverás a insistir si no es el momento adecuado.
```
', 'Marketing & Content', 'outreach', 'build', 'intermediate', NULL, 'Escribe una secuencia de 4 correos de prospección fría B2B dirigidos a [CARGO DEL DECISOR, EJ: DIRECTOR DE MARKETING] en la industria de [INDUSTRIA].

REGLAS DE COPYWRITING:
- Cero lenguaje vendedor ni "espero que estés bien".
- Máximo 75-100 palabras por correo.
- Formato de texto plano profesional.

SECUENCIA DE CORREOS:
1. EMAIL 1 (El Hook de Observación): Menciona una observación específica del negocio del prospecto y sugiere un diagnóstico corto.
2. EMAIL 2 (El Caso de Estudio de 3 Oraciones): Muestra cómo ayudaste a un cliente similar a lograr [RESULTADO] en [TIEMPO].
3. EMAIL 3 (Aporte de Valor Gratuito): Entrega un recurso sin pedir nada a cambio (ej: "Grabé un video de 2 minutos analizando X").
4. EMAIL 4 (El Breakup Email): Cierre cordial avisando que no volverás a insistir si no es el momento adecuado.', NULL, NULL, TRUE, FALSE, 'access', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d0eccf40-f054-4b93-816b-b45fb9de4a17', '36b17a19-bbe7-485e-8d21-d84900ca77a2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d0eccf40-f054-4b93-816b-b45fb9de4a17', 'f7137bf7-c49d-4a8e-8c77-e78df466dbed') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d0eccf40-f054-4b93-816b-b45fb9de4a17', 'a1c36205-cd84-4112-8530-d981e7a37724') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d0eccf40-f054-4b93-816b-b45fb9de4a17', '4ea18b70-962c-466e-8ec5-fd54b115782a') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('dac03e94-f661-4e96-8424-7c795450d6d4', 'system', 'SOP: Matriz de Copywriting para Meta Ads (Hooks, Angles & Copy)', 'sop-matriz-copywriting-meta-ads', 'Generador de 5 ángulos de anuncios publicitarios (Historia, Contradicción, Estadísticas, Transformación, Pregunta Provocadora) con variaciones de titulares y descripciones.', '
# SOP: Matriz de Copywriting para Meta Ads (Hooks, Angles & Copy)

Generador de 5 ángulos de anuncios publicitarios (Historia, Contradicción, Estadísticas, Transformación, Pregunta Provocadora) con variaciones de titulares y descripciones.

---

## 🛠️ Prompt Maestro de Ejecución

```text
Actúa como un Media Buyer y Copywriter experto en Meta Ads (Facebook e Instagram Ads).
Genera una matriz de 5 textos publicitarios para anunciar [PRODUCTO/SERVICIO].

CADA ÁNGULO DEBE INCLUIR:
1. ÁNGULO 1: La Contradicción ("Por qué todo lo que te dijeron sobre [TEMA] es mentira").
2. ÁNGULO 2: La Historia Personal ("El día que estuvimos a punto de quebrar por...").
3. ÁNGULO 3: El Dato Duro / Estadística ("El 84% de las empresas cometen este error...").
4. ÁNGULO 4: El Caso de Éxito Directo ("Cómo [CLIENTE] logró [RESULTADO] en [TIEMPO]").
5. ÁNGULO 5: La Pregunta Provocadora ("¿Sigues haciendo [MÉTODO VIEJO] en pleno 2026?").

PARA CADA ÁNGULO ENTREGA:
- Primary Text (Texto principal de 3 párrafos).
- Headline (Titular corto y llamativo de menos de 5 palabras).
- Description (Línea de soporte debajo del titular).
```
', 'Marketing & Content', 'ads', 'build', 'intermediate', NULL, 'Actúa como un Media Buyer y Copywriter experto en Meta Ads (Facebook e Instagram Ads).
Genera una matriz de 5 textos publicitarios para anunciar [PRODUCTO/SERVICIO].

CADA ÁNGULO DEBE INCLUIR:
1. ÁNGULO 1: La Contradicción ("Por qué todo lo que te dijeron sobre [TEMA] es mentira").
2. ÁNGULO 2: La Historia Personal ("El día que estubimos a punto de quebrar por...").
3. ÁNGULO 3: El Dato Duro / Estadística ("El 84% de las empresas cometen este error...").
4. ÁNGULO 4: El Caso de Éxito Directo ("Cómo [CLIENTE] logró [RESULTADO] en [TIEMPO]").
5. ÁNGULO 5: La Pregunta Provocadora ("¿Sigues haciendo [MÉTODO VIEJO] en pleno 2026?").

PARA CADA ÁNGULO ENTREGA:
- Primary Text (Texto principal de 3 párrafos).
- Headline (Titular corto y llamativo de menos de 5 palabras).
- Description (Línea de soporte debajo del titular).', NULL, NULL, TRUE, FALSE, 'access', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('dac03e94-f661-4e96-8424-7c795450d6d4', '744ba3c0-a9c8-4b1b-88a0-af6e982a9823') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('dac03e94-f661-4e96-8424-7c795450d6d4', '7da0f422-6c2e-46b1-8e1c-2068508344e1') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('dac03e94-f661-4e96-8424-7c795450d6d4', 'd870301f-5cd9-47a8-829d-e1099109185a') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('dac03e94-f661-4e96-8424-7c795450d6d4', 'd13eb291-a2d0-48ea-8719-1864c37ec4ab') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('0f461e68-2197-4712-85d6-1e1b54f82739', 'system', 'SOP: Estructura de Cierre de Ventas para Webinars & Masterclasses', 'sop-estructura-cierre-webinars', 'Guion de transición de la fase educativa a la fase de venta en directo, manejo de objeciones en vivo, disparadores de urgencia y escasez ética.', '
# SOP: Estructura de Cierre de Ventas para Webinars & Masterclasses

Guion de transición de la fase educativa a la fase de venta en directo, manejo de objeciones en vivo, disparadores de urgencia y escasez ética.

---

## 🛠️ Prompt Maestro de Ejecución

```text
Genera la sección de cierre de ventas (The Pitch & Close) para una Masterclass o Webinar en vivo sobre [TEMA DEL WEBINAR].

ESTRUCTURA DE TRANSICIÓN:
1. PERMISO PARA VENDER: Redacta la frase exacta de transición ("Hemos cubierto el contenido educativo... ¿me dan permiso de tomar 10 minutos para mostrarles cómo implementar esto conmigo?").
2. RECAPITULACIÓN DEL SISTEMA: Resume los 3 pilares enseñados en la clase.
3. PRESENTACIÓN DEL PROGRAMA / OFERTA: Desglose de módulos y acompañamiento.
4. MANEJO DE OBJECIONES EN VIVO:
   - Objeción de Tiempo ("No tengo tiempo para esto").
   - Objeción de Dinero ("No puedo gastar ahora").
   - Objeción de Confianza ("¿Funcionará para mi nicho específico?").
5. LLAMADA A LA ACCIÓN CON URGENCIA ÉTICA: Temporizador de bonos para los primeros 10 compradores.
```
', 'Operaciones y Cierre', 'closing', 'build', 'advanced', NULL, 'Genera la sección de cierre de ventas (The Pitch & Close) para una Masterclass o Webinar en vivo sobre [TEMA DEL WEBINAR].

ESTRUCTURA DE TRANSICIÓN:
1. PERMISO PARA VENDER: Redacta la frase exacta de transición ("Hemos cubierto el contenido educativo... ¿me dan permiso de tomar 10 minutos para mostrarles cómo implementar esto conmigo?").
2. RECAPITULACIÓN DEL SISTEMA: Resume los 3 pilares enseñados en la clase.
3. PRESENTACIÓN DEL PROGRAMA / OFERTA: Desglose de módulos y acompañamiento.
4. MANEJO DE OBJECIONES EN VIVO:
   - Objeción de Tiempo ("No tengo tiempo para esto").
   - Objeción de Dinero ("No puedo gastar ahora").
   - Objeción de Confianza ("¿Funcionará para mi nicho específico?").
5. LLAMADA A LA ACCIÓN CON URGENCIA ÉTICA: Temporizador de bonos para los primeros 10 compradores.', NULL, NULL, TRUE, FALSE, 'access', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('0f461e68-2197-4712-85d6-1e1b54f82739', '275e6e11-97c3-46f6-80a3-c6a1e24ba222') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('0f461e68-2197-4712-85d6-1e1b54f82739', '044ad576-82ed-497e-8d81-e95675487f29') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('0f461e68-2197-4712-85d6-1e1b54f82739', '4427ff03-effe-4519-8262-7911e87c3460') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('0f461e68-2197-4712-85d6-1e1b54f82739', '33cd32a1-160b-4cc7-8943-61b417ae1df1') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('d748f0ac-9fac-4b97-862b-8f9ae29519fb', 'prompt', 'Cinematic Dark Elegance: Luxury Glass Perfume Bottle', 'luxury-perfume-dark-elegance', 'Fotografía de estudio de alta gama para perfumería y cosmética de lujo con iluminación dramática chiaroscuro, reflejos de agua en cristal obsidian y sombras suaves.', '
# Cinematic Dark Elegance: Luxury Glass Perfume Bottle

Prompt de fotografía comercial de lujo para marcas de perfumería, cosmética o productos premium.

---

## 🎨 Prompt Maestro

```text
Commercial studio photography of a luxury crystal perfume bottle on a reflective black obsidian stone table, dramatic chiaroscuro lighting, soft purple and gold light leaks, water droplets on glass, cinematic depth of field, 8k resolution, shot on Hasselblad H6D-100c --ar 4:5 --style raw --v 6.1
```
', 'Fotografía de Producto', 'Midjourney v6', 'Estudio', 'intermediate', 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop', 'Commercial studio photography of a luxury crystal perfume bottle on a reflective black obsidian stone table, dramatic chiaroscuro lighting, soft purple and gold light leaks, water droplets on glass, cinematic depth of field, 8k resolution, shot on Hasselblad H6D-100c --ar 4:5 --style raw --v 6.1', NULL, NULL, TRUE, TRUE, 'access', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d748f0ac-9fac-4b97-862b-8f9ae29519fb', '7d53481c-956d-4ed9-8963-b1d02e7e983f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d748f0ac-9fac-4b97-862b-8f9ae29519fb', '1c683178-517d-457a-8527-9c6c289718f3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d748f0ac-9fac-4b97-862b-8f9ae29519fb', '920d64fd-0c51-4402-8cc4-26310a501802') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d748f0ac-9fac-4b97-862b-8f9ae29519fb', 'a4b8d0e2-a04c-445c-80f6-a6fe34f5d6b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('23336321-aec5-4c8d-8ae9-7c6fefcc567c', 'prompt', 'High-End Founder Editorial Portrait (85mm Lens)', 'high-end-founder-editorial-portrait', 'Retrato fotográfico de fundador/ejecutivo estilo revista Forbes, iluminación Rembrandt, profundidad de campo shallow f/1.4, tonos dorados y azabache.', '
# High-End Founder Editorial Portrait (85mm Lens)

Retrato fotográfico editorial para branding personal ejecutivo, fundadores y perfiles profesionales de alto impacto.

---

## 🎨 Prompt Maestro

```text
Editorial magazine portrait of a confident tech founder in a sleek dark tailored suit, high-end studio lighting, soft Rembrandt side light, subtle purple backlighting, shot on 85mm f/1.4 lens, crisp details, natural skin texture, Forbes magazine cover style --ar 4:5 --v 6.1
```
', 'Retratos & Branding', 'Flux 1.1', 'Editorial', 'advanced', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop', 'Editorial magazine portrait of a confident tech founder in a sleek dark tailored suit, high-end studio lighting, soft Rembrandt side light, subtle purple backlighting, shot on 85mm f/1.4 lens, crisp details, natural skin texture, Forbes magazine cover style --ar 4:5 --v 6.1', NULL, NULL, TRUE, TRUE, 'access', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('23336321-aec5-4c8d-8ae9-7c6fefcc567c', 'f72204c3-e8a5-40af-8946-298b63fc68b1') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('23336321-aec5-4c8d-8ae9-7c6fefcc567c', '26f26acd-2b41-4ff5-8b87-c11b85789d26') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('23336321-aec5-4c8d-8ae9-7c6fefcc567c', '7d53481c-956d-4ed9-8963-b1d02e7e983f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('23336321-aec5-4c8d-8ae9-7c6fefcc567c', 'adb1622e-2b1b-4315-804d-f383a1448993') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('a35b4ed7-af9f-47a4-8315-d9aecbd7a1c8', 'prompt', 'Isometric Floating 3D Dark Mode AI Analytics Dashboard', 'isometric-3d-dark-mode-analytics-dashboard', 'Render 3D en perspectiva isométrica de un panel analítico flotante en modo oscuro con paneles de cristal esmerilado (glassmorphism), gráficos de neón violeta y cian.', '
# Isometric Floating 3D Dark Mode AI Analytics Dashboard

Prompt para generar mockups UI/UX 3D y gráficos futuristas para landing pages y sitios de tecnología.

---

## 🎨 Prompt Maestro

```text
3D isometric render of a modern AI SaaS analytics dashboard UI floating in dark space, frosted glassmorphism cards, glowing violet and cyan neon charts, smooth rounded corners, Octane Render, 8k resolution, minimalist tech aesthetic --ar 4:5 --v 6.1
```
', 'Diseño UI/UX 3D', 'Midjourney v6', '3D Render', 'intermediate', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop', '3D isometric render of a modern AI SaaS analytics dashboard UI floating in dark space, frosted glassmorphism cards, glowing violet and cyan neon charts, smooth rounded corners, Octane Render, 8k resolution, minimalist tech aesthetic --ar 4:5 --v 6.1', NULL, NULL, TRUE, FALSE, 'access', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a35b4ed7-af9f-47a4-8315-d9aecbd7a1c8', '4a2fc157-9240-461a-8603-4397ecb46b33') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a35b4ed7-af9f-47a4-8315-d9aecbd7a1c8', '9ffafdbb-ef6a-4693-8a9d-3c17860f1ce8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a35b4ed7-af9f-47a4-8315-d9aecbd7a1c8', 'c21ef249-6300-4dd5-8a3f-28f70f40978e') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a35b4ed7-af9f-47a4-8315-d9aecbd7a1c8', '765ff5de-7eca-437b-8937-a0581329e261') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('275252fb-5633-418d-8f2b-5361c8e8fcdd', 'prompt', 'Minimalist Matte Black Mechanical Keyboard Studio Close-up', 'minimalist-matte-black-mechanical-keyboard', 'Fotografía macro de teclado mecánico negro mate con iluminación LED sutil violeta, textura suave al tacto y composición minimalista estilo Apple.', '
# Minimalist Matte Black Mechanical Keyboard Studio Close-up

Prompt macro de fotografía de hardware minimalista para fondos de pantalla y contenido de tecnología.

---

## 🎨 Prompt Maestro

```text
Minimalist studio macro photography of a matte black custom mechanical keyboard, subtle purple RGB backlight glowing between keycaps, dark slate desk surface, clean arrangement, shot on Sony A7IV 90mm macro lens --ar 4:5 --v 6.1
```
', 'Minimalismo Tech', 'Flux 1.1', 'Estudio', 'beginner', 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1000&auto=format&fit=crop', 'Minimalist studio macro photography of a matte black custom mechanical keyboard, subtle purple RGB backlight glowing between keycaps, dark slate desk surface, clean arrangement, shot on Sony A7IV 90mm macro lens --ar 4:5 --v 6.1', NULL, NULL, TRUE, FALSE, 'access', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('275252fb-5633-418d-8f2b-5361c8e8fcdd', '1c683178-517d-457a-8527-9c6c289718f3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('275252fb-5633-418d-8f2b-5361c8e8fcdd', 'ca4fe112-b77c-4c5f-868d-163de854f9dc') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('275252fb-5633-418d-8f2b-5361c8e8fcdd', '96fb9cf9-2092-40ac-86b3-320fec3cd019') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('275252fb-5633-418d-8f2b-5361c8e8fcdd', 'aba4effc-6065-44c3-8f11-617dc3114ff3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('8f863c57-3501-4533-8a8b-120813074aa7', 'prompt', 'Next-Gen Quantum AI Server Infrastructure Core', 'next-gen-quantum-ai-server-core', 'Escena fotográfica fotorrealista de sala de servidores cuánticos enfriados por líquido, luz cibernética azul y violeta, perspectiva de túnel profundo.', '
# Next-Gen Quantum AI Server Infrastructure Core

Prompt cinemático para ilustrar infraestructura de servidores, Inteligencia Artificial y computación cuántica.

---

## 🎨 Prompt Maestro

```text
Photorealistic wide angle shot of a futuristic liquid-cooled quantum AI supercomputer server hall, glowing neon purple and deep blue fiber optic cables, reflection on polished dark floor, vanishing point perspective, volumetric haze, 8k --ar 4:5 --v 6.1
```
', 'Cyberpunk & Sci-Fi', 'Midjourney v6', 'Sci-Fi', 'advanced', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop', 'Photorealistic wide angle shot of a futuristic liquid-cooled quantum AI supercomputer server hall, glowing neon purple and deep blue fiber optic cables, reflection on polished dark floor, vanishing point perspective, volumetric haze, 8k --ar 4:5 --v 6.1', NULL, NULL, TRUE, FALSE, 'access', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('8f863c57-3501-4533-8a8b-120813074aa7', '23e74b4b-008a-4a0d-870b-f8297beba9c9') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('8f863c57-3501-4533-8a8b-120813074aa7', '191f8f65-5bf6-4fae-8250-03421671d10f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('8f863c57-3501-4533-8a8b-120813074aa7', 'da075503-7af3-4b87-8510-51204363e64b') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('8f863c57-3501-4533-8a8b-120813074aa7', '0ee5ebbb-e34a-4294-8b26-78ae4453396e') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('34acb203-b375-4388-82e0-395eaff74a42', 'system', 'Competitor Research Machine in Claude', 'competitor-research-machine-claude', 'Sistema autónomo para monitorizar, analizar y extraer los modelos matemáticos detrás del contenido más exitoso de tu competencia, utilizando Claude y servidores MCP.', '
# Competitor Research Machine in Claude
Sistema autónomo para monitorizar, analizar y extraer los modelos matemáticos detrás del contenido más exitoso de tu competencia, utilizando Claude y servidores MCP.

Cazar ideas de contenido manualmente es ineficiente y sesgado. Este sistema conecta a Claude directamente a un orquestador de analíticas para observar a tu competencia de forma invisible. En lugar de copiar videos, el agente identifica anomalías (piezas que superaron el promedio del canal por 3x o más), disecciona el guion y te entrega el gancho estructurado como una plantilla reutilizable para tu propia infraestructura B2B.

## Detalles Adicionales
*   **Requisito:** Cuenta en [Sandcastles.ai](https://app.sandcastles.ai/)

---

## Arquitectura de Implementación (Método D.R.A.P.E.R.™)

### 1. Diagnosticar (La Lista de Vigilancia)
**Rol:** Definir a los competidores o referentes de la industria que el sistema auditará.

**Acción:** Regístrate en Sandcastles (herramienta de pago que rastrea el rendimiento de creadores).

**Estrategia:** Agrega a tu lista de vigilancia únicamente a competidores directos o cuentas aspiracionales relevantes. Quince competidores bien seleccionados generan mejor inteligencia que cincuenta cuentas aleatorias. Todo el sistema leerá los datos desde este panel.

### 2. Rediseñar (La Conexión MCP)
**Rol:** Otorgar a Claude la capacidad de ver datos de Instagram, TikTok y YouTube sin navegar por la web.

**Acción:** Abre tu terminal y ejecuta este comando para instalar el puente (Model Context Protocol):
```bash
claude mcp add --transport http sandcastles https://mcp.sandcastles.ai/
```

### 3. Arquitectar & Programar (El Motor de Extracción)
**Rol:** Detonar la búsqueda de anomalías y la ingeniería inversa de los guiones ganadores.

**Prompt de Ejecución:** Con el MCP conectado, abre Claude Code y ejecuta el siguiente comando:
```text
Extrae mi lista de vigilancia de Sandcastles. Para cada creador, encuentra los videos de los últimos 7 días que hayan superado su propio promedio de vistas por 3x o más. Para cada ganador entrégame:
1. La línea de apertura exacta, palabra por palabra.
2. Ese mismo gancho reescrito como una plantilla reutilizable de "rellenar los espacios".
3. La categoría del gancho, el formato visual, el tema y la idea central.
Al final, resume qué tipos de ganchos y formatos están ganando tracción en toda la lista.
```

### 4. Encender (El Valor de la Plantilla)
**Rol:** Aplicar la inteligencia extraída a tu propio contenido.

**El Truco:** El valor real de este sistema no es saber que el gancho fue "10 códigos secretos para ChatGPT". El valor es la plantilla matemática que Claude te entrega: `"[Número] códigos secretos para [Herramienta], el número uno es [Código]"`. Usa estas plantillas vacías para rellenarlas con tu propio conocimiento operativo.

### 5. Refinar (Solución de Problemas)
- **Timeouts del Servidor:** Si Claude se queda colgado, es normal. Limita el análisis a bloques de 5 creadores a la vez para no saturar el límite de peticiones de la API.
- **Competidores Vacíos:** Si un competidor regresa sin datos, significa que ningún contenido superó su promedio por 3x esta semana. Es una respuesta real, no un error del código.
- **Auditoría Propia:** Ejecuta el mismo prompt exacto, pero usando tus propias cuentas. Reemplaza la pregunta de "qué está haciendo mi competencia" por datos duros de "dónde me están superando".
        ', 'Market Research & Content', 'research', 'build', 'intermediate', NULL, NULL, NULL, NULL, TRUE, TRUE, 'access', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('34acb203-b375-4388-82e0-395eaff74a42', '135489c6-3e83-43a1-87c2-ded4aa421047') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('34acb203-b375-4388-82e0-395eaff74a42', '9a12bf6f-2491-4a03-8f79-ce24426643f3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('34acb203-b375-4388-82e0-395eaff74a42', '77032e7b-fe62-487e-8813-c8d9e346b502') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('34acb203-b375-4388-82e0-395eaff74a42', 'ae51ff61-6ca5-4aee-8c3e-3acd0ef608df') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('28cccec7-8916-4b7a-8056-0105351f9691', 'system', 'Run Your Entire CRM With Claude', 'run-crm-with-claude', 'Arquitectura y flujo de trabajo para delegar la gestión, clasificación y seguimiento de clientes en tu CRM usando Claude.', '
# AI CRM Management System
Delega la gestión de tu pipeline en Claude. Clasificación de leads, actualización de estados y redactado de recordatorios de forma 100% autónoma.

## Flujo
- **Entrada:** Webhooks de nuevos leads o interacciones.
- **Procesamiento:** Claude evalúa la intención y actualiza los campos.
- **Acción:** Actualización del CRM mediante API.
        ', 'CRM & Operations', 'operations', 'build', 'advanced', NULL, NULL, NULL, NULL, TRUE, FALSE, 'access', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('28cccec7-8916-4b7a-8056-0105351f9691', '135489c6-3e83-43a1-87c2-ded4aa421047') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('28cccec7-8916-4b7a-8056-0105351f9691', '66db8214-76fd-4b69-8c37-5956e98f4072') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('28cccec7-8916-4b7a-8056-0105351f9691', 'c97d1262-59ee-46e5-8d5d-a76b3f13b48e') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('28cccec7-8916-4b7a-8056-0105351f9691', '304e2dd5-b6fd-4c9a-82cf-5eb24b306259') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('c9b20b83-9e66-48f0-85e8-ecdcaaa25c57', 'system', 'Connect Claude to Your Ad Account', 'connect-claude-to-ad-account', 'La configuración completa de 10 minutos para conectar Claude Code a tu cuenta de Meta Ads. Extrae métricas, pausa campañas perdedoras y escala las ganadoras directamente desde la terminal.', '
# Connect Claude to Your Ad Account
La configuración completa de 10 minutos para conectar Claude Code a tu cuenta de Meta Ads. Extrae métricas, pausa campañas perdedoras y escala las ganadoras directamente desde la terminal.

Este sistema es particularmente poderoso porque te permite sacar la gestión de anuncios de la interfaz visual de Meta (que es lenta y propensa a distracciones) y llevarla a tu terminal. Al integrarlo de esta manera, Claude puede auditar el gasto de las campañas que alimentan tus sistemas de adquisición B2B y cruzar esa información directamente con el rendimiento de tus embudos.

Entrar a Meta Ads Manager toma tiempo, clics y paciencia. Este protocolo salta la interfaz visual y conecta a Claude directamente a la API de Marketing de Meta.

Al finalizar esta configuración, tu agente podrá leer tus campañas, analizar el ROAS (Retorno de Inversión), calcular el CPA (Costo por Adquisición) y ejecutar acciones sobre tu presupuesto con una simple instrucción en texto.

---

## Arquitectura de Implementación (Método D.R.A.P.E.R.™)
Para que esto funcione necesitas una cuenta de Facebook con acceso a la cuenta publicitaria y Claude Code ya instalado en tu entorno local.

### 1. Diagnosticar (Creación de la App en Meta)
**Rol:** Habilitar un canal de comunicación oficial entre tu entorno local y los servidores de Meta.

**Acción:**
1. Ve a [developers.facebook.com](https://developers.facebook.com/) e inicia sesión.
2. Haz clic en **My Apps** → **Create App**.
3. En "¿Qué quieres que haga tu app?", selecciona **Other**, luego elige el tipo de app **Business** y presiona **Next**.
4. Nómbrala (ej. "Claude Ads Automation"), añade tu correo y haz clic en **Create app**.

**Auditoría:** En el Dashboard de tu nueva app, busca **Marketing API** en la lista de productos y haz clic en **Set Up**. Esto autoriza el acceso a los datos publicitarios.

### 2. Rediseñar (Generación de Permisos)
**Rol:** Crear la llave criptográfica (Token) que Claude usará para entrar a tu cuenta.

**Acción:**
1. Ve a **Tools** → **Graph API Explorer** en la navegación superior.
2. En el panel derecho, selecciona tu app en el menú desplegable.
3. Haz clic en **Add Permissions** y marca estrictamente estas tres casillas:
   - `ads_read`
   - `ads_management`
   - `business_management`
4. Haz clic en **Generate Access Token**, aprueba la ventana emergente y copia el token. *(Nota: Este token expirará en 1 hora, en la Fase 4 lo haremos permanente).*

### 3. Arquitectar (El Enlace con Claude)
**Rol:** Conectar la terminal al ID de tu cuenta publicitaria.

**Acción:**
1. Abre tu Meta Ads Manager. Tu ID de cuenta es el número junto a tu nombre (ej. 1234567890). Para la API, siempre debe llevar el prefijo `act_` (ej. `act_1234567890`).
2. Abre Claude Code y pega el siguiente prompt maestro (reemplazando los datos):

```text
Quiero que gestiones mis Meta Ads. Utiliza la Meta Marketing API (Graph API) con este access token: <TU_TOKEN> y esta cuenta publicitaria: act_<TU_ID>. Configúralo y luego confirma que funciona listando mis campañas activas junto con su gasto actual.
```

### 4. Programar (Infraestructura Permanente)
**Rol:** Evitar que el sistema se desconecte cada hora.

**Acción Recomendada:**
1. En tus **Business Settings** de Meta, ve a **System Users** y crea un usuario de sistema.
2. Asígnale tu cuenta publicitaria y genera un token que nunca expire (**Never Expires**).
3. Entrégale ese nuevo token definitivo a Claude Code.

### 5. Encender (Comandos de Optimización)
**Rol:** Ejecutar la gestión de pauta conversacional.

**Ejecución:** Ya estás conectado. Ahora puedes inyectar directivas directamente en la terminal para gestionar el tráfico hacia tus embudos B2B. Prueba con comandos como:
- `"Lista mis campañas con su gasto, ROAS y CPA de los últimos 7 días."`
- `"¿Cuáles 3 creativos tienen el mejor ROAS esta semana?"`
- `"Pausa todos los conjuntos de anuncios que tengan un CPA superior a $40 USD."`
- `"Escala el presupuesto de la campaña principal en un 20%."`

### 6. Refinar (Resolución de Problemas)
- **"(#200) Permissions error":** Te falta el permiso `ads_management`. Repite la Fase 2 y asegúrate de marcar la casilla.
- **"Unsupported get request / invalid account":** Verifica que tu ID de cuenta publicitaria tenga el prefijo `act_` en el prompt.
- **"Session/token expired":** Tu token caducó. Genera el token de larga duración de la Fase 4.
- **App estancada en modo Desarrollo:** Es normal y funciona perfectamente siempre que solo gestiones tus propias cuentas publicitarias.

> [!IMPORTANT]
> **Regla de Oro:** Mantén tu token en privado absoluto; quien lo tenga posee control total sobre tu presupuesto publicitario.
        ', 'Paid Ads & Acquisition', 'sales', 'build', 'advanced', NULL, NULL, NULL, NULL, TRUE, TRUE, 'pro', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c9b20b83-9e66-48f0-85e8-ecdcaaa25c57', '135489c6-3e83-43a1-87c2-ded4aa421047') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c9b20b83-9e66-48f0-85e8-ecdcaaa25c57', '744ba3c0-a9c8-4b1b-88a0-af6e982a9823') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c9b20b83-9e66-48f0-85e8-ecdcaaa25c57', '490f42f6-27ee-4daa-82bf-692ff4217c90') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c9b20b83-9e66-48f0-85e8-ecdcaaa25c57', 'e243029d-e4e7-41fe-8b2a-6bec8808f4be') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('a570e102-5a72-4246-8dac-4cf8afcaad4a', 'system', 'The 6-Agent AI Content Team Blueprint', '6-agent-content-team-blueprint', 'Estructura completa para coordinar un equipo automatizado de 6 agentes autónomos enfocados en creación, edición y distribución de contenido B2B.', '
# The 6-Agent AI Content Team Blueprint
Estructura completa para coordinar un equipo automatizado de 6 agentes autónomos enfocados en creación, edición y distribución de contenido B2B.

El mayor error al implementar IA en la creación de contenido es usar un solo modelo para investigar, idear y redactar. El resultado es contenido genérico que no convierte. Este blueprint resuelve ese problema mediante la fricción arquitectónica: 6 agentes especializados que operan de manera secuencial. Ningún agente puede iniciar su trabajo sin el output validado del agente anterior.

Este sistema está diseñado para integrarse con entornos de desarrollo como Hermes Agent y orquestarse mediante flujos de n8n, asegurando que el contenido alimente directamente el CRM.

## Arquitectura del Sistema (Flujo de Trabajo)
El equipo opera bajo un protocolo de traspaso estricto. A continuación, el rol exacto y el prompt de sistema de cada agente.

### Agente 1: El Investigador de Tendencias (Trend Hunter)
**Fase Operativa:** Diagnosticar

**Rol:** Escanear y identificar los ángulos y temas más calientes del mercado en base a analíticas duras y transcripciones de videos virales. No adivina; lee métricas extraídas vía scripts.

**Prompt del Agente:**
```text
Eres el Investigador de Tendencias. Analiza la siguiente transcripción de video y las métricas de retención proporcionadas. Extrae los 3 pilares clave del mensaje y explica matemáticamente por qué este tema está generando tracción. Tu salida debe ser un reporte estructurado de datos, no ideas creativas.
```

### Agente 2: El Estratega de Adquisición (Acquisition Strategist)
**Fase Operativa:** Rediseñar

**Rol:** Leer el reporte del Investigador y definir la directiva semanal. Determina qué formatos usar (carruseles panorámicos, videos cortos) y alinea el Llamado a la Acción (CTA) con los cuellos de botella actuales del pipeline en el CRM.

**Prompt del Agente:**
```text
Eres el Estratega de Adquisición. Lee el reporte de tendencias. Define el mix de contenido de esta semana. Tu objetivo es nutrir el CRM. Selecciona el formato adecuado y define un CTA específico basado en dónde necesitamos inyectar prospectos en nuestro embudo. Cita un dato del reporte para justificar cada decisión.
```

### Agente 3: El Arquitecto de Ganchos (Hook Architect)
**Fase Operativa:** Arquitectar

**Rol:** Tomar la directiva estratégica y escribir 5 variaciones de ganchos de alta retención para los primeros 3 segundos o el primer slide del carrusel.

**Prompt del Agente:**
```text
Eres el Arquitecto de Ganchos. Utilizando la directiva estratégica, escribe 5 ganchos usando los frameworks: Curiosidad Abierta, Negación del Mito, y Consecuencia Inmediata. Cada gancho debe estar diseñado para capturar la atención de perfiles B2B.
```

### Agente 4: El Redactor Creativo (Script Writer)
**Fase Operativa:** Programar

**Rol:** Escribir el cuerpo del guion o el copy del carrusel manteniendo un tono conversacional dinámico. Aplica estrictamente el framework "Insights over Value".

**Prompt del Agente:**
```text
Eres el Redactor Creativo. Redacta el contenido completo basado en el Gancho seleccionado. Usa frases cortas, lenguaje conversacional y añade el CTA definido por el Estratega. Prioriza entregar ''Insights'' (cambios de perspectiva) sobre simple ''Valor'' (información mercantilizada).
```

### Agente 5: El Director Visual (Creative Director)
**Fase Operativa:** Encender

**Rol:** Generar las indicaciones visuales, cambios de plano, efectos de sonido o prompts estructurados para generación de imágenes. Aplica el método "Trojan Horse" para el diseño de carruseles (vender la solución técnica empaquetada en educación visual).

**Prompt del Agente:**
```text
Eres el Director Visual. Genera las indicaciones visuales precisas para acompañar el texto del Redactor Creativo. Detalla la progresión visual utilizando el método del Caballo de Troya: educa en la superficie, pero estructura la narrativa visual para evidenciar la necesidad de nuestra infraestructura de sistemas.
```

### Agente 6: El Auditor de Embudos (Funnel Auditor)
**Fase Operativa:** Refinar

**Rol:** Supervisa la integridad del sistema. Verifica que los enlaces del contenido apunten correctamente al CRM y audita el flujo de conversión en los DMs una vez publicado.

**Prompt del Agente:**
```text
Eres el Auditor de Embudos. Revisa el paquete final de contenido. Confirma que el CTA esté integrado y audita el estado del pipeline. Documenta cualquier fricción en el proceso de esta semana para refinar los prompts de los agentes en el próximo ciclo.
```

## ⚙️ Stack de Implementación Recomendado
Para que este equipo opere de forma verdaderamente autónoma, sugerimos la siguiente infraestructura técnica:

*   **Orquestación:** n8n para transferir automáticamente el output de un agente al input del siguiente mediante webhooks.
*   **Entorno de Agentes:** Hermes Agent configurado en un VPS o entorno local para manejar las periciones de los LLMs.
*   **Gestión de Conocimiento:** Todos los outputs intermedios (reportes, guiones) deben enviarse a una bóveda local de Obsidian (sincronizada vía Syncthing) para llevar un registro inmutable del proceso creativo.
        ', 'Content Creation', 'content', 'build', 'advanced', NULL, NULL, NULL, NULL, TRUE, TRUE, 'pro', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a570e102-5a72-4246-8dac-4cf8afcaad4a', '135489c6-3e83-43a1-87c2-ded4aa421047') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a570e102-5a72-4246-8dac-4cf8afcaad4a', 'ae55175a-3a78-43a8-87b0-1319cbe20796') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a570e102-5a72-4246-8dac-4cf8afcaad4a', 'ae51ff61-6ca5-4aee-8c3e-3acd0ef608df') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a570e102-5a72-4246-8dac-4cf8afcaad4a', '6600ed84-69d2-4f99-8952-8979c19788c5') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('f5b2566b-047c-4de7-8d2e-a52aa5266d5c', 'system', 'The Anti-AI Web Design Blueprint', 'anti-ai-web-design-blueprint', 'Estructura y prompts de restricciones negativas para obligar a Claude a diseñar interfaces web premium, eliminando el aspecto genérico de IA mediante bucles de auto-crítica visual.', '
# The Anti-AI Web Design Blueprint
Estructura y prompts de restricciones negativas para obligar a Claude a diseñar interfaces web premium, eliminando el aspecto genérico de IA mediante bucles de auto-crítica visual.

Todos los sitios construidos con IA tienden a verse exactamente iguales: el mismo gradiente morado, las mismas tarjetas anidadas, la misma fuente Inter y la misma cuadrícula de tres columnas. Esto no ocurre porque el modelo no sepa diseñar, sino por la regresión a la media: la IA recurre al promedio de todo el código (Bootstrap/Tailwind por defecto) con el que fue entrenada.

Este blueprint resuelve el problema dándole a Claude dos cosas: un vocabulario de diseño estricto (restricciones negativas) y ojos (un bucle de captura de pantalla) para que audite su propio trabajo en el servidor local antes de mostrártelo.

## Arquitectura del Sistema (Flujo de Trabajo)
El flujo de trabajo se ejecuta directamente en Cursor o Claude Code, operando sobre un entorno React/Tailwind.

### 1. Diagnosticar (Extracción de Lenguaje)
**Fase Operativa:** Diagnosticar
**Rol:** Extraer el ADN visual de un sitio web de referencia (competencia o inspiración) sin copiar el código.

**Prompt de Ejecución:**
```text
Analiza esta URL: [URL]. Extrae la escala tipográfica exacta, la jerarquía de colores, el ritmo de espaciado y los patrones de los componentes. No me des el código, dame el documento de especificaciones de diseño en lenguaje sencillo.
```

### 2. Rediseñar (El Bloqueo de Paleta)
**Fase Operativa:** Rediseñar
**Rol:** Obligar al modelo a usar un sistema de diseño estructurado en lugar de colores arbitrarios.

**Prompt de Ejecución:**
```text
Configura el archivo tailwind.config.ts. Define los tokens de color exactos (ej. brand-primary, surface-dark). A partir de este momento, tienes estrictamente prohibido usar colores arbitrarios o hex codes (como bg-[#4F46E5]) directamente en el markup de los componentes. Solo puedes usar las variables nombradas.
```

### 3. Arquitectar & Programar (El Prompt Maestro)
**Fase Operativa:** Arquitectar & Programar
**Rol:** Detonar la construcción del código fusionando la solicitud de negocio con las Restricciones Negativas.

**Prompt de Ejecución:**
```text
Construye una landing page para [Ej: una agencia de automatización B2B].

Audiencia: [Ej: Dueños de negocios tradicionales perdiendo dinero por procesos manuales].
Vibra/Tono: [Ej: Minimalista, premium, técnico pero accesible. Cero estilo "startup colorida"].
Secciones: [Ej: Hero, Cómo funciona, Resultados, Precios, FAQ].

REGLAS ESTRICTAS DE DISEÑO:
- Cero gradientes morados, azules o violetas.
- Prohibido el patrón de tarjetas dentro de tarjetas (genera profundidad sin jerarquía).
- Prohibido usar Inter o Roboto. Usa fuentes con carácter (ej. Satoshi o instrument serif).
- Prohibida la cuadrícula de características de 3 columnas (es el diseño genérico por defecto).
- El espaciado debe ser asimétrico: ajustado entre elementos relacionados, muy generoso entre secciones.
```

### 4. Encender (El Bucle de Visión)
**Fase Operativa:** Encender
**Rol:** Cerrar el ciclo. El modelo debe mirar el localhost, evaluar su diseño contra las reglas y corregirlo autónomamente.

**Prompt de Ejecución:**
```text
Ejecuta el servidor de desarrollo. Ábrelo en el navegador integrado, toma una captura de pantalla de la renderización actual y compárala con las Reglas Estrictas de Diseño. Dime exactamente qué proporciones, espaciados o colores están fallando visualmente. No me muestres el resultado hasta que hayas aplicado las correcciones en el código.
```

### 5. Refinar (Auditoría Final)
**Fase Operativa:** Refinar
**Rol:** Ajuste de responsividad y control de daños en el CSS.

**Prompt de Ejecución:**
```text
Toma una nueva captura de pantalla simulando un viewport móvil (ancho 390px). Corrige cualquier elemento que rompa el padding global. Además, asegúrate de no haber sobreescrito las directivas base de Tailwind en el index.css global.
```

## ⚙️ Stack de Implementación Recomendado
Para que este equipo opere de forma verdaderamente autónoma, sugerimos la siguiente infraestructura técnica:

*   **Entorno de Desarrollo:** Cursor (con Composer y capacidades de visión activadas) o Claude Code en terminal local.
*   **Frameworks:** Vite, React, TypeScript y Tailwind CSS.
*   **Validación:** Herramientas de captura integradas del LLM o Puppeteer para automatizar el screenshot del localhost.
        ', 'Development Web / UI', 'content', 'build', 'advanced', NULL, NULL, NULL, NULL, TRUE, TRUE, 'pro', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('f5b2566b-047c-4de7-8d2e-a52aa5266d5c', '135489c6-3e83-43a1-87c2-ded4aa421047') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('f5b2566b-047c-4de7-8d2e-a52aa5266d5c', 'ad8794d3-9a60-4fef-87a1-2acc7763376a') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('f5b2566b-047c-4de7-8d2e-a52aa5266d5c', 'efd09422-b942-490c-8093-37971443a52e') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('f5b2566b-047c-4de7-8d2e-a52aa5266d5c', '17befd14-0c73-45f6-85f8-929e4f627d46') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('f5b2566b-047c-4de7-8d2e-a52aa5266d5c', 'b21839ae-9c52-4737-86c4-7eaf80da2fd3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('a70574d9-442b-429a-8683-805fa12e92b6', 'system', 'The AI Research Team That Scripts Your Content Daily', 'ai-research-team-daily-scripts', 'Despliega cuatro investigadores de IA que extraen datos de tu nicho durante la noche y te entregan 10 temas en tendencia junto con los guiones exactos para grabar, todo antes de que despiertes.', '
# The AI Research Team That Scripts Your Content Daily
Despliega cuatro investigadores de IA que extraen datos de tu nicho durante la noche y te entregan 10 temas en tendencia junto con los guiones exactos para grabar, todo antes de que despiertes.

Pasar horas haciendo doomscrolling en X, Reddit o GitHub para buscar ideas de contenido no es escalable. Este sistema automatiza la fase de investigación (el cuello de botella más grande de la creación de contenido) mediante un solo comando en Claude Code conectado a Apify.

El sistema ejecuta 4 roles internos en secuencia: raspa el internet, filtra la basura sin engagement, sintetiza los ganadores y redacta 3 ideas de contenido basadas en tus formatos probados.

## Arquitectura del Sistema (Método D.R.A.P.E.R.™)
A diferencia del equipo de 6 agentes (que utiliza múltiples habilidades separadas), este equipo de investigación opera bajo una sola habilidad automatizada que ejecuta fases secuenciales.

### 1. Diagnosticar & Rediseñar (El Prompt Maestro)
**Rol:** Crear la habilidad en tu entorno local.

**Ejecución:** Abre Claude Code (o tu terminal de Hermes Agent) y ejecuta el siguiente comando para crear la habilidad `daily-research`:

```text
Crea una habilidad llamada daily-research usando exactamente estas instrucciones:

# Daily Research — 4 investigadores, 1 comando

Nicho: [EJ: Infraestructura comercial B2B, automatización de embudos y desarrollo web para agencias].

Ejecuta estas cuatro fases en orden, cada una como su propia tarea:

## Investigador 1 — El Scraper
Busca en X, Reddit, GitHub Trending y Google News (usa actores de Apify) todo lo publicado sobre el nicho en las últimas 24 horas. Recolecta 150–250 elementos. Para cada uno extrae: título, enlace, métricas de engagement (likes / upvotes / estrellas / comentarios) y cuándo fue publicado.

## Investigador 2 — El Filtro
Descarta cualquier cosa que no haya obtenido engagement real para su plataforma. Una tendencia sin interacción no es tendencia. Quédate solo con el Top 40.

## Investigador 3 — El Sintetizador
Convierte a los sobrevivientes en un reporte titulado "Investigación Diaria de Contenido — [fecha de hoy]" con una sección de "Top 10 Temas en Tendencia": cada entrada lleva un título en negrita, un resumen de dos líneas, el enlace de origen y el "recibo" de engagement. Añade una tabla de "Top Repositorios de GitHub" si aplica.

## Investigador 4 — El Guionista
Lee el Top 10 y elige los 3 más fuertes para contenido corto/carruseles. Para cada uno escribe: un gancho de una línea, un esquema de 5 puntos y una línea explicando por qué funcionará (citando los datos del Sintetizador).

Guardado: Guarda el reporte terminado como research-[fecha].md directamente en mi ruta local de Obsidian: [RUTA_A_TU_VAULT/01_Inbox/Research].
```

### 2. Arquitectar (La Primera Ejecución)
**Rol:** Validar que la conexión con Apify y la extracción de datos funcionen correctamente.

**Comando:** En tu terminal, ejecuta:
```bash
Ejecuta daily-research para mi nicho.
```

**Auditoría:** La fase de scraping tomará unos minutos. Verifica el archivo Markdown generado en Obsidian. Si un tema no tiene números de engagement al lado, ordénale a Claude que repita la fase de filtrado (el sistema no sirve sin datos duros).

### 3. Programar (Inyección de Formatos Probados)
**Rol:** Calibrar al Investigador 4 (El Guionista) para que deje de perseguir tendencias genéricas y las adapte a tu estilo de conversión.

**Acción:** Toma los 3 posts o carruseles que mejor rendimiento hayan tenido en tus cuentas. Edita el prompt de la habilidad y añade esta regla al Investigador 4:

```text
El Investigador 4 debe adaptar las ideas exclusivamente a estos formatos que ya han funcionado en mi cuenta: [Pega aquí la estructura de tus posts ganadores].
```

### 4. Encender (Automatización del Cron)
**Rol:** Configurar el sistema para que corra mientras duermes.

**Comando:**
```bash
Programa daily-research para que se ejecute todas las mañanas a las 6:00 AM.
```

*(Nota Técnica: Si estás orquestando todo tu ecosistema con n8n, puedes crear un workflow cron que dispare este script localmente cada mañana mediante un nodo de ejecución de comandos).*

### 5. Refinar (Resolución de Problemas)
- **Errores 401 de Apify:** La conexión caducó. Reconecta la API key de Apify en los conectores de Claude.
- **Resultados muy pobres:** Las palabras clave de tu nicho son demasiado estrechas. Expande el espectro (ej. si usas "n8n automation", añade "zapier alternatives", "B2B workflows").
- **Límites de tasa en X (Twitter):** Si la API de X bloquea la extracción, instruye a la habilidad temporalmente para que solo raspe Reddit, GitHub y Google News.

## ⚙️ Stack de Implementación Recomendado
Para que este equipo opere de forma verdaderamente autónoma, sugerimos la siguiente infraestructura técnica:

*   **Motor de IA:** Claude Code (instalado localmente o en VPS).
*   **Extracción de Datos:** Apify (cuenta gratuita vinculada a Claude a través de Settings → Connectors).
*   **Gestor de Conocimiento:** Obsidian con Syncthing (para recibir los reportes automatizados de las 6:00 AM directamente en tu bóveda sincronizada).
*   **Orquestación Avanzada:** n8n (Opcional, para programar el trigger de ejecución sin depender del programador interno de Claude Code).
        ', 'Research & Content Creation', 'content', 'build', 'intermediate', NULL, NULL, NULL, NULL, TRUE, TRUE, 'access', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a70574d9-442b-429a-8683-805fa12e92b6', '135489c6-3e83-43a1-87c2-ded4aa421047') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a70574d9-442b-429a-8683-805fa12e92b6', '2f86e631-724d-45a2-8b7e-d654167d630b') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a70574d9-442b-429a-8683-805fa12e92b6', '8f52145b-d9ad-4ad4-8eec-3220757fe8fc') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a70574d9-442b-429a-8683-805fa12e92b6', 'f045fbbb-064a-443d-85d0-8578561cf4b8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('2d9f4466-a5e3-4055-8efa-6644a319a122', 'system', 'The Claude Code Setup Blueprint', 'claude-code-setup-blueprint', 'Guía de instalación y configuración cero-fricción para desplegar Claude directamente en tu terminal. La infraestructura base para conectar herramientas, bases de datos y agentes autónomos.', '
# The Claude Code Setup Blueprint
Guía de instalación y configuración cero-fricción para desplegar Claude directamente en tu terminal. La infraestructura base para conectar herramientas, bases de datos y agentes autónomos.

Claude Code no es un chat en el navegador; es la capa de infraestructura a la que se conectan todos los demás sistemas de este repositorio (MCPs, Skills, automatizaciones). Al ejecutar Claude directamente desde tu terminal, le otorgas acceso nativo a tu sistema de archivos y la capacidad de ejecutar comandos, escribir código y leer repositorios completos de forma autónoma.

Este proceso toma aproximadamente 10 minutos y solo necesitas hacerlo una vez para desbloquear todo el potencial del desarrollo multi-agente.

## Arquitectura de Implementación (Método D.R.A.P.E.R.™)
No necesitas ser desarrollador para instalar esto. Sigue estas fases de ejecución desde tu terminal (en Mac busca "Terminal", en Windows usa "PowerShell").

### 1. Diagnosticar (Verificación de Entorno)
**Rol:** Asegurar que tu sistema tiene el motor de ejecución necesario.

**Acción:** Descarga e instala la versión LTS de [Node.js](https://nodejs.org/).

**Auditoría:** Abre tu terminal y ejecuta el siguiente comando para confirmar que se instaló correctamente:
```bash
node -v
```
*(Debe devolverte un número de versión. Si no aparece, reinicia la terminal).*

### 2. Rediseñar (Despliegue del Core)
**Rol:** Instalar la interfaz de línea de comandos de Anthropic.

**Acción:**
- En Mac / Linux / Entornos VPS: Pega esto en tu terminal y presiona Enter:
  ```bash
  curl -fsSL https://claude.ai/install.sh | bash
  ```
- En Windows (o si prefieres usar NPM en cualquier OS):
  ```bash
  npm install -g @anthropic-ai/claude-code
  ```

### 3. Arquitectar (Autenticación Segura)
**Rol:** Vincular la terminal con tu cuenta de Anthropic para habilitar el consumo de tokens de la API.

**Acción:** Ejecuta el comando de inicio en tu terminal:
```bash
claude
```
Esto abrirá automáticamente una ventana en tu navegador web. Aprueba el inicio de sesión y regresa a la terminal. Ya estás dentro del entorno interactivo.

### 4. Programar & Encender (El Primer Comando)
**Rol:** Validar la capacidad de lectura de archivos y estado del sistema.

**Acción:** Dentro de la interfaz de Claude Code (verás que el prompt cambia), ejecuta el comando de diagnóstico interno:
```bash
/status
```

**Prueba de Fuego:** Pídele a Claude que audite su propio entorno. Escribe: "Haz un resumen de todos los archivos que hay en esta carpeta y dime qué lenguajes detectas".

### 5. Refinar (Resolución de Problemas Comunes)
Si encuentras fricción, audita lo siguiente:
- **Error claude: command not found:** La instalación no se agregó al PATH de tu sistema operativo. Cierra la terminal por completo, abre una nueva y vuelve a intentarlo. Si persiste, vuelve a ejecutar el comando de instalación.
- **Error node: command not found:** Node.js no se instaló correctamente o no está en tu PATH. Reinstala la versión LTS y reinicia tu computadora.
- **El login se queda colgado:** Asegúrate de completar el flujo en el navegador hasta que veas el mensaje de "Aprobado" antes de volver a mirar la terminal.

## ⚙️ Siguientes Pasos (El Ecosistema IA Builders Lab)
Una vez que tengas este entorno activo, tu terminal está lista para integrar el stack operativo. A partir de aquí puedes:
*   **Conectar Bases de Datos:** Usar servidores MCP para que Claude lea y escriba directamente en tu instancia de Supabase o PostgreSQL.
*   **Ejecutar Skills:** Desplegar el Daily Research Team o los 6 Agentes de contenido directamente en este entorno.
*   **Integrar Automatizaciones:** Activar webhooks locales para conectar los outputs de Claude con tus flujos de n8n.
        ', 'Infrastructure & Local Environment', 'other', 'build', 'beginner', NULL, NULL, NULL, NULL, TRUE, TRUE, 'free_preview', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('2d9f4466-a5e3-4055-8efa-6644a319a122', 'a8560299-366c-48c0-890e-7d75ce7ea470') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('2d9f4466-a5e3-4055-8efa-6644a319a122', 'd2198a49-6933-4c0d-8958-145c4526323b') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('2d9f4466-a5e3-4055-8efa-6644a319a122', 'b5090154-1437-4778-8ce2-f27695430547') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('2d9f4466-a5e3-4055-8efa-6644a319a122', '4b01fc96-68cc-4c2a-8111-8002239cd312') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('ac4b9548-e509-499e-8f6a-bd3c3c12ccfc', 'system', 'The Autonomous Marketing Agent Framework', 'autonomous-marketing-agent-framework', 'Despliega más de 40 habilidades (skills) especializadas de marketing directamente en Claude Code. Convierte tu terminal en un equipo autónomo de Growth Engineering, SEO, Copywriting y Revenue Operations.', '
# The Autonomous Marketing Agent Framework
Despliega más de 40 habilidades (skills) especializadas de marketing directamente en Claude Code. Convierte tu terminal en un equipo autónomo de Growth Engineering, SEO, Copywriting y Revenue Operations.

Cuando le pides a una IA que "mejore tus conversiones" o "escriba un correo frío", el modelo usa su conocimiento general y produce resultados mediocres. Los Skills son archivos Markdown que inyectan frameworks de trabajo, dependencias y las mejores prácticas de la industria directamente en el "cerebro" local de tu agente.

Esta biblioteca contiene más de 40 habilidades interconectadas. La magia radica en la arquitectura de dependencias: la habilidad de redacción publicitaria (copywriting) cruzará referencias automáticamente con la habilidad de optimización de conversiones (cro) y leerá tu documento base de producto antes de generar una sola palabra.

## Detalles Adicionales
*   **Repositorio Oficial:** [github.com/coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)

---

## Arquitectura de Implementación (Método D.R.A.P.E.R.™)

### 1. Diagnosticar (Instalación del Ecosistema)
**Rol:** Inyectar la biblioteca de habilidades en tu entorno local de agentes.

**Acción:** Abre tu terminal (donde ya tienes configurado Claude Code) y ejecuta el instalador CLI universal:
```bash
# Instalar la suite completa de habilidades
npx skills add coreyhaines31/marketingskills
```
*(Nota: Si quieres instalarlas desde la interfaz de Claude Code, usa el comando interno: /plugin marketplace add coreyhaines31/marketingskills).*

### 2. Rediseñar (El Contexto Fundacional)
**Rol:** Configurar el "Cerebro Central". Todas las habilidades de este repositorio dependen de un archivo maestro llamado product-marketing.md.

**Acción:** Crea un archivo product-marketing.md en tu directorio .agents/ (o .claude/). Aquí debes volcar toda la información de tu oferta. Define claramente tu nicho B2B, el problema que resuelven tus sistemas de adquisición de clientes, la estructura de tu CRM y el perfil de tu prospecto ideal.

**Regla Estricta:** Ninguna habilidad (desde seo-audit hasta cold-email) operará correctamente si este archivo fundacional está vacío o es genérico.

### 3. Arquitectar (Mapeo de Flujos B2B)
**Rol:** Seleccionar los módulos específicos que nutrirán el embudo comercial.

**Selección Estratégica:** Aunque hay decenas de habilidades, para la construcción de infraestructuras comerciales autónomas te enfocarás en esta secuencia:
- `/cro`: Para optimizar la retención en los formularios y landing pages.
- `/cold-email`: Para redactar secuencias de prospección B2B que obtengan respuestas.
- `/sales-enablement`: Para generar documentos de manejo de objeciones y guiones de venta.
- `/revops`: Para delegar el enrutamiento y la gestión del ciclo de vida del lead hacia el pipeline.

### 4. Programar (Invocación Directa)
**Rol:** Detonar las habilidades dentro de tu flujo de trabajo.

**Ejecución:** No necesitas prompts complejos. Inicia Claude Code en la carpeta de tu proyecto web y simplemente invoca la habilidad con la instrucción de negocio.
```bash
# Ejemplos de ejecución
/cro Analiza el código de esta landing page (index.tsx) y reestructura el formulario para minimizar la fricción en la captura de leads empresariales.
/cold-email Utiliza nuestra propuesta de servicios B2B para crear una secuencia de 3 correos dirigida a directores de operaciones.
```

### 5. Encender (Interconexión Autónoma)
**Rol:** Permitir que los agentes consulten dependencias.

**Dinámica:** Cuando le pidas a Claude que genere un plan de crecimiento, verás en la terminal cómo el agente lee de forma autónoma product-marketing.md, luego abre marketing-ideas.md, consulta marketing-psychology.md y finalmente te entrega un resultado hiper-personalizado. Déjalo operar el bucle completo.

### 6. Refinar (Sincronización y Actualizaciones)
**Rol:** Mantener la biblioteca de habilidades actualizada con las últimas iteraciones (recientemente migradas a la v2.0).

**Acción:** Si utilizas múltiples entornos (como Cursor para código y Claude Code para orquestación), usa SkillKit para instalar y mantener actualizadas las habilidades transversalmente:
```bash
npx skillkit install coreyhaines31/marketingskills
```

## ⚙️ Stack de Integración Recomendado y Recursos
Esta biblioteca transforma a Claude Code de un asistente de programación a un Director de Marketing (CMO) técnico. Funciona a la perfección junto con:

*   **Entornos de Código:** Cursor o Windsurf (cualquier agente que soporte la especificación de Agent Skills).
*   **Automatización de Datos:** Si utilizas servidores MCP, estas habilidades de marketing utilizarán tus métricas reales para optimizar los embudos sin intervención humana.
*   **Recursos Oficiales:** [Repositorio en GitHub (Instrucciones completas y actualizaciones)](https://github.com/coreyhaines31/marketingskills)
        ', 'Infrastructure & Growth Automation', 'other', 'build', 'advanced', NULL, NULL, NULL, NULL, TRUE, TRUE, 'pro', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('ac4b9548-e509-499e-8f6a-bd3c3c12ccfc', 'a8560299-366c-48c0-890e-7d75ce7ea470') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('ac4b9548-e509-499e-8f6a-bd3c3c12ccfc', '3715df9a-9b4c-4cf1-85fc-addad7f03bba') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('ac4b9548-e509-499e-8f6a-bd3c3c12ccfc', '694ec935-a876-4684-8d0c-6b8022458552') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('ac4b9548-e509-499e-8f6a-bd3c3c12ccfc', '4b01fc96-68cc-4c2a-8111-8002239cd312') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('fb9faf03-259a-41ce-87ee-9a4d59027468', 'system', 'Open-Source Claude Tools Worth Installing', 'open-source-claude-tools-installing', 'Recopilación de herramientas y dependencias de código abierto indispensables para ampliar las habilidades nativas de Claude: enrutamiento de modelos, visión de video, memoria a largo plazo y agentes preconfigurados.', '
# Open-Source Claude Tools Worth Installing
Recopilación de herramientas y dependencias de código abierto indispensables para ampliar las habilidades nativas de Claude: enrutamiento de modelos, visión de video, memoria a largo plazo y agentes preconfigurados.

Las mejores herramientas para Claude en este momento no provienen de Anthropic; residen en GitHub, construidas por la comunidad de código abierto. Si dependes únicamente de las funciones nativas, estás quemando créditos de API innecesariamente y limitando la memoria de tus agentes.

Este repositorio documenta las integraciones probadas que dotan a tu entorno local de visión real de video, clonación de voz, memoria de red (Knowledge Graph) y mitigación de límites de cuota.

---

## 🛠️ El Arsenal de Herramientas Open-Source
Añade estas herramientas a tu entorno para desbloquear capacidades avanzadas:

### 1. OmniRoute (Enrutador de Modelos)
*   **Repositorio:** [github.com/diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute)
*   **Función:** Un solo endpoint para más de 268 proveedores y 500+ modelos (Claude, DeepSeek, GPT, etc.).
*   **Caso de Uso Comercial:** Es consciente de las cuotas. Si alcanzas el límite en un proveedor, salta automáticamente al siguiente en lugar de colgarse a mitad de la tarea. Además, comprime el contexto, reduciendo el consumo de tokens entre un 15% y un 95%.

### 2. claude-video (Visión Artificial Continua)
*   **Repositorio:** [github.com/bradautomates/claude-video](https://github.com/bradautomates/claude-video)
*   **Función:** Le da ojos a Claude. Ejecutas `/watch` con un enlace y el sistema descarga el video, extrae los fotogramas clave y transcribe el audio.
*   **Caso de Uso Comercial:** Inteligencia competitiva pura. Apúntalo a un Reel que está superando a los tuyos y pregúntale por qué funcionó. Analiza el ritmo, el gancho y la estructura visual real, no solo un texto transcrito. *(Requiere `yt-dlp` y `ffmpeg` instalados).*

### 3. Scroll World (Desarrollo 3D)
*   **Repositorio:** [github.com/oso95/scroll-world](https://github.com/oso95/scroll-world)
*   **Función:** Una habilidad (skill) que transforma una marca en un mundo 3D navegable (sitios web cinemáticos impulsados por el scroll).
*   **Caso de Uso Comercial:** Entregable de alto valor para clientes de agencias o páginas de lanzamiento de productos de primer nivel.

### 4. voicebox (Estudio de Voz Local)
*   **Repositorio:** [github.com/jamiepine/voicebox](https://github.com/jamiepine/voicebox)
*   **Función:** Clonación de voz y dictado ejecutado 100% en tu máquina. La alternativa directa a ElevenLabs sin suscripciones y sin enviar tus datos biométricos a servidores de terceros.
*   **⚠️ Advertencia de Seguridad:** Existen cuentas falsas clonando este nombre con archivos ejecutables maliciosos. Usa exclusivamente el enlace provisto a la cuenta de `jamiepine`.

### 5. cognee (Memoria de Agentes)
*   **Repositorio:** [github.com/topoteretes/cognee](https://github.com/topoteretes/cognee)
*   **Función:** Memoria open-source para agentes. Un grafo de conocimiento (knowledge graph) auto-alojado que otorga retención a largo plazo entre diferentes sesiones.
*   **Caso de Uso Comercial:** Evita que el agente CRM o el redactor de contenido tengan "amnesia" cada vez que cierras la terminal.

### 6. agency-agents (Especialistas Preconfigurados)
*   **Repositorio:** [github.com/msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)
*   **Función:** Más de 220 personalidades de agentes especializados para Claude Code (desarrolladores front-end, community managers, verificadores de hechos), cada uno con procesos y entregables definidos.

---

## 🛡️ Protocolo de Seguridad Open-Source (Método D.R.A.P.E.R.™)
El código abierto es una ventaja competitiva masiva, hasta que alguien clona un proyecto popular e inserta malware. Antes de integrar cualquier herramienta nueva a tu entorno de terminal, ejecuta esta auditoría de seguridad:

### 1. Diagnosticar (Verificación de Identidad)
*   **Revisa el Propietario, no solo el nombre:** Los nombres de los repositorios se pueden duplicar. `jamiepine/voicebox` es la herramienta real; `UnUsuarioX/Voicebox-2026` es una trampa.
*   **Audita la Edad de la Cuenta:** Si el repositorio fue creado hace 3 días por una cuenta vacía, ignóralo inmediatamente.

### 2. Rediseñar & Arquitectar (Inspección del Código)
*   **Lee los archivos reales:** Estás en GitHub. Haz clic en el código. Si está ofuscado o no puedes deducir lógicamente qué hace, no lo instales en el mismo entorno donde tienes tus tokens de API.

### 3. Programar (Compilación Local)
*   **Cero Ejecutables Misteriosos:** Nunca ejecutes un archivo `.exe` proveniente de un repositorio de GitHub para herramientas de IA. Los proyectos open-source reales te proporcionan el código fuente y las instrucciones de construcción (`npm install`, `pip install`, o un build step claro).

### 4. Encender & Refinar (Señales de Vida)
*   **Audita la fecha del último push:** Los proyectos activos reciben actualizaciones constantes (especialmente cuando herramientas dependientes como `yt-dlp` cambian debido a actualizaciones de las plataformas de video). Si el repositorio lleva un año inactivo, considera que está muerto.
        ', 'Infrastructure & Open Source', 'operations', 'build', 'beginner', NULL, NULL, NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fb9faf03-259a-41ce-87ee-9a4d59027468', '135489c6-3e83-43a1-87c2-ded4aa421047') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fb9faf03-259a-41ce-87ee-9a4d59027468', '89628a8c-5093-4eb1-884e-b3caa87db979') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fb9faf03-259a-41ce-87ee-9a4d59027468', 'f9556543-df66-40a4-8254-fdf95accf50b') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fb9faf03-259a-41ce-87ee-9a4d59027468', '4b01fc96-68cc-4c2a-8111-8002239cd312') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('dc268cec-ccdc-46a5-8ca9-54fe590b84f3', 'prompt', 'SOP: Guion Dinámico para Llamadas de Descubrimiento', 'sop-guion-dinamico-para-llamadas-de-descubrimiento', 'Un marco de trabajo para dirigir llamadas de venta B2B sin presión. Ayuda a diagnosticar la situación del prospecto y realizar una transición fluida hacia el cierre, posicionándote como un asesor, no como un vendedor.', '# SOP: Guion Dinámico para Llamadas de Descubrimiento

## D.R.A.P.E.R.™ System Integration

> **D - Diagnosticar:** Revisa el perfil del prospecto en LinkedIn o su formulario de entrada antes de la llamada.

> **R - Rediseñar:** Adapta mentalmente el tono; el objetivo de esta llamada no es vender, es calificar si el prospecto tiene el problema que tu infraestructura puede resolver.

> **A - Arquitectar & Programar (El Prompt Maestro):** Inyecta la siguiente instrucción en Claude:
>
> ```
> Eres un coach de ventas que ayuda a proveedores de servicios B2B a dirigir llamadas de descubrimiento que convierten sin presión. Escribe un guion de llamada de descubrimiento que pueda usar como guía. Debe incluir:
> Una apertura que establezca la agenda y haga sentir cómodo al prospecto.
> 8 preguntas que me ayuden a entender su situación, metas, obstáculos y presupuesto sin que se sienta como un interrogatorio policial.
> Una transición hacia el pitch que se sienta natural.
> Una estructura para presentar mi oferta vinculándola directamente a lo que me acaban de decir.
> Un cierre que pida la venta claramente sin ser agresivo.
> Incluye notas sobre qué debo escuchar activamente en sus respuestas para calibrar si son un buen cliente.
> [Inserta el tipo de servicio que ofreces y el perfil de tu cliente]
> ```

> **P - Encender:** Imprime o mantén este documento abierto en tu segunda pantalla durante tus llamadas por Zoom/Meet.

> **R - Refinar:** Graba tus llamadas (con permiso) y audita las objeciones que no pudiste superar para inyectarlas de vuelta al prompt en la siguiente iteración.', 'Ventas y Calificación', NULL, NULL, 'intermediate', NULL, 'Eres un coach de ventas que ayuda a proveedores de servicios B2B a dirigir llamadas de descubrimiento que convierten sin presión. Escribe un guion de llamada de descubrimiento que pueda usar como guía. Debe incluir:
Una apertura que establezca la agenda y haga sentir cómodo al prospecto.
8 preguntas que me ayuden a entender su situación, metas, obstáculos y presupuesto sin que se sienta como un interrogatorio policial.
Una transición hacia el pitch que se sienta natural.
Una estructura para presentar mi oferta vinculándola directamente a lo que me acaban de decir.
Un cierre que pida la venta claramente sin ser agresivo.
Incluye notas sobre qué debo escuchar activamente en sus respuestas para calibrar si son un buen cliente.
[Inserta el tipo de servicio que ofreces y el perfil de tu cliente]', NULL, NULL, TRUE, TRUE, 'free_preview', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('dc268cec-ccdc-46a5-8ca9-54fe590b84f3', '1a9c0f2a-531d-416d-8537-70c17cfc4ec8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('dc268cec-ccdc-46a5-8ca9-54fe590b84f3', 'c97d1262-59ee-46e5-8d5d-a76b3f13b48e') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('dc268cec-ccdc-46a5-8ca9-54fe590b84f3', 'a744de6d-2cd6-415a-8e4c-b1d554cb079a') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('3a4b56e7-5fba-4546-816a-ec70f7cbd77a', 'prompt', 'SOP: Generador de Propuestas Comerciales de Alto Impacto', 'sop-generador-de-propuestas-comerciales-de-alto-impacto', 'Sistema para redactar propuestas de servicios y consultoría que eliminan la fricción. Traduce el lenguaje técnico en valor comercial y establece límites claros de alcance (scope).', '# SOP: Generador de Propuestas Comerciales de Alto Impacto

## D.R.A.P.E.R.™ System Integration

> **D - Diagnosticar:** Reúne las notas tomadas durante la llamada de descubrimiento (situación actual del cliente, métricas de éxito y presupuesto discutido).

> **R - Rediseñar:** Estructura la solución en fases lógicas de implementación para reducir el riesgo percibido por el cliente.

> **A - Arquitectar & Programar (El Prompt Maestro):** Inyecta la siguiente instrucción en Claude:
>
> ```
> Eres un consultor de negocios que escribe propuestas que ganan clientes empresariales. Escribe una plantilla de propuesta para mi negocio de servicios. Incluye estas secciones:
> Un breve resumen de la situación del cliente tal como la entiendo (con un marcador para personalización).
> El problema específico que resolveremos juntos.
> Mi enfoque recomendado dividido en fases operativas.
> Lo que está incluido y (muy importante) lo que NO está incluido.
> Cronograma.
> Inversión (precio).
> Qué sucede inmediatamente después de que digan que sí.
> Un breve párrafo de cierre que les recuerde por qué vale la pena avanzar.
> Escríbelo en un tono profesional, directivo pero cálido.
> [Inserta los datos de tu servicio y notas de la reunión]
> ```

> **P - Encender:** Exporta el texto a un documento PDF o plataforma de propuestas, cuidando que el diseño visual esté alineado a tus guías de marca.

> **R - Refinar:** Si un cliente pide muchas modificaciones de alcance después de firmar, audita la sección de "lo que NO está incluido" de este sistema y hazla más robusta.', 'Operaciones y Cierre', NULL, NULL, 'intermediate', NULL, 'Eres un consultor de negocios que escribe propuestas que ganan clientes empresariales. Escribe una plantilla de propuesta para mi negocio de servicios. Incluye estas secciones:
Un breve resumen de la situación del cliente tal como la entiendo (con un marcador para personalización).
El problema específico que resolveremos juntos.
Mi enfoque recomendado dividido en fases operativas.
Lo que está incluido y (muy importante) lo que NO está incluido.
Cronograma.
Inversión (precio).
Qué sucede inmediatamente después de que digan que sí.
Un breve párrafo de cierre que les recuerde por qué vale la pena avanzar.
Escríbelo en un tono profesional, directivo pero cálido.
[Inserta los datos de tu servicio y notas de la reunión]', NULL, NULL, TRUE, TRUE, 'free_preview', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('3a4b56e7-5fba-4546-816a-ec70f7cbd77a', '1a9c0f2a-531d-416d-8537-70c17cfc4ec8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('3a4b56e7-5fba-4546-816a-ec70f7cbd77a', '304e2dd5-b6fd-4c9a-82cf-5eb24b306259') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('3a4b56e7-5fba-4546-816a-ec70f7cbd77a', 'ee04bee5-d0db-4caa-88dd-2796b60ca5ec') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('e8810a9e-c4fb-406b-8257-0b66e9c94d52', 'prompt', 'SOP: Arquitectura de Voz de Marca B2B', 'sop-arquitectura-de-voz-de-marca-b2b', 'Sistema para codificar la personalidad de una marca en un documento maestro, eliminando el tono robótico de la IA y permitiendo que cualquier agente o freelancer escriba contenido coherente desde el día uno.', '# SOP: Arquitectura de Voz de Marca B2B

## D.R.A.P.E.R.™ System Integration

> **D - Diagnosticar:** Selecciona 2 o 3 ejemplos reales de contenido (textos, correos o posts) que capturen exactamente el tono, ritmo y nivel técnico que deseas para la marca.

> **R - Rediseñar:** Define en un párrafo corto tu nicho B2B y el arquetipo de tu cliente ideal (ej. "Directores de operaciones frustrados con procesos manuales").

> **A - Arquitectar & Programar (El Prompt Maestro):** Inyecta la siguiente instrucción en Claude:
>
> ```
> Eres un estratega de marca con 15 años de experiencia construyendo guías de voz para marcas. Te describiré mi negocio, mi audiencia y compartiré 2-3 ejemplos de contenido que me gustan. Basado en eso, escribe una guía de voz de marca completa que incluya: adjetivos de tono con explicaciones, cómo sonamos vs. cómo nunca sonamos, 5 oraciones de ejemplo que demuestren la voz, y palabras o frases que siempre evitamos. Mantenlo lo suficientemente práctico para que un nuevo miembro del equipo (o un agente de IA) pueda leerlo y escribir en sintonía inmediatamente.
> [Inserta tu descripción y ejemplos aquí]
> ```

> **P - Encender:** Guarda el resultado como `Voice_Guide_[Marca].md` en tu bóveda.

> **R - Refinar:** Este archivo se convierte en el contexto obligatorio (dependencia) que todos los demás agentes de redacción deberán leer antes de operar.', 'Marketing & Content', NULL, NULL, 'intermediate', NULL, 'Eres un estratega de marca con 15 años de experiencia construyendo guías de voz para marcas. Te describiré mi negocio, mi audiencia y compartiré 2-3 ejemplos de contenido que me gustan. Basado en eso, escribe una guía de voz de marca completa que incluya: adjetivos de tono con explicaciones, cómo sonamos vs. cómo nunca sonamos, 5 oraciones de ejemplo que demuestren la voz, y palabras o frases que siempre evitamos. Mantenlo lo suficientemente práctico para que un nuevo miembro del equipo (o un agente de IA) pueda leerlo y escribir en sintonía inmediatamente.
[Inserta tu descripción y ejemplos aquí]', NULL, NULL, TRUE, TRUE, 'free_preview', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e8810a9e-c4fb-406b-8257-0b66e9c94d52', '1a9c0f2a-531d-416d-8537-70c17cfc4ec8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e8810a9e-c4fb-406b-8257-0b66e9c94d52', '6794068b-f704-46d3-8ee8-5f0c84b2ffad') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e8810a9e-c4fb-406b-8257-0b66e9c94d52', 'ae55175a-3a78-43a8-87b0-1319cbe20796') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e8810a9e-c4fb-406b-8257-0b66e9c94d52', '885ab67c-af6d-405a-8ca1-a6f2f0cbcdf8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('99ade614-314c-4122-82eb-ba132934721c', 'prompt', 'SOP: Matriz de Contenido a 30 Días', 'sop-matriz-de-contenido-a-30-dias', 'Generador de arquitectura mensual para evitar la parálisis por análisis. Crea un mapa táctico con ganchos, pilares y formatos antes de redactar una sola palabra.', '# SOP: Matriz de Contenido a 30 Días

## D.R.A.P.E.R.™ System Integration

> **D - Diagnosticar:** Define el objetivo principal del mes en tu CRM (ej. captar leads para una auditoría técnica o vender un sistema específico).

> **R - Rediseñar:** Selecciona la red social principal donde reside tu audiencia objetivo (ej. LinkedIn).

> **A - Arquitectar & Programar (El Prompt Maestro):** Inyecta la siguiente instrucción en Claude:
>
> ```
> Eres un estratega de redes sociales que crea planes de contenido para marcas de servicios B2B. Crea un calendario de contenido de 30 días para [Plataforma] con una publicación por día. Cada publicación debe tener: un pilar de contenido (educar / entretener / vender / generar confianza), un gancho o línea de apertura, una breve descripción de la idea de la publicación, y un formato sugerido (carrusel, reel, imagen estática, texto largo). Mezcla los pilares de contenido para que ningún pilar se repita más de 3 días seguidos. Evita el contenido de relleno genérico; cada publicación debe tener una razón comercial para existir.
> ```

> **P - Encender:** Revisa la matriz generada. Este documento se convierte en el archivo de input (directiva) para el Agente Ideador y el Agente Guionista de tu equipo automatizado.

> **R - Refinar:** Ajusta la proporción de los pilares si notas que la audiencia responde mejor a los insights técnicos que al contenido de "generación de confianza".', 'Marketing & Content', NULL, NULL, 'intermediate', NULL, 'Eres un estratega de redes sociales que crea planes de contenido para marcas de servicios B2B. Crea un calendario de contenido de 30 días para [Plataforma] con una publicación por día. Cada publicación debe tener: un pilar de contenido (educar / entretener / vender / generar confianza), un gancho o línea de apertura, una breve descripción de la idea de la publicación, y un formato sugerido (carrusel, reel, imagen estática, texto largo). Mezcla los pilares de contenido para que ningún pilar se repita más de 3 días seguidos. Evita el contenido de relleno genérico; cada publicación debe tener una razón comercial para existir.', NULL, NULL, TRUE, TRUE, 'free_preview', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('99ade614-314c-4122-82eb-ba132934721c', '1a9c0f2a-531d-416d-8537-70c17cfc4ec8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('99ade614-314c-4122-82eb-ba132934721c', '6794068b-f704-46d3-8ee8-5f0c84b2ffad') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('99ade614-314c-4122-82eb-ba132934721c', 'ae55175a-3a78-43a8-87b0-1319cbe20796') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('99ade614-314c-4122-82eb-ba132934721c', '3cee3919-96e2-4f87-8a12-9cab4d5c1274') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('c7ce7f01-509b-4dfc-8fb8-a0d25efb43ff', 'prompt', 'SOP: Máquina de Reciclaje Omnicanal', 'sop-maquina-de-reciclaje-omnicanal', 'Sistema de maximización de activos. Toma una pieza de contenido profundo y la fragmenta en formatos nativos para cada plataforma, alterando la estructura sin perder el mensaje central.', '# SOP: Máquina de Reciclaje Omnicanal

## D.R.A.P.E.R.™ System Integration

> **D - Diagnosticar:** Selecciona un activo "ancla". Debe ser un contenido validado o de alto valor que ya tengas documentado.

> **R - Rediseñar:** Identifica los canales de distribución activos en tu ecosistema (ej. LinkedIn, Instagram, Newsletter).

> **A - Arquitectar & Programar (El Prompt Maestro):** Inyecta la siguiente instrucción en Claude:
>
> ```
> Eres un estratega de contenido especializado en hacer que una sola pieza funcione en múltiples plataformas sin que se sienta copiada y pegada. Toma el contenido que te proporcionará y reprodúcelo en 6 formatos diferentes: un post de LinkedIn, un texto para Instagram, un guion de video corto (menos de 60 segundos), una introducción para newsletter, un abridor de hilo en Twitter/X, y la introducción de un artículo de blog. Cada versión debe sentirse nativa a su plataforma en tono y estructura. No te limites a acortar el original. Reescríbelo estratégicamente para cada contexto.
> [Inserta el contenido original aquí]
> ```

> **P - Encender:** Pasa los textos generados a tu orquestador de redes sociales o al agente encargado de la publicación.

> **R - Refinar:** Audita qué formato generó mejor retención. Si el guion de video corto retiene más del 50% de la audiencia, ajusta el prompt en el futuro para priorizar ese estilo de redacción narrativa.', 'Marketing & Content', NULL, NULL, 'intermediate', NULL, 'Eres un estratega de contenido especializado en hacer que una sola pieza funcione en múltiples plataformas sin que se sienta copiada y pegada. Toma el contenido que te proporcionará y reprodúcelo en 6 formatos diferentes: un post de LinkedIn, un texto para Instagram, un guion de video corto (menos de 60 segundos), una introducción para newsletter, un abridor de hilo en Twitter/X, y la introducción de un artículo de blog. Cada versión debe sentirse nativa a su plataforma en tono y estructura. No te limites a acortar el original. Reescríbelo estratégicamente para cada contexto.
[Inserta el contenido original aquí]', NULL, NULL, TRUE, TRUE, 'free_preview', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c7ce7f01-509b-4dfc-8fb8-a0d25efb43ff', '1a9c0f2a-531d-416d-8537-70c17cfc4ec8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c7ce7f01-509b-4dfc-8fb8-a0d25efb43ff', '6794068b-f704-46d3-8ee8-5f0c84b2ffad') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c7ce7f01-509b-4dfc-8fb8-a0d25efb43ff', 'ae55175a-3a78-43a8-87b0-1319cbe20796') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c7ce7f01-509b-4dfc-8fb8-a0d25efb43ff', '03dc1bb9-cf81-4eba-8942-51579cd0f5fe') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('b7601c48-ff4f-4252-80c2-01ac6e93ef44', 'prompt', 'Y2K Glitchcore Fashion Cover — Minimalist Line Art', 'retro-futuristic-fashion-glitchcore', 'Portada de revista minimalista que fusiona estética Y2K con vibras glitchcore y exposición doble.', '
# Framework REAISEMP

*   **R(Render):** Rostro [SUBJECT] estilizado, identidad tratada gráficamente.
*   **E(Entorno):** Portada revista abstracta, escena doble exposición.
*   **A(Acción):** Retrato frontal estático, pose editorial impactante.
*   **I(Iluminación):** Estilizada no realista, colores neón difusos.
*   **S(Sensación):** Experimental, digital, nostalgia Y2K.
*   **E(Estilo):** Minimalist line art con glitch digital y risograph.
*   **M(Composición):** Primer plano vertical, tipografía dominante.
*   **P(Post):** Paleta negativo, acentos neón, contraste alto.
        ', 'Fashion', NULL, NULL, 'advanced', '/images/prompts/retro-futuristic-fashion-glitchcore.jpg', '{
  "title": "Y2K Glitchcore Fashion Cover — Minimalist Line Art",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "[SUBJECT] con rasgos definidos y estilizados, identidad facial clara pero tratada de forma gráfica.",
      "expresion": "Neutra o segura, pensada para portada editorial.",
      "coherencia": "Rostro reconocible aunque parcialmente intervenido por efectos gráficos."
    },
    "E_Entorno": {
      "fondo": "Composición abstracta tipo portada de revista de moda.",
      "ambientacion": "Escena retrofuturista con capas gráficas superpuestas.",
      "elementos_clave": "Escena doble exposición integrada al rostro."
    },
    "A_Accion_Postura": {
      "pose": "Retrato frontal o tres cuartos, pose estática tipo cover editorial.",
      "lenguaje_corporal": "Presencia fuerte y contenida, pensada para impacto visual.",
      "mirada": "Dirigida a cámara o ligeramente fuera de eje."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación estilizada no realista.",
      "caracteristicas": "[COLOR] y [COLOR] lighting con efecto neón difuso, luz gráfica y plana combinada con brillos suaves."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Experimental, digital, nostálgica.",
      "tono": "Y2K, glitchcore, editorial futurista."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Minimalist screen print line art combinado con estética Y2K.",
      "tecnicas": "Doble exposición estilo risograph, color negativo, glitch digital.",
      "texturas": "Grano gráfico, ruido digital, overlays de niebla neón.",
      "nivel_realismo": "Estilizado artístico, no fotorrealista."
    },
    "M_Composicion_Camara": {
      "plano": "Primer plano tipo portada de revista.",
      "angulo": "Ángulo frontal.",
      "encuadre": "Formato vertical, composición centrada con tipografía dominante."
    },
    "P_Postproduccion": {
      "tipografia": "Bold typography estilo fashion magazine Y2K.",
      "color_grading": "Paleta invertida tipo negativo con acentos neón.",
      "contraste": "Alto.",
      "acabado": "Look gráfico experimental con glitch visible y superposiciones."
    }
  }
}', '# Estética Y2K y Glitchcore
Sustituye [SUBJECT] por el personaje o modelo que desees. Ajusta los [COLOR] para cambiar la atmósfera de los neones.', 'Usa una foto de retrato clara para que la doble exposición y los efectos de glitch se apliquen sobre tus rasgos.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('b7601c48-ff4f-4252-80c2-01ac6e93ef44', 'b3c2183f-3da9-4673-896d-6e83fab00d8f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('b7601c48-ff4f-4252-80c2-01ac6e93ef44', '179bf2c6-0bb3-43a3-8654-673782bc8069') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('6c6e2415-54d2-4cef-82de-7abcd5d48fa2', 'prompt', 'High-Fashion Editorial Portrait — Luxury Power Femininity', 'vogue-elegance-couture-glamour', 'Retrato editorial de lujo inspirado por Ana de Armas en un vestido de lentejuelas negro.', '
# Framework REAISEMP

*   **R(Render):** Mujer sofisticada (inspiración Ana de Armas), peinado sleek ponytail.
*   **E(Entorno):** Sofá de terciopelo borgoña profundo, interior lujoso.
*   **A(Acción):** Sentada, postura dominante femenina, bolso estruturado.
*   **I(Iluminación):** Cinematográfica de estudio, resalta joyas y lentejuelas.
*   **S(Sensación):** Poder, sensualidad elegante, sofisticación Vogue.
*   **E(Estilo):** Editorial de moda couture, ultra-realista.
*   **M(Composición):** Plano medio a tres cuartos, frontal ligeramente bajo.
*   **P(Post):** Color grading profundo (borgoña/dorado), nitidez 8K, depth of field reducida.
        ', 'Fashion', NULL, NULL, 'advanced', '/images/prompts/vogue-elegance-couture-glamour.jpg', '{
  "title": "High-Fashion Editorial Portrait — Luxury Power Femininity",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Mujer adulta con rasgos finos y sofisticados, estructura facial definida y elegante, piel realista con acabado pulido de editorial.",
      "referencia_identidad": "Ana de Armas (o mujer con presencia y elegancia similares, si se usa como inspiración).",
      "expresion": "Mirada audaz, segura y sin disculpas.",
      "cabello": "Peinado sleek en high ponytail, perfectamente estilizado.",
      "coherencia": "Proporciones realistas, identidad facial consistente, estética de alta costura."
    },
    "E_Entorno": {
      "fondo": "Sofá de terciopelo color borgoña profundo.",
      "ambientacion": "Espacio interior elegante y lujoso, enfoque editorial.",
      "superficies": "Textura rica del terciopelo visible y protagonista."
    },
    "A_Accion_Postura": {
      "pose": "Sentada con piernas separadas de forma segura y dominante.",
      "lenguaje_corporal": "Postura femenina poderosa, control total del espacio.",
      "accion": "Sosteniendo un bolso de lujo estructurado con cadena dorada entre las manos.",
      "mirada": "Directa a cámara, presencia fuerte y editorial."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación cinematográfica de estudio.",
      "caracteristicas": "Luz controlada que resalta rostro, joyería y texturas del vestido, sombras suaves y profundas."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Poder, lujo, sensualidad elegante.",
      "tono": "Alta costura, Vogue editorial, sofisticación absoluta."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Editorial de moda de lujo con realismo cinematográfico.",
      "vestuario": "Vestido couture negro de lentejuelas con escote pronunciado y cut-outs sutiles.",
      "accesorios": "Aros de diamantes oversized, anillos de oro apilados, pulsera tennis de diamantes, collares de oro en capas, stilettos negros puntiagudos.",
      "nivel_realismo": "Ultra-realista, estética Vogue."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio a plano tres cuartos.",
      "angulo": "Ángulo frontal ligeramente bajo para enfatizar poder.",
      "encuadre": "Composición centrada con foco en rostro, joyería y accesorios."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos profundos y ricos, énfasis en borgoña, negro y dorados.",
      "contraste": "Medio-alto.",
      "acabado": "Look editorial premium con nitidez extrema y profundidad de campo reducida.",
      "calidad": {
        "resolucion": "8K ultra-detailed",
        "enfoque": "Ultra-sharp en rostro, joyería y accesorios",
        "profundidad_de_campo": "Shallow depth of field"
      }
    }
  }
}', '# Editorial de Alta Costura
Cambia el color del sofá o los accesorios (oro/plata) para adaptar el prompt a tu estilo de marca.', 'Sube una foto sentada en una pose de poder para que la IA capture tu identidad en este entorno de lujo.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('6c6e2415-54d2-4cef-82de-7abcd5d48fa2', 'b3c2183f-3da9-4673-896d-6e83fab00d8f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('6c6e2415-54d2-4cef-82de-7abcd5d48fa2', '60514d83-4505-48ee-87c7-40d282bc13f9') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('7386cb0e-bd69-4ab1-863a-2ebace2683e6', 'prompt', 'Luxury Beach Club Portrait — Sunlit Daybed', 'glamour-shore-celebrity-vibes', 'Fotografía de estilo de vida en la playa con una joven en un vestido blanco chic.', '
# Framework REAISEMP

*   **R(Render):** Mujer joven 20s, piel bronceada luminosa, glow saludable.
*   **E(Entorno):** Beach club de lujo, arena blanca, daybed.
*   **A(Acción):** Reclinada suavemente, postura elegante y effortless.
*   **I(Iluminación):** Natural suave de día, resalta brillo de piel.
*   **S(Sensación):** Calma, frescura, lujo relajado.
*   **E(Estilo):** Lifestyle ultra-realista veraniega.
*   **M(Composición):** Plano medio, composición limpia.
*   **P(Post):** Tonos cálidos, blancos limpios, acabado luminoso.
        ', 'Portrait', NULL, NULL, 'intermediate', '/images/prompts/glamour-shore-celebrity-vibes.jpg', '{
  "title": "Luxury Beach Club Portrait — Sunlit Daybed",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Mujer joven en sus 20s con piel bronceada y luminosa, rasgos equilibrados y naturales, textura de piel realista con glow saludable.",
      "expresion": "Relajada, fresca, expresión serena y confiada.",
      "cabello": "Cabello suelto con movimiento natural, estilo veraniego.",
      "coherencia": "Identidad facial consistente, proporciones realistas, apariencia natural."
    },
    "E_Entorno": {
      "fondo": "Beach club de lujo con arena blanca y camastros tipo daybed.",
      "ambientacion": "Ambiente exclusivo, veraniego y sofisticado."
    },
    "A_Accion_Postura": {
      "pose": "Sentada o reclinada suavemente sobre el daybed.",
      "lenguaje_corporal": "Postura relajada y elegante, actitud effortless.",
      "mirada": "Dirigida hacia la cámara o ligeramente fuera de ella."
    },
    "I_Iluminacion": {
      "tipo": "Luz natural suave de día.",
      "caracteristicas": "Iluminación uniforme que resalta el brillo de la piel sin sombras duras."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Frescura, calma, lujo relajado.",
      "tono": "Summer luxury, lifestyle, natural."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía lifestyle ultra-realista con estética veraniega.",
      "vestuario": "Vestido mini blanco off-the-shoulder con encaje tipo eyelet.",
      "texturas": "Tela ligera, detalles delicados, piel luminosa.",
      "nivel_realismo": "Ultra-realista."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio.",
      "angulo": "Ángulo neutro a la altura de los ojos.",
      "encuadre": "Composición limpia con entorno visible sin distraer."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos claros y cálidos, blancos limpios y piel dorada.",
      "contraste": "Suave.",
      "acabado": "Look natural, luminoso y elegante."
    }
  }
}', '# Vacaciones de Lujo
Cambia el color del vestido o el tono de piel para personalizar tu avatar de vacaciones.', 'Una foto tuya sonriendo bajo luz natural funcionará mejor para integrarte en este escenario soleado.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('7386cb0e-bd69-4ab1-863a-2ebace2683e6', 'b3c2183f-3da9-4673-896d-6e83fab00d8f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('7386cb0e-bd69-4ab1-863a-2ebace2683e6', '3bdcbcf8-8e36-409c-89d4-b433347525a1') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('d9f1f5df-7ab6-4b69-8350-d33249898f2a', 'prompt', 'Cinematic Lifestyle Portrait — Luxury Boss Girl', 'power-elegance-boss-girl', 'Retrato cinematográfico de una mujer poderosa en el asiento del conductor de un coche de lujo.', '
# Framework REAISEMP

*   **R(Render):** Rostro joven elegante, estructura facial definida.
*   **E(Entorno):** Interior de automóvil de lujo, cuero beige.
*   **A(Acción):** Sentada en el conductor, actitud dominante y relajada.
*   **I(Iluminación):** Natural suave, luz envolvente de ventanas.
*   **S(Sensación):** Poder, independencia, éxito aspiracional.
*   **E(Estilo):** Lifestyle cinematográfica ultra-realista.
*   **M(Composición):** Plano medio, composición limpia enfocada.
*   **P(Post):** Tonos cálidos/neutros, contraste suave tipo film.
        ', 'Lifestyle', NULL, NULL, 'advanced', '/images/prompts/power-elegance-boss-girl.jpg', '{
  "title": "Cinematic Lifestyle Portrait — Luxury Boss Girl",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro joven adulto con rasgos occidentales equilibrados, estructura facial definida y elegante, piel realista con textura natural.",
      "expresion": "Confiada, poderosa, seguridad tranquila.",
      "cabello": "Peinado pulido and moderno, acorde a un estilo ejecutivo de lujo.",
      "accesorios": "Gafas de sol oversized de diseño minimalista.",
      "coherencia": "Identidad facial consistente, proporciones realistas, sin exageración."
    },
    "E_Entorno": {
      "fondo": "Interior de automóvil de lujo de alta gama.",
      "elementos_clave": "Asientos de cuero beige y acabados premium.",
      "ambientacion": "Escenario lifestyle sofisticado, exclusivo y moderno."
    },
    "A_Accion_Postura": {
      "pose": "Sentada en el asiento del conductor.",
      "lenguaje_corporal": "Postura relajada pero dominante, control total del espacio.",
      "accion": "Sosteniendo un smartphone de manera natural.",
      "mirada": "Dirigida ligeramente fuera de cámara, actitud segura."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación natural suave.",
      "caracteristicas": "Luz envolvente que entra por las ventanas del vehículo, sombras suaves y bien controladas."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Poder, independencia, éxito.",
      "tono": "Luxury lifestyle, aspiracional, cinematográfico."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía lifestyle cinematográfica ultra-realista.",
      "vestuario": "Outfit minimalista de lujo, líneas limpias y elegantes.",
      "texturas": "Materiales premium visibles en ropa y automóvil.",
      "nivel_realismo": "Ultra-realista."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio.",
      "angulo": "Ángulo neutro desde el exterior o interior del vehículo.",
      "encuadre": "Composición limpia enfocada en el sujeto y el interior del auto."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos cálidos y neutros con contraste suave tipo película.",
      "contraste": "Bajo a medio.",
      "acabado": "Look cinematográfico limpio con sensación de film lifestyle."
    }
  }
}', '# Marca Personal
Este prompt es ideal para emprendedoras. Ajusta el color del interior del coche (negro/marrón) para variar el mood.', 'Usa una foto tuya de perfil o tres cuartos para que las gafas de sol se ajusten correctamente a tu rostro.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d9f1f5df-7ab6-4b69-8350-d33249898f2a', 'b3c2183f-3da9-4673-896d-6e83fab00d8f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d9f1f5df-7ab6-4b69-8350-d33249898f2a', '8565d138-edcd-4651-8f31-56e4afe693aa') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('ecf5c97a-0e2e-411b-8578-70d518fa0f83', 'prompt', 'Composite Transformation Portrait — Photo to Embroidered Artwork', 'stitches-reality-embroidery-art', 'Efecto visual que transforma una foto real en una obra de arte bordada con textura realista.', '
# Framework REAISEMP

*   **R(Render):** Rostro masculino adulto, chaqueta colorida moderna.
*   **E(Entorno):** Paisaje de montaña nevada, contraste de colores.
*   **A(Acción):** Postura erguida frontal, presencia editorial.
*   **I(Iluminación):** Equilibrada, mantiene detalle en ambas texturas.
*   **S(Sensación):** Transformación artesanal, concepto creativo.
*   **E(Estilo):** Híbrido fotorrealismo e ilustración textil (bordado).
*   **M(Composición):** Plano medio, diseño editorial dividido.
*   **P(Post):** Colores vivos vs fondo frío, layout limpio de transición.
        ', 'Creative', NULL, NULL, 'advanced', '/images/prompts/stitches-reality-embroidery-art.jpg', '{
  "title": "Composite Transformation Portrait — Photo to Embroidered Artwork",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro masculino adulto con rasgos bien definidos, identidad clara y realista.",
      "expresion": "Neutra y segura, expresión editorial contenida.",
      "vestimenta": "Chaqueta colorida con diseño moderno y llamativo.",
      "coherencia": "Rasgos faciales consistentes a lo largo de la transformación visual."
    },
    "E_Entorno": {
      "fondo": "Paisaje de montaña nevada.",
      "ambientacion": "Escenario natural frío que contrasta con la vestimenta colorida.",
      "uso_editorial": "Fondo utilizado como elemento narrativo y estético."
    },
    "A_Accion_Postura": {
      "pose": "Postura erguida, frontal o ligeramente en tres cuartos.",
      "lenguaje_corporal": "Firme, calmado, con presencia editorial.",
      "mirada": "Dirigida a cámara."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación equilibrada y controlada.",
      "caracteristicas": "Luz uniforme que mantiene detalle tanto en fotografía como en textura bordada."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Transformación, artesanía, contraste entre lo real y lo artístico.",
      "tono": "Editorial, creativo, conceptual."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Imagen compuesta que transiciona de fotografía realista a arte bordado.",
      "texturas": "Textura de bordado altamente detallada y visible.",
      "nivel_realismo": "Híbrido: fotorrealismo + ilustración textil."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio.",
      "angulo": "Ángulo neutro.",
      "encuadre": "Diseño editorial dividido que muestra claramente la transformación visual."
    },
    "P_Postproduccion": {
      "color_grading": "Colores vivos en la chaqueta contrastando con blancos fríos del fondo.",
      "contraste": "Medio.",
      "acabado": "Layout editorial limpio con transición clara entre fotografía y bordado."
    }
  }
}', '# De Foto a Arte
Sustituye la descripción del hombre por la tuya. Este prompt es excelente para avatares artísticos únicos.', 'Sube tu foto de retrato (primer plano) para que la IA replique tus rasgos en el patrón de bordado.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('ecf5c97a-0e2e-411b-8578-70d518fa0f83', 'b3c2183f-3da9-4673-896d-6e83fab00d8f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('ecf5c97a-0e2e-411b-8578-70d518fa0f83', '8c0b06eb-8aa8-4cb0-8a95-fb02f709d414') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('d012d26c-1967-4c4c-8ae3-c101a8304d75', 'prompt', 'Cinematic Lifestyle Portrait — Dubai Waterfront Sunset', 'sunset-elegance-dubai-vistas', 'Captura de viaje de lujo con vistas al Burj Khalifa durante la hora dorada.', '
# Framework REAISEMP

*   **R(Render):** Rostro joven elegante, textura suave, tonos cálidos.
*   **E(Entorno):** Dubai Downtown, Burj Khalifa al fondo, barandilla.
*   **A(Acción):** De pie, apoyada en barandilla, mirada contemplativa.
*   **I(Iluminación):** Golden hour natural, luz cálida, reflejos ámbar.
*   **S(Sensación):** Calma, aspiracional, sofisticada.
*   **E(Estilo):** Lifestyle cinematográfica ultra-realista, Kodak Portra.
*   **M(Composición):** Plano medio, composición equilibrada.
*   **P(Post):** Color grading dorado/ámbar, contraste suave, grano fino.
        ', 'Travel', NULL, NULL, 'intermediate', '/images/prompts/sunset-elegance-dubai-vistas.jpg', '{
  "title": "Cinematic Lifestyle Portrait — Dubai Waterfront Sunset",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro joven adulto con rasgos naturales y elegantes, piel realista con textura suave y tonos cálidos.",
      "expresion": "Serena y contemplativa.",
      "cabello": "Cabello natural, ligeramente movido por la brisa.",
      "coherencia": "Identidad facial consistente, proporciones realistas, sin exageraciones."
    },
    "E_Entorno": {
      "fondo": "Zona costera de Dubai Downtown junto a una barandilla frente al agua.",
      "elementos_clave": "Burj Khalifa visible al fondo.",
      "ambientacion": "Entorno urbano moderno y lujoso durante el atardecer."
    },
    "A_Accion_Postura": {
      "pose": "De pie apoyada suavemente en la barandilla.",
      "lenguaje_corporal": "Relajado, natural y elegante, estilo lifestyle.",
      "mirada": "Dirigida hacia el horizonte y el Burj Khalifa, fuera de cámara."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación natural de golden hour.",
      "caracteristicas": "Luz cálida con reflejos ámbar y sombras suaves propias del atardecer."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Calma, aspiracional, serenidad.",
      "tono": "Cinematográfico, lifestyle, sofisticado."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía lifestyle cinematográfica ultra-realista.",
      "film_look": "Kodak Portra con tonos cálidos.",
      "texturas": "Grano analógico sutil.",
      "nivel_realismo": "Ultra-realista."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio.",
      "angulo": "Ángulo neutro a la altura de los ojos.",
      "encuadre": "Composición equilibrada con arquitectura icónica visible al fondo."
    },
    "P_Postproduccion": {
      "color_grading": "Warm grading con predominio de tonos dorados y ámbar.",
      "contraste": "Suave y natural.",
      "acabado": "Look cinematográfico limpio con grano de película discreto."
    }
  }
}', '# Viaje de Ensueño
Cambia el destino a cualquier otra ciudad icónica manteniendo la iluminación de atardecer cinematográfico.', 'Sube una foto tuya de espaldas o de lado para que el ''body language'' se vea natural en la composición.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d012d26c-1967-4c4c-8ae3-c101a8304d75', 'b3c2183f-3da9-4673-896d-6e83fab00d8f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d012d26c-1967-4c4c-8ae3-c101a8304d75', '3bdcbcf8-8e36-409c-89d4-b433347525a1') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('a6a41769-fc4b-407c-83c9-ca128dfb17cd', 'prompt', 'Street Fashion Portrait — Futuristic Industrial', 'urban-edge-futuristic-street-fashion', 'Retrato adolescente con estética industrial, ángulos dramáticos y neones azules.', '
# Framework REAISEMP

*   **R(Render):** Rostro moderno urbano, rasgos definidos.
*   **E(Entorno):** Fondo metálico oscuro, textura industrial.
*   **A(Acción):** Postura firme, ángulo bajo (low angle).
*   **I(Iluminación):** Industrial azul, luz direccional fría.
*   **S(Sensación):** Actitud urbana, modernidad, streetwear.
*   **E(Estilo):** Street fashion contemporáneo futurista.
*   **M(Composición):** Plano medio a cuerpo completo, centrado.
*   **P(Post):** Tonos azules industriales, contraste medio-alto.
        ', 'Fashion', NULL, NULL, 'intermediate', '/images/prompts/urban-edge-futuristic-street-fashion.jpg', '{
  "title": "Street Fashion Portrait — Futuristic Industrial",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro moderno y urbano, rasgos definidos, piel natural sin retoques exagerados.",
      "expresion": "Segura, relajada, actitud street.",
      "cabello": "Estilo urbano contemporáneo, limpio pero con carácter.",
      "coherencia": "Proporciones realistas, identidad consistente."
    },
    "E_Entorno": {
      "fondo": "Fondo metálico oscuro con textura industrial.",
      "ambientacion": "Escenario futurista industrial, estética urbana cruda."
    },
    "A_Accion_Postura": {
      "pose": "Postura firme con ligera apertura de piernas.",
      "lenguaje_corporal": "Actitud dominante y relajada típica del street fashion.",
      "mirada": "Dirigida hacia la cámara desde un ángulo bajo."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación industrial azul.",
      "caracteristicas": "Luz direccional fría con reflejos metálicos, sombras marcadas pero controladas."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Actitud urbana, poder, modernidad.",
      "tono": "Futurista, industrial, streetwear."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Street fashion contemporáneo con estética futurista.",
      "texturas": "Ropa con telas gruesas, superficies metálicas visibles.",
      "nivel_realismo": "Fotorrealismo."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio a cuerpo completo.",
      "angulo": "Ángulo bajo (low angle shot).",
      "encuadre": "Centrado, enfatizando presencia y altura."
    },
    "P_Postproduccion": {
      "color_grading": "Dominancia de tonos azules industriales.",
      "contraste": "Medio-alto.",
      "acabado": "Look urbano limpio con nitidez controlada."
    }
  }
}', '# Estilo Cyberpunk
Cambia ''blue light'' por ''magenta'' o ''electric green'' para un look aún más tecnológico.', 'Para este prompt es vital una pose en cuclillas o agachada para aprovechar la perspectiva del ángulo bajo.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a6a41769-fc4b-407c-83c9-ca128dfb17cd', 'b3c2183f-3da9-4673-896d-6e83fab00d8f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a6a41769-fc4b-407c-83c9-ca128dfb17cd', '575e4ebd-f06b-4993-8199-933aeaf56baa') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('95a8b360-a737-4c12-89df-2cd7a9010ab8', 'prompt', 'Japanese Cosplay Portrait — Neon Night Street', 'maid-moonlight-cosplay-moment', 'Estilo cosplay japonés con traje de maid clásico frente a máquinas expendedoras retroiluminadas.', '
# Framework REAISEMP

*   **R(Render):** Rostro joven estilo japonés, twin tails y orejas de gato.
*   **E(Entorno):** Calle nocturna japonesa con máquinas expendedoras.
*   **A(Acción):** Postura erguida, actitud kawaii controlada.
*   **I(Iluminación):** Realista urbana, luz de máquinas expendedoras.
*   **S(Sensación):** Encanto nocturno, fantasía urbana vibrante.
*   **E(Estilo):** Cosplay japonés realista, fotorrealista.
*   **M(Composición):** Plano medio a americano, 16:9 horizontal.
*   **P(Post):** Colores nocturnos intensificados, acentos neón.
        ', 'Alternative', NULL, NULL, 'intermediate', '/images/prompts/maid-moonlight-cosplay-moment.jpg', '{
  "title": "Japanese Cosplay Portrait — Neon Night Street",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro joven adulto con rasgos delicados y estilo japonés, piel natural y limpia.",
      "expresion": "Dulce y confiada, ligera sonrisa.",
      "cabello": "Cabello largo en twin tails bien definidos.",
      "accesorios": "Diadema con orejas de gato.",
      "coherencia": "Identidad facial consistente, proporciones realistas."
    },
    "E_Entorno": {
      "fondo": "Calle nocturna japonesa con máquinas expendedoras iluminadas.",
      "ambientacion": "Entorno urbano nocturno, moderno y vibrante."
    },
    "A_Accion_Postura": {
      "pose": "Postura erguida y natural, ligeramente girada hacia la cámara.",
      "lenguaje_corporal": "Actitud kawaii controlada, elegante y relajada.",
      "mirada": "Dirigida a cámara."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación nocturna urbana realista.",
      "caracteristicas": "Luz ambiental proveniente de máquinas expendedoras brillantes, reflejos suaves y neón sutil."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Encanto, fantasía urbana, energía nocturna.",
      "tono": "Kawaii, moderno, vibrante."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Cosplay japonés realista.",
      "vestuario": "Clásico traje de maid con acabados limpios y detallados.",
      "nivel_realismo": "Fotorrealista."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio a plano americano.",
      "angulo": "Ángulo neutro.",
      "encuadre": "Horizontal 16:9, sujeto centrado con fondo visible."
    },
    "P_Postproduccion": {
      "color_grading": "Colores nocturnos intensificados con acentos neón.",
      "contraste": "Medio.",
      "acabado": "Nitidez equilibrada con iluminación realista."
    }
  }
}', '# Estética Anime Real
Cambia el traje de maid por un uniforme escolar o gótico para variar la temática manteniendo el fondo de neón.', 'Funciona mejor con fotos de rostro ''doll-like'' y expresiones suaves.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('95a8b360-a737-4c12-89df-2cd7a9010ab8', 'b3c2183f-3da9-4673-896d-6e83fab00d8f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('95a8b360-a737-4c12-89df-2cd7a9010ab8', '00b3a0ce-6fad-4c3a-8d9d-1419593018ce') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('f98d47e2-7f66-47e0-8800-557e42d849a4', 'prompt', 'Dreamlike Analog Portrait — Ethereal Bedroom', 'ethereal-dreamscape-kpop-portrait', 'Fotografía de película analógica con estética Petra Collins, colores pastel y destellos arcoíris.', '
# Framework REAISEMP

*   **R(Render):** Rostro joven adulto, piel natural con grano analógico.
*   **E(Entorno):** Habitación íntima minimalista.
*   **A(Acción):** Reclinada en la cama, mirada suave e introspectiva.
*   **I(Iluminación):** Ambiental pastel, luz difusa con arcoíris y bloom.
*   **S(Sensación):** Onírica, mágica, nostálgica.
*   **E(Estilo):** Fotografía analógica Petra Collins, fotorrealismo.
*   **M(Composición):** Plano medio, ángulo neutro íntimo.
*   **P(Post):** Tonos pastel cálidos/rosados, contraste bajo, soft focus.
        ', 'Portrait', NULL, NULL, 'advanced', '/images/prompts/ethereal-dreamscape-kpop-portrait.jpg', '{
  "title": "Dreamlike Analog Portrait — Ethereal Bedroom",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro joven adulto con rasgos suaves y delicados, piel natural con imperfecciones visibles propias de fotografía analógica.",
      "expresion": "Serena, introspectiva, mirada relajada.",
      "cabello": "Cabello suelto, ligeramente despeinado, apariencia natural.",
      "coherencia": "Proporciones realistas, identidad intacta, sin retoque excesivo."
    },
    "E_Entorno": {
      "fondo": "Habitación íntima y minimalista, cama como elemento central.",
      "ambientacion": "Espacio personal, suave y acogedor, sin objetos dominantes."
    },
    "A_Accion_Postura": {
      "pose": "Reclinada sobre la cama, postura relajada y natural.",
      "lenguaje_corporal": "Calma, vulnerabilidad sutil, sensación de descanso.",
      "mirada": "Suave, ligeramente perdida o dirigida fuera de cámara."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación ambiental pastel.",
      "caracteristicas": "Luz difusa con flares de arcoíris, bloom intenso y reflejos suaves."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Onírica, mágica, íntima.",
      "tono": "Ethereal, nostálgico, delicado."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía analógica soñadora estilo Petra Collins.",
      "texturas": "Grano visible de película, desenfoque suave, bloom pesado.",
      "nivel_realismo": "Fotorrealismo analógico."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio.",
      "angulo": "Ángulo neutro a la altura de la cama.",
      "encuadre": "Íntimo, ligeramente descentrado para sensación natural."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos pastel suaves con dominancia rosada y cálida.",
      "contraste": "Bajo.",
      "acabado": "Look analógico, soft focus, atmósfera difusa y soñadora."
    }
  }
}', '# Estética Soft/Indie
Este prompt es ideal para fotos con un toque nostálgico. Ajusta la cantidad de ''grain'' para un efecto más vintage.', 'Sube una foto con luz suave y expresión relajada para que la IA la funda con los colores pastel.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('f98d47e2-7f66-47e0-8800-557e42d849a4', 'b3c2183f-3da9-4673-896d-6e83fab00d8f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('f98d47e2-7f66-47e0-8800-557e42d849a4', '7a499757-e8ee-4bc1-870f-0501c938bf60') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('ba201eb8-36aa-453a-86b4-285573dbc237', 'prompt', 'Miniature Portrait — Smartphone Stage', 'miniature-portrait-smartphone-stage', 'Efecto de perspectiva forzada donde una modelo posa sobre la pantalla de un smartphone.', '
# Framework REAISEMP

*   **R(Render):** Modelo (inspiración Anne Hathaway), gafas de montura negra, pose juguetona.
*   **E(Entorno):** Pantalla de smartphone como escenario, fondo gris limpio.
*   **A(Acción):** Posando sobre la pantalla, perspectiva forzada extrema.
*   **I(Iluminación):** Luz interior suave, sombras de contacto realistas.
*   **S(Sensación):** Surrealismo, juego de escalas, ilusión 3D.
*   **E(Estilo):** Composición fotorrealista surrealista, hiperrealismo.
*   **M(Composición):** Vista de pájaro (top-down), profundidad de campo reducida.
*   **P(Post):** Efecto 3D de profundidad, nitidez extrema en la figura.
        ', 'Creative', NULL, NULL, 'advanced', '/images/prompts/miniature-portrait-smartphone-stage.jpg', '{
  "title": "Miniature Portrait — Smartphone Stage",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro estilizado (inspiración Anne Hathaway), maquillaje exquisito, gafas de montura negra.",
      "expresion": "Cuchi, juguetona, alegre.",
      "cabello": "Largo y castaño, aspecto natural.",
      "coherencia": "Identidad reconocible a escala miniatura."
    },
    "E_Entorno": {
      "fondo": "Fondo gris neutro y limpio.",
      "superficie": "Pantalla de smartphone sostenida por una mano, tratada como un suelo oscuro/escenario.",
      "ambientacion": "Composición de interiores minimalista."
    },
    "A_Accion_Postura": {
      "pose": "Pose dinámica y juguetona (una pierna levantada, signo de v).",
      "lenguaje_corporal": "Dinámico, divertido, interactuando con la ''superficie'' del teléfono.",
      "perspectiva": "Perspectiva forzada extrema para enfatizar la diferencia de tamaño."
    },
    "I_Iluminacion": {
      "tipo": "Luz suave de interior.",
      "caracteristicas": "Luz envolvente con sombras de contacto tenues sobre la pantalla negra."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Surrealismo, diversión, creatividad visual.",
      "tono": "Innovador, lúdico, 3D Pop-out."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Composición fotorrealista surrealista.",
      "nivel_realismo": "Hiperrealista.",
      "texturas": "Contraste entre cristal del teléfono y ropa de alta costura street."
    },
    "M_Composicion_Camara": {
      "plano": "Vista cenital / ojo de pájaro (top-down).",
      "angulo": "Ángulo picado fuerte.",
      "encuadre": "Enfoque en la miniatura y la mano que sostiene el dispositivo."
    },
    "P_Postproduccion": {
      "efectos": "Efecto 3D de ''salir de la pantalla''.",
      "contraste": "Medio.",
      "acabado": "Nitidez extrema en el sujeto miniatura, profundidad de campo reducida en el fondo."
    }
  }
}', '# Efecto Miniatura
Sustituye ''Anne Hathaway'' por cualquier otra celebridad o descripción de avatar. Asegúrate de mantener la descripción de la pantalla del smartphone para conservar el efecto de perspectiva.', 'Usa una foto tuya de cuerpo completo en una pose divertida sobre un fondo neutro para facilitar la composición de la IA.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('ba201eb8-36aa-453a-86b4-285573dbc237', 'b3c2183f-3da9-4673-896d-6e83fab00d8f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('ba201eb8-36aa-453a-86b4-285573dbc237', '6f448522-3e5e-41c9-8d36-a9e36331b356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('40ef9176-6f0a-477e-8ca8-e17f6f21e788', 'prompt', '3D Chibi Proposal — Enchanted Flower Arch', 'nano-banana-case-1', 'Estilo 3D Chibi/Pixar de una tierna propuesta de matrimonio en un jardín de rosas.', '
# Framework REAISEMP

*   **R(Render):** Personajes estilo Chibi 3D, estética Pixar, rostros expresivos y piel suave.
*   **E(Entorno):** Jardín de rosas encantado, arco floral circular (rosa, lila, blanco), bokeh suave.
*   **A(Acción):** Propuesta de matrimonio (él de rodillas, ella sorprendida con manos en mejillas).
*   **I(Iluminación):** Luz cálida de atardecer, resplandor suave, luz volumétrica.
*   **S(Sensación):** Romántica, tierna, mágica, estilo cuento de hadas.
*   **E(Estilo):** Render 3D de alta calidad, colores vibrantes y saturación equilibrada.
*   **M(Composición):** Plano general, composición centrada bajo el arco floral.
*   **P(Post):** Color grading cálido, efecto bloom sutil, alta resolución.
        ', 'Creative', NULL, NULL, 'beginner', '/images/prompts/3d-chibi-proposal-enchanted-arch.jpg', '{
  "title": "3D Chibi Proposal — Enchanted Flower Arch",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "estilo": "3D Chibi / Pixar Animation style.",
      "caracteristicas": "Personajes adorables, cabezas ligeramente más grandes, ojos expresivos.",
      "vestimenta": "Él con camisa azul y pantalón oscuro, ella con vestido rosa pastel.",
      "coherencia": "Estética consistente de película animada de alta gama."
    },
    "E_Entorno": {
      "fondo": "Jardín de flores exuberante con pétalos en el suelo.",
      "elementos_clave": "Arco de flores circular masivo y detallado, iluminación dorada al fondo.",
      "ambientacion": "Bosque o jardín de fantasía romántica."
    },
    "A_Accion_Postura": {
      "pose_masculina": "De rodillas, sosteniendo una caja con un anillo brillante.",
      "pose_femenina": "De pie, expresión de asombro y felicidad, manos cubriendo parcialmente la boca.",
      "interaccion": "Momento congelado de máxima emoción."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación de ''hora mágica'' (sunset).",
      "caracteristicas": "Luz de fondo suave (backlighting) creando un contorno brillante, sombras cálidas y suaves."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Amor puro, alegría, magia, ternura.",
      "tono": "Vibrante, colorido, soñador."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Render digital 3D hiper-detallado.",
      "texturas": "Telas suaves, pétalos delicados, cabello con volumen estilizado.",
      "nivel_realismo": "Fantasía 3D fotorrealista."
    },
    "M_Composicion_Camara": {
      "plano": "Plano general (Full shot).",
      "angulo": "Ángulo frontal neutro.",
      "encuadre": "Sujetos perfectamente enmarcados por el arco de flores."
    },
    "P_Postproduccion": {
      "filtros": "Efectos de partículas de luz (dust motes) flotando, bloom intenso en el anillo.",
      "contraste": "Medio.",
      "acabado": "Imagen limpia, nítida y apta para impresión editorial de alta calidad."
    }
  }
}', '# Magia Chibi
Cambia los colores de la ropa o las flores para personalizar tu propia escena romántica. Este estilo es perfecto para tarjetas de felicitación.', 'No necesitas subir foto de referencia para este estilo, pero si lo haces, la IA intentará ''chibificar'' tus rasgos en los personajes.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('40ef9176-6f0a-477e-8ca8-e17f6f21e788', 'b3c2183f-3da9-4673-896d-6e83fab00d8f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('40ef9176-6f0a-477e-8ca8-e17f6f21e788', '4119e704-b41f-42c2-88e3-9ebb6eecede2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('40ef9176-6f0a-477e-8ca8-e17f6f21e788', '916ce1fd-375e-4ac3-838b-50caf817cad2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('e72bd3d4-e7e5-4446-86a1-f2a8ce7b8809', 'prompt', '3D Chibi Out-of-Frame Portrait', 'nano-banana-case-2', 'Efecto creativo ''pop-out'' donde una escena 3D Chibi sale de un marco de fotos sostenido por una mano.', '
# Framework REAISEMP

*   **R(Render):** Personajes estilo Chibi 3D, estética Pixar, rostros expresivos.
*   **E(Entorno):** Marco de foto Polaroid roto/rasgado sostenido por una mano, jardín de rosas al fondo.
*   **A(Acción):** Propuesta de matrimonio, efecto "pop-out" (personajes y flores salen del marco).
*   **I(Iluminación):** Luz cálida de atardecer, resplandor suave, bokeh profundo.
*   **S(Sensación):** Creativa, mágica, romántica, ruptura de la cuarta pared.
*   **E(Estilo):** Composición surrealista fotorrealista combinada con 3D.
*   **M(Composición):** Primer plano de la mano con el marco, profundidad de campo reducida.
*   **P(Post):** Color grading cálido, nitidez en el marco, desenfoque artístico en el fondo.
        ', 'Creative', NULL, NULL, 'advanced', '/images/prompts/3d-chibi-out-of-frame-proposal.jpg', '{
  "title": "3D Chibi Out-of-Frame Portrait",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "estilo": "3D Chibi / Pixar Animation style.",
      "caracteristicas": "Personajes adorables, proporciones deformadas tiernas, ojos grandes.",
      "coherencia": "Identidad consistente con el estilo 3D de alta gama."
    },
    "E_Entorno": {
      "fondo": "Jardín de rosas desenfocado (bokeh).",
      "superficie": "Marco de fotografía Polaroid blanco, envejecido o rasgado.",
      "elementos_clave": "Mano humana real o hiperrealista sosteniendo el marco frente a la cámara."
    },
    "A_Accion_Postura": {
      "escena_interna": "Propuesta de matrimonio Chibi (él arrodillado, ella bailando/saltando de alegría).",
      "efecto_especial": "Los personajes y los pétalos de flores salen físicamente de los límites del marco de la foto (Out-of-Frame effect).",
      "dinamica": "Movimiento fluido, pétalos volando por delante del marco."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación cinematográfica de atardecer.",
      "caracteristicas": "Luz dorada cálida que integra el mundo real (mano) con el mundo 3D (personajes)."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Sorpresa, magia, amor creativo.",
      "tono": "Innovador, soñador, visualmente impactante."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Surrealismo visual / 3D Pop-out.",
      "nivel_realismo": "Híbrido fotorrealista (mano) y Pixar-style (escena).",
      "texturas": "Papel del marco, piel de la mano, pétalos de rosa detallados."
    },
    "M_Composicion_Camara": {
      "plano": "Primer plano (Close-up) de la mano y el marco.",
      "angulo": "Ángulo frontal.",
      "encuadre": "Composición centrada que resalta el efecto de profundidad."
    },
    "P_Postproduccion": {
      "filtros": "Bloom suave, color grading cálido (ámbar/rosa), grano analógico sutil.",
      "contraste": "Medio.",
      "acabado": "Imagen limpia con gran impacto visual de profundidad."
    }
  }
}', '# Efecto Pop-Out
Este prompt es ideal para crear invitaciones de boda o anuncios especiales con un toque mágico. Cambia la escena dentro del marco para adaptarlo a cualquier otro evento.', 'Si subes una foto tuya, la IA intentará poner un marco sobre ella y hacer que ''salgas'' de la foto.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e72bd3d4-e7e5-4446-86a1-f2a8ce7b8809', 'b3c2183f-3da9-4673-896d-6e83fab00d8f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e72bd3d4-e7e5-4446-86a1-f2a8ce7b8809', '4119e704-b41f-42c2-88e3-9ebb6eecede2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e72bd3d4-e7e5-4446-86a1-f2a8ce7b8809', '6f448522-3e5e-41c9-8d36-a9e36331b356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('c85a4a9c-d61c-430f-8525-ea36becac235', 'prompt', 'Día de Muertos (Catrina)', 'dia-de-muertos-catrina', 'Retrato hiperrealista 8K de Catrina con maquillaje dorado y rojo.', '
# Framework REAISEMP

    *   ** R(Render):** Maquillaje Catrina dorado y rojo, rostro sereno.
*   ** E(Entorno):** Oscuro, místico, luces suaves.
*   ** A(Acción):** Primer plano, mirada firme.
*   ** I(Iluminación):** Suave cinematográfica.
*   ** S(Sensación):** Misticismo, solemnidad.
*   ** E(Estilo):** Hiperrealismo 8K, detalles finos.
*   ** M(Composición):** Close - up.
*   ** P(Post):** Tonos cálidos, dorados y carmesí.
        ', 'Creative', NULL, NULL, 'advanced', '/images/cases/catrina-portrait.jpg', '{
  "title": "Retrato Catrina Día de Muertos Hiperrealista - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro femenino base sin alterar, solo maquillaje aplicado.",
      "expresion": "Serena y mística.",
      "cabello": "Peinado suelto o recogido sutil.",
      "maquillaje": "Catrina en tonos dorados y rojos."
    },
    "E_Entorno": {
      "fondo": "Oscuro con luces suaves.",
      "ambientacion": "Mística y tradicional mexicana."
    },
    "A_Accion_Postura": {
      "pose": "Primer plano centrado.",
      "mirada": "Firme hacia cámara."
    },
    "I_Iluminacion": {
      "tipo": "Luz suave cinematográfica.",
      "caracteristicas": "Resalta detalles del maquillaje."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Misticismo, tradición, solemnidad.",
      "tono": "Artístico ceremonial."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Hiperrealismo 8K.",
      "color": "Rojos, dorados, negros.",
      "textura": "Detalles extremadamente finos."
    },
    "M_Composicion_Camara": {
      "plano": "Close-up.",
      "angulo": "Neutral."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos cálidos, dorados y carmesí.",
      "claridad": "Alta para maquillaje detallado."
    }
  }
}', '# Cómo personalizar este prompt

Este prompt es ideal para retratos temáticos de alta fidelidad. Para adaptarlo a diferentes estilos o personajes, sigue estas instrucciones:

# Cambiar el Personaje
* Sustituye "Rostro femenino base" en R_Render_del_Avatar por el tipo de rostro que desees (ej: "Rostro masculino maduro", "Niño de rasgos suaves").
* Ajusta la "expresión" para cambiar el mood (ej: "Melancólica", "Orgullosa").

# Personalizar el Maquillaje
* Cambia los colores en "maquillaje" de "dorados y rojos" a "azules y plata" para un look gélido, o "neón" para un estilo cyberpunk.

# Ajustar el Entorno
* Si deseas un fondo festivo, cambia el E_Entorno a "Cementerio con miles de velas y flores de cempasúchil".', 'Adjunta tu foto de frente, con iluminación clara y sin sombras fuertes en el rostro. Asegúrate de que no haya cabello cubriendo los rasgos principales.

En tu generador preferido (Midjourney o InsightFace), carga tu foto como referencia visual de rostro.

Copia el prompt REAISEMP de este caso y añade el parámetro de referencia (comando --cref en MJ) para que la IA aplique el maquillaje de Catrina sobre tus propios rasgos.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('8f52a562-5438-431b-8c64-7f76009f1489', 'prompt', 'Blanco y Negro con Silla Plegable', 'bw-silla-plegable-denim', 'Retrato minimalista B&W en silla plegable con outfit de denim.', '
# Framework REAISEMP

    *   ** R(Render):** Rostro relajado, outfit denim.
*   ** E(Entorno):** Estudio liso minimalista.
*   ** A(Acción):** Sentada en silla plegable, pierna cruzada.
*   ** I(Iluminación):** Suave direccional, sombras nítidas.
*   ** S(Sensación):** Minimalismo cool.
*   ** E(Estilo):** B & W elegante, grano suave.
*   ** M(Composición):** Plano medio.
*   ** P(Post):** B & W contrastado.
        ', 'Portrait', NULL, NULL, 'intermediate', '/images/cases/bw-chair-denim.jpg', '{
  "title": "Retrato B&W con Denim en Silla Plegable - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro relajado, mirada suave.",
      "expresion": "Calmada, cool.",
      "cabello": "Suelto, estilo natural.",
      "indumentaria": "Chaqueta y jeans de mezclilla."
    },
    "E_Entorno": {
      "fondo": "Estudio liso minimalista.",
      "ambientacion": "Simple y moderno."
    },
    "A_Accion_Postura": {
      "pose": "Sentada con pierna cruzada en silla plegable.",
      "gestualidad": "Mano en el respaldo."
    },
    "I_Iluminacion": {
      "tipo": "Luz suave direccional.",
      "caracteristicas": "Sombras nítidas y estilo cinematográfico."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Minimalismo cool.",
      "tono": "Cinemático B&W."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Blanco y negro elegante.",
      "textura": "Grano suave analógico."
    },
    "M_Composicion_Camara": {
      "plano": "Medio.",
      "angulo": "Neutral."
    },
    "P_Postproduccion": {
      "color_grading": "B&W contrastado.",
      "grano": "Fino."
    }
  }
}', '# Adaptación de Escena y Vestuario

Este prompt evoca un estilo minimalista y urbano. Aquí te explicamos cómo llevarlo a otros contextos:

# Cambiar el Mobiliario
* Sustituye "silla plegable" por "sofá de cuero vintage" para un look más lujoso o "taburete industrial" para algo más moderno.

# Variaciones de Vestuario
* Cambia "outfit de denim" por "traje sastre oversize" o "vestido de seda" para variar el contraste de texturas en el blanco y negro.

# Control de Iluminación
* Si buscas sombras más dramáticas, cambia I_Iluminacion a "Luz dura lateral, estilo film noir".', 'Sube una foto tuya sentado en una posición similar a la de la silla(o cualquier silla que tengas en casa).No importa el fondo.

Usa esta imagen como ''Pose Reference'' o ''Image Prompt'' con un peso bajo(iw 0.5) para guiar la estructura pero permitir que la IA aplique la estética denim.

Copia el prompt y verás cómo tu pose se transforma en este retrato minimalista de alta gama.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('8f52a562-5438-431b-8c64-7f76009f1489', '61a3c407-bef7-4162-820a-bfca8dbdd1fd') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('8f52a562-5438-431b-8c64-7f76009f1489', 'b751ea3a-f9a4-40a6-87b2-c95cabb40eb5') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('ff41163c-57ea-4378-8801-dea44ff5429c', 'prompt', 'Retrato Técnico Rembrandt B&W', 'retrato-tecnico-rembrandt-bw', 'Retrato introspectivo con iluminación Rembrandt clásica y piel natural.', '
# Framework REAISEMP

    *   ** R(Render):** Piel natural sin retocar, tela con lunares.
*   ** E(Entorno):** Habitación oscura, luz de ventana.
*   ** A(Acción):** Sentada, mirada directa intensa.
*   ** I(Iluminación):** Rembrandt clásico, triángulo de luz.
*   ** S(Sensación):** Profundidad emocional.
*   ** E(Estilo):** Hiperrealismo B & W.
*   ** M(Composición):** Medio vertical.
*   ** P(Post):** Curva suave en grises.
        ', 'Portrait', NULL, NULL, 'advanced', '/images/cases/rembrandt-portrait.jpg', '{
  "title": "Retrato Técnico B&W con Iluminación Rembrandt - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro sin retocar, piel natural visible.",
      "expresion": "Introspectiva e intensa.",
      "cabello": "Suelto con mechones sueltos.",
      "indumentaria": "Tela de lunares sobre los hombros."
    },
    "E_Entorno": {
      "fondo": "Habitación oscura con leve luz de ventana.",
      "ambientacion": "Íntima y cinematográfica."
    },
    "A_Accion_Postura": {
      "pose": "Sentada con hombros expuestos.",
      "mirada": "Directa e intensa."
    },
    "I_Iluminacion": {
      "tipo": "Rembrandt clásico con octabox.",
      "caracteristicas": "Triángulo de luz bajo el ojo."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Profundidad emocional.",
      "tono": "Cine monocromático."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Hiperrealismo B&W.",
      "textura": "Piel natural sin retoque.",
      "color": "Monocromo detallado."
    },
    "M_Composicion_Camara": {
      "plano": "Medio vertical.",
      "angulo": "Neutral a altura de ojos."
    },
    "P_Postproduccion": {
      "color_grading": "Curva suave en grises.",
      "grano": "Fino clásico.",
      "contraste": "Equilibrado."
    }
  }
}', '# El Sujeto
* Este prompt funciona excepcionalmente bien con objetos. Prueba con "Busto de escultura clásica" en lugar del personaje humano.', 'Para lograr el efecto Rembrandt en tu propio rostro, adjunta una foto con iluminación lateral (puedes usar la linterna de un móvil a un lado).

Usa el comando de referencia de personaje para que la IA detecte tus facciones y aplique el triángulo de luz característico.

Asegúrate de que la referencia sea en alta resolución para que las texturas de piel sean tan naturales como en el ejemplo.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('ff41163c-57ea-4378-8801-dea44ff5429c', '28ab98e0-67b7-4f3f-8186-2206d9cb5f15') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('ff41163c-57ea-4378-8801-dea44ff5429c', '61a3c407-bef7-4162-820a-bfca8dbdd1fd') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('2b2b85e9-4f64-4894-83fa-3c05ead892b3', 'prompt', 'Close-up Pendiente Focal', 'closeup-pendiente-focal', 'Fotografía editorial enfocada en joyería y detalles de lujo.', '
# Framework REAISEMP

*   **R(Render):** Piel bronceada, vestido negro, pendiente visible.
*   **E(Entorno):** Oscuro minimalista.
*   **A(Acción):** Oreja centrada, cabeza girada.
*   **I(Iluminación):** Haz puntual fuerte.
*   **S(Sensación):** Lujo, misterio.
*   **E(Estilo):** Fashion editorial.
*   **M(Composición):** Close-up extremo.
*   **P(Post):** Cinemático oscuro.
        ', 'Fashion', NULL, NULL, 'advanced', '/images/cases/focal-earring.jpg', '{
  "title": "Retrato Close-up de Oreja Iluminada (Pendiente Focal) - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Solo parte del rostro visible, piel bronceada impecable.",
      "expresion": "Neutra y elegante.",
      "cabello": "Recogido para mostrar la oreja.",
      "indumentaria": "Vestido negro de un solo hombro."
    },
    "E_Entorno": {
      "fondo": "Oscuro minimalista.",
      "ambientacion": "Editorial de lujo."
    },
    "A_Accion_Postura": {
      "pose": "Oreja centrada en el encuadre.",
      "gestualidad": "Cabeza ligeramente girada."
    },
    "I_Iluminacion": {
      "tipo": "Haz puntual fuerte.",
      "caracteristicas": "Enfocado solo en la oreja y pendiente."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Lujo, misterio.",
      "tono": "Moderno minimalista."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fashion editorial.",
      "color": "Oscuros profundos con acentos metálicos."
    },
    "M_Composicion_Camara": {
      "plano": "Close-up extremo.",
      "angulo": "Neutral."
    },
    "P_Postproduccion": {
      "color_grading": "Cinemático oscuro.",
      "claridad": "Alta en zona focal."
    }
  }
}', '# Modelado de Piel
* Ajusta R_Render para que coincida con tu marca: "Piel de porcelana", "Piel madura con carácter".', 'Toma una foto de tu producto (reloj, anillo, accesorio) con un fondo limpio.

Sube la imagen como referencia de estilo y estructura de producto.

Aplica el prompt detallado y ajusta los parámetros de visualización para que el brillo metálico de tu producto resalte bajo el haz puntual de luz.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('2b2b85e9-4f64-4894-83fa-3c05ead892b3', '39e6ba14-3546-45c6-8436-7042224a2f83') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('2b2b85e9-4f64-4894-83fa-3c05ead892b3', 'ce77fb6c-856b-4b9f-8842-0af2198ad9d4') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('1206e79a-4817-46e9-8f5e-7762a8d19216', 'prompt', 'Retrato de Poder en Traje Negro', 'retrato-poder-traje-negro', 'Retrato editorial empoderado con traje negro en ambiente minimalista.', '
# Framework REAISEMP

        *   ** R(Render):** Expresión confiada, traje negro, cabello brillante.
*   ** E(Entorno):** Negro profundo.
*   ** A(Acción):** Sentada, mano en mentón.
*   ** I(Iluminación):** Soft light controlada.
*   ** S(Sensación):** Poder, elegancia, autoridad.
*   ** E(Estilo):** Moda editorial alto nivel.
*   ** M(Composición):** Plano medio.
*   ** P(Post):** Tonos fríos, acentos cálidos.
        ', 'Fashion', NULL, NULL, 'intermediate', '/images/cases/power-suit-portrait.jpg', '{
  "title": "Retrato de Poder en Traje Negro (Estudio) - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Expresión confiada, mirada elegante.",
      "cabello": "Largo, oscuro y brillante.",
      "indumentaria": "Traje negro a medida."
    },
    "E_Entorno": {
      "fondo": "Negro profundo.",
      "ambientacion": "Minimalismo elegante."
    },
    "A_Accion_Postura": {
      "pose": "Sentada con piernas cruzadas.",
      "gestualidad": "Mano en el mentón."
    },
    "I_Iluminacion": {
      "tipo": "Soft light controlada.",
      "caracteristicas": "Resalta el brillo del cabello y traje."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Poder, elegancia, autoridad.",
      "tono": "Editorial empoderado."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Moda editorial de alto nivel.",
      "color": "Negros y dorados sutiles."
    },
    "M_Composicion_Camara": {
      "plano": "Medio.",
      "angulo": "Neutral."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos fríos con acentos cálidos.",
      "claridad": "Alta."
    }
  }
}', '# Branding Personal y Autoridad

Este prompt proyecta poder. Úsalo para diferentes perfiles:

# Perfiles Corporativos
* Cambia "traje negro" por "blazer de lino" para un look tech-founder o "atuendo de yoga" para una marca de wellness con autoridad.

# Pose de Poder
* Ajusta A_Accion a "Brazos cruzados, mirada desafiante" para máxima fuerza, o "Mirando al horizonte, mano en barbilla" para un tono más visionario.

# Ajuste de Color
* Para marcas más dinámicas, cambia el P_Post a "Colores vibrantes saturados" o "Gradiente azul corporativo".', 'Sube una foto tuya con una expresión de confianza. La IA mantendrá tu identidad mientras aplica la iluminación y el estilo editorial del traje negro.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1206e79a-4817-46e9-8f5e-7762a8d19216', 'f8e34eef-2319-428d-839c-d2a1b1c1a43e') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1206e79a-4817-46e9-8f5e-7762a8d19216', '221b2f13-388c-4c70-8cfa-0be8c8b8d1b9') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('9d6d77f2-2b64-4690-8d75-21ca8e190a82', 'prompt', 'Retexturización de Vidrio Holográfico', 'nano-banana-case-93', 'Transforma cualquier objeto en una versión de vidrio con efectos iridiscentes y holográficos.', '
Retexturiza la imagen adjunta basándote en la siguiente estética JSON:

    ```json
{
  "style": "photorealistic 3D render",
  "material": "glass with transparent and iridescent effects",
  "surface_texture": "smooth, polished with subtle reflections and refractive effects",
  "lighting": {
    "type": "studio HDRI",
    "intensity": "high",
    "direction": "angled top-left key light and ambient fill",
    "accent_colors": ["blue", "green", "purple"],
    "reflections": true,
    "refractions": true,
    "dispersion_effects": true,
    "bloom": true
  },
  "color_scheme": {
    "primary": "transparent with iridescent blue, green, and purple hues",
    "secondary": "crystal-clear with subtle chromatic shifts",
    "highlights": "soft, glowing accents reflecting rainbow-like effects",
    "rim_light": "soft reflective light around edges"
  },
  "background": {
    "color": "black",
    "vignette": true,
    "texture": "none"
  },
  "post_processing": {
    "chromatic_aberration": true,
    "glow": true,
    "high_contrast": true,
    "sharp_details": true
  }
}
```

**Características clave:**
*   Material de vidrio con efectos transparentes e iridiscentes
*   Iluminación de estudio HDRI de alta intensidad
*   Efectos de reflexión, refracción y dispersión
*   Esquema de color con tonos azules, verdes y púrpuras iridiscentes
*   Fondo negro con viñeta
*   Post-procesamiento con aberración cromática, brillo y alto contraste
        ', 'Generative AI', NULL, NULL, 'intermediate', '/images/cases/jewelry-holographic.jpg', '{
  "title": "Glass Retexturing",
  "style": "photorealistic 3D render",
  "material": "glass with transparent and iridescent effects",
  "surface_texture": "smooth, polished with subtle reflections and refractive effects",
  "lighting": {
    "type": "studio HDRI",
    "intensity": "high",
    "direction": "angled top-left key light and ambient fill",
    "accent_colors": [
      "blue",
      "green",
      "purple"
    ],
    "reflections": true,
    "refractions": true,
    "dispersion_effects": true,
    "bloom": true
  },
  "color_scheme": {
    "primary": "transparent with iridescent blue, green, and purple hues",
    "secondary": "crystal-clear with subtle chromatic shifts",
    "highlights": "soft, glowing accents reflecting rainbow-like effects",
    "rim_light": "soft reflective light around edges"
  },
  "background": {
    "color": "black",
    "vignette": true,
    "texture": "none"
  },
  "post_processing": {
    "chromatic_aberration": true,
    "glow": true,
    "high_contrast": true,
    "sharp_details": true
  }
}', '# Retexturización Creativa
Este sistema permite transformar cualquier objeto en vidrio. Cambia los "accent_colors" de ["blue", "green", "purple"] a tus colores de marca para una identidad visual única.', 'Adjunta la imagen del objeto que deseas retexturizar. El sistema Nano Banana respetará la forma original pero aplicará todas las propiedades físicas del vidrio holográfico.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9d6d77f2-2b64-4690-8d75-21ca8e190a82', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('d7e03f3b-2b11-4038-845b-b658b04f8a24', 'prompt', 'Figura de Anime Personalizada', 'nano-banana-case-96', 'Genera una foto de figura estilo anime colocada en un escritorio desde una perspectiva casual.', '
Genera una foto de figura estilo anime colocada en un escritorio, presentada desde una perspectiva casual y cotidiana como si fuera tomada con un teléfono móvil.

**Características del modelo:**
*   **Basado en foto adjunta:** El modelo de la figura se basa en la foto del personaje adjunta, reproduciendo con precisión la postura completa del cuerpo, la expresión facial y el estilo de vestimenta de la persona en la foto.
*   **Renderizado completo:** Asegúrate de que toda la figura esté completamente renderizada.
*   **Diseño exquisito:** El diseño general es exquisito y detallado.
*   **Colores y texturas:** El cabello y la ropa presentan colores degradados naturales y suaves, con texturas finas.
*   **Estilo anime japonés:** El estilo se inclina hacia el anime japonés, rico en detalles, con texturas realistas y una apariencia hermosa.

**Ambiente:**
*   Colocada en un escritorio
*   Perspectiva casual como una foto tomada con teléfono móvil
*   Ambiente de oficina o escritorio realista
        ', 'Generative AI', NULL, NULL, 'intermediate', '/images/cases/anime-figure-desk.jpg', '{
  "title": "Custom Anime Figure",
  "style": "Japanese anime, detailed, realistic textures",
  "subject": "Anime-style figure based on attached character photo",
  "requirements": {
    "posture": "Full body posture matching reference photo",
    "expression": "Facial expression matching reference",
    "clothing": "Clothing style matching reference",
    "rendering": "Entire figure fully rendered"
  },
  "design": {
    "quality": "Exquisite and detailed",
    "hair": "Natural, soft gradient colors with fine textures",
    "clothing": "Natural, soft gradient colors with fine textures",
    "appearance": "Beautiful, realistic textures"
  },
  "setting": {
    "location": "Desktop",
    "perspective": "Casual, everyday snapshot as if taken with mobile phone",
    "environment": "Office or desk setting"
  }
}', '# Crea tu propia Figura
Sustituye la descripción del personaje por la tuya. Puedes especificar "traje de samurái" o "ropa futurista" manteniendo el estilo de figura coleccionable.', 'Adjunta una foto de cuerpo completo de la persona que quieres convertir en figura. Asegúrate de que la ropa sea distintiva para que la IA la capture en el estilo anime.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.841Z', '2026-08-29T17:52:58.841Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d7e03f3b-2b11-4038-845b-b658b04f8a24', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('c59f7b34-70b7-4a31-80b7-e31e53f491b6', 'prompt', 'Bobblehead Generator from Selfie', 'nano-banana-case-95', 'Convierte cualquier selfie en un divertido bobblehead coleccionable sobre una estantería.', '
Convierte esta foto en un bobblehead: agranda la cabeza ligeramente, mantén el rostro preciso y caricaturiza el cuerpo. [Colócalo en una estantería de libros].
        ', 'Generative AI', NULL, NULL, 'intermediate', '/images/cases/bobblehead.jpg', '{
  "title": "Bobblehead Generator from Selfie",
  "style": "Cartoon / Bobblehead",
  "subject": "Bobblehead based on photo",
  "requirements": {
    "head": "Enlarged slightly",
    "face": "Accurate to reference",
    "body": "Cartoonified",
    "setting": "Placed on a bookshelf"
  }
}', '# Crea tu propio Bobblehead
Cambia el entorno de "estantería de libros" por "tablero de coche" o "oficina moderna". También puedes ajustar el nivel de "caricaturización" del cuerpo.', 'Sube una selfie clara con buena iluminación. La IA detectará tus rasgos faciales para mantener la precisión en la cabeza del bobblehead mientras transforma el resto en una figura coleccionable.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c59f7b34-70b7-4a31-80b7-e31e53f491b6', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('626ed395-b020-483d-8ab1-e04568828f62', 'prompt', 'Selfie de Animales en Monumentos', 'nano-banana-case-94', 'Selfie grupal de tres animales con expresiones realistas frente a monumentos icónicos.', '
A close-up selfie of three [animal type] with different expressions in front of the iconic [landmark], taken at golden hour with cinematic lighting. 

**Características claves:**
*   **Posado:** Los animales están cerca de la cámara con sus cabezas tocándose, imitando un pose de selfie.
*   **Expresiones:** Muestra expresiones alegres, sorprendidas y tranquilas (ej: un perro sonriendo, un gato asombrado, un capibara relajado).
*   **Fondo:** Detalle arquitectónico completo del [landmark] suavemente iluminado.
*   **Estilo:** Fotográfico, estilo cartoon realista, alto detalle.
        ', 'Generative AI', NULL, NULL, 'intermediate', '/images/cases/animals-selfie.jpg', '{
  "title": "Three Animals Selfie at Landmark",
  "style": "Photographic, Realistic Cartoon",
  "subject": "Three [animal type] taking a selfie",
  "requirements": {
    "expressions": "Joyful, surprised, and calm",
    "interaction": "Heads touching, mimicking selfie pose",
    "background": "Iconic [landmark] with architectural detail",
    "lighting": "Golden hour, cinematic"
  },
  "ratio": "1:1"
}', '# Personaliza tu Selfie Animal
Sustituye [animal type] por tus favoritos (ej: "golden retriever, tabby cat, and capybara"). Cambia [landmark] por cualquier lugar del mundo (ej: "Torre Eiffel", "Gran Muralla").', 'Este prompt no requiere imagen de referencia de rostro, pero puedes usar una foto de tu propia mascota para guiar el estilo de los animales usando pesos de imagen bajos.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('626ed395-b020-483d-8ab1-e04568828f62', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('f3cd82b5-8d2d-4d01-8b74-7cb69f29a51e', 'prompt', 'Anuncio Creativo: Objeto Real y Doodle', 'nano-banana-case-100', 'Anuncio minimalista y creativo con un objeto real integrado en un doodle.', '
A minimalist and creative advertisement set on a clean white background.

*   **Concept:** A real [Real Object] is integrated into a hand-drawn black ink doodle, using loose, playful lines.
*   **Interaction:** The [Doodle Concept] interacts with the object in a clever, imaginative way.
*   **Text:** Include bold black [Ad Copy] text at the top or center.
*   **Branding:** Place the [Brand Logo] clearly at the bottom.
*   **Style:** The visual should be clean, fun, high-contrast, and conceptually smart.
        ', 'Generative AI', NULL, NULL, 'intermediate', '/images/cases/creative-doodle.jpg', '{
  "title": "Creative Ad with Real Object and Hand-Drawn Doodle",
  "style": "Minimalist, Mixed Media",
  "elements": {
    "object": "[Real Object]",
    "doodle": "[Doodle Concept]",
    "copy": "[Ad Copy]",
    "logo": "[Brand Logo]"
  },
  "description": "A real object integrated into a hand-drawn black ink doodle on a clean white background."
}', '# Publicidad Ingeniosa
Sustituye [Real Object] por tu producto. Juega con el [Doodle Concept] para crear una interacción divertida (ej: una hamburguesa real que es el sol en un dibujo de playa).', 'Sube una foto de alta calidad de tu producto físico sobre un fondo neutro. La IA extraerá el objeto y lo integrará perfectamente con los trazos manuales.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('f3cd82b5-8d2d-4d01-8b74-7cb69f29a51e', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('28372728-9af8-453c-827e-7ae8b0f141b6', 'prompt', 'Retrato Artístico en Blanco y Negro', 'nano-banana-case-99', 'Retrato artístico en blanco y negro de alta resolución estilo editorial.', '
A high-resolution black and white portrait artwork, in an editorial and fine art photography style.

*   **Atmosphere:** The background features a soft gradient, transitioning from mid-gray to almost pure white, creating a sense of depth and tranquility.
*   **Texture:** Fine film grain adds a tactile, analog-like softness to the image, reminiscent of classic black and white photography.
*   **Subject:** On the right side of the frame, a blurred yet striking face subtly emerges from the shadows, not in a traditional pose, but as if caught in a moment of thought or breath.
*   **Detail:** Only a part of his face is visible: perhaps an eye, a cheekbone, the contour of his lips, evoking a sense of mystery, intimacy, and elegance.
*   **Lighting:** A gentle, directional light, softly diffused, caresses the curve of his cheek or glints in his eye—this is the emotional core of the image.
*   **Composition:** The rest of the composition is dominated by ample negative space, intentionally kept simple, allowing the image to breathe. There are no texts, no logos in the image—only an interplay of light, shadow, and emotion.
        ', 'Generative AI', NULL, NULL, 'intermediate', '/images/cases/bw-portrait.jpg', '{
  "title": "Black and White Portrait Art",
  "style": "Editorial, Fine Art Photography",
  "elements": {
    "background": "Soft gradient mid-gray to white",
    "texture": "Fine film grain",
    "lighting": "Gentle, directional, diffused",
    "composition": "Negative space, off-center subject"
  },
  "description": "Abstract yet deeply human black and white portrait, intimate and timeless."
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('28372728-9af8-453c-827e-7ae8b0f141b6', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('4088d998-ad74-441f-8b29-b6e4e3f11bed', 'prompt', 'Silueta Borrosa tras Vidrio Esmerilado', 'nano-banana-case-98', 'Fotografía en blanco y negro de una silueta borrosa tras una superficie esmerilada.', '
A black and white photograph shows the blurred silhouette of a [SUBJECT] behind a frosted or translucent surface.

*   **Contrast:** The [PART] is sharply defined and pressed against the surface, creating a stark contrast with the rest of the hazy, indistinct figure.
*   **Background:** The background is a soft gradient of gray tones, enhancing the mysterious and artistic atmosphere.
*   **Mood:** Mysterious, artistic, abstract.
        ', 'Generative AI', NULL, NULL, 'intermediate', '/images/cases/blurred-silhouette.jpg', '{
  "title": "Blurred Silhouette Behind Frosted Glass",
  "style": "Abstract Photography, B&W",
  "elements": {
    "subject": "[SUBJECT]",
    "focus_point": "[PART] pressed against glass",
    "surface": "Frosted/Translucent",
    "background": "Soft gray gradient"
  },
  "description": "Blurred silhouette behind frosted glass with one sharp detail pressed against the surface."
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4088d998-ad74-441f-8b29-b6e4e3f11bed', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('389e7419-4b7e-44fc-8ec4-4ebb7529a78c', 'prompt', 'Muñeca de Tejido Acogedora', 'nano-banana-case-97', 'Fotografía en primer plano de una muñeca de tejido hecha a mano sostenida con suavidad.', '
A close-up, professionally composed photograph showcasing a hand-crocheted yarn doll gently cradled by two hands.

*   **Subject:** The doll has a rounded shape, featuring the cute chibi image of the [upload image] character, with vivid contrasting colors and rich details.
*   **Interaction:** The hands holding the doll are natural and gentle, with clearly visible finger postures, and natural skin texture and light/shadow transitions, conveying a warm and realistic touch.
*   **Background:** The background is slightly blurred, depicting an indoor environment with a warm wooden tabletop and natural light streaming in from a window, creating a comfortable and intimate atmosphere.
*   **Mood:** The overall image conveys a sense of exquisite craftsmanship and cherished warmth.
        ', 'Generative AI', NULL, NULL, 'intermediate', '/images/cases/cozy-crochet-doll.jpg', '{
  "title": "Cozy Hand-Crocheted Yarn Doll",
  "style": "Professional Product Photography, Cozy",
  "elements": {
    "subject": "Hand-crocheted yarn doll (chibi style)",
    "action": "Gently cradled by two hands",
    "lighting": "Natural window light",
    "background": "Blurred warm wooden tabletop",
    "atmosphere": "Comfortable, intimate, warm"
  },
  "description": "Close-up of a hand-crocheted doll held gently, highlighting craftsmanship and warmth."
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('389e7419-4b7e-44fc-8ec4-4ebb7529a78c', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('a60812a2-68ab-43f1-85c5-6ddc205e5a23', 'prompt', 'Retrato Cinematográfico Monocromático', 'retrato-cinematografico-monocromatico', 'Retrato en B&W hiperrealista 8K con iluminación Chiaroscuro dramática.', '
# Framework REAISEMP

*   **R (Render):** Modelo femenina, rasgos suaves, mirada profunda, piel natural con textura.
*   **E (Entorno):** Fondo negro aterciopelado, rayos difusos estilo acuático.
*   **A (Acción):** Medio movimiento, cabeza girada, mirada directa.
*   **I (Iluminación):** Chiaroscuro dramático, rayos diagonales.
*   **S (Sensación):** Misterio, elegancia introspectiva.
*   **E (Estilo):** B&W hiperrealista 8K, grano fino.
*   **M (Composición):** Primer plano, centrado dramático.
*   **P (Post):** Alto contraste, color grading monocromo.
        ', 'Portrait', NULL, NULL, 'advanced', '/images/cases/monochromatic-portrait.jpg', '{
  "title": "Retrato Cinematográfico Monocromático (Chiaroscuro) - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Modelo femenina con rasgos suaves y expresivos, mirada profunda y piel con textura natural visible bajo la luz.",
      "expresion": "Serena, introspectiva, emocional.",
      "cabello": "Ligeramente elevado por movimiento, mechones flotando.",
      "coherencia": "Proporciones realistas, rostro enfocado y nítido."
    },
    "E_Entorno": {
      "fondo": "Negro aterciopelado con rayos difusos que imitan luz acuática.",
      "ambientacion": "Cinemático en claroscuro."
    },
    "A_Accion_Postura": {
      "pose": "Capturada en medio movimiento, cabeza girada sutilmente.",
      "mirada": "Directa, emocionalmente cargada."
    },
    "I_Iluminacion": {
      "tipo": "Luz dramática de claroscuro.",
      "caracteristicas": "Rayos diagonales, fuertes contrastes B&W.",
      "resultado": "Esculpido facial dramático."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Misterio, elegancia introspectiva.",
      "tono": "Editorial analógico."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "B&W hiperrealista 8K.",
      "textura": "Grano fino cinematográfico.",
      "color": "Monocromo de alto contraste."
    },
    "M_Composicion_Camara": {
      "plano": "Primer plano cinematográfico.",
      "angulo": "Frontal con ligera diagonal.",
      "encuadre": "Centrado dramático."
    },
    "P_Postproduccion": {
      "color_grading": "Monocromo profundo.",
      "contraste": "Alto.",
      "grano": "Fino tipo película."
    }
  }
}', '# Dominio del Claroscuro
Este estilo resalta las texturas. Si quieres un look más suave, cambia I_Iluminacion a "Luz suave de ventana".', 'Adjunta una foto con iluminación lateral. La IA potenciará el contraste y añadirá el grano cinematográfico manteniendo tu identidad.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a60812a2-68ab-43f1-85c5-6ddc205e5a23', '61a3c407-bef7-4162-820a-bfca8dbdd1fd') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a60812a2-68ab-43f1-85c5-6ddc205e5a23', '39b84df0-b2fc-4187-87ba-d6dd2b217bed') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('5e9ac5d7-87f7-4dd0-8a73-b873ad4f278e', 'prompt', 'Alta Costura Cyberpunk', 'alta-costura-cyberpunk', 'Estilo high-fashion futurista con iluminación dual neón (Amarillo/Azul).', '
# Framework REAISEMP

*   **R (Render):** Rostro estilizado, mirada intensa, cabello bob minimalista.
*   **E (Entorno):** Fondo negro, ambiente cyberpunk limpio.
*   **A (Acción):** De espaldas con giro, mirada fuerte a cámara.
*   **I (Iluminación):** Dual Neón (Izquierda: Amarillo/Naranja, Derecha: Azul eléctrico).
*   **S (Sensación):** Futurismo, energía eléctrica.
*   **E (Estilo):** High-fashion, colores saturados.
*   **M (Composición):** Medio corto, silueta enfatizada.
        ', 'Cyberpunk', NULL, NULL, 'intermediate', '/images/cases/cyberpunk-fashion.jpg', '{
  "title": "Alta Costura Cyberpunk con Iluminación Dual - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro femenino estilizado con mirada intensa y elegante.",
      "expresion": "Confianza moderna.",
      "cabello": "Corte bob claro minimalista.",
      "coherencia": "Modelado editorial preciso."
    },
    "E_Entorno": {
      "fondo": "Negro absoluto.",
      "ambientacion": "Futurista cyberpunk limpio."
    },
    "A_Accion_Postura": {
      "pose": "De espaldas con giro al hombro.",
      "mirada": "Fuerte hacia cámara."
    },
    "I_Iluminacion": {
      "tipo": "Luz de neón dual.",
      "caracteristicas": {
        "lado_izquierdo": "Amarillo–naranja intenso.",
        "lado_derecho": "Azul eléctrico."
      }
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Futurismo, energía eléctrica.",
      "tono": "Editorial de moda moderna."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "High-fashion cyberpunk.",
      "color": "Vibrante, saturado.",
      "textura": "Ultra definida."
    },
    "M_Composicion_Camara": {
      "plano": "Medio corto.",
      "angulo": "Neutral frontal con giro.",
      "encuadre": "Silueta enfatizada."
    },
    "P_Postproduccion": {
      "color_grading": "Dual-tone extremo.",
      "claridad": "Muy alta."
    }
  }
}', '# Estética Futurista
Cambia los colores de neón en I_Iluminacion para adaptarlos a tu marca (ej: "Violeta y Cian"). Puedes cambiar el peinado en R_Render para un look más agresivo.', 'Usa una foto con iluminación fuerte desde un lado. La IA integrará los colores neón sobre tu rostro manteniendo la pose de giro al hombro.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5e9ac5d7-87f7-4dd0-8a73-b873ad4f278e', '23e74b4b-008a-4a0d-870b-f8297beba9c9') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5e9ac5d7-87f7-4dd0-8a73-b873ad4f278e', 'a786e011-fb3c-4dec-804d-66510df1dd79') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('e9257cc1-4147-4e69-80b8-f5c69aadb9df', 'prompt', 'Cottagecore en Césped', 'cottagecore-en-cesped', 'Retrato cenital relajado sobre césped, estilo romántico y natural.', '
# Framework REAISEMP

*   **R (Render):** Rostro suave, pecas, cabello extendido radialmente.
*   **E (Entorno):** Césped verde cuidado.
*   **A (Acción):** Recostada, vista cenital, relajada.
*   **I (Iluminación):** Luz natural suave, sin sombras duras.
*   **S (Sensación):** Calma, pureza, cottagecore.
*   **E (Estilo):** Editorial romántico, colores verdes apagados.
*   **M (Composición):** Top-down puro, rostro centrado.
        ', 'Portrait', NULL, NULL, 'beginner', '/images/cases/cottagecore-grass.jpg', '{
  "title": "Retrato Cottagecore sobre Césped (Ángulo Cenital) - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro femenino suave con maquillaje natural y pecas visibles.",
      "expresion": "Serena y delicada.",
      "cabello": "Extendido radialmente alrededor de la cabeza.",
      "coherencia": "Proporciones naturales y armoniosas."
    },
    "E_Entorno": {
      "fondo": "Césped verde cuidado y limpio.",
      "ambientacion": "Cottagecore naturalista."
    },
    "A_Accion_Postura": {
      "pose": "Recostada mirando hacia la cámara cenital.",
      "gestualidad": "Relajada y estable."
    },
    "I_Iluminacion": {
      "tipo": "Luz natural suave.",
      "caracteristicas": "Sin sombras duras."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Calma, pureza, naturaleza.",
      "tono": "Romántico suave."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía editorial cottagecore.",
      "color": "Verdes apagados, tonos cálidos.",
      "textura": "Suave y limpia."
    },
    "M_Composicion_Camara": {
      "plano": "Cenital mid/close-up.",
      "angulo": "Top-down puro.",
      "encuadre": "Rostro centrado."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta suave vintage.",
      "claridad": "Moderada."
    }
  }
}', '# Estilo Natural
Para un look más otoñal, cambia el E_Entorno a "Césped con hojas secas en tonos ocres". También puedes añadir "flores silvestres" alrededor del cabello en R_Render.', 'Adjunta una foto mirando hacia arriba (ángulo cenital). La IA colocará tu rostro en el centro del césped y extenderá tu cabello de forma artística.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e9257cc1-4147-4e69-80b8-f5c69aadb9df', 'bf4d518b-880f-498f-85db-fca25118d772') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e9257cc1-4147-4e69-80b8-f5c69aadb9df', 'cda8407e-00a7-4c33-88ef-08792370b94f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('dea53267-ffa7-4734-8a34-10049824378e', 'prompt', 'Artístico Bajo Cascada', 'artistico-bajo-cascada', 'Retrato etéreo con agua y reflejos, paleta de azules fríos y rosa suave.', '
# Framework REAISEMP

*   **R (Render):** Rostro suave, cabello mojado, figura realista.
*   **E (Entorno):** Cascada difuminada, agua cristalina.
*   **A (Acción):** De pie bajo el agua, mirada contemplativa.
*   **I (Iluminación):** Natural filtrada, reflejos acuáticos.
*   **S (Sensación):** Serenidad, fuerza natural.
*   **E (Estilo):** Realismo artístico, gotas detalladas.
*   **M (Composición):** Plano 3/4, modelo centrada.
        ', 'Artistic', NULL, NULL, 'advanced', '/images/cases/artistic-waterfall.jpg', '{
  "title": "Retrato Artístico Bajo Cascada en Bikini Rosa - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro suave con expresión tranquila.",
      "expresion": "Calma elegante.",
      "cabello": "Mojado cayendo sobre los hombros.",
      "coherencia": "Figura proporcionada y realista."
    },
    "E_Entorno": {
      "fondo": "Cascada difuminada, agua cristalina.",
      "ambientacion": "Natural etérea."
    },
    "A_Accion_Postura": {
      "pose": "De pie bajo el agua parcialmente sumergida.",
      "mirada": "Suave y contemplativa."
    },
    "I_Iluminacion": {
      "tipo": "Luz natural filtrada.",
      "caracteristicas": "Reflejos acuáticos brillantes."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Serenidad y fuerza natural.",
      "tono": "Fantástico realista."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Realismo artístico hiper detallado.",
      "color": "Azules fríos y rosa suave.",
      "textura": "Gotas de agua detalladas."
    },
    "M_Composicion_Camara": {
      "plano": "3/4.",
      "angulo": "Neutral cinematográfico.",
      "encuadre": "Modelo centrada."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos fríos acuáticos.",
      "claridad": "Alta."
    }
  }
}', '# Fantasía Acuática
Si prefieres un entorno más oscuro, cambia el E_Entorno a "Cueva mágica con cascada de neón" y ajusta los colores en E_visual a "Púrpuras y Turquesas".', 'Sube una foto tuya con el cabello suelto. La IA simulará el efecto de cabello mojado y las gotas de agua sobre tu piel.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('dea53267-ffa7-4734-8a34-10049824378e', 'b6e1e1df-5bb3-4020-8c9f-985bb023780f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('dea53267-ffa7-4734-8a34-10049824378e', 'a38533b6-c17e-4499-86ff-90e5d8fb4d3c') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('919d250e-0268-4667-851d-5452a3a2a2e9', 'prompt', 'Neon Noir Cabello Mojado', 'neon-noir-cabello-mojado', 'Close-up intenso con piel húmeda y contraste Teal-Orange.', '
# Framework REAISEMP

*   **R (Render):** Mirada intensa, piel húmeda brillante, cabello oscuro pegado.
*   **E (Entorno):** Degradado teal-esmeralda.
*   **A (Acción):** Mano en el cabello, tensión visual.
*   **I (Iluminación):** Dual dramática (Naranja vs Azul).
*   **S (Sensación):** Tensión, fuerza, misterio.
*   **E (Estilo):** Neon noir moderno, hyperrealista.
*   **M (Composición):** Close-up frontal riguroso.
        ', 'Noir', NULL, NULL, 'intermediate', '/images/cases/neon-noir-wet.jpg', '{
  "title": "Retrato Neon Noir con Cabello Mojado - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Mirada intensa, piel húmeda brillante.",
      "expresion": "Poder y misterio.",
      "cabello": "Oscuro, mojado, pegado al rostro.",
      "coherencia": "Fotorrealismo editorial."
    },
    "E_Entorno": {
      "fondo": "Degradado teal–esmeralda.",
      "ambientacion": "Neon noir moderno."
    },
    "A_Accion_Postura": {
      "pose": "Close-up con mano en el cabello.",
      "mirada": "Directa intensa."
    },
    "I_Iluminacion": {
      "tipo": "Luz dual dramática.",
      "caracteristicas": {
        "izquierda": "Naranja cálido.",
        "derecha": "Azul frío."
      }
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Tensión visual, fuerza interior.",
      "tono": "Noir vibrante."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Moda nocturna hiperrealista.",
      "color": "Contrastes duros teal-orange.",
      "textura": "Piel húmeda definida."
    },
    "M_Composicion_Camara": {
      "plano": "Close-up.",
      "angulo": "Frontal.",
      "encuadre": "Rostro centrado en tensión."
    },
    "P_Postproduccion": {
      "color_grading": "Teal–orange.",
      "claridad": "Extrema.",
      "efectos": "Volumetric light suave."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('919d250e-0268-4667-851d-5452a3a2a2e9', 'ec694f99-cfb9-45c8-8773-16d8073dc205') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('919d250e-0268-4667-851d-5452a3a2a2e9', 'f9b86224-212f-4a88-8d45-c8a30140e485') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('f908f971-3014-41a4-859e-e45a8d1bc08d', 'prompt', 'Neon Noir Rubia Platino', 'neon-noir-rubia-platino', 'Elegancia futurista con iluminación split roja y azul.', '
# Framework REAISEMP

*   **R (Render):** Maquillaje rojo intenso, rubia platino, ondas.
*   **E (Entorno):** Negro total, neon noir.
*   **A (Acción):** Cabeza hacia atrás, ojos cerrados.
*   **I (Iluminación):** Split lighting (Rojo vs Azul).
*   **S (Sensación):** Dramatismo introspectivo.
*   **E (Estilo):** Hiperrealismo, colores saturados.
*   **M (Composición):** Medio corto, ángulo bajo.
*   **P (Post):** Grading dual rojo/azul.
        ', 'Noir', NULL, NULL, 'intermediate', '/images/cases/neon-noir-blonde.jpg', '{
  "title": "Retrato Neon Noir Rubia Platino (Ojos Cerrados) - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro definido con maquillaje rojo intenso.",
      "expresion": "Relajada y elegante.",
      "cabello": "Rubio platino con ondas.",
      "coherencia": "Look editorial realista."
    },
    "E_Entorno": {
      "fondo": "Negro total.",
      "ambientacion": "Neon noir intenso."
    },
    "A_Accion_Postura": {
      "pose": "Cabeza inclinada hacia atrás.",
      "mirada": "Ojos cerrados."
    },
    "I_Iluminacion": {
      "tipo": "Split lighting neon.",
      "caracteristicas": {
        "rojo": "Lado izquierdo.",
        "azul": "Lado derecho."
      }
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Dramatismo introspectivo.",
      "tono": "Elegante y futurista."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Hiperrealismo neon noir.",
      "color": "Rojo–azul saturado.",
      "textura": "Piel suave, brillante."
    },
    "M_Composicion_Camara": {
      "plano": "Medio corto.",
      "angulo": "Ligeramente bajo.",
      "encuadre": "Rostro y cuello enfatizados."
    },
    "P_Postproduccion": {
      "color_grading": "Dual rojo/azul.",
      "claridad": "Muy alta."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('f908f971-3014-41a4-859e-e45a8d1bc08d', 'ec694f99-cfb9-45c8-8773-16d8073dc205') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('f908f971-3014-41a4-859e-e45a8d1bc08d', '839ae9e7-b490-4d4f-8d29-fcce365aa1f0') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('22119ec7-6d92-463d-821d-645530848a2f', 'prompt', 'Neon Halo Rojo', 'neon-halo-rojo', 'Retrato poderoso con backlight de neón rojo formando un halo.', '
# Framework REAISEMP

*   **R (Render):** Labios intensos, cabello con ondas rojizas.
*   **E (Entorno):** Oscuro, aro de neón rojo detrás.
*   **A (Acción):** Frontal, mirada directa.
*   **I (Iluminación):** Backlight de neón, efecto halo.
*   **S (Sensación):** Poder visual, cyber noir.
*   **E (Estilo):** Editorial, rojo dominante.
*   **M (Composición):** Primer plano, halo centrado.
        ', 'Creative', NULL, NULL, 'advanced', '/images/cases/neon-halo-red.jpg', '{
  "title": "Retrato con Halo de Neón Rojo - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro femenino iluminado por luz roja, labios intensos.",
      "expresion": "Confianza elegante.",
      "cabello": "Ondas rojizas iluminadas por el halo."
    },
    "E_Entorno": {
      "fondo": "Oscuro total.",
      "elemento": "Aro de neón rojo detrás de la cabeza."
    },
    "A_Accion_Postura": {
      "pose": "Head & shoulders frontal.",
      "mirada": "Directa intensa."
    },
    "I_Iluminacion": {
      "tipo": "Backlight de neón.",
      "caracteristicas": "Halo perfecto alrededor del rostro."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Poder visual.",
      "tono": "Cyber noir elegante."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Neon noir editorial.",
      "color": "Rojo dominante.",
      "textura": "Alta claridad."
    },
    "M_Composicion_Camara": {
      "plano": "Primer plano.",
      "angulo": "Neutral.",
      "encuadre": "Halo centrado."
    },
    "P_Postproduccion": {
      "color_grading": "Rojo saturado.",
      "contraste": "Alto."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('22119ec7-6d92-463d-821d-645530848a2f', 'b09a2ddd-9b88-4912-8ed1-9072aa0c7ce4') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('22119ec7-6d92-463d-821d-645530848a2f', 'afcf34a4-71d6-412e-8b63-575d2ee59764') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('02c76661-49d5-4f4c-8e25-3ce76f25e87c', 'prompt', 'Retro Glam Cabriolet', 'retro-glam-cabriolet', 'Editorial de moda estilo Vogue retro en un descapotable rojo.', '
# Framework REAISEMP

*   **R (Render):** Gafas redondas retro, actitud sofisticada.
*   **E (Entorno):** Horizonte marino, cabriolet escarlata.
*   **A (Acción):** Al volante, mirando al espectador.
*   **I (Iluminación):** Sol de mediodía, sombras duras.
*   **S (Sensación):** Lujo, libertad, verano.
*   **E (Estilo):** Retro glam ultra detallado.
*   **M (Composición):** Medium shot.
        ', 'Fashion', NULL, NULL, 'intermediate', '/images/cases/retro-glam-cabriolet.jpg', '{
  "title": "Retrato Retro-Glam en Cabriolet con Horizonte Marino - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Modelo con gafas redondas retro.",
      "expresion": "Actitud glam sofisticada.",
      "cabello": "Al viento."
    },
    "E_Entorno": {
      "fondo": "Horizonte del océano.",
      "elementos": "Cabriolet escarlata brillante."
    },
    "A_Accion_Postura": {
      "pose": "Sentada al volante mirando hacia el espectador.",
      "gestualidad": "Casual glam."
    },
    "I_Iluminacion": {
      "tipo": "Sol de mediodía.",
      "caracteristicas": "Sombras contrastadas, reflejos brillantes."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Lujo retro, libertad.",
      "tono": "Editorial tipo Vogue."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Moda retro glam ultra detallada.",
      "color": "Rojos brillantes, tonos de playa."
    },
    "M_Composicion_Camara": {
      "plano": "Medium shot.",
      "angulo": "Neutral.",
      "encuadre": "Modelo centrada en volante."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos brillantes y glossy.",
      "claridad": "Alta."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('02c76661-49d5-4f4c-8e25-3ce76f25e87c', '74349942-442a-40fa-82d2-750bd22da89e') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('02c76661-49d5-4f4c-8e25-3ce76f25e87c', '179bf2c6-0bb3-43a3-8654-673782bc8069') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('889201a3-dd5c-4c1c-8ae6-8e330da06215', 'prompt', 'Novia Alta Costura', 'novia-alta-costura', 'Fotografía de boda ultra-realista y lujosa en una suite.', '
# Framework REAISEMP

*   **R (Render):** Maquillaje perfecto, velo largo.
*   **E (Entorno):** Suite nupcial difuminada.
*   **A (Acción):** De pie, serena.
*   **I (Iluminación):** Luz cálida premium.
*   **S (Sensación):** Romanticismo, lujo.
*   **E (Estilo):** Ultra-realismo 8K, texturas detalladas.
*   **M (Composición):** Full body.
        ', 'Fashion', NULL, NULL, 'advanced', '/images/cases/high-fashion-bride.jpg', '{
  "title": "Retrato de Novia de Alta Costura en Suite Lujosa - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro elegante con maquillaje perfecto.",
      "expresion": "Calma y elegancia.",
      "cabello": "Peinado de novia con velo largo."
    },
    "E_Entorno": {
      "fondo": "Suite nupcial difuminada.",
      "ambientacion": "Romántica y sofisticada."
    },
    "A_Accion_Postura": {
      "pose": "De pie mostrando el vestido.",
      "mirada": "Serena hacia cámara."
    },
    "I_Iluminacion": {
      "tipo": "Luz cálida premium.",
      "caracteristicas": "Texturas del vestido resaltadas."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Romanticismo y lujo.",
      "tono": "Editorial bridal."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Ultra-realismo 8K.",
      "textura": "Encaje detallado, tul voluminoso."
    },
    "M_Composicion_Camara": {
      "plano": "Full body.",
      "angulo": "Neutral."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos cálidos de boda.",
      "claridad": "Muy alta."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('889201a3-dd5c-4c1c-8ae6-8e330da06215', 'a2120663-fc2d-4579-87ea-c94abf146a22') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('889201a3-dd5c-4c1c-8ae6-8e330da06215', '60514d83-4505-48ee-87c7-40d282bc13f9') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('518fd46d-ddb3-497e-8761-98f08ec766d6', 'prompt', 'Retrato Fotográfico en Arcade (Ghostface)', 'foto-amenazante-arcade-ghostface', 'Retrato con temática Ghostface en un arcade vibrante con luces neón rosa.', '
# Framework REAISEMP

*   **R (Render):** Joven con expresión lúdica pero seria, estilo urbano.
*   **E (Entorno):** Arcade colorido, cabina de peluches Ghostface, neón rosa.
*   **A (Acción):** Sentada en la máquina de peluches, teléfono rojo.
*   **I (Iluminación):** Neón rosa predominante.
*   **S (Sensación):** Tensión divertida, pop horror.
*   **E (Estilo):** Arcade aesthetic vibrante.
*   **M (Composición):** Plano medio, frontal bajo.
*   **P (Post):** Magenta-neón saturado.
        ', 'Creative', NULL, NULL, 'intermediate', '/images/cases/arcade-ghostface.jpg', '{
  "title": "Retrato Fotográfico en Arcade con Temática Ghostface - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Joven con expresión seria pero intrigante, rasgos suaves, mirada dirigida a cámara.",
      "expresion": "Seriedad lúdica, toque de tensión.",
      "cabello": "Suelto, arreglado de manera casual.",
      "coherencia": "Proporciones realistas y estilo urbano."
    },
    "E_Entorno": {
      "fondo": "Arcade colorido con luces neón rosa, máquinas retro y ambientación vibrante.",
      "elementos": "Cabina de peluches Ghostface; letrero neón ''Wanna Play?''."
    },
    "A_Accion_Postura": {
      "pose": "Sentada dentro de la máquina de peluches.",
      "gestualidad": "Sosteniendo un teléfono rojo de los 90.",
      "mirada": "Directa a la cámara."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación de neón rosa predominante.",
      "caracteristicas": "Reflejos en piel y sombras suaves de ambiente arcade."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Tensión divertida, vibra misteriosa.",
      "tono": "Pop horror estilizado."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía vibrante tipo ''arcade aesthetic''.",
      "color": "Magenta dominante con toques de azul.",
      "textura": "Grano ligero de ambiente nocturno."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio.",
      "angulo": "Frontal ligeramente bajo.",
      "encuadre": "Modelo centrada dentro de la máquina."
    },
    "P_Postproduccion": {
      "color_grading": "Magenta-neón saturado.",
      "claridad": "Media-alta.",
      "efectos": "Glow neón ligero."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('518fd46d-ddb3-497e-8761-98f08ec766d6', '29a098fb-6b07-4fde-80b0-3a006069c43f') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('518fd46d-ddb3-497e-8761-98f08ec766d6', 'a786e011-fb3c-4dec-804d-66510df1dd79') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('fbf9c52e-c985-40e3-8e1f-975d28bb4afa', 'prompt', 'Retrato de Pareja Elegante (Turtleneck)', 'retrato-pareja-elegante-turtleneck', 'Retrato de pareja en estudio, estilo elegante y minimalista.', '
# Framework REAISEMP

*   **R (Render):** Pareja con aspecto clásico, turtleneck negro.
*   **E (Entorno):** Estudio oscuro minimalista.
*   **A (Acción):** Brazos rodeando hombros, conexión afectuosa.
*   **I (Iluminación):** Luz suave enfocada.
*   **S (Sensación):** Conexión, calidez, elegancia.
*   **E (Estilo):** Editorial de estudio.
*   **M (Composición):** Medio corto, altura de ojos.
*   **P (Post):** Cálido suave cinematográfico.
        ', 'Portrait', NULL, NULL, 'intermediate', '/images/cases/elegant-couple-turtleneck.jpg', '{
  "title": "Retrato de Pareja Elegante en Estudio (Turtleneck) - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro suave, maquillaje natural, mirada calmada.",
      "expresion": "Serena y afectuosa.",
      "cabello": "Largo ondulado.",
      "coherencia": "Aspecto clásico y elegante."
    },
    "E_Entorno": {
      "fondo": "Estudio oscuro minimalista.",
      "ambientacion": "Cinemática elegante."
    },
    "A_Accion_Postura": {
      "pose": "De pie detrás del hombre, brazos rodeando sus hombros.",
      "mirada": "Hacia cámara."
    },
    "I_Iluminacion": {
      "tipo": "Luz suave enfocada.",
      "caracteristicas": "Sombras elegantes que separan del fondo."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Conexión, calidez, elegancia.",
      "tono": "Retrato profesional elegante."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía editorial en estudio.",
      "color": "Negros profundos, piel cálida.",
      "textura": "Alta definición limpia."
    },
    "M_Composicion_Camara": {
      "plano": "Medio corto.",
      "angulo": "Altura de ojos.",
      "encuadre": "Pareja centrada en armonía."
    },
    "P_Postproduccion": {
      "color_grading": "Cálido suave.",
      "claridad": "Alta.",
      "contraste": "Moderado para estilo cinematográfico."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fbf9c52e-c985-40e3-8e1f-975d28bb4afa', '7a2110f9-46cd-4f0b-895f-b1ea221681de') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fbf9c52e-c985-40e3-8e1f-975d28bb4afa', 'e996d2a2-f1bc-4dcc-8697-788aae049d71') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('4f216813-15a2-4c26-8242-0cb29b039cae', 'prompt', 'Authentic Smartphone Selfie — Wide Angle Car Interior (1:1 Reference Lock)', 'authentic-smartphone-selfie', 'Selfie auténtico con smartphone y lente gran angular en interior de auto.', '
# Framework REAISEMP

*   **R (Render):** Hombre joven, rostro 1:1 referencia, cabello ondulado, gafas de sol reflectantes.
*   **E (Entorno):** Interior de automóvil, tapicería beige, sunroof, calle desenfocada.
*   **A (Acción):** Selfie gran angular, brazo extendido, postura relajada, mirada a cámara.
*   **I (Iluminación):** Natural de mediodía, luz fuerte, sombras definidas.
*   **S (Sensación):** Autenticidad, calma, confianza cotidiana, street lifestyle.
*   **E (Estilo):** Selfie smartphone gran angular, fotorrealista, texturas naturales.
*   **M (Composición):** Plano medio selfie, cámara elevada, encuadre idéntico a referencia.
*   **P (Post):** Desaturado, contraste medio-alto, grano sutil.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/authentic-smartphone-selfie.jpg', '{"title":"Authentic Smartphone Selfie — Wide Angle Car Interior (1:1 Reference Lock)","framework_REAISEMP":{"R_Render_del_Avatar":{"descripcion_facial":"Hombre joven utilizando estrictamente el rostro del usuario a partir de la imagen de referencia cargada.","expresion":"Relajada y segura, expresión natural.","detalles":"Cabello de longitud media, textura ondulada y volumen natural; gafas de sol reflectantes; auriculares puestos.","instruccion_critica":"Copiar el rostro exactamente 1:1 desde la imagen de referencia. No modificar rasgos, proporciones ni expresión."},"E_Entorno":{"fondo":"Interior de automóvil con tapicería beige.","ambientacion":"Escena cotidiana y auténtica dentro del coche.","elementos_clave":{"techo":"Techo beige visible ocupando la parte superior del encuadre, con parasol y consola superior.","sunroof":"Techo solar mostrando árboles, cielo y líneas eléctricas.","interior":"Asientos beige, reposacabezas traseros, línea del cinturón de seguridad, asiento delantero derecho parcial.","exterior":"Ventana trasera con calle lavada y desenfocada."}},"A_Accion_Postura":{"pose":"Sentado en el asiento delantero izquierdo.","lenguaje_corporal":"Postura relajada y confiada.","accion":"Brazo izquierdo extendido hacia la cámara sosteniendo el teléfono.","perspectiva":"El brazo más cercano al lente aparece visualmente más grande por efecto gran angular.","mirada":"Dirigida a la cámara, cabeza ligeramente inclinada hacia la derecha."},"I_Iluminacion":{"tipo":"Iluminación natural de mediodía.","caracteristicas":"Luz solar fuerte desde arriba y frente, sombras naturales definidas."},"S_Sensacion_Atmosfera":{"emocion":"Autenticidad, calma, confianza cotidiana.","tono":"Street lifestyle, espontáneo, real."},"E_visual_EstiloVisual":{"estilo_general":"Selfie auténtico con smartphone y lente gran angular.","vestuario":"Camisa de manga corta gris-marrón de textura suelta, ligeramente desabotonada; jeans azul claro.","texturas":"Piel con textura visible, tela natural.","nivel_realismo":"Fotorrealista sin estilización artificial."},"M_Composicion_Camara":{"plano":"Plano medio tipo selfie.","angulo":"Cámara ligeramente elevada y frente al sujeto.","encuadre":"Gran angular, composición idéntica a la referencia.","instruccion_critica":"Mantener exactamente el mismo encuadre, perspectiva y framing que la imagen original."},"P_Postproduccion":{"color_grading":"Ligeramente desaturado.","contraste":"Medio-alto.","acabado":"Grano sutil, look street natural.","restricciones":"No agregar ni eliminar elementos. No cambiar mood, pose ni composición."}}}', '# Selfie Auténtico
Sube tu foto de referencia para copiar exactamente el ángulo y la expresión.', 'La IA intentará replicar tu pose y entorno 1:1.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4f216813-15a2-4c26-8242-0cb29b039cae', '51cd2e03-9be8-42d1-8d84-2a56f8077243') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4f216813-15a2-4c26-8242-0cb29b039cae', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('5c0fc83c-d25f-482b-89d7-6756381b76ae', 'prompt', '1990s Disposable Camera Portrait — Dark Academia Gaze', '90s-disposable-camera-portrait', 'Retrato estilo cámara desechable de los 90s con estética Dark Academia.', '
# Framework REAISEMP

*   **R(Render):** Hombre joven, rostro usuario exacto, mirada intensa predatoria.
*   **E(Entorno):** Fiesta nocturna casa oscura, caos contenido.
*   **A(Acción):** De pie frontal, contacto visual directo.
*   **I(Iluminación):** Flash directo cámara desechable, luz dura.
*   **S(Sensación):** Peligro sutil, dark academia, rebelde.
*   **E(Estilo):** Analógica lo-fi 90s, cámara desechable, grano pesado.
*   **M(Composición):** Primer plano, centrado.
*   **P(Post):** B&W alto contraste, estética cruda.
        ', '', NULL, NULL, 'intermediate', '/images/prompts/90s-disposable-camera-portrait.png', '{
  "title": "1990s Disposable Camera Portrait — Dark Academia Gaze",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Hombre joven utilizando estrictamente el rostro del usuario tomado del selfie de referencia, preservando rasgos faciales, proporciones y estructura ósea.",
      "expresion": "Mirada directa e intensa, ligeramente entornada, con una expresión predatoria y magnética.",
      "detalle_clave": "Ojos claros con enfoque extremo, reflejando el flash directo.",
      "instruccion_critica": "No modificar el rostro. Mantener identidad facial exacta."
    },
    "E_Entorno": {
      "fondo": "Fiesta nocturna en una casa oscura.",
      "ambientacion": "Espacio interior con iluminación mínima, sensación de caos contenido.",
      "elementos_clave": "Fondos indistintos y oscuros que sugieren gente y movimiento sin definirse."
    },
    "A_Accion_Postura": {
      "pose": "De pie, enfrentando directamente a la cámara.",
      "lenguaje_corporal": "Postura relajada pero dominante.",
      "mirada": "Contacto visual directo y penetrante hacia el lente."
    },
    "I_Iluminacion": {
      "tipo": "Flash directo de cámara desechable.",
      "caracteristicas": "Luz dura frontal que aplana parcialmente el rostro y genera sombras duras alrededor."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Intensidad, peligro sutil, atracción oscura.",
      "tono": "Dark academia, lo-fi, rebelde."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía analógica lo-fi de los años 90.",
      "tecnica": "Cámara desechable con flash integrado.",
      "texturas": "Grano pesado, imperfecciones visibles, ligera falta de nitidez.",
      "nivel_realismo": "Fotorrealista con imperfección analógica."
    },
    "M_Composicion_Camara": {
      "plano": "Primer plano.",
      "angulo": "Ángulo frontal a la altura de los ojos.",
      "encuadre": "Composición centrada, rostro ocupando gran parte del encuadre."
    },
    "P_Postproduccion": {
      "color_grading": "Blanco y negro de alto contraste.",
      "contraste": "Muy alto.",
      "acabado": "Grano fuerte, ruido visible, estética cruda y auténtica.",
      "estilo_final": "Dark academia bad boy, disposable camera realism."
    }
  }
}', '# Estilo Dark Academia
Ideal para perfiles con estética misteriosa o rebelde.', 'Usa una selfie directa. El efecto de flash aplanará la imagen, así que una foto con buena definición ayuda.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5c0fc83c-d25f-482b-89d7-6756381b76ae', '34f7e52b-c3b9-421c-8194-317539437e92') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5c0fc83c-d25f-482b-89d7-6756381b76ae', '61a3c407-bef7-4162-820a-bfca8dbdd1fd') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('384cc4f6-0721-44da-86ab-6c2c6c185256', 'prompt', 'Cinematic Portrait Restoration — Golden Hour Shadow (9:16)', 'cinematic-portrait-restoration', 'Restauración cinematográfica fotorrealista con iluminación Golden Hour.', '
# Framework REAISEMP

*   **R(Render):** Rasgos originales preservados, expresión exacta.
*   **E(Entorno):** Interior minimalista, pared fondo.
*   **A(Acción):** Pose original, mirada preservada.
*   **I(Iluminación):** Cinematográfica lateral golden hour, sombras dramáticas.
*   **S(Sensación):** Misterio, intensidad contenida.
*   **E(Estilo):** Restauración cinematográfica fotorrealista.
*   **M(Composición):** Plano original, 9:16 vertical.
*   **P(Post):** Ultra-HD, highlights cálidos, alto contraste.
        ', 'Portrait', NULL, NULL, 'advanced', '/images/prompts/cinematic-portrait-restoration.png', '{
  "title": "Cinematic Portrait Restoration — Golden Hour Shadow (9:16)",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Sujeto con rasgos faciales originales preservados con total fidelidad.",
      "expresion": "Exactamente la expresión original, sin alteraciones.",
      "instruccion_critica": "Preservar estrictamente la pose, la expresión y la composición originales.",
      "coherencia": "Identidad facial intacta, sin cambios de rasgos ni proporciones."
    },
    "E_Entorno": {
      "fondo": "Interior minimalista con pared visible detrás del sujeto.",
      "ambientacion": "Espacio simple que permite proyectar sombras dramáticas.",
      "elementos_clave": "Pared utilizada como superficie para sombra definida."
    },
    "A_Accion_Postura": {
      "pose": "Pose original del retrato, sin modificaciones.",
      "lenguaje_corporal": "Se mantiene exactamente como en la imagen base.",
      "mirada": "Dirección de la mirada preservada."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación cinematográfica lateral tipo golden hour.",
      "caracteristicas": "Luz cálida lateral que proyecta una sombra definida y dramática en la pared detrás del sujeto."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Misterio, intensidad contenida.",
      "tono": "Cinematográfico, cálido, de alto contraste."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Restauración cinematográfica fotorrealista.",
      "texturas": "Piel realista mejorada, detalles finos visibles.",
      "nivel_realismo": "Ultra-realista."
    },
    "M_Composicion_Camara": {
      "plano": "El plano original del retrato.",
      "angulo": "Ángulo original sin cambios.",
      "encuadre": "Formato vertical 9:16, composición estrictamente preservada."
    },
    "P_Postproduccion": {
      "upscale": "Ultra-HD",
      "mejoras": "Aumento de nitidez en detalles, mejora de textura de piel realista, reducción de ruido.",
      "color_grading": "Highlights cálidos dorados con sombras profundas.",
      "contraste": "Alto.",
      "acabado": "Look cinematográfico limpio, fotorealista, con sombras profundas y luces cálidas."
    }
  }
}', '# Restauración Cinematográfica
Este prompt está diseñado para mejorar fotos existentes dándoles un look de cine.', 'Sube la foto que quieras ''restaurar'' o mejorar. La IA respetará la composición original.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('384cc4f6-0721-44da-86ab-6c2c6c185256', '39b84df0-b2fc-4187-87ba-d6dd2b217bed') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('384cc4f6-0721-44da-86ab-6c2c6c185256', 'f3380b2f-b68d-4186-8fd3-550998a46e81') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('835635e6-d710-45eb-83b0-7262d08ac517', 'prompt', 'Monochrome Fine-Art Editorial — Grounded Presence', 'monochrome-fine-art-editorial', 'Editorial de moda fine-art en blanco y negro con silueta de caballo.', '
# Framework REAISEMP

*   **R(Render):** Identidad intacta, expresión calma introspectiva.
*   **E(Entorno):** Paisaje natural abierto, pasto salvaje.
*   **A(Acción):** Sentado banco minimalista, riendas mano, caballo detrás.
*   **I(Iluminación):** Natural alto contraste, cielo sobreexpuesto.
*   **S(Sensación):** Introspección, quietud, fuerza.
*   **E(Estilo):** Editorial fine-art B&W, texturas naturales.
*   **M(Composición):** Plano medio, ángulo bajo neutral.
*   **P(Post):** B&W alto contraste, look formato medio.
        ', 'Fashion', NULL, NULL, 'advanced', '/images/prompts/monochrome-fine-art-editorial.jpg', '{
  "title": "Monochrome Fine-Art Editorial — Grounded Presence",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Persona con rasgos faciales reales y definidos, identidad intacta y reconocible.",
      "expresion": "Calma, introspectiva, mirada baja y contenida.",
      "instruccion_critica": "No cambiar el rostro bajo ninguna circunstancia.",
      "coherencia": "Proporciones realistas, sin estilización ni alteración facial."
    },
    "E_Entorno": {
      "fondo": "Paisaje natural abierto con terreno irregular y pasto salvaje.",
      "ambientacion": "Espacio exterior crudo y minimalista.",
      "elementos_clave": "Cielo brillante y sobreexpuesto generando amplio espacio negativo."
    },
    "A_Accion_Postura": {
      "pose": "Sentado bajo sobre un banco metálico minimalista.",
      "lenguaje_corporal": "Piernas extendidas y separadas hacia adelante, postura relajada y enraizada.",
      "accion": "Una mano descansando entre las rodillas sosteniendo riendas de cuero delgadas.",
      "postura_superior": "Hombros ligeramente caídos, cabeza inclinada hacia abajo."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación natural de alto contraste.",
      "caracteristicas": "Cielo sobreexpuesto creando silueta marcada, negros profundos y luces suaves."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Introspección, quietud, fuerza contenida.",
      "tono": "Atemporal, cinematográfico, contemplativo."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Editorial de moda fine-art en blanco y negro.",
      "vestuario": "Ropa oscura oversized en capas, pantalones wide-leg, botas de cuero, gafas de sol oscuras.",
      "elementos_simbolicos": "Caballo negro fuerte de pie detrás del sujeto, alineado de forma protectora y parcialmente superpuesto a la silueta.",
      "texturas": "Acabado mate, superficies naturales y textiles densos.",
      "nivel_realismo": "Fotorrealista artístico."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio.",
      "angulo": "Ángulo neutro ligeramente bajo.",
      "encuadre": "Composición equilibrada con superposición visual entre sujeto y caballo, amplio espacio negativo en el cielo."
    },
    "P_Postproduccion": {
      "color_grading": "Blanco y negro de alto contraste.",
      "contraste": "Alto, con negros profundos y highlights suaves.",
      "acabado": "Look de película de formato medio, grano sutil, textura mate.",
      "estilo_final": "Editorial de moda monocromática, fine-art, cinematográfica y atemporal."
    }
  }
}', '# Editorial Fine Art
Sustituye el caballo por otro elemento simbólico si lo deseas, pero mantén la iluminación de alto contraste.', 'Una foto con gafas de sol y actitud seria encajará perfectamente.', TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.842Z', '2026-08-29T17:52:58.842Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('835635e6-d710-45eb-83b0-7262d08ac517', '192f3189-453a-4522-801c-7d96c2652c50') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('835635e6-d710-45eb-83b0-7262d08ac517', '61a3c407-bef7-4162-820a-bfca8dbdd1fd') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('4e9082f1-5b8f-4d80-8df3-b02a6d3ce77e', 'prompt', 'Luxury Bedtime iPhone Selfie — Phone Glow + Warm Lamp Glass-Skin Mood', 'luxury-bedtime-selfie', 'Ultra-realistic 8K luxury bedtime iPhone selfie portrait con atmósfera cozy editorial.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Preservar estructura facial, peinado, tono de piel y expresión exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Retrato bedtime selfie estilo modelo off-duty en ambiente de lujo.
- **Edad aparente:** Early 30s aesthetic
- **Cabello:**
  - Color: Dark chocolate
  - Estilo: Loose voluminous waves, natural bedside texture
- **Expresión:** Soft sleepy expression with slight smile.
- **Detalle piel:**
  - Glass-skin: Visible pores + moisturizer sheen natural
  - Realismo: Skin texture altamente definida sin smoothing artificial
- **Outfit:**
  - Top: Champagne silk pajama camisole
  - Detalle: Lace trim + thin straps elegante
- **Accesorio:**
  - Sleep mask: Matching satin sleep mask pushed onto forehead
- **Calidad:** Ultra-realistic 8K iPhone-style lifestyle portrait rendering con fidelidad absoluta.

## E: Entorno
- **Ubicación:** Luxury bedroom minimalista.
- **Elementos:**
  - High thread count cream bedding
  - Fluffy down pillows
  - Warm dim bedside lamp in background
- **Atmósfera:** Cozy, intimate, high-end bedtime lifestyle.

## A: Acción / Postura
- **Pose:** Lying in bed taking a candid iPhone selfie.
- **Detalle:** Head resting naturally in pillows, off-duty relaxed posture.
- **Expresión:** Sleepy softness + subtle smile.
- **Ojos:** Phone screen reflection visible in the eyes.

## I: Iluminación
- **Tipo:** Mixed lighting for organic blending (cool phone glow + warm lamp).
- **Fuentes:**
  - Phone screen softbox: Cool soft light centered on face, simulating iPhone screen glow
  - Bedside lamp: Warm dim ambient lamp light in background for contrast
- **Efecto:**
  - Glass-skin highlight on cheeks and forehead
  - Soft cinematic contrast cool vs warm
  - Natural seamless blending with bedroom mood

## S: Sensación / Atmósfera
- **Mood:** Intimate, cozy, luxurious, sleepy elegance.
- **Tono:** High-fashion model off-duty bedtime selfie vibe.

## E: Estilo Visual
- **Estilo general:** Ultra-photorealistic cinematic iPhone candid portrait.
- **Detalles:**
  - Cream luxury bedding textures
  - Silk camisole sheen + lace detail
  - Phone glow reflection in eyes
  - Warm lamp bokeh background
- **Acabado:** Organic blending, natural smartphone realism with editorial polish.
- **Calidad:** Ultra-realistic 8K high-detail bedtime lifestyle aesthetic.

## M: Composición / Cámara
- **Camera Style:** iPhone 15 Pro Max selfie look
- **Plano:** Close-up to medium close framing in bed.
- **Ángulo:** Natural handheld selfie perspective.
- **Enfoque:** Sharp focus en rostro y ojos, background softly blurred.
- **Profundidad de campo:** Shallow DOF para vibe premium.

## P: Postproducción
- **Color grading:** Cool facial glow + warm bedside lamp contrast, cinematic soft tones.
- **Contraste:** Suave-moderado, sin HDR exagerado.
- **Nitidez:** Alta definición en piel, seda, ojos y bedding texture.
- **Acabado final:** Ultra-realistic 8K luxury bedtime iPhone selfie portrait con atmósfera cozy editorial.
', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/luxury-bedtime-selfie.png', '{
  "title": "Luxury Bedtime iPhone Selfie — Phone Glow + Warm Lamp Glass-Skin Mood",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen de referencia como identidad principal. Preservar estructura facial, peinado, tono de piel y expresión exactamente idénticos.",
      "preservacion_total": "No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.",
      "sujeto": "Retrato bedtime selfie estilo modelo off-duty en ambiente de lujo.",
      "edad_aparente": "Early 30s aesthetic",
      "cabello": {
        "color": "Dark chocolate",
        "estilo": "Loose voluminous waves, natural bedside texture"
      },
      "expresion": "Soft sleepy expression with slight smile.",
      "detalle_piel": {
        "glass_skin": "Visible pores + moisturizer sheen natural",
        "realismo": "Skin texture altamente definida sin smoothing artificial"
      },
      "outfit": {
        "top": "Champagne silk pajama camisole",
        "detalle": "Lace trim + thin straps elegante"
      },
      "accesorio": {
        "sleep_mask": "Matching satin sleep mask pushed onto forehead"
      },
      "calidad": "Ultra-realistic 8K iPhone-style lifestyle portrait rendering con fidelidad absoluta."
    },
    "E_Entorno": {
      "ubicacion": "Luxury bedroom minimalista.",
      "elementos": [
        "High thread count cream bedding",
        "Fluffy down pillows",
        "Warm dim bedside lamp in background"
      ],
      "atmósfera": "Cozy, intimate, high-end bedtime lifestyle."
    },
    "A_Accion_Postura": {
      "pose": "Lying in bed taking a candid iPhone selfie.",
      "detalle": "Head resting naturally in pillows, off-duty relaxed posture.",
      "expresion": "Sleepy softness + subtle smile.",
      "ojos": "Phone screen reflection visible in the eyes."
    },
    "I_Iluminacion": {
      "tipo": "Mixed lighting for organic blending (cool phone glow + warm lamp).",
      "fuentes": {
        "phone_screen_softbox": "Cool soft light centered on face, simulating iPhone screen glow",
        "bedside_lamp": "Warm dim ambient lamp light in background for contrast"
      },
      "efecto": [
        "Glass-skin highlight on cheeks and forehead",
        "Soft cinematic contrast cool vs warm",
        "Natural seamless blending with bedroom mood"
      ]
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Intimate, cozy, luxurious, sleepy elegance.",
      "tono": "High-fashion model off-duty bedtime selfie vibe."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Ultra-photorealistic cinematic iPhone candid portrait.",
      "detalles": [
        "Cream luxury bedding textures",
        "Silk camisole sheen + lace detail",
        "Phone glow reflection in eyes",
        "Warm lamp bokeh background"
      ],
      "acabado": "Organic blending, natural smartphone realism with editorial polish.",
      "calidad": "Ultra-realistic 8K high-detail bedtime lifestyle aesthetic."
    },
    "M_Composicion_Camara": {
      "camera_style": "iPhone 15 Pro Max selfie look",
      "plano": "Close-up to medium close framing in bed.",
      "angulo": "Natural handheld selfie perspective.",
      "enfoque": "Sharp focus en rostro y ojos, background softly blurred.",
      "profundidad_de_campo": "Shallow DOF para vibe premium."
    },
    "P_Postproduccion": {
      "color_grading": "Cool facial glow + warm bedside lamp contrast, cinematic soft tones.",
      "contraste": "Suave-moderado, sin HDR exagerado.",
      "nitidez": "Alta definición en piel, seda, ojos y bedding texture.",
      "acabado_final": "Ultra-realistic 8K luxury bedtime iPhone selfie portrait con atmósfera cozy editorial."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.815Z', '2026-08-29T17:52:58.817Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4e9082f1-5b8f-4d80-8df3-b02a6d3ce77e', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4e9082f1-5b8f-4d80-8df3-b02a6d3ce77e', '51cd2e03-9be8-42d1-8d84-2a56f8077243') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4e9082f1-5b8f-4d80-8df3-b02a6d3ce77e', '60514d83-4505-48ee-87c7-40d282bc13f9') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('9d8404f4-683b-470d-86e9-2af28e645ed6', 'prompt', 'Playful Golden Hour Wind Selfie — Tongue-Out Candid Close-Up', 'playful-golden-hour-selfie', 'Ultra-realistic 8K golden-hour candid wind selfie con mood espontáneo y cinematográfico.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Preservar estructura facial, tono de piel, peinado, expresión y rasgos físicos exactamente idénticos.
- **Preservación total:** No alterar ni editar el rostro bajo ninguna circunstancia.
- **Sujeto:** Joven mujer capturada en un selfie dinámico y espontáneo.
- **Cabello:**
  - Color: Light brown
  - Estilo: Largo, liso, con mechones sueltos
  - Detalle: Cabello moviéndose con el viento, strands catching the light
- **Expresión:** Playful, candid, head slightly tilted, sticking tongue out.
- **Detalle piel:** Textura natural realista, énfasis en skin detail y eye clarity.
- **Calidad:** Ultra-realistic 8K cinematic selfie portrait rendering con fidelidad absoluta.

## E: Entorno
- **Escena:** Outdoor golden hour setting con fondo suave desenfocado.
- **Background:** Sunlit soft-focus environment, cálido y natural.
- **Atmósfera:** Ligera, veraniega, espontánea, auténtica.

## A: Acción / Postura
- **Pose:** Close-up selfie angle dinámico.
- **Detalle:**
  - Head: Head slightly tilted
  - Expresión: Tongue-out playful candid moment
- **Lenguaje corporal:** Espontáneo, youthful, divertido.

## I: Iluminación
- **Tipo:** Warm natural golden hour lighting.
- **Características:**
  - Soft flattering illumination sobre el rostro
  - Sombras suaves unificadas con el ambiente
  - Highlights cálidos sobre mechones de cabello
- **Efecto:** Cinematic glow natural con integración orgánica.

## S: Sensación / Atmósfera
- **Mood:** Playful, candid, warm, youthful.
- **Tono:** Golden-hour lifestyle selfie con energía espontánea.

## E: Estilo Visual
- **Estilo general:** Photorealistic cinematic outdoor selfie portrait.
- **Detalles:**
  - Cabello al viento con luz cálida
  - Textura de piel ultra definida
  - Bokeh suave de fondo
  - Natural candid expression
- **Acabado:** Organic blending, seamless high-fashion lifestyle realism.
- **Calidad:** Ultra-realistic 8K con estética natural premium.

## M: Composición / Cámara
- **Plano:** Dynamic close-up selfie framing.
- **Ángulo:** Selfie perspective con ligera inclinación natural.
- **Enfoque:** Sharp focus en ojos y rostro; background completamente suave.
- **Profundidad de campo:** Shallow DOF cinematográfico.

## P: Postproducción
- **Color grading:** Warm golden tones naturales, sin saturación excesiva.
- **Contraste:** Suave-moderado para mantener look auténtico.
- **Nitidez:** Alta definición en piel, cabello y ojos.
- **Acabado final:** Ultra-realistic 8K golden-hour candid wind selfie con mood espontáneo y cinematográfico.
', 'Lifestyle', NULL, NULL, 'beginner', '/images/prompts/playful-golden-hour-selfie.jpg', '{
  "title": "Playful Golden Hour Wind Selfie — Tongue-Out Candid Close-Up",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen de referencia como identidad principal. Preservar estructura facial, tono de piel, peinado, expresión y rasgos físicos exactamente idénticos.",
      "preservacion_total": "No alterar ni editar el rostro bajo ninguna circunstancia.",
      "sujeto": "Joven mujer capturada en un selfie dinámico y espontáneo.",
      "cabello": {
        "color": "Light brown",
        "estilo": "Largo, liso, con mechones sueltos",
        "detalle": "Cabello moviéndose con el viento, strands catching the light"
      },
      "expresion": "Playful, candid, head slightly tilted, sticking tongue out.",
      "detalle_piel": "Textura natural realista, énfasis en skin detail y eye clarity.",
      "calidad": "Ultra-realistic 8K cinematic selfie portrait rendering con fidelidad absoluta."
    },
    "E_Entorno": {
      "escena": "Outdoor golden hour setting con fondo suave desenfocado.",
      "background": "Sunlit soft-focus environment, cálido y natural.",
      "atmósfera": "Ligera, veraniega, espontánea, auténtica."
    },
    "A_Accion_Postura": {
      "pose": "Close-up selfie angle dinámico.",
      "detalle": {
        "head": "Head slightly tilted",
        "expresion": "Tongue-out playful candid moment"
      },
      "lenguaje_corporal": "Espontáneo, youthful, divertido."
    },
    "I_Iluminacion": {
      "tipo": "Warm natural golden hour lighting.",
      "caracteristicas": [
        "Soft flattering illumination sobre el rostro",
        "Sombras suaves unificadas con el ambiente",
        "Highlights cálidos sobre mechones de cabello"
      ],
      "efecto": "Cinematic glow natural con integración orgánica."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Playful, candid, warm, youthful.",
      "tono": "Golden-hour lifestyle selfie con energía espontánea."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Photorealistic cinematic outdoor selfie portrait.",
      "detalles": [
        "Cabello al viento con luz cálida",
        "Textura de piel ultra definida",
        "Bokeh suave de fondo",
        "Natural candid expression"
      ],
      "acabado": "Organic blending, seamless high-fashion lifestyle realism.",
      "calidad": "Ultra-realistic 8K con estética natural premium."
    },
    "M_Composicion_Camara": {
      "plano": "Dynamic close-up selfie framing.",
      "angulo": "Selfie perspective con ligera inclinación natural.",
      "enfoque": "Sharp focus en ojos y rostro; background completamente suave.",
      "profundidad_de_campo": "Shallow DOF cinematográfico."
    },
    "P_Postproduccion": {
      "color_grading": "Warm golden tones naturales, sin saturación excesiva.",
      "contraste": "Suave-moderado para mantener look auténtico.",
      "nitidez": "Alta definición en piel, cabello y ojos.",
      "acabado_final": "Ultra-realistic 8K golden-hour candid wind selfie con mood espontáneo y cinematográfico."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.817Z', '2026-08-29T17:52:58.817Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9d8404f4-683b-470d-86e9-2af28e645ed6', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9d8404f4-683b-470d-86e9-2af28e645ed6', '51cd2e03-9be8-42d1-8d84-2a56f8077243') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9d8404f4-683b-470d-86e9-2af28e645ed6', 'f3380b2f-b68d-4186-8fd3-550998a46e81') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('e3ace5ef-0f0a-4dab-89cb-f5557e875ef2', 'prompt', 'Pink Glow Ball Immersion Portrait — Magenta Saturated Editorial Fantasy', 'pink-glow-ball-immersion', 'Ultra-realistic 8K pink immersion fashion portrait con atmósfera juguetona surreal.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado, tono de piel y expresión exactamente idénticos.
- **Preservación total:** No cambiar ni editar el rostro bajo ninguna circunstancia.
- **Sujeto:** Persona sumergida entre esferas translúcidas rosas con estética fashion surreal.
- **Expresión:** Confident and composed, mirada editorial directa.
- **Detalle facial:**
  - Piel: Smooth natural skin con pecas visibles en nariz y mejillas
  - Cejas: Bold eyebrows definidas
  - Ojos: Winged eyeliner + pink glitter eyeshadow
  - Labios: Hot pink lipstick vibrante
  - Makeup: Subtle enhancements manteniendo naturalidad
- **Cabello:**
  - Estilo: Soft waves elegantes
  - Instrucción: Preservar textura y tono exactos de la referencia
- **Calidad:** Ultra-realistic 8K editorial surreal portrait rendering con fidelidad absoluta.

## E: Entorno
- **Escena:** Submerged environment lleno de bolas translúcidas luminosas.
- **Paleta:** Baby pink, fuchsia pink, hot pink, magenta, blush pink, rose pink, cotton candy pink.
- **Atmósfera:** Playful, vivid, saturated, surreal fashion backdrop.

## A: Acción / Postura
- **Pose:** Cuerpo colocado diagonalmente a través del frame.
  - Head: Tilted ligeramente hacia un lado
  - Left arm: Brazo izquierdo doblado hacia arriba, mano cerca de la cabeza
  - Right arm: Brazo derecho extendido hacia cámara sosteniendo una esfera rosa
- **Lenguaje corporal:** Composición dinámica pero elegante, editorial controlada.

## I: Iluminación
- **Tipo:** Bright evenly distributed lighting.
- **Características:**
  - Iluminación uniforme high-key
  - Glow intenso en bolas translúcidas
  - Sin sombras duras
- **Efecto:** Ambiente vívido, colorido, juguetón, altamente saturado.

## S: Sensación / Atmósfera
- **Mood:** Playful, dreamy, confident, vibrant.
- **Tono:** Surreal fashion portrait con energía pop y estética editorial.

## E: Estilo Visual
- **Estilo general:** Photorealistic saturated surreal fashion portrait.
- **Detalles:**
  - Bolas translúcidas glowing en múltiples tonos rosa
  - Makeup pink glitter editorial
  - Textura realista en piel y pecas
- **Acabado:** High-fashion pop surreal aesthetic, magazine-ready.
- **Calidad:** Ultra-realistic 8K con color vibrante y detalle extremo.

## M: Composición / Cámara
- **Composición:** Simétrica, rostro perfectamente centrado como punto focal.
- **Plano:** Close-up a medium close framing dentro del mar de esferas rosas.
- **Enfoque:** Sharp focus en ojos expresivos y rostro; fondo lleno de bokeh glossy spheres.
- **Ángulo:** Neutral frontal con ligera diagonal corporal para dinamismo.

## P: Postproducción
- **Color grading:** Pink-magenta saturated palette intensa y alegre.
- **Contraste:** Moderado-clean para look pop editorial.
- **Nitidez:** Alta definición en piel, pecas, labios y textura translúcida de esferas.
- **Acabado final:** Ultra-realistic 8K pink immersion fashion portrait con atmósfera juguetona surreal.
', 'Fantasy', NULL, NULL, 'intermediate', '/images/prompts/pink-glow-ball-immersion.png', '{
  "title": "Pink Glow Ball Immersion Portrait — Magenta Saturated Editorial Fantasy",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado, tono de piel y expresión exactamente idénticos.",
      "preservacion_total": "No cambiar ni editar el rostro bajo ninguna circunstancia.",
      "sujeto": "Persona sumergida entre esferas translúcidas rosas con estética fashion surreal.",
      "expresion": "Confident and composed, mirada editorial directa.",
      "detalle_facial": {
        "piel": "Smooth natural skin con pecas visibles en nariz y mejillas",
        "cejas": "Bold eyebrows definidas",
        "ojos": "Winged eyeliner + pink glitter eyeshadow",
        "labios": "Hot pink lipstick vibrante",
        "makeup": "Subtle enhancements manteniendo naturalidad"
      },
      "cabello": {
        "estilo": "Soft waves elegantes",
        "instruccion": "Preservar textura y tono exactos de la referencia"
      },
      "calidad": "Ultra-realistic 8K editorial surreal portrait rendering con fidelidad absoluta."
    },
    "E_Entorno": {
      "escena": "Submerged environment lleno de bolas translúcidas luminosas.",
      "paleta": [
        "baby pink",
        "fuchsia pink",
        "hot pink",
        "magenta",
        "blush pink",
        "rose pink",
        "cotton candy pink"
      ],
      "atmósfera": "Playful, vivid, saturated, surreal fashion backdrop."
    },
    "A_Accion_Postura": {
      "pose": "Cuerpo colocado diagonalmente a través del frame.",
      "detalle_pose": {
        "head": "Head tilted ligeramente hacia un lado",
        "left_arm": "Brazo izquierdo doblado hacia arriba, mano cerca de la cabeza",
        "right_arm": "Brazo derecho extendido hacia cámara sosteniendo una esfera rosa"
      },
      "lenguaje_corporal": "Composición dinámica pero elegante, editorial controlada."
    },
    "I_Iluminacion": {
      "tipo": "Bright evenly distributed lighting.",
      "caracteristicas": [
        "Iluminación uniforme high-key",
        "Glow intenso en bolas translúcidas",
        "Sin sombras duras"
      ],
      "efecto": "Ambiente vívido, colorido, juguetón, altamente saturado."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Playful, dreamy, confident, vibrant.",
      "tono": "Surreal fashion portrait con energía pop y estética editorial."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Photorealistic saturated surreal fashion portrait.",
      "detalles": [
        "Bolas translúcidas glowing en múltiples tonos rosa",
        "Makeup pink glitter editorial",
        "Textura realista en piel y pecas"
      ],
      "acabado": "High-fashion pop surreal aesthetic, magazine-ready.",
      "calidad": "Ultra-realistic 8K con color vibrante y detalle extremo."
    },
    "M_Composicion_Camara": {
      "composicion": "Simétrica, rostro perfectamente centrado como punto focal.",
      "plano": "Close-up a medium close framing dentro del mar de esferas rosas.",
      "enfoque": "Sharp focus en ojos expresivos y rostro; fondo lleno de bokeh glossy spheres.",
      "angulo": "Neutral frontal con ligera diagonal corporal para dinamismo."
    },
    "P_Postproduccion": {
      "color_grading": "Pink-magenta saturated palette intensa y alegre.",
      "contraste": "Moderado-clean para look pop editorial.",
      "nitidez": "Alta definición en piel, pecas, labios y textura translúcida de esferas.",
      "acabado_final": "Ultra-realistic 8K pink immersion fashion portrait con atmósfera juguetona surreal."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.817Z', '2026-08-29T17:52:58.817Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e3ace5ef-0f0a-4dab-89cb-f5557e875ef2', '28c9b38f-2f25-4ce6-86a9-f7bc21227203') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e3ace5ef-0f0a-4dab-89cb-f5557e875ef2', '872f0a0e-0193-44ce-8116-d5b07c00942b') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e3ace5ef-0f0a-4dab-89cb-f5557e875ef2', 'e7e7135e-c9c4-460b-838d-c77e34f1fcb9') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('1c227346-7a22-43b2-8c69-0133b3eb2053', 'prompt', 'Cyberpunk Noir 3-Frame Portrait Sequence — Green Neon Street Aesthetic', 'cyberpunk-noir-sequence', 'Ultra-realistic 8K cyberpunk noir triptych sequence con identidad preservada y estilo neon dark.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado y tono de piel exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Persona en una secuencia editorial cyberpunk noir urbana.
- **Expresión base:** Introspectiva, intensa, underground mood.
- **Calidad:** Ultra-realistic 8K cinematic multi-frame portrait rendering con fidelidad absoluta.

## E: Entorno
- **Escena:** Urban street cyberpunk environment nocturno con estética underground hip-hop.
- **Background:** Neon-lit streets con LEDs verdes y blur de movimiento.
- **Atmósfera:** Dark, grainy, moody, raw handheld street noir.

## A: Acción / Postura
- **Estructura:** Secuencia en tres frames verticales (Top / Middle / Bottom).
  - **Frame 1 (Top):** Close-up, Hoodie + Stüssy beanie + silver glasses, Introspective gaze, Green neon glow + motion blur streaks.
  - **Frame 2 (Middle):** Low-angle medium shot, Sporty windbreaker + headband + sunglasses, Rebellious gesture flipping the middle finger, Neon LEDs verdes intensos.
  - **Frame 3 (Bottom):** Side-profile close-up, Bucket hat + round goggles, Cigarette with glowing ember, Rostro medio oculto en sombras noir.

## I: Iluminación
- **Tipo:** Green neon dominant lighting con noir contrast.
- **Características:**
  - Glow verde intenso como color principal
  - High ISO gritty realism
  - Sombras profundas con slices de luz cinematográfica
- **Efecto:** Cyberpunk underground editorial mood.

## S: Sensación / Atmósfera
- **Mood:** Rebelde, oscuro, introspectivo, callejero.
- **Tono:** Hip-hop underground + noir cyberpunk cinematic sequence.

## E: Estilo Visual
- **Estilo general:** Dark cyberpunk noir portrait sequence, gritty street fashion editorial.
- **Detalles:**
  - Film grain heavy
  - Motion blur neon streaks
  - Raw handheld camera feel
  - Shallow depth of field
- **Acabado:** Moody, high-contrast, underground aesthetic.
- **Calidad:** Ultra-realistic 8K con texturas crudas y cinematográficas.

## M: Composición / Cámara
- **Layout:** Three-frame vertical sequence (top/middle/bottom).
- **Enfoque:** Sharp facial identity preserved in all frames.
- **Lentes:** Close-ups + medium shot con DOF shallow.
- **Encuadre:** Cada frame variado pero coherente en estética neon noir.

## P: Postproducción
- **Color grading:** Dominante verde neón + negros profundos noir.
- **Contraste:** Alto para estética underground.
- **Textura:** Grano fuerte + high ISO film look.
- **Acabado final:** Ultra-realistic 8K cyberpunk noir triptych sequence con identidad preservada.
', 'Editorial', NULL, NULL, 'expert', '/images/prompts/cyberpunk-noir-sequence.jpg', '{
  "title": "Cyberpunk Noir 3-Frame Portrait Sequence — Green Neon Street Aesthetic",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado y tono de piel exactamente idénticos.",
      "preservacion_total": "No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.",
      "sujeto": "Persona en una secuencia editorial cyberpunk noir urbana.",
      "expresion_base": "Introspectiva, intensa, underground mood.",
      "calidad": "Ultra-realistic 8K cinematic multi-frame portrait rendering con fidelidad absoluta."
    },
    "E_Entorno": {
      "escena": "Urban street cyberpunk environment nocturno con estética underground hip-hop.",
      "background": "Neon-lit streets con LEDs verdes y blur de movimiento.",
      "atmósfera": "Dark, grainy, moody, raw handheld street noir."
    },
    "A_Accion_Postura": {
      "estructura": "Secuencia en tres frames verticales (Top / Middle / Bottom).",
      "frame_1_top": {
        "shot": "Close-up",
        "outfit": "Hoodie + Stüssy beanie + silver glasses",
        "expresion": "Introspective gaze",
        "efecto": "Green neon glow + motion blur streaks"
      },
      "frame_2_middle": {
        "shot": "Low-angle medium shot",
        "outfit": "Sporty windbreaker + headband + sunglasses",
        "gesto": "Rebellious gesture flipping the middle finger",
        "background": "Neon LEDs verdes intensos"
      },
      "frame_3_bottom": {
        "shot": "Side-profile close-up",
        "outfit": "Bucket hat + round goggles",
        "accion": "Cigarette with glowing ember (opcional: safe version sin humo)",
        "luz": "Rostro medio oculto en sombras noir"
      }
    },
    "I_Iluminacion": {
      "tipo": "Green neon dominant lighting con noir contrast.",
      "caracteristicas": [
        "Glow verde intenso como color principal",
        "High ISO gritty realism",
        "Sombras profundas con slices de luz cinematográfica"
      ],
      "efecto": "Cyberpunk underground editorial mood."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Rebelde, oscuro, introspectivo, callejero.",
      "tono": "Hip-hop underground + noir cyberpunk cinematic sequence."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Dark cyberpunk noir portrait sequence, gritty street fashion editorial.",
      "detalles": [
        "Film grain heavy",
        "Motion blur neon streaks",
        "Raw handheld camera feel",
        "Shallow depth of field"
      ],
      "acabado": "Moody, high-contrast, underground aesthetic.",
      "calidad": "Ultra-realistic 8K con texturas crudas y cinematográficas."
    },
    "M_Composicion_Camara": {
      "layout": "Three-frame vertical sequence (top/middle/bottom).",
      "enfoque": "Sharp facial identity preserved in all frames.",
      "lentes": "Close-ups + medium shot con DOF shallow.",
      "encuadre": "Cada frame variado pero coherente en estética neon noir."
    },
    "P_Postproduccion": {
      "color_grading": "Dominante verde neón + negros profundos noir.",
      "contraste": "Alto para estética underground.",
      "textura": "Grano fuerte + high ISO film look.",
      "acabado_final": "Ultra-realistic 8K cyberpunk noir triptych sequence con identidad preservada."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.817Z', '2026-08-29T17:52:58.817Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1c227346-7a22-43b2-8c69-0133b3eb2053', 'd164f509-a838-43ac-8459-2c7dad280356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1c227346-7a22-43b2-8c69-0133b3eb2053', '23e74b4b-008a-4a0d-870b-f8297beba9c9') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1c227346-7a22-43b2-8c69-0133b3eb2053', 'ec694f99-cfb9-45c8-8773-16d8073dc205') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('e2446f6b-8ba9-414a-8148-635f39da348c', 'prompt', 'Overhead Cozy Sofa Portrait — Morning Sunbeam Basement Scene', 'overhead-cozy-sofa', 'Ultra-realistic 8K overhead sofa portrait con atmósfera tranquila y cinematográfica.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener rostro, peinado, tono de piel y todos los rasgos físicos exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Persona recostada en un ambiente cozy e íntimo, retrato lifestyle cinematográfico.
- **Expresión:** Sleepy gaze, calmada, relajada.
- **Vestimenta:**
  - Outfit: Comfortable sweater casual
- **Accesorios:**
  - Headphones: Audífonos puestos mientras descansa
- **Detalle piel:** Textura natural realista en piel, cabello y ropa.
- **Calidad:** Ultra-realistic 8K overhead lifestyle portrait rendering con detalle extremo.

## E: Entorno
- **Ubicación:** Basement corner cozy con silla tipo sofá.
- **Props narrativos:**
  - Open magazine sobre el regazo
  - Libros apilados al lado del sujeto
- **Atmósfera:** Interior cálido, íntimo, silencioso, morning calm.

## A: Acción / Postura
- **Pose:** Acostado/a en la silla sofá, brazos detrás de la cabeza.
- **Lenguaje corporal:** Relajación total, momento de descanso.
- **Detalle:** Revista abierta en el regazo, libros acompañando la escena.

## I: Iluminación
- **Tipo:** Morning cinematic sunbeam.
- **Fuente:** Rayo de sol entrando desde una ventana en el techo.
- **Características:**
  - Soft natural shadows sobre piel y ropa
  - Iluminación cálida de mañana
  - Contraste suave cinematográfico
- **Efecto:** Texturas realistas resaltadas con luz natural delicada.

## S: Sensación / Atmósfera
- **Mood:** Cozy, sleepy, introspectivo, tranquilo.
- **Tono:** Cinematic morning calm con vibe hogareña.

## E: Estilo Visual
- **Estilo general:** Overhead cinematic lifestyle photography ultra realista.
- **Detalles:**
  - Textura de piel y cabello realista
  - Tela del sweater definida
  - Props cotidianos (magazine + books)
  - Sunbeam cinematográfico suave
- **Acabado:** Natural, cálido, sin sobreprocesado.
- **Calidad:** Ultra-realistic 8K con detalle premium en entorno y sujeto.

## M: Composición / Cámara
- **Aspect Ratio:** 4:5
- **Ángulo:** Overhead top-down cinematic shot.
- **Plano:** Full-body recostado en chair-sofa, composición íntima.
- **Encuadre:** Sujeto centrado con props alrededor para storytelling visual.
- **Enfoque:** Sharp focus en rostro y cuerpo; fondo suave pero detallado.

## P: Postproducción
- **Color grading:** Warm morning tones con mood cinematográfico suave.
- **Contraste:** Moderado-natural para mantener autenticidad cozy.
- **Nitidez:** Alta definición en piel, textiles, magazine y libros.
- **Acabado final:** Ultra-realistic 8K overhead sofa portrait con atmósfera tranquila y cinematográfica.
', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/overhead-cozy-sofa.jpg', '{
  "title": "Overhead Cozy Sofa Portrait — Morning Sunbeam Basement Scene",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen de referencia como identidad principal. Mantener rostro, peinado, tono de piel y todos los rasgos físicos exactamente idénticos.",
      "preservacion_total": "No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.",
      "sujeto": "Persona recostada en un ambiente cozy e íntimo, retrato lifestyle cinematográfico.",
      "expresion": "Sleepy gaze, calmada, relajada.",
      "vestimenta": {
        "outfit": "Comfortable sweater casual"
      },
      "accesorios": {
        "headphones": "Audífonos puestos mientras descansa"
      },
      "detalle_piel": "Textura natural realista en piel, cabello y ropa.",
      "calidad": "Ultra-realistic 8K overhead lifestyle portrait rendering con detalle extremo."
    },
    "E_Entorno": {
      "ubicacion": "Basement corner cozy con silla tipo sofá.",
      "props_narrativos": [
        "Open magazine sobre el regazo",
        "Libros apilados al lado del sujeto"
      ],
      "atmósfera": "Interior cálido, íntimo, silencioso, morning calm."
    },
    "A_Accion_Postura": {
      "pose": "Acostado/a en la silla sofá, brazos detrás de la cabeza.",
      "lenguaje_corporal": "Relajación total, momento de descanso.",
      "detalle": "Revista abierta en el regazo, libros acompañando la escena."
    },
    "I_Iluminacion": {
      "tipo": "Morning cinematic sunbeam.",
      "fuente": "Rayo de sol entrando desde una ventana en el techo.",
      "caracteristicas": [
        "Soft natural shadows sobre piel y ropa",
        "Iluminación cálida de mañana",
        "Contraste suave cinematográfico"
      ],
      "efecto": "Texturas realistas resaltadas con luz natural delicada."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Cozy, sleepy, introspectivo, tranquilo.",
      "tono": "Cinematic morning calm con vibe hogareña."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Overhead cinematic lifestyle photography ultra realista.",
      "detalles": [
        "Textura de piel y cabello realista",
        "Tela del sweater definida",
        "Props cotidianos (magazine + books)",
        "Sunbeam cinematográfico suave"
      ],
      "acabado": "Natural, cálido, sin sobreprocesado.",
      "calidad": "Ultra-realistic 8K con detalle premium en entorno y sujeto."
    },
    "M_Composicion_Camara": {
      "aspect_ratio": "4:5",
      "angulo": "Overhead top-down cinematic shot.",
      "plano": "Full-body recostado en chair-sofa, composición íntima.",
      "encuadre": "Sujeto centrado con props alrededor para storytelling visual.",
      "enfoque": "Sharp focus en rostro y cuerpo; fondo suave pero detallado."
    },
    "P_Postproduccion": {
      "color_grading": "Warm morning tones con mood cinematográfico suave.",
      "contraste": "Moderado-natural para mantener autenticidad cozy.",
      "nitidez": "Alta definición en piel, textiles, magazine y libros.",
      "acabado_final": "Ultra-realistic 8K overhead sofa portrait con atmósfera tranquila y cinematográfica."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.817Z', '2026-08-29T17:52:58.817Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e2446f6b-8ba9-414a-8148-635f39da348c', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e2446f6b-8ba9-414a-8148-635f39da348c', '0f5b7c3f-fb24-42d7-8543-e2194edc9602') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e2446f6b-8ba9-414a-8148-635f39da348c', 'e7ac43de-f671-44f6-8691-9c743fdb3553') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('56cef5e2-493f-41ac-8d2c-6700c8b3c6e6', 'prompt', 'Fragile Tape Couture Portrait — Yellow Avant-Garde Editorial Concept', 'fragile-tape-couture', 'Ultra-realistic 8K fragile tape couture portrait con estética editorial conceptual premium.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión, tipo corporal y todos los rasgos físicos exactamente idénticos.
- **Preservación total:** No cambiar ni editar ningún aspecto físico bajo ninguna circunstancia.
- **Sujeto:** Persona glamorosa en sesión editorial conceptual de alta moda.
- **Piel:** Soft dewy glow natural bajo luz profesional.
- **Outfit:**
  - Concepto: Avant-garde couture hecho completamente de cinta amarilla con texto ''FRAGILE''
  - Top: Structured strapless top formado con caution tape
  - Bottom: High-waisted shorts estilo modern sando set
- **Estilo:** Fashion magazine conceptual, chic y moderno.
- **Calidad:** Ultra-realistic 8K high-fashion portrait rendering con detalle extremo.

## E: Entorno
- **Fondo:** Minimalist pastel studio wall limpio, sin objetos adicionales.
- **Escena:** Set editorial conceptual con paleta suave para resaltar el amarillo vibrante.
- **Elemento artístico:**
  - Foreground: Una tira diagonal de ''FRAGILE'' tape cruzando el primer plano como composición visual.

## A: Acción / Postura
- **Pose:** De pie, fuerte y statuesque, postura alta y elegante.
- **Posición:** Apoyada suavemente contra una pared pastel limpia.
- **Brazos:** Relajados a los lados.
- **Expresión:** Mirada sutilmente segura, calmada, self-assured editorial.

## I: Iluminación
- **Tipo:** Soft studio lighting editorial-grade, flattering y profesional.
- **Características:**
  - Sombras suaves cinematográficas
  - Glow natural en piel
  - Textura definida en cinta amarilla
- **Efecto:** Look high-fashion limpio y conceptual.

## S: Sensación / Atmósfera
- **Mood:** Confident, avant-garde, chic, editorial.
- **Tono:** Conceptual fashion portrait con presencia moderna y artística.

## E: Estilo Visual
- **Estilo general:** Photorealistic fashion magazine editorial con couture surreal.
- **Detalles:**
  - Cinta FRAGILE como material de outfit estructurado
  - Foreground diagonal tape stripe para composición artística
  - Fondo pastel minimalista como contraste suave
- **Acabado:** High-fashion conceptual, Vogue-level modern styling.
- **Calidad:** Ultra-realistic 8K ultra-high detail editorial aesthetic.

## M: Composición / Cámara
- **Plano:** Full-body o three-quarter fashion portrait mostrando outfit completo.
- **Ángulo:** Eye-level neutral para postura statuesque.
- **Encuadre:** Sujeto centrado con foreground diagonal tape como elemento dinámico.
- **Enfoque:** Sharp focus en rostro y outfit; background limpio con depth suave.

## P: Postproducción
- **Color grading:** Pastel minimal background + amarillo brillante dominante.
- **Contraste:** Moderado-clean para look fashion magazine.
- **Nitidez:** Alta definición en piel, cinta, textura y contornos faciales.
- **Acabado final:** Ultra-realistic 8K fragile tape couture portrait con estética editorial conceptual premium.
', 'Fashion', NULL, NULL, 'advanced', '/images/prompts/fragile-tape-couture.png', '{
  "title": "Fragile Tape Couture Portrait — Yellow Avant-Garde Editorial Concept",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión, tipo corporal y todos los rasgos físicos exactamente idénticos.",
      "preservacion_total": "No cambiar ni editar ningún aspecto físico bajo ninguna circunstancia.",
      "sujeto": "Persona glamorosa en sesión editorial conceptual de alta moda.",
      "piel": "Soft dewy glow natural bajo luz profesional.",
      "outfit": {
        "concepto": "Avant-garde couture hecho completamente de cinta amarilla con texto ''FRAGILE''",
        "top": "Structured strapless top formado con caution tape",
        "bottom": "High-waisted shorts estilo modern sando set"
      },
      "estilo": "Fashion magazine conceptual, chic y moderno.",
      "calidad": "Ultra-realistic 8K high-fashion portrait rendering con detalle extremo."
    },
    "E_Entorno": {
      "fondo": "Minimalist pastel studio wall limpio, sin objetos adicionales.",
      "escena": "Set editorial conceptual con paleta suave para resaltar el amarillo vibrante.",
      "elemento_artistico": {
        "foreground": "Una tira diagonal de ''FRAGILE'' tape cruzando el primer plano como composición visual"
      }
    },
    "A_Accion_Postura": {
      "pose": "De pie, fuerte y statuesque, postura alta y elegante.",
      "posicion": "Apoyada suavemente contra una pared pastel limpia.",
      "brazos": "Relajados a los lados.",
      "expresion": "Mirada sutilmente segura, calmada, self-assured editorial."
    },
    "I_Iluminacion": {
      "tipo": "Soft studio lighting editorial-grade, flattering y profesional.",
      "caracteristicas": [
        "Sombras suaves cinematográficas",
        "Glow natural en piel",
        "Textura definida en cinta amarilla"
      ],
      "efecto": "Look high-fashion limpio y conceptual."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Confident, avant-garde, chic, editorial.",
      "tono": "Conceptual fashion portrait con presencia moderna y artística."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Photorealistic fashion magazine editorial con couture surreal.",
      "detalles": [
        "Cinta FRAGILE como material de outfit estructurado",
        "Foreground diagonal tape stripe para composición artística",
        "Fondo pastel minimalista como contraste suave"
      ],
      "acabado": "High-fashion conceptual, Vogue-level modern styling.",
      "calidad": "Ultra-realistic 8K ultra-high detail editorial aesthetic."
    },
    "M_Composicion_Camara": {
      "plano": "Full-body o three-quarter fashion portrait mostrando outfit completo.",
      "angulo": "Eye-level neutral para postura statuesque.",
      "encuadre": "Sujeto centrado con foreground diagonal tape como elemento dinámico.",
      "enfoque": "Sharp focus en rostro y outfit; background limpio con depth suave."
    },
    "P_Postproduccion": {
      "color_grading": "Pastel minimal background + amarillo brillante dominante.",
      "contraste": "Moderado-clean para look fashion magazine.",
      "nitidez": "Alta definición en piel, cinta, textura y contornos faciales.",
      "acabado_final": "Ultra-realistic 8K fragile tape couture portrait con estética editorial conceptual premium."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.817Z', '2026-08-29T17:52:58.817Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('56cef5e2-493f-41ac-8d2c-6700c8b3c6e6', '179bf2c6-0bb3-43a3-8654-673782bc8069') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('56cef5e2-493f-41ac-8d2c-6700c8b3c6e6', '38b6a8bc-3739-41f6-850f-fa1fd6ed23f2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('56cef5e2-493f-41ac-8d2c-6700c8b3c6e6', '65b9e768-56a5-4273-8b81-f8d28c497914') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('eb72edf7-90ce-4922-8190-099824b49ccc', 'prompt', 'Dual Split-Light Profile Portrait — Gold Top Light + Neon Blue Jaw Glow', 'dual-split-light-portrait', 'Ultra-realistic 8K split-light profile portrait con mood etéreo editorial y contraste gold/blue.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel y expresión exactamente idénticos a la referencia.
- **Preservación total:** No cambiar ni editar el rostro ni ningún rasgo físico bajo ninguna circunstancia.
- **Detalle facial:**
  - Naturalidad: Preservar todos los detalles naturales: arrugas, microexpresiones, textura real de piel.
  - Realismo: Skin textured para realismo máximo, sin smoothing artificial.
- **Sujeto:** Retrato de perfil contemplativo, high-fashion y etéreo.
- **Expresión:** Pensativa, mirando hacia arriba y alejándose de la cámara.
- **Calidad:** Ultra-realistic 8K close-up portrait rendering con fidelidad absoluta.

## E: Entorno
- **Fondo:** Dark minimalist background sin elementos distractores.
- **Escena:** Estudio editorial moody con atmósfera etérea.
- **Objetivo:** Aislar el rostro como punto emocional central.

## A: Acción / Postura
- **Pose:** Profile close-up, rostro ligeramente inclinado hacia arriba.
- **Mirada:** Ojos dirigidos upward y away del lente.
- **Lenguaje corporal:** Quietud introspectiva, elegancia escultórica.

## I: Iluminación
- **Tipo:** Dramatic split-lighting dual-tone cinematográfico.
- **Esquema:**
  - Gold light: Vibrant glowing gold light iluminando la parte superior del rostro.
  - Neon blue light: Cool neon blue glow suave en mandíbula y cuello.
- **Efecto:**
  - Contraste fuerte cálido vs frío
  - Contornos faciales esculpidos con precisión
  - Mood high-fashion nocturno

## S: Sensación / Atmósfera
- **Mood:** Moody, ethereal, contemplativo.
- **Tono:** High-fashion editorial con aura misteriosa y elegante.

## E: Estilo Visual
- **Estilo general:** Photorealistic cinematic studio portrait con iluminación dual.
- **Detalles:**
  - Glow dorado intenso arriba
  - Neón azul frío en mandíbula
  - Textura realista de piel y detalle ocular
- **Acabado:** Editorial premium, moderno, elegante, surreal-light.
- **Calidad:** Ultra-realistic 8K con estética Vogue-level.

## M: Composición / Cámara
- **Plano:** Close-up profile portrait.
- **Enfoque:** Sharp focus extremo en el ojo como ancla emocional.
- **Profundidad de campo:** Shallow DOF cinematográfico, fondo completamente suave.
- **Encuadre:** Perfil dominante con espacio negativo oscuro alrededor.

## P: Postproducción
- **Color grading:** Dual-tone gold + neon blue con contraste cinematográfico limpio.
- **Nitidez:** Máxima definición en ojo, piel, contornos faciales.
- **Contraste:** High-fashion dramatic, deep blacks controlados.
- **Acabado final:** Ultra-realistic 8K split-light profile portrait con mood etéreo editorial.
', 'Editorial', NULL, NULL, 'advanced', '/images/prompts/dual-split-light-portrait.png', '{
  "title": "Dual Split-Light Profile Portrait — Gold Top Light + Neon Blue Jaw Glow",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel y expresión exactamente idénticos a la referencia.",
      "preservacion_total": "No cambiar ni editar el rostro ni ningún rasgo físico bajo ninguna circunstancia.",
      "detalle_facial": {
        "naturalidad": "Preservar todos los detalles naturales: arrugas, microexpresiones, textura real de piel.",
        "realismo": "Skin textured para realismo máximo, sin smoothing artificial."
      },
      "sujeto": "Retrato de perfil contemplativo, high-fashion y etéreo.",
      "expresion": "Pensativa, mirando hacia arriba y alejándose de la cámara.",
      "calidad": "Ultra-realistic 8K close-up portrait rendering con fidelidad absoluta."
    },
    "E_Entorno": {
      "fondo": "Dark minimalist background sin elementos distractores.",
      "escena": "Estudio editorial moody con atmósfera etérea.",
      "objetivo": "Aislar el rostro como punto emocional central."
    },
    "A_Accion_Postura": {
      "pose": "Profile close-up, rostro ligeramente inclinado hacia arriba.",
      "mirada": "Ojos dirigidos upward y away del lente.",
      "lenguaje_corporal": "Quietud introspectiva, elegancia escultórica."
    },
    "I_Iluminacion": {
      "tipo": "Dramatic split-lighting dual-tone cinematográfico.",
      "esquema": {
        "gold_light": "Vibrant glowing gold light iluminando la parte superior del rostro.",
        "neon_blue_light": "Cool neon blue glow suave en mandíbula y cuello."
      },
      "efecto": [
        "Contraste fuerte cálido vs frío",
        "Contornos faciales esculpidos con precisión",
        "Mood high-fashion nocturno"
      ]
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Moody, ethereal, contemplativo.",
      "tono": "High-fashion editorial con aura misteriosa y elegante."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Photorealistic cinematic studio portrait con iluminación dual.",
      "detalles": [
        "Glow dorado intenso arriba",
        "Neón azul frío en mandíbula",
        "Textura realista de piel y detalle ocular"
      ],
      "acabado": "Editorial premium, moderno, elegante, surreal-light.",
      "calidad": "Ultra-realistic 8K con estética Vogue-level."
    },
    "M_Composicion_Camara": {
      "plano": "Close-up profile portrait.",
      "enfoque": "Sharp focus extremo en el ojo como ancla emocional.",
      "profundidad_de_campo": "Shallow DOF cinematográfico, fondo completamente suave.",
      "encuadre": "Perfil dominante con espacio negativo oscuro alrededor."
    },
    "P_Postproduccion": {
      "color_grading": "Dual-tone gold + neon blue con contraste cinematográfico limpio.",
      "nitidez": "Máxima definición en ojo, piel, contornos faciales.",
      "contraste": "High-fashion dramatic, deep blacks controlados.",
      "acabado_final": "Ultra-realistic 8K split-light profile portrait con mood etéreo editorial."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.817Z', '2026-08-29T17:52:58.817Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('eb72edf7-90ce-4922-8190-099824b49ccc', 'd164f509-a838-43ac-8459-2c7dad280356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('eb72edf7-90ce-4922-8190-099824b49ccc', '470cbea3-705e-4662-8890-8e4b972f7ecb') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('eb72edf7-90ce-4922-8190-099824b49ccc', '6f448522-3e5e-41c9-8d36-a9e36331b356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('49587332-350c-49ac-8de7-0a8754a5d5c3', 'prompt', 'Cloud Fantasy Ethereal Portrait — Soft Blue Purple Heavenly Mood', 'cloud-fantasy-portrait', 'Ultra-realistic 8K cloud fantasy portrait con mood celestial sereno y fidelidad absoluta.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, color, longitud, textura, tono de piel, tipo corporal, tattoos y expresión exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Fidelidad absoluta:**
  - Rostro 100% idéntico
  - Cabello idéntico en color, longitud, textura y estilo
  - Expresión idéntica
  - Tatuajes preservados exactamente
  - Proporciones corporales sin cambios
- **Sujeto:** Retrato etéreo y celestial, identidad completamente bloqueada.
- **Cabello lock:**
  - Instrucción: Cabello debe coincidir exactamente con la referencia.
  - Detalle: Ondulado largo con sutiles braids enmarcando el rostro (solo si existen en referencia).
- **Accesorios:**
  - Necklace: Delicado collar dorado
  - Bracelet: Pulsera dorada elegante
- **Styling safe:** Tasteful fantasy portrait, no explicit nudity, shoulders softly obscured by clouds.
- **Calidad:** Ultra-realistic 8K fantasy editorial portrait rendering con detalle extremo.

## E: Entorno
- **Escena:** Cama whimsical de nubes fluffy blancas y púrpura claro.
- **Elementos:**
  - Soft cloud texture envolviendo parcialmente al sujeto
  - Celestial dreamy atmosphere
- **Fondo:** Smooth gradient background en tonos azul suave y púrpura pastel.
- **Objetivo:** Crear sensación heavenly y otherworldly elegante.

## A: Acción / Postura
- **Pose:** Emergiendo suavemente desde las nubes, composición íntima.
- **Mirada:** Mirando hacia arriba y ligeramente de lado.
- **Expresión:** Serena, contemplativa, calmada.
- **Lenguaje corporal:** Quietud celestial, fragilidad elegante.

## I: Iluminación
- **Tipo:** Soft diffused studio lighting.
- **Características:**
  - Luz envolvente sin sombras duras
  - Highlights suaves sobre piel y cabello
  - Glow natural sobre nubes
- **Efecto:** Resalta rasgos faciales con naturalidad y pureza.

## S: Sensación / Atmósfera
- **Mood:** Heavenly, dreamy, serene, otherworldly.
- **Tono:** Fantasy editorial con calma emocional y poesía visual.

## E: Estilo Visual
- **Estilo general:** Magical realism fantasy portrait con estética editorial elegante.
- **Detalles:**
  - Textura fluffy ultra realista en nubes
  - Degradados pastel suaves en background
  - Joyas doradas delicadas como acentos premium
- **Paleta:** Blanco + lila claro + azul pastel + dorado suave.
- **Calidad:** Ultra-realistic 8K con acabado celestial de lujo.

## M: Composición / Cámara
- **Plano:** Close-up a medium close portrait emergiendo de clouds.
- **Encuadre:** Rostro dominante centrado, nubes enmarcando hombros.
- **Enfoque:** Tack-sharp en ojos y piel; nubes suaves con depth controlado.
- **Profundidad de campo:** Shallow DOF cinematográfico dreamy.

## P: Postproducción
- **Color grading:** Pastel heavenly tones con glow suave.
- **Contraste:** Bajo-moderado para mantener delicadeza etérea.
- **Nitidez:** Alta definición en rostro, cabello y tattoos preservados.
- **Acabado final:** Ultra-realistic 8K cloud fantasy portrait con mood celestial sereno y fidelidad absoluta.
', 'Fantasy', NULL, NULL, 'advanced', '/images/prompts/cloud-fantasy-portrait.png', '{
  "title": "Cloud Fantasy Ethereal Portrait — Soft Blue Purple Heavenly Mood",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, color, longitud, textura, tono de piel, tipo corporal, tattoos y expresión exactamente idénticos.",
      "preservacion_total": "No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.",
      "fidelidad_absoluta": [
        "Rostro 100% idéntico",
        "Cabello idéntico en color, longitud, textura y estilo",
        "Expresión idéntica",
        "Tatuajes preservados exactamente",
        "Proporciones corporales sin cambios"
      ],
      "sujeto": "Retrato etéreo y celestial, identidad completamente bloqueada.",
      "cabello_lock": {
        "instruccion": "Cabello debe coincidir exactamente con la referencia.",
        "detalle": "Ondulado largo con sutiles braids enmarcando el rostro (solo si existen en referencia)."
      },
      "accesorios": {
        "necklace": "Delicado collar dorado",
        "bracelet": "Pulsera dorada elegante"
      },
      "styling_safe": "Tasteful fantasy portrait, no explicit nudity, shoulders softly obscured by clouds.",
      "calidad": "Ultra-realistic 8K fantasy editorial portrait rendering con detalle extremo."
    },
    "E_Entorno": {
      "escena": "Cama whimsical de nubes fluffy blancas y púrpura claro.",
      "elementos": [
        "Soft cloud texture envolviendo parcialmente al sujeto",
        "Celestial dreamy atmosphere"
      ],
      "fondo": "Smooth gradient background en tonos azul suave y púrpura pastel.",
      "objetivo": "Crear sensación heavenly y otherworldly elegante."
    },
    "A_Accion_Postura": {
      "pose": "Emergiendo suavemente desde las nubes, composición íntima.",
      "mirada": "Mirando hacia arriba y ligeramente de lado.",
      "expresion": "Serena, contemplativa, calmada.",
      "lenguaje_corporal": "Quietud celestial, fragilidad elegante."
    },
    "I_Iluminacion": {
      "tipo": "Soft diffused studio lighting.",
      "caracteristicas": [
        "Luz envolvente sin sombras duras",
        "Highlights suaves sobre piel y cabello",
        "Glow natural sobre nubes"
      ],
      "efecto": "Resalta rasgos faciales con naturalidad y pureza."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Heavenly, dreamy, serene, otherworldly.",
      "tono": "Fantasy editorial con calma emocional y poesía visual."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Magical realism fantasy portrait con estética editorial elegante.",
      "detalles": [
        "Textura fluffy ultra realista en nubes",
        "Degradados pastel suaves en background",
        "Joyas doradas delicadas como acentos premium"
      ],
      "paleta": "Blanco + lila claro + azul pastel + dorado suave.",
      "calidad": "Ultra-realistic 8K con acabado celestial de lujo."
    },
    "M_Composicion_Camara": {
      "plano": "Close-up a medium close portrait emergiendo de clouds.",
      "encuadre": "Rostro dominante centrado, nubes enmarcando hombros.",
      "enfoque": "Tack-sharp en ojos y piel; nubes suaves con depth controlado.",
      "profundidad_de_campo": "Shallow DOF cinematográfico dreamy."
    },
    "P_Postproduccion": {
      "color_grading": "Pastel heavenly tones con glow suave.",
      "contraste": "Bajo-moderado para mantener delicadeza etérea.",
      "nitidez": "Alta definición en rostro, cabello y tattoos preservados.",
      "acabado_final": "Ultra-realistic 8K cloud fantasy portrait con mood celestial sereno y fidelidad absoluta."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('49587332-350c-49ac-8de7-0a8754a5d5c3', '28c9b38f-2f25-4ce6-86a9-f7bc21227203') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('49587332-350c-49ac-8de7-0a8754a5d5c3', '4b0df260-f2e8-4d55-8706-bb1a2192f6f1') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('49587332-350c-49ac-8de7-0a8754a5d5c3', '6bea1a96-8ecc-4538-81d7-802322ec4336') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('081505f3-5919-490b-8c4b-a838484f2371', 'prompt', 'Violet Monochrome Diva Portrait — Lavender Fur Y2K Glam Editorial', 'violet-monochrome-diva', 'Ultra-realistic 8K violet diva portrait con estética editorial glam de lujo.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener rostro, cabello, tono de piel y todos los rasgos físicos exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún aspecto físico bajo ninguna circunstancia.
- **Fidelidad reforzada:**
  - No cambiar el rostro
  - No cambiar el tono de piel
  - No cambiar la estructura facial
  - No cambiar ningún rasgo corporal
- **Cabello lock:**
  - Instrucción: Usar el cabello exactamente como en la referencia.
  - Restricción: No cambiar color, longitud, textura ni estilo bajo ninguna circunstancia.
- **Sujeto:** Mujer glamorosa estilo diva editorial.
- **Makeup:**
  - Ojos: Shimmering lavender eyeshadow
  - Delineado: Bold winged eyeliner
  - Labios: Glossy peach lips
  - Piel: Luminous dewy skin con acabado beauty premium
- **Accesorios:**
  - Aretes: Oversized silver hoop earrings
  - Uñas: Long decorated nails con metallic rings
- **Vestimenta:**
  - Outfit: Lavender faux fur coat lujoso drapeado sobre los hombros
  - Armonía: Monochrome harmony con el fondo violeta
- **Calidad:** Ultra-realistic 8K beauty fashion portrait rendering con detalle extremo.

## E: Entorno
- **Fondo:** Bold violet solid background, limpio y saturado.
- **Escena:** Estudio minimalista sin props adicionales.
- **Objetivo:** Enfatizar estética monochrome glam y presencia editorial.

## A: Acción / Postura
- **Pose:** Postura glamorosa, elegante, con presencia de portada.
- **Expresión:** Segura, confiada, diva moderna.
- **Lenguaje corporal:** Calma poderosa, estilo editorial sofisticado.

## I: Iluminación
- **Tipo:** Clean studio lighting estilo beauty editorial.
- **Características:**
  - Iluminación uniforme resaltando maquillaje
  - Highlights suaves sobre piel dewy
  - Textura definida en fur coat y accesorios
- **Efecto:** Glow premium tipo portada de revista.

## S: Sensación / Atmósfera
- **Mood:** Elegante, confiada, stylish, luxury diva.
- **Tono:** Editorial magazine cover aesthetic con vibra Y2K glam.

## E: Estilo Visual
- **Estilo general:** High-fashion beauty editorial portrait con acabado glossy.
- **Styling Vibes:**
  - Y2K glam
  - Modern diva
  - Monochrome fashion luxury
  - Cover-ready magazine aesthetic
- **Detalles:**
  - Background violeta saturado
  - Lavender fur coat luxe
  - Makeup shimmer ultra definido
  - Accesorios silver bold
- **Calidad:** Ultra-realistic 8K Vogue-level beauty portrait.

## M: Composición / Cámara
- **Plano:** Close-up beauty portrait tipo portada.
- **Ángulo:** Eye-level directo para impacto editorial.
- **Encuadre:** Rostro y hombros dominantes, fur coat enmarcando composición.
- **Enfoque:** Tack-sharp en ojos, labios glossy, piel dewy y accesorios.

## P: Postproducción
- **Color grading:** Monochrome violet-lavender luxury palette con gloss refinado.
- **Nitidez:** Alta definición en piel, maquillaje, uñas y textura del fur.
- **Contraste:** Moderado-clean para look beauty magazine.
- **Acabado final:** Ultra-realistic 8K violet diva portrait con estética editorial glam de lujo.
', 'Fashion', NULL, NULL, 'intermediate', '/images/prompts/violet-monochrome-diva.png', '{
  "title": "Violet Monochrome Diva Portrait — Lavender Fur Y2K Glam Editorial",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen de referencia como identidad principal. Mantener rostro, cabello, tono de piel y todos los rasgos físicos exactamente idénticos.",
      "preservacion_total": "No alterar ni editar ningún aspecto físico bajo ninguna circunstancia.",
      "fidelidad_reforzada": [
        "No cambiar el rostro",
        "No cambiar el tono de piel",
        "No cambiar la estructura facial",
        "No cambiar ningún rasgo corporal"
      ],
      "cabello_lock": {
        "instruccion": "Usar el cabello exactamente como en la referencia.",
        "restriccion": "No cambiar color, longitud, textura ni estilo bajo ninguna circunstancia."
      },
      "sujeto": "Mujer glamorosa estilo diva editorial.",
      "makeup": {
        "ojos": "Shimmering lavender eyeshadow",
        "delineado": "Bold winged eyeliner",
        "labios": "Glossy peach lips",
        "piel": "Luminous dewy skin con acabado beauty premium"
      },
      "accesorios": {
        "aretes": "Oversized silver hoop earrings",
        "uñas": "Long decorated nails con metallic rings"
      },
      "vestimenta": {
        "outfit": "Lavender faux fur coat lujoso drapeado sobre los hombros",
        "armonía": "Monochrome harmony con el fondo violeta"
      },
      "calidad": "Ultra-realistic 8K beauty fashion portrait rendering con detalle extremo."
    },
    "E_Entorno": {
      "fondo": "Bold violet solid background, limpio y saturado.",
      "escena": "Estudio minimalista sin props adicionales.",
      "objetivo": "Enfatizar estética monochrome glam y presencia editorial."
    },
    "A_Accion_Postura": {
      "pose": "Postura glamorosa, elegante, con presencia de portada.",
      "expresion": "Segura, confiada, diva moderna.",
      "lenguaje_corporal": "Calma poderosa, estilo editorial sofisticado."
    },
    "I_Iluminacion": {
      "tipo": "Clean studio lighting estilo beauty editorial.",
      "caracteristicas": [
        "Iluminación uniforme resaltando maquillaje",
        "Highlights suaves sobre piel dewy",
        "Textura definida en fur coat y accesorios"
      ],
      "efecto": "Glow premium tipo portada de revista."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Elegante, confiada, stylish, luxury diva.",
      "tono": "Editorial magazine cover aesthetic con vibra Y2K glam."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "High-fashion beauty editorial portrait con acabado glossy.",
      "styling_vibes": [
        "Y2K glam",
        "Modern diva",
        "Monochrome fashion luxury",
        "Cover-ready magazine aesthetic"
      ],
      "detalles": [
        "Background violeta saturado",
        "Lavender fur coat luxe",
        "Makeup shimmer ultra definido",
        "Accesorios silver bold"
      ],
      "calidad": "Ultra-realistic 8K Vogue-level beauty portrait."
    },
    "M_Composicion_Camara": {
      "plano": "Close-up beauty portrait tipo portada.",
      "angulo": "Eye-level directo para impacto editorial.",
      "encuadre": "Rostro y hombros dominantes, fur coat enmarcando composición.",
      "enfoque": "Tack-sharp en ojos, labios glossy, piel dewy y accesorios."
    },
    "P_Postproduccion": {
      "color_grading": "Monochrome violet-lavender luxury palette con gloss refinado.",
      "nitidez": "Alta definición en piel, maquillaje, uñas y textura del fur.",
      "contraste": "Moderado-clean para look beauty magazine.",
      "acabado_final": "Ultra-realistic 8K violet diva portrait con estética editorial glam de lujo."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('081505f3-5919-490b-8c4b-a838484f2371', '179bf2c6-0bb3-43a3-8654-673782bc8069') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('081505f3-5919-490b-8c4b-a838484f2371', 'ce38b0f1-cefd-435f-81cf-11189d218f9c') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('081505f3-5919-490b-8c4b-a838484f2371', '00adb4a6-b424-4745-84bd-4d697e34ac04') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('8f8fe38e-d68e-416e-8195-4a0b74fa7174', 'prompt', 'Modern Chair Studio Portrait — Black Coat + Denim Shorts Editorial', 'modern-chair-studio-portrait', 'Ultra-realistic 8K modern studio chair portrait con estética fashion minimal premium.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado, tono de piel y expresión exactamente idénticos. No alterar ni embellecer el rostro.
- **Preservación total:** No modificar cara, proporciones, textura de piel ni expresión bajo ninguna circunstancia.
- **Sujeto:** Mujer en retrato de estudio high-fashion editorial.
- **Vestimenta:**
  - Outerwear: Abrigo negro elegante
  - Bottom: Shorts de mezclilla (denim shorts)
- **Detalle piel:** Textura realista natural, sin filtros artificiales.
- **Cabello:** Conservar exactamente el hairstyle original de la referencia.
- **Calidad:** Ultra-realistic 8K studio fashion portrait rendering con máxima fidelidad.

## E: Entorno
- **Escena:** Estudio minimalista moderno con líneas limpias.
- **Fondo:** Neutral studio background sin props adicionales.
- **Paleta:** Colores neutros suaves para resaltar al sujeto y la ropa.

## A: Acción / Postura
- **Pose:** Sentada sobre una silla moderna única.
- **Lenguaje corporal:** Natural, elegante, enfatizando postura y poise.
- **Actitud:** Sofisticada, calmada, editorial.

## I: Iluminación
- **Tipo:** Soft diffused high-key studio lighting.
- **Características:**
  - Sombras suaves cinematográficas
  - Luz envolvente que esculpe rostro y cuerpo sutilmente
- **Efecto:** Look limpio y profesional sin dramatismo excesivo.

## S: Sensación / Atmósfera
- **Mood:** Sleek, moderno, elegante, editorial.
- **Tono:** High-fashion minimal studio portrait con estética atemporal.

## E: Estilo Visual
- **Estilo general:** Fotografía editorial moderna de alta moda.
- **Detalles:**
  - Texturas realistas en abrigo y denim
  - Piel y cabello con detalle extremo
  - Composición dinámica pero limpia
- **Acabado:** Professional studio fashion aesthetic, sleek and modern.
- **Calidad:** Ultra-realistic 8K con acabado premium Vogue-style.

## M: Composición / Cámara
- **Plano:** Plano medio a tres cuartos mostrando silla y outfit completo.
- **Ángulo:** Eye-level neutral con composición editorial dinámica.
- **Encuadre:** Sujeto centrado o ligeramente desplazado para tensión visual moderna.
- **Enfoque:** Tack-sharp focus en rostro, ropa y postura; fondo suave y limpio.

## P: Postproducción
- **Color grading:** Neutro cálido y elegante, sin saturación agresiva.
- **Contraste:** Suave-moderado para un look high-key editorial.
- **Nitidez:** Alta definición en piel, tela, cabello y bordes del chair design.
- **Acabado final:** Ultra-realistic 8K modern studio chair portrait con estética fashion minimal premium.
', 'Fashion', NULL, NULL, 'intermediate', '/images/prompts/modern-chair-studio-portrait.png', '{
  "title": "Modern Chair Studio Portrait — Black Coat + Denim Shorts Editorial",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado, tono de piel y expresión exactamente idénticos. No alterar ni embellecer el rostro.",
      "preservacion_total": "No modificar cara, proporciones, textura de piel ni expresión bajo ninguna circunstancia.",
      "sujeto": "Mujer en retrato de estudio high-fashion editorial.",
      "vestimenta": {
        "outerwear": "Abrigo negro elegante",
        "bottom": "Shorts de mezclilla (denim shorts)"
      },
      "detalle_piel": "Textura realista natural, sin filtros artificiales.",
      "cabello": "Conservar exactamente el hairstyle original de la referencia.",
      "calidad": "Ultra-realistic 8K studio fashion portrait rendering con máxima fidelidad."
    },
    "E_Entorno": {
      "escena": "Estudio minimalista moderno con líneas limpias.",
      "fondo": "Neutral studio background sin props adicionales.",
      "paleta": "Colores neutros suaves para resaltar al sujeto y la ropa."
    },
    "A_Accion_Postura": {
      "pose": "Sentada sobre una silla moderna única.",
      "lenguaje_corporal": "Natural, elegante, enfatizando postura y poise.",
      "actitud": "Sofisticada, calmada, editorial."
    },
    "I_Iluminacion": {
      "tipo": "Soft diffused high-key studio lighting.",
      "caracteristicas": [
        "Sombras suaves cinematográficas",
        "Luz envolvente que esculpe rostro y cuerpo sutilmente"
      ],
      "efecto": "Look limpio y profesional sin dramatismo excesivo."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Sleek, moderno, elegante, editorial.",
      "tono": "High-fashion minimal studio portrait con estética atemporal."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía editorial moderna de alta moda.",
      "detalles": [
        "Texturas realistas en abrigo y denim",
        "Piel y cabello con detalle extremo",
        "Composición dinámica pero limpia"
      ],
      "acabado": "Professional studio fashion aesthetic, sleek and modern.",
      "calidad": "Ultra-realistic 8K con acabado premium Vogue-style."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio a tres cuartos mostrando silla y outfit completo.",
      "angulo": "Eye-level neutral con composición editorial dinámica.",
      "encuadre": "Sujeto centrado o ligeramente desplazado para tensión visual moderna.",
      "enfoque": "Tack-sharp focus en rostro, ropa y postura; fondo suave y limpio."
    },
    "P_Postproduccion": {
      "color_grading": "Neutro cálido y elegante, sin saturación agresiva.",
      "contraste": "Suave-moderado para un look high-key editorial.",
      "nitidez": "Alta definición en piel, tela, cabello y bordes del chair design.",
      "acabado_final": "Ultra-realistic 8K modern studio chair portrait con estética fashion minimal premium."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('8f8fe38e-d68e-416e-8195-4a0b74fa7174', '179bf2c6-0bb3-43a3-8654-673782bc8069') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('8f8fe38e-d68e-416e-8195-4a0b74fa7174', 'ce38b0f1-cefd-435f-81cf-11189d218f9c') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('8f8fe38e-d68e-416e-8195-4a0b74fa7174', '356ee647-71f8-4602-85be-d9139e09edec') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('9b1add3a-1afb-4a6b-8b0f-713e330c81c8', 'prompt', 'Tropical Juice Selfie Portrait — Playful Summer Fashion + Fluffy Dog', 'tropical-juice-selfie', 'Ultra-realistic 8K tropical juice selfie portrait con mood veraniego playful.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado y tono de piel exactamente idénticos. Identidad bloqueada.
- **Preservación total:** No alterar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Joven mujer de cabello largo rojizo liso, estilo natural suelto.
- **Vestimenta:**
  - Top: Black brasiere editorial (summer fashion minimal look)
- **Expresión:** Casual, relajada, ligeramente juguetona.
- **Makeup:** Natural soft makeup, resaltando piel clara sin exageración.
- **Detalle facial:** Textura realista de piel con fidelidad absoluta.
- **Calidad:** Ultra-realistic 8K photorealistic lifestyle portrait rendering.

## E: Entorno
- **Escena:** Exterior tropical tipo vacaciones de verano.
- **Background:**
  - Estructuras de pabellón de madera
  - Árboles verdes frondosos
  - Vista parcial de palmera
  - Cielo azul brillante
- **Atmósfera:** Relaxed summer vacation vibe, cálido y alegre.

## A: Acción / Postura
- **Pose:** Selfie desde un ángulo frontal ligeramente bajo.
- **Acción principal:**
  - Objeto: Vaso plástico grande de jugo de naranja fresco
  - Detalle: Popote/pajilla rosa
  - Interacción: Acercándolo a los labios como si fuera a beber
- **Elemento secundario:**
  - Animal: Perro blanco fluffy al lado del sujeto
  - Expresión: Boca abierta, lengua afuera, alegre y vivaz
- **Lenguaje corporal:** Espontáneo, lifestyle, cute y natural.

## I: Iluminación
- **Tipo:** Luz natural diurna suave.
- **Características:** Warm gentle daylight con sombras ligeras.
- **Efecto:** Resalta piel, cabello y ambiente tropical sin dureza.

## S: Sensación / Atmósfera
- **Mood:** Playful, relajado, veraniego, alegre.
- **Tono:** Cinematic summer fashion selfie con ternura por el perro.

## E: Estilo Visual
- **Estilo general:** Ultra photorealistic cinematic lifestyle fashion portrait.
- **Detalles:**
  - Textura realista en piel y cabello
  - Juguito naranja vibrante con pajilla rosa
  - Perro fluffy con expresión alegre
  - Naturaleza tropical en background
- **Paleta:** Azules del cielo + verdes tropicales + naranja brillante + neutros elegantes.
- **Calidad:** Ultra-realistic 8K high-detail summer editorial aesthetic.

## M: Composición / Cámara
- **Aspect Ratio:** 9:16 vertical
- **Plano:** Upper-body selfie framing con rostro dominante.
- **Ángulo:** Slightly low front angle para vibe espontánea.
- **Enfoque:** Sharp focus en rostro, vaso y perro; fondo tropical suavemente desenfocado.

## P: Postproducción
- **Color grading:** Natural warm summer tones con look cinematográfico suave.
- **Contraste:** Moderado, sin sobreprocesado.
- **Nitidez:** Alta definición en rostro, cabello, bebida y textura del perro.
- **Acabado final:** Ultra-realistic 8K tropical juice selfie portrait con mood veraniego playful.
', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/tropical-juice-selfie.jpg', '{
  "title": "Tropical Juice Selfie Portrait — Playful Summer Fashion + Fluffy Dog",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado y tono de piel exactamente idénticos. Identidad bloqueada.",
      "preservacion_total": "No alterar ningún rasgo físico bajo ninguna circunstancia.",
      "sujeto": "Joven mujer de cabello largo rojizo liso, estilo natural suelto.",
      "vestimenta": {
        "top": "Black brasiere editorial (summer fashion minimal look)"
      },
      "expresion": "Casual, relajada, ligeramente juguetona.",
      "makeup": "Natural soft makeup, resaltando piel clara sin exageración.",
      "detalle_facial": "Textura realista de piel con fidelidad absoluta.",
      "calidad": "Ultra-realistic 8K photorealistic lifestyle portrait rendering."
    },
    "E_Entorno": {
      "escena": "Exterior tropical tipo vacaciones de verano.",
      "background": [
        "Estructuras de pabellón de madera",
        "Árboles verdes frondosos",
        "Vista parcial de palmera",
        "Cielo azul brillante"
      ],
      "atmósfera": "Relaxed summer vacation vibe, cálido y alegre."
    },
    "A_Accion_Postura": {
      "pose": "Selfie desde un ángulo frontal ligeramente bajo.",
      "accion_principal": {
        "objeto": "Vaso plástico grande de jugo de naranja fresco",
        "detalle": "Popote/pajilla rosa",
        "interaccion": "Acercándolo a los labios como si fuera a beber"
      },
      "elemento_secundario": {
        "animal": "Perro blanco fluffy al lado del sujeto",
        "expresion": "Boca abierta, lengua afuera, alegre y vivaz"
      },
      "lenguaje_corporal": "Espontáneo, lifestyle, cute y natural."
    },
    "I_Iluminacion": {
      "tipo": "Luz natural diurna suave.",
      "caracteristicas": "Warm gentle daylight con sombras ligeras.",
      "efecto": "Resalta piel, cabello y ambiente tropical sin dureza."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Playful, relajado, veraniego, alegre.",
      "tono": "Cinematic summer fashion selfie con ternura por el perro."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Ultra photorealistic cinematic lifestyle fashion portrait.",
      "detalles": [
        "Textura realista en piel y cabello",
        "Juguito naranja vibrante con pajilla rosa",
        "Perro fluffy con expresión alegre",
        "Naturaleza tropical en background"
      ],
      "paleta": "Azules del cielo + verdes tropicales + naranja brillante + neutros elegantes.",
      "calidad": "Ultra-realistic 8K high-detail summer editorial aesthetic."
    },
    "M_Composicion_Camara": {
      "aspect_ratio": "9:16 vertical",
      "plano": "Upper-body selfie framing con rostro dominante.",
      "angulo": "Slightly low front angle para vibe espontánea.",
      "enfoque": "Sharp focus en rostro, vaso y perro; fondo tropical suavemente desenfocado."
    },
    "P_Postproduccion": {
      "color_grading": "Natural warm summer tones con look cinematográfico suave.",
      "contraste": "Moderado, sin sobreprocesado.",
      "nitidez": "Alta definición en rostro, cabello, bebida y textura del perro.",
      "acabado_final": "Ultra-realistic 8K tropical juice selfie portrait con mood veraniego playful."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9b1add3a-1afb-4a6b-8b0f-713e330c81c8', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9b1add3a-1afb-4a6b-8b0f-713e330c81c8', 'da1092e5-3f78-4a6f-8bdd-ac7d7b53c0a7') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9b1add3a-1afb-4a6b-8b0f-713e330c81c8', '51cd2e03-9be8-42d1-8d84-2a56f8077243') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('5f4bb8cb-fb6d-423d-8208-6d5fd6eec899', 'prompt', 'Night Pool Polaroid Portrait — Wet Hair Cinematic Film Mood', 'night-pool-polaroid-portrait', 'Ultra-realistic 8K authentic night pool Polaroid portrait con mood íntimo y delicado.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel y expresión exactamente idénticos a la referencia.
- **Preservación total:** No alterar ni editar el rostro ni ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Retrato íntimo estilo Polaroid en piscina nocturna.
- **Detalle facial:**
  - Piel: Textura natural con pecas sutiles visibles
  - Labios: Glossy lips delicados
  - Cabello: Mojado, con gotas de agua reflejando la luz
- **Vestimenta:**
  - Outfit: Black bikini editorial (swimwear minimal)
  - Contexto: Parcialmente sumergida en el agua
- **Calidad:** Ultra-realistic 8K cinematic film portrait rendering con detalle extremo en piel y gotas.

## E: Entorno
- **Escena:** Piscina local durante la noche.
- **Atmósfera:** Dreamy, nostálgica, íntima, cinematográfica.
- **Agua:** Superficie oscura con reflejos suaves, sujeto parcialmente inmerso.

## A: Acción / Postura
- **Pose:** Postura tranquila dentro del agua, enfoque total en rostro y emoción.
- **Lenguaje corporal:** Serena, contemplativa, momento suspendido en el tiempo.
- **Detalle:** Gotas de agua en rostro y cabello glisten naturalmente.

## I: Iluminación
- **Tipo:** Soft cinematic lighting nocturna.
- **Características:**
  - Highlights suaves sobre gotas de agua
  - Sombras delicadas sin dureza
  - Mood íntimo tipo película analógica
- **Efecto:** Resalta textura de piel y atmósfera nostálgica.

## S: Sensación / Atmósfera
- **Mood:** Nostálgico, delicado, auténtico, dreamy.
- **Tono:** Polaroid night-swim cinematic moment.

## E: Estilo Visual
- **Estilo general:** Polaroid-style authentic analog film portrait.
- **Paleta:** Muted brown tones con color grading cálido tenue.
- **Texturas:**
  - Subtle film grain
  - Agua realista
  - Piel húmeda con brillo natural
- **Acabado:** Zero over-processing, look auténtico y suave.
- **Calidad:** Ultra-realistic 8K con estética film nostalgia.

## M: Composición / Cámara
- **Formato:** Aspect ratio 3:6 (vertical Polaroid framing).
- **Lente:** 85mm lens look
- **Apertura:** f/1.4 para detalle facial sharp + fondo suave
- **Plano:** Close-up a medium close portrait emergiendo del agua.
- **Enfoque:** Tack-sharp en ojos y rostro, agua suavemente desenfocada.

## P: Postproducción
- **Film look:** Analog Polaroid grain, nostalgic softness.
- **Color grading:** Muted brown cinematic tones.
- **Contraste:** Suave, evitando over-sharpening o HDR.
- **Acabado final:** Ultra-realistic 8K authentic night pool Polaroid portrait con mood íntimo y delicado.
', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/night-pool-polaroid-portrait.png', '{
  "title": "Night Pool Polaroid Portrait — Wet Hair Cinematic Film Mood",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel y expresión exactamente idénticos a la referencia.",
      "preservacion_total": "No alterar ni editar el rostro ni ningún rasgo físico bajo ninguna circunstancia.",
      "sujeto": "Retrato íntimo estilo Polaroid en piscina nocturna.",
      "detalle_facial": {
        "piel": "Textura natural con pecas sutiles visibles",
        "labios": "Glossy lips delicados",
        "cabello": "Mojado, con gotas de agua reflejando la luz"
      },
      "vestimenta": {
        "outfit": "Black bikini editorial (swimwear minimal)",
        "contexto": "Parcialmente sumergida en el agua"
      },
      "calidad": "Ultra-realistic 8K cinematic film portrait rendering con detalle extremo en piel y gotas."
    },
    "E_Entorno": {
      "escena": "Piscina local durante la noche.",
      "atmósfera": "Dreamy, nostálgica, íntima, cinematográfica.",
      "agua": "Superficie oscura con reflejos suaves, sujeto parcialmente inmerso."
    },
    "A_Accion_Postura": {
      "pose": "Postura tranquila dentro del agua, enfoque total en rostro y emoción.",
      "lenguaje_corporal": "Serena, contemplativa, momento suspendido en el tiempo.",
      "detalle": "Gotas de agua en rostro y cabello glisten naturalmente."
    },
    "I_Iluminacion": {
      "tipo": "Soft cinematic lighting nocturna.",
      "caracteristicas": [
        "Highlights suaves sobre gotas de agua",
        "Sombras delicadas sin dureza",
        "Mood íntimo tipo película analógica"
      ],
      "efecto": "Resalta textura de piel y atmósfera nostálgica."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Nostálgico, delicado, auténtico, dreamy.",
      "tono": "Polaroid night-swim cinematic moment."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Polaroid-style authentic analog film portrait.",
      "paleta": "Muted brown tones con color grading cálido tenue.",
      "texturas": [
        "Subtle film grain",
        "Agua realista",
        "Piel húmeda con brillo natural"
      ],
      "acabado": "Zero over-processing, look auténtico y suave.",
      "calidad": "Ultra-realistic 8K con estética film nostalgia."
    },
    "M_Composicion_Camara": {
      "formato": "Aspect ratio 3:6 (vertical Polaroid framing).",
      "lente": "85mm lens look",
      "apertura": "f/1.4 para detalle facial sharp + fondo suave",
      "plano": "Close-up a medium close portrait emergiendo del agua.",
      "enfoque": "Tack-sharp en ojos y rostro, agua suavemente desenfocada."
    },
    "P_Postproduccion": {
      "film_look": "Analog Polaroid grain, nostalgic softness.",
      "color_grading": "Muted brown cinematic tones.",
      "contraste": "Suave, evitando over-sharpening o HDR.",
      "acabado_final": "Ultra-realistic 8K authentic night pool Polaroid portrait con mood íntimo y delicado."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5f4bb8cb-fb6d-423d-8208-6d5fd6eec899', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5f4bb8cb-fb6d-423d-8208-6d5fd6eec899', 'cb2c9ced-f65c-432d-8a0f-a39443b6f723') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5f4bb8cb-fb6d-423d-8208-6d5fd6eec899', 'f51b5ce1-b5f4-48ff-805f-714bf93f1daa') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('95359a4c-c636-45a2-84e3-f29bfc9e6867', 'prompt', 'Butterfly Couture Surreal Portrait — High-Fashion Magical Realism', 'butterfly-couture-portrait', 'Ultra-realistic 8K surreal butterfly couture portrait con emoción editorial atemporal.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado, tono de piel y expresión exactamente idénticos. No alterar ni embellecer el rostro.
- **Preservación total:** No modificar cara, proporciones, textura de piel ni expresión bajo ninguna circunstancia.
- **Sujeto:** Mujer de presencia impactante vestida en alta costura surrealista.
- **Detalle piel:** Piel porcelana con textura realista natural, macro-detail.
- **Vestimenta:**
  - Outfit: Avant-garde couture gown cubierta con cientos de mariposas rosas delicadas
  - Detalle: Cada ala brilla como encaje frágil, estética etérea y elegante
- **Elemento fantástico:** Una cascada de mariposas luminosas emerge desde la parte posterior de su cabeza.
- **Calidad:** Ultra-realistic 8K hyper-detailed high-fashion portrait rendering.

## E: Entorno
- **Fondo:** Negro profundo, velvety black sin elementos distractores.
- **Escena:** Espacio vacío tipo estudio oscuro para amplificar contraste y fantasía.
- **Objetivo:** Resaltar la luminosidad de piel, mariposas y couture.

## A: Acción / Postura
- **Pose:** Postura dramática, cuello arqueado con elegancia escultórica.
- **Detalle:** Cabeza inclinada hacia atrás, labios ligeramente entreabiertos en emoción intensa.
- **Lenguaje corporal:** Transcendencia emocional, fragilidad y poder en equilibrio.

## I: Iluminación
- **Tipo:** Cinematic moody lighting con sombras painterly.
- **Características:**
  - Sombras profundas que esculpen el rostro
  - Highlights suaves sobre piel y alas de mariposa
  - Contraste alto con fondo negro
- **Efecto:** Look editorial de fantasía con textura ultra definida.

## S: Sensación / Atmósfera
- **Mood:** Otherworldly, encantador, emocionalmente intenso.
- **Tono:** High-fashion fantasy con profundidad poética y misterio.

## E: Estilo Visual
- **Estilo general:** Magical realism meets couture editorial photography.
- **Detalles:**
  - Mariposas rosas como encaje vivo
  - Couture etérea envolviendo al sujeto
  - Fondo negro amplificando luminosidad
- **Acabado:** Timeless, surreal, Vogue-level fantasy portrait.
- **Calidad:** Ultra-realistic 8K con detalle extremo en alas, tela y piel.

## M: Composición / Cámara
- **Plano:** Close-up a medium close-up para revelar macro detalles.
- **Enfoque:** Tack-sharp en rostro, piel y textura de mariposas.
- **Encuadre:** Sujeto dominante centrado, mariposas ascendiendo hacia espacio negativo superior.
- **Profundidad de campo:** Shallow DOF cinematográfico con aislamiento elegante.

## P: Postproducción
- **Color grading:** Contraste fuerte negro + rosa suave luminoso.
- **Nitidez:** Máxima definición en piel, alas y couture shimmer.
- **Contraste:** High-fashion dramatic, deep shadows limpias.
- **Acabado final:** Ultra-realistic 8K surreal butterfly couture portrait con emoción editorial atemporal.
', 'Editorial', NULL, NULL, 'advanced', '/images/prompts/butterfly-couture-portrait.png', '{
  "title": "Butterfly Couture Surreal Portrait — High-Fashion Magical Realism",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado, tono de piel y expresión exactamente idénticos. No alterar ni embellecer el rostro.",
      "preservacion_total": "No modificar cara, proporciones, textura de piel ni expresión bajo ninguna circunstancia.",
      "sujeto": "Mujer de presencia impactante vestida en alta costura surrealista.",
      "detalle_piel": "Piel porcelana con textura realista natural, macro-detail.",
      "vestimenta": {
        "outfit": "Avant-garde couture gown cubierta con cientos de mariposas rosas delicadas",
        "detalle": "Cada ala brilla como encaje frágil, estética etérea y elegante"
      },
      "elemento_fantastico": "Una cascada de mariposas luminosas emerge desde la parte posterior de su cabeza.",
      "calidad": "Ultra-realistic 8K hyper-detailed high-fashion portrait rendering."
    },
    "E_Entorno": {
      "fondo": "Negro profundo, velvety black sin elementos distractores.",
      "escena": "Espacio vacío tipo estudio oscuro para amplificar contraste y fantasía.",
      "objetivo": "Resaltar la luminosidad de piel, mariposas y couture."
    },
    "A_Accion_Postura": {
      "pose": "Postura dramática, cuello arqueado con elegancia escultórica.",
      "detalle": "Cabeza inclinada hacia atrás, labios ligeramente entreabiertos en emoción intensa.",
      "lenguaje_corporal": "Transcendencia emocional, fragilidad y poder en equilibrio."
    },
    "I_Iluminacion": {
      "tipo": "Cinematic moody lighting con sombras painterly.",
      "caracteristicas": [
        "Sombras profundas que esculpen el rostro",
        "Highlights suaves sobre piel y alas de mariposa",
        "Contraste alto con fondo negro"
      ],
      "efecto": "Look editorial de fantasía con textura ultra definida."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Otherworldly, encantador, emocionalmente intenso.",
      "tono": "High-fashion fantasy con profundidad poética y misterio."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Magical realism meets couture editorial photography.",
      "detalles": [
        "Mariposas rosas como encaje vivo",
        "Couture etérea envolviendo al sujeto",
        "Fondo negro amplificando luminosidad"
      ],
      "acabado": "Timeless, surreal, Vogue-level fantasy portrait.",
      "calidad": "Ultra-realistic 8K con detalle extremo en alas, tela y piel."
    },
    "M_Composicion_Camara": {
      "plano": "Close-up a medium close-up para revelar macro detalles.",
      "enfoque": "Tack-sharp en rostro, piel y textura de mariposas.",
      "encuadre": "Sujeto dominante centrado, mariposas ascendiendo hacia espacio negativo superior.",
      "profundidad_de_campo": "Shallow DOF cinematográfico con aislamiento elegante."
    },
    "P_Postproduccion": {
      "color_grading": "Contraste fuerte negro + rosa suave luminoso.",
      "nitidez": "Máxima definición en piel, alas y couture shimmer.",
      "contraste": "High-fashion dramatic, deep shadows limpias.",
      "acabado_final": "Ultra-realistic 8K surreal butterfly couture portrait con emoción editorial atemporal."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('95359a4c-c636-45a2-84e3-f29bfc9e6867', 'd164f509-a838-43ac-8459-2c7dad280356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('95359a4c-c636-45a2-84e3-f29bfc9e6867', 'b5a9bf83-07fe-4ac0-89f2-56e90d7a69a9') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('95359a4c-c636-45a2-84e3-f29bfc9e6867', '28c9b38f-2f25-4ce6-86a9-f7bc21227203') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('0db0b21e-5f50-439b-89aa-f0bceeb79ccc', 'prompt', 'Pastel Cyber Gamergirl Portrait — Neon Cozy Keyboard Scene', 'pastel-cyber-gamergirl', 'Ultra-realistic 8K pastel cyber gamergirl portrait con mood cálido, íntimo y editorial.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la foto subida como identidad principal. Mantener estructura facial, tono de piel, peinado y expresión exactamente idénticos a la referencia.
- **Preservación total:** No cambiar ni editar el rostro ni ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Chica de cabello largo con dos ponytails, estética cute editorial.
- **Expresión:** Brillante, adorable, ligeramente juguetona, mirada directa a cámara.
- **Cabello:**
  - Estilo: Dos coletas (twin ponytails)
  - Detalle: Cabello largo con acabado suave y realista
- **Vestimenta:**
  - Top: Crochet top colorido
  - Sleeves: Mangas tejidas a juego con textura multi-knit visible
- **Detalle material:** Texturas textiles hiperrealistas en crochet y capas tejidas.
- **Calidad:** Ultra-realistic 8K lifestyle editorial portrait rendering.

## E: Entorno
- **Escena:** Habitación acogedora con estética pastel cyberpunk.
- **Decoración:**
  - Luces neón suaves en púrpura y rosa pastel
  - Posters decorativos
  - Fairy lights y detalles elegantes
  - Decoraciones fluffy y lujosas
- **Atmósfera:** Warm, vintage, dreamy, gamergirl vibe con sutil soledad latente.
- **Props principales:**
  - Objeto: Teclado mecánico pastel pink
  - Acabado: Plástico glossy con reflejos suaves

## A: Acción / Postura
- **Pose:** Recostada suavemente sobre el teclado mecánico.
- **Detalle:** Cabeza apoyada gentilmente sobre la manga tejida.
- **Mirada:** Directa hacia cámara, conexión íntima y cercana.
- **Lenguaje corporal:** Relajado, cute, cozy, ligeramente nostálgico.

## I: Iluminación
- **Tipo:** Neon soft glow lighting en tonos pastel.
- **Fuentes:**
  - Luces púrpura suaves
  - Luces rosa pastel cálidas
  - Iluminación ambiental tenue distribuida por la habitación
- **Efecto:** Highlights delicados sobre piel, tejido crochet y superficie glossy del teclado.

## S: Sensación / Atmósfera
- **Mood:** Dreamy, cozy, cute, ligeramente melancólico.
- **Tono:** Pastel cyberpunk editorial con calidez emocional.

## E: Estilo Visual
- **Estilo general:** Creative dreamy editorial photography, pastel cyberpunk gamergirl aesthetic.
- **Detalles:**
  - Textura crochet ultra definida
  - Glow neón suave envolvente
  - Decoración fluffy y lujosa
  - Teclado glossy como prop central
- **Acabado:** Smooth, premium, soft cyber-vintage mood.
- **Calidad:** Ultra-realistic 8K con detalle extremo en piel, tela y luces.

## M: Composición / Cámara
- **Plano:** Plano medio íntimo con sujeto + teclado visible en foreground.
- **Ángulo:** Eye-level cercano, sensación de habitación personal.
- **Encuadre:** Sujeto dominante con luces neón como marco ambiental.
- **Enfoque:** Sharp focus en rostro y expresión; fondo suave con bokeh neón pastel.

## P: Postproducción
- **Color grading:** Paleta pastel cyberpunk con glow cálido y dreamy softness.
- **Contraste:** Suave, sin dureza, ambiente nostálgico.
- **Nitidez:** Alta definición en rostro, tejido crochet y teclado glossy.
- **Acabado final:** Ultra-realistic 8K pastel cyber gamergirl portrait con mood cálido, íntimo y editorial.
', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/pastel-cyber-gamergirl.jpg', '{
  "title": "Pastel Cyber Gamergirl Portrait — Neon Cozy Keyboard Scene",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la foto subida como identidad principal. Mantener estructura facial, tono de piel, peinado y expresión exactamente idénticos a la referencia.",
      "preservacion_total": "No cambiar ni editar el rostro ni ningún rasgo físico bajo ninguna circunstancia.",
      "sujeto": "Chica de cabello largo con dos ponytails, estética cute editorial.",
      "expresion": "Brillante, adorable, ligeramente juguetona, mirada directa a cámara.",
      "cabello": {
        "estilo": "Dos coletas (twin ponytails)",
        "detalle": "Cabello largo con acabado suave y realista"
      },
      "vestimenta": {
        "top": "Crochet top colorido",
        "sleeves": "Mangas tejidas a juego con textura multi-knit visible"
      },
      "detalle_material": "Texturas textiles hiperrealistas en crochet y capas tejidas.",
      "calidad": "Ultra-realistic 8K lifestyle editorial portrait rendering."
    },
    "E_Entorno": {
      "escena": "Habitación acogedora con estética pastel cyberpunk.",
      "decoracion": [
        "Luces neón suaves en púrpura y rosa pastel",
        "Posters decorativos",
        "Fairy lights y detalles elegantes",
        "Decoraciones fluffy y lujosas"
      ],
      "atmósfera": "Warm, vintage, dreamy, gamergirl vibe con sutil soledad latente.",
      "props_principales": {
        "objeto": "Teclado mecánico pastel pink",
        "acabado": "Plástico glossy con reflejos suaves"
      }
    },
    "A_Accion_Postura": {
      "pose": "Recostada suavemente sobre el teclado mecánico.",
      "detalle": "Cabeza apoyada gentilmente sobre la manga tejida.",
      "mirada": "Directa hacia cámara, conexión íntima y cercana.",
      "lenguaje_corporal": "Relajado, cute, cozy, ligeramente nostálgico."
    },
    "I_Iluminacion": {
      "tipo": "Neon soft glow lighting en tonos pastel.",
      "fuentes": [
        "Luces púrpura suaves",
        "Luces rosa pastel cálidas",
        "Iluminación ambiental tenue distribuida por la habitación"
      ],
      "efecto": "Highlights delicados sobre piel, tejido crochet y superficie glossy del teclado."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Dreamy, cozy, cute, ligeramente melancólico.",
      "tono": "Pastel cyberpunk editorial con calidez emocional."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Creative dreamy editorial photography, pastel cyberpunk gamergirl aesthetic.",
      "detalles": [
        "Textura crochet ultra definida",
        "Glow neón suave envolvente",
        "Decoración fluffy y lujosa",
        "Teclado glossy como prop central"
      ],
      "acabado": "Smooth, premium, soft cyber-vintage mood.",
      "calidad": "Ultra-realistic 8K con detalle extremo en piel, tela y luces."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio íntimo con sujeto + teclado visible en foreground.",
      "angulo": "Eye-level cercano, sensación de habitación personal.",
      "encuadre": "Sujeto dominante con luces neón como marco ambiental.",
      "enfoque": "Sharp focus en rostro y expresión; fondo suave con bokeh neón pastel."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta pastel cyberpunk con glow cálido y dreamy softness.",
      "contraste": "Suave, sin dureza, ambiente nostálgico.",
      "nitidez": "Alta definición en rostro, tejido crochet y teclado glossy.",
      "acabado_final": "Ultra-realistic 8K pastel cyber gamergirl portrait con mood cálido, íntimo y editorial."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('0db0b21e-5f50-439b-89aa-f0bceeb79ccc', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('0db0b21e-5f50-439b-89aa-f0bceeb79ccc', '23e74b4b-008a-4a0d-870b-f8297beba9c9') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('0db0b21e-5f50-439b-89aa-f0bceeb79ccc', '6bea1a96-8ecc-4538-81d7-802322ec4336') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('5a04aec5-b174-4867-8c6c-bf411fe40d10', 'prompt', 'Black Cinematic Poster — Neon Sign ''YOUR NAME HERE''', 'black-cinematic-neon-poster', 'Ultra-realistic 8K striking black poster portrait con neón personalizado.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la foto subida como identidad principal. Mantener estructura facial, forma corporal, silueta, peinado, tono de piel y textura exactamente idénticos a la referencia.
- **Preservación total:** No alterar ni editar ningún rasgo físico de la persona.
- **Sujeto:** Persona centrada en el frame, presencia fuerte y confiada.
- **Postura:** De pie, segura, dominante, estilo póster editorial.
- **Detalle piel:** Textura realista natural con máxima fidelidad.
- **Calidad:** Ultra-realistic 8K cinematic poster portrait rendering.

## E: Entorno
- **Fondo:** Negro profundo absoluto, sin elementos distractores.
- **Escena:** Estética minimalista tipo póster cinematográfico.
- **Atmósfera:** Bold, intensa, high-contrast, visualmente impactante.

## A: Acción / Postura
- **Pose:** Standing confidently, centered composition.
- **Acción:** Sujeto sostiene en la mano izquierda un letrero neón flotante.
- **Prop principal:**
  - Objeto: Neon white floating sign
  - Texto: "Megan"
  - Estilo tipografía: Cursiva artística elegante
  - Función: Foco principal de la composición

## I: Iluminación
- **Tipo:** Iluminación dramática cinematográfica de alto contraste.
- **Características:**
  - Deep shadows limpias
  - Highlights marcados en contornos faciales y ropa
  - Glow fuerte proveniente del neón blanco
- **Efecto:** Énfasis en textura, profundidad y presencia escultórica.

## S: Sensación / Atmósfera
- **Mood:** Intenso, cinematográfico, striking y cautivador.
- **Tono:** Poster editorial de alto impacto visual.

## E: Estilo Visual
- **Estilo general:** Large-format ultra-realistic cinematic editorial poster.
- **Detalles:**
  - Negro profundo + iluminación dramática
  - Neón blanco como elemento gráfico dominante
  - Textura hiperrealista en piel y silueta
- **Calidad:** Ultra-realistic 8K con acabado premium tipo movie poster.

## M: Composición / Cámara
- **Layout:** Composición centrada tipo póster.
- **Plano:** Full-body o tres cuartos según diseño de cartel.
- **Enfoque:** Sharp focus en rostro y neón; fondo negro limpio.
- **Jerarquía visual:** Sujeto + letrero neón como anclas principales.

## P: Postproducción
- **Color grading:** Contraste extremo con negro profundo y glow blanco intenso.
- **Nitidez:** Alta nitidez en rostro, textura corporal y lettering neón.
- **Efecto final:** Poster cinematic hyper-real con profundidad editorial.
- **Acabado final:** Ultra-realistic 8K striking black poster portrait con neón personalizado.
', 'Editorial', NULL, NULL, 'advanced', '/images/prompts/black-cinematic-neon-poster.png', '{
  "title": "Black Cinematic Poster — Neon Sign ''YOUR NAME HERE''",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la foto subida como identidad principal. Mantener estructura facial, forma corporal, silueta, peinado, tono de piel y textura exactamente idénticos a la referencia.",
      "preservacion_total": "No alterar ni editar ningún rasgo físico de la persona.",
      "sujeto": "Persona centrada en el frame, presencia fuerte y confiada.",
      "postura": "De pie, segura, dominante, estilo póster editorial.",
      "detalle_piel": "Textura realista natural con máxima fidelidad.",
      "calidad": "Ultra-realistic 8K cinematic poster portrait rendering."
    },
    "E_Entorno": {
      "fondo": "Negro profundo absoluto, sin elementos distractores.",
      "escena": "Estética minimalista tipo póster cinematográfico.",
      "atmósfera": "Bold, intensa, high-contrast, visualmente impactante."
    },
    "A_Accion_Postura": {
      "pose": "Standing confidently, centered composition.",
      "accion": "Sujeto sostiene en la mano izquierda un letrero neón flotante.",
      "prop_principal": {
        "objeto": "Neon white floating sign",
        "texto": "Megan",
        "estilo_tipografia": "Cursiva artística elegante",
        "funcion": "Foco principal de la composición"
      }
    },
    "I_Iluminacion": {
      "tipo": "Iluminación dramática cinematográfica de alto contraste.",
      "caracteristicas": [
        "Deep shadows limpias",
        "Highlights marcados en contornos faciales y ropa",
        "Glow fuerte proveniente del neón blanco"
      ],
      "efecto": "Énfasis en textura, profundidad y presencia escultórica."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Intenso, cinematográfico, striking y cautivador.",
      "tono": "Poster editorial de alto impacto visual."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Large-format ultra-realistic cinematic editorial poster.",
      "detalles": [
        "Negro profundo + iluminación dramática",
        "Neón blanco como elemento gráfico dominante",
        "Textura hiperrealista en piel y silueta"
      ],
      "calidad": "Ultra-realistic 8K con acabado premium tipo movie poster."
    },
    "M_Composicion_Camara": {
      "layout": "Composición centrada tipo póster.",
      "plano": "Full-body o tres cuartos según diseño de cartel.",
      "enfoque": "Sharp focus en rostro y neón; fondo negro limpio.",
      "jerarquia_visual": "Sujeto + letrero neón como anclas principales."
    },
    "P_Postproduccion": {
      "color_grading": "Contraste extremo con negro profundo y glow blanco intenso.",
      "nitidez": "Alta nitidez en rostro, textura corporal y lettering neón.",
      "efecto_final": "Poster cinematic hyper-real con profundidad editorial.",
      "acabado_final": "Ultra-realistic 8K striking black poster portrait con neón personalizado."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5a04aec5-b174-4867-8c6c-bf411fe40d10', 'd164f509-a838-43ac-8459-2c7dad280356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5a04aec5-b174-4867-8c6c-bf411fe40d10', '0da6e438-1784-4a94-8120-52a12ee566de') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5a04aec5-b174-4867-8c6c-bf411fe40d10', 'a786e011-fb3c-4dec-804d-66510df1dd79') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('2a39d6c8-2547-4098-8717-2ea1ce2f4607', 'prompt', 'Subway Motion Blur Portrait — Still Subject, Yellow Train Streak', 'subway-motion-blur-portrait', 'Ultra-realistic 8K cinematic subway portrait con energía urbana y emoción contenida.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.
- **Preservación total:** No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Persona de presencia elegante y segura en un retrato urbano cinematográfico.
- **Vestimenta:**
  - Outfit: Abrigo largo negro elegante
  - Estilo: Minimalista, sofisticado, timeless
- **Expresión:** Mirada directa y confiada hacia la cámara, ancla emocional fuerte.
- **Detalle piel:** Textura realista natural, enfoque nítido en rostro.
- **Calidad:** Ultra-realistic 8K cinematic portrait rendering con máxima fidelidad facial.

## E: Entorno
- **Ubicación:** Andén subterráneo de metro con atmósfera íntima y tenue.
- **Fondo:**
  - Elemento dinámico: Tren amarillo vibrante pasando rápidamente detrás del sujeto.
  - Efecto: Streak de motion blur brillante que contrasta con el sujeto inmóvil.
- **Arquitectura:** Techo arqueado con azulejos iluminados suavemente por luces de estación.

## A: Acción / Postura
- **Pose:** El sujeto permanece perfectamente quieto en medio del movimiento urbano.
- **Lenguaje corporal:** Calma absoluta, elegancia contenida.
- **Contraste visual:** Sujeto congelado vs energía del tren en movimiento.

## I: Iluminación
- **Tipo:** Iluminación cálida y atmosférica de estación subterránea.
- **Características:** Soft glows sobre el rostro y reflejos en el techo arqueado.
- **Técnica:**
  - Slow shutter: Velocidad de obturación lenta para motion blur del tren.
  - Freeze subject: Rostro y cuerpo del sujeto completamente nítidos.
- **Efecto:** Mood urbano dramático con contraste entre quietud y velocidad.

## S: Sensación / Atmósfera
- **Mood:** Íntimo, cinematográfico, urbano, misterioso.
- **Tono:** Momento fugaz de calma en medio de la energía de la ciudad.

## E: Estilo Visual
- **Estilo general:** Fotografía hiperrealista cinematográfica tipo editorial urbano.
- **Detalles:**
  - Motion blur dinámico del tren amarillo
  - Rostro tack-sharp como punto emocional central
  - Textura real en abrigo negro y entorno subterráneo
- **Calidad:** Ultra-realistic 8K con estética film-like premium.

## M: Composición / Cámara
- **Plano:** Plano medio centrado en el sujeto de pie en el andén.
- **Encuadre:** Sujeto como ancla central, tren como streak horizontal detrás.
- **Enfoque:** Nitidez extrema en ojos y rostro, fondo dinámico desenfocado por movimiento.
- **Perspectiva:** Cinemática y profunda, con arquitectura del metro aportando contexto.

## P: Postproducción
- **Color grading:** Tonos cálidos atmosféricos con contraste fuerte entre negro y amarillo.
- **Contraste:** Medio-alto para dramatismo editorial.
- **Nitidez:** Máxima nitidez en rostro y abrigo; blur limpio en el tren.
- **Acabado final:** Ultra-realistic 8K cinematic subway portrait con energía urbana y emoción contenida.
', 'Photography', NULL, NULL, 'advanced', '/images/prompts/subway-motion-blur-portrait.png', '{
  "title": "Subway Motion Blur Portrait — Still Subject, Yellow Train Streak",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.",
      "preservacion_total": "No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.",
      "sujeto": "Persona de presencia elegante y segura en un retrato urbano cinematográfico.",
      "vestimenta": {
        "outfit": "Abrigo largo negro elegante",
        "estilo": "Minimalista, sofisticado, timeless"
      },
      "expresion": "Mirada directa y confiada hacia la cámara, ancla emocional fuerte.",
      "detalle_piel": "Textura realista natural, enfoque nítido en rostro.",
      "calidad": "Ultra-realistic 8K cinematic portrait rendering con máxima fidelidad facial."
    },
    "E_Entorno": {
      "ubicacion": "Andén subterráneo de metro con atmósfera íntima y tenue.",
      "fondo": {
        "elemento_dinamico": "Tren amarillo vibrante pasando rápidamente detrás del sujeto",
        "efecto": "Streak de motion blur brillante que contrasta con el sujeto inmóvil"
      },
      "arquitectura": "Techo arqueado con azulejos iluminados suavemente por luces de estación."
    },
    "A_Accion_Postura": {
      "pose": "El sujeto permanece perfectamente quieto en medio del movimiento urbano.",
      "lenguaje_corporal": "Calma absoluta, elegancia contenida.",
      "contraste_visual": "Sujeto congelado vs energía del tren en movimiento."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación cálida y atmosférica de estación subterránea.",
      "caracteristicas": "Soft glows sobre el rostro y reflejos en el techo arqueado.",
      "tecnica": {
        "slow_shutter": "Velocidad de obturación lenta para motion blur del tren",
        "freeze_subject": "Rostro y cuerpo del sujeto completamente nítidos"
      },
      "efecto": "Mood urbano dramático con contraste entre quietud y velocidad."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Íntimo, cinematográfico, urbano, misterioso.",
      "tono": "Momento fugaz de calma en medio de la energía de la ciudad."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía hiperrealista cinematográfica tipo editorial urbano.",
      "detalles": [
        "Motion blur dinámico del tren amarillo",
        "Rostro tack-sharp como punto emocional central",
        "Textura real en abrigo negro y entorno subterráneo"
      ],
      "calidad": "Ultra-realistic 8K con estética film-like premium."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio centrado en el sujeto de pie en el andén.",
      "encuadre": "Sujeto como ancla central, tren como streak horizontal detrás.",
      "enfoque": "Nitidez extrema en ojos y rostro, fondo dinámico desenfocado por movimiento.",
      "perspectiva": "Cinemática y profunda, con arquitectura del metro aportando contexto."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos cálidos atmosféricos con contraste fuerte entre negro y amarillo.",
      "contraste": "Medio-alto para dramatismo editorial.",
      "nitidez": "Máxima nitidez en rostro y abrigo; blur limpio en el tren.",
      "acabado_final": "Ultra-realistic 8K cinematic subway portrait con energía urbana y emoción contenida."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('2a39d6c8-2547-4098-8717-2ea1ce2f4607', '575e4ebd-f06b-4993-8199-933aeaf56baa') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('2a39d6c8-2547-4098-8717-2ea1ce2f4607', '39b84df0-b2fc-4187-87ba-d6dd2b217bed') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('2a39d6c8-2547-4098-8717-2ea1ce2f4607', '2cf60b2d-5678-464d-896d-07717f27d620') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('967ab33f-2770-42d2-8ad0-d3d9fc326e31', 'prompt', 'Futuristic Editorial — Metallic Pink Shapes + Typography ''MEGAN''', 'futuristic-editorial-megan', 'Ultra-realistic 8K futuristic fashion editorial portrait con tipografía integrada.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.
- **Preservación total:** No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Persona estilizada en un retrato fashion futurista.
- **Vestimenta:**
  - Top: Sudadera negra minimalista
  - Bottom: Falda plisada pastel roja
  - Footwear: Botas blancas altas hasta la rodilla
- **Detalle piel:** Textura realista natural con enfoque editorial premium.
- **Calidad:** Ultra-realistic 8K hyper-detailed fashion portrait rendering.

## E: Entorno
- **Fondo:** Estudio con tonos rosa apagado (muted pink studio backdrop).
- **Escena:** Minimalista, futurista y editorial, sin props físicos adicionales.
- **Elementos extra:**
  - Formas 3D líquidas metálicas color rosa brillante envolviendo al sujeto.
  - Tipografía gigante minimalista en el fondo.

## A: Acción / Postura
- **Pose:** Sentado elegantemente con postura relajada.
- **Detalle:** Cabeza ligeramente inclinada hacia arriba, gesto editorial suave.
- **Lenguaje corporal:** Calma, sofisticación, presencia futurista.

## I: Iluminación
- **Tipo:** Soft cinematic glow de estudio.
- **Características:** Luz envolvente que resalta piel y textura de telas.
- **Efecto:** Highlights suaves sobre formas metálicas líquidas y botas blancas.

## S: Sensación / Atmósfera
- **Mood:** Editorial futurista, sofisticado, elegante.
- **Tono:** Fashion-forward con vibra surreal moderna.

## E: Estilo Visual
- **Estilo general:** Fashion editorial × futurismo con elementos 3D glossy.
- **Detalles:**
  - Texturas textiles nítidas
  - Formas metálicas líquidas rosa envolventes
  - Background rosa suave y limpio
- **Tipografía:**
  - Texto: "MEGAN"
  - Estilo: Bold modern typography grande atravesando el fondo
  - Función: Elemento gráfico minimalista de portada editorial
- **Calidad:** Ultra-realistic 8K high-detail Vogue-style futuristic aesthetic.

## M: Composición / Cámara
- **Plano:** Plano medio a tres cuartos mostrando outfit completo sentado.
- **Ángulo:** Eye-level ligeramente estilizado hacia arriba.
- **Encuadre:** Sujeto centrado con formas 3D y tipografía integradas detrás.
- **Profundidad de campo:** Shallow DOF suave para look premium.

## P: Postproducción
- **Color grading:** Paleta rosa pastel + negros elegantes + highlights metálicos.
- **Nitidez:** Alta definición en rostro, botas, pliegues de falda y objetos glossy.
- **Contraste:** Medio cinematográfico con glow suave.
- **Acabado final:** Ultra-realistic 8K futuristic fashion editorial portrait con tipografía integrada.
', 'Editorial', NULL, NULL, 'advanced', '/images/prompts/futuristic-editorial-megan.png', '{
  "title": "Futuristic Editorial — Metallic Pink Shapes + Typography ''MEGAN''",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.",
      "preservacion_total": "No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.",
      "sujeto": "Persona estilizada en un retrato fashion futurista.",
      "vestimenta": {
        "top": "Sudadera negra minimalista",
        "bottom": "Falda plisada pastel roja",
        "footwear": "Botas blancas altas hasta la rodilla"
      },
      "detalle_piel": "Textura realista natural con enfoque editorial premium.",
      "calidad": "Ultra-realistic 8K hyper-detailed fashion portrait rendering."
    },
    "E_Entorno": {
      "fondo": "Estudio con tonos rosa apagado (muted pink studio backdrop).",
      "escena": "Minimalista, futurista y editorial, sin props físicos adicionales.",
      "elementos_extra": [
        "Formas 3D líquidas metálicas color rosa brillante envolviendo al sujeto",
        "Tipografía gigante minimalista en el fondo"
      ]
    },
    "A_Accion_Postura": {
      "pose": "Sentado elegantemente con postura relajada.",
      "detalle": "Cabeza ligeramente inclinada hacia arriba, gesto editorial suave.",
      "lenguaje_corporal": "Calma, sofisticación, presencia futurista."
    },
    "I_Iluminacion": {
      "tipo": "Soft cinematic glow de estudio.",
      "caracteristicas": "Luz envolvente que resalta piel y textura de telas.",
      "efecto": "Highlights suaves sobre formas metálicas líquidas y botas blancas."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Editorial futurista, sofisticado, elegante.",
      "tono": "Fashion-forward con vibra surreal moderna."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fashion editorial × futurismo con elementos 3D glossy.",
      "detalles": [
        "Texturas textiles nítidas",
        "Formas metálicas líquidas rosa envolventes",
        "Background rosa suave y limpio"
      ],
      "tipografia": {
        "texto": "MEGAN",
        "estilo": "Bold modern typography grande atravesando el fondo",
        "funcion": "Elemento gráfico minimalista de portada editorial"
      },
      "calidad": "Ultra-realistic 8K high-detail Vogue-style futuristic aesthetic."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio a tres cuartos mostrando outfit completo sentado.",
      "angulo": "Eye-level ligeramente estilizado hacia arriba.",
      "encuadre": "Sujeto centrado con formas 3D y tipografía integradas detrás.",
      "profundidad_de_campo": "Shallow DOF suave para look premium."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta rosa pastel + negros elegantes + highlights metálicos.",
      "nitidez": "Alta definición en rostro, botas, pliegues de falda y objetos glossy.",
      "contraste": "Medio cinematográfico con glow suave.",
      "acabado_final": "Ultra-realistic 8K futuristic fashion editorial portrait con tipografía integrada."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('967ab33f-2770-42d2-8ad0-d3d9fc326e31', 'd164f509-a838-43ac-8459-2c7dad280356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('967ab33f-2770-42d2-8ad0-d3d9fc326e31', 'efd6306e-5b6a-49bd-8ec6-632ba41bb27d') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('967ab33f-2770-42d2-8ad0-d3d9fc326e31', '71c0e984-340f-454a-863b-e4f9de5c9e6b') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('9f61a206-5142-4cd9-8699-e1852f65e20d', 'prompt', 'Crimson Dominance Portrait — Low Angle Cinematic Editorial', 'crimson-dominance-portrait', 'Ultra-realistic 8K crimson editorial portrait con presencia escultórica.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.
- **Preservación total:** No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Retrato de presencia dominante y escultórica.
- **Vestuario:** Wardrobe oscuro y elegante que contraste con el fondo rojo.
- **Detalle piel:** Piel luminosa con textura natural realista.
- **Calidad:** Ultra-realistic 8K portrait rendering con máxima fidelidad facial.

## E: Entorno
- **Fondo:** Crimson red profundo, saturado e intenso.
- **Escena:** Estudio editorial minimalista sin props ni elementos extra.
- **Objetivo:** Crear contraste visual fuerte entre sujeto y fondo.

## A: Acción / Postura
- **Pose:** Postura firme y calmada, presencia dominante.
- **Mirada:** Directa o ligeramente hacia abajo, reforzando autoridad.
- **Lenguaje corporal:** Elegancia escultórica, actitud editorial.

## I: Iluminación
- **Tipo:** Stark cinematic lighting con contraste intenso.
- **Características:** Sombras profundas, highlights marcados sobre rostro y cuello.
- **Efecto:** Esculpe mandíbula y cuello, enfatizando elegancia dramática.

## S: Sensación / Atmósfera
- **Mood:** Dominante, elegante, misterioso.
- **Tono:** Editorial cinematográfico de alto impacto visual.

## E: Estilo Visual
- **Estilo general:** Retrato editorial hiperrealista con estética bold y contrastada.
- **Detalle:** High-detail fashion portrait, sombras limpias, fondo rojo saturado.
- **Calidad:** Ultra-realistic 8K con acabado premium Vogue-style.

## M: Composición / Cámara
- **Formato:** Vertical 1080×1920 (9:16).
- **Ángulo:** Slightly low upward-facing angle para dramatizar mandíbula y cuello.
- **Plano:** Close-up o plano medio corto centrado en rostro y estructura.
- **Encuadre:** Composición limpia, sujeto dominante sobre fondo rojo.

## P: Postproducción
- **Color grading:** Rojos intensos con contraste cinematográfico fuerte.
- **Nitidez:** Extrema nitidez en rostro, piel y contornos faciales.
- **Contraste:** Alto, con deep shadows controladas.
- **Acabado final:** Ultra-realistic 8K crimson editorial portrait con presencia escultórica.
', 'Editorial', NULL, NULL, 'advanced', '/images/prompts/crimson-dominance-portrait.png', '{
  "title": "Crimson Dominance Portrait — Low Angle Cinematic Editorial",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.",
      "preservacion_total": "No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.",
      "sujeto": "Retrato de presencia dominante y escultórica.",
      "vestuario": "Wardrobe oscuro y elegante que contraste con el fondo rojo.",
      "detalle_piel": "Piel luminosa con textura natural realista.",
      "calidad": "Ultra-realistic 8K portrait rendering con máxima fidelidad facial."
    },
    "E_Entorno": {
      "fondo": "Crimson red profundo, saturado e intenso.",
      "escena": "Estudio editorial minimalista sin props ni elementos extra.",
      "objetivo": "Crear contraste visual fuerte entre sujeto y fondo."
    },
    "A_Accion_Postura": {
      "pose": "Postura firme y calmada, presencia dominante.",
      "mirada": "Directa o ligeramente hacia abajo, reforzando autoridad.",
      "lenguaje_corporal": "Elegancia escultórica, actitud editorial."
    },
    "I_Iluminacion": {
      "tipo": "Stark cinematic lighting con contraste intenso.",
      "caracteristicas": "Sombras profundas, highlights marcados sobre rostro y cuello.",
      "efecto": "Esculpe mandíbula y cuello, enfatizando elegancia dramática."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Dominante, elegante, misterioso.",
      "tono": "Editorial cinematográfico de alto impacto visual."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato editorial hiperrealista con estética bold y contrastada.",
      "detalle": "High-detail fashion portrait, sombras limpias, fondo rojo saturado.",
      "calidad": "Ultra-realistic 8K con acabado premium Vogue-style."
    },
    "M_Composicion_Camara": {
      "formato": "Vertical 1080×1920 (9:16).",
      "angulo": "Slightly low upward-facing angle para dramatizar mandíbula y cuello.",
      "plano": "Close-up o plano medio corto centrado en rostro y estructura.",
      "encuadre": "Composición limpia, sujeto dominante sobre fondo rojo."
    },
    "P_Postproduccion": {
      "color_grading": "Rojos intensos con contraste cinematográfico fuerte.",
      "nitidez": "Extrema nitidez en rostro, piel y contornos faciales.",
      "contraste": "Alto, con deep shadows controladas.",
      "acabado_final": "Ultra-realistic 8K crimson editorial portrait con presencia escultórica."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9f61a206-5142-4cd9-8699-e1852f65e20d', 'd164f509-a838-43ac-8459-2c7dad280356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9f61a206-5142-4cd9-8699-e1852f65e20d', 'b494bcf3-c32e-4fc1-8e44-2bbb3f950cf0') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9f61a206-5142-4cd9-8699-e1852f65e20d', '99464f8a-cb41-4870-88fa-93727b359000') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('486bfa80-e881-4660-83d8-a9a612e06a77', 'prompt', 'Snowy Mountain Swimsuit — Bold Winter Contrast', 'snowy-mountain-swimsuit', 'High-contrast winter luxury portrait: olive bikini in snow with fur hat.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Mantener rasgos faciales originales, maquillaje high-fashion impecable.
- **Cabello:** Castaño oscuro, largo y ondulado, parcialmente extendido sobre la nieve.
- **Vestimenta:**
  - Bikini Top: Verde oliva, corte minimalista, tela mate.
  - Bikini Bottom: Verde oliva, ajuste high-fashion.
  - Accesorio: Gorro Ushanka de piel blanca oversized y lujosa.
- **Piel:** Textura ultra-detallada, tono uniforme.

## E: Entorno
- **Ubicación:** Resort de montaña de lujo nevado.
- **Superficie:** Nieve pura suave con impresiones sutiles y montículos naturales.
- **Atmósfera:** Lujo invernal, contraste estacional audaz.

## A: Acción / Postura
- **Pose:** Recostada relajada en la nieve, una pierna extendida hacia la cámara para profundidad.
- **Expresión:** Calma, confiada, mirada sutilmente seductora y directa.
- **Estilo:** Actitud de influencer high-end.

## I: Iluminación
- **Tipo:** Luz natural difusa de día nublado.
- **Calidad:** Suave, sin sombras duras, favorecedora para piel y texturas.

## S: Sensación / Atmósfera
- **Mood:** Audaz, confiado, "Cold styling, hot look".
- **Contraste:** Frío del entorno vs. calidez del sujeto.

## E: Estilo Visual
- **Estética:** Retrato modo smartphone high-end, editorial de influencer.
- **Texturas:** Contraste entre piel suave, tela mate del bikini y fibras del gorro de piel.
- **Calidad:** Photorealistic 8K, enfoque ultra-nítido.

## M: Composición / Cámara
- **Ángulo:** Top-down (vista desde arriba) mirando directamente al sujeto.
- **Encuadre:** Cuerpo completo con distorsión de perspectiva por la pierna extendida.
- **Aspect Ratio:** Vertical 4:5.

## P: Postproducción
- **Nitidez:** Máxima definición en texturas de nieve y piel.
- **Color:** Paleta dominada por blanco nieve y verde oliva.
', 'Lifestyle', NULL, NULL, 'advanced', '/images/prompts/snowy-mountain-swimsuit.png', '{
  "title": "Snowy Mountain Swimsuit — Bold Winter Contrast",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Mantener rasgos faciales originales, maquillaje high-fashion impecable.",
      "cabello": "Castaño oscuro, largo y ondulado, parcialmente extendido sobre la nieve.",
      "vestimenta": {
        "bikini": "Set verde oliva minimalista, tela mate.",
        "accesorio": "Gorro Ushanka de piel blanca oversized."
      },
      "piel": "Textura ultra-detallada, tono uniforme."
    },
    "E_Entorno": {
      "ubicacion": "Resort de montaña de lujo nevado.",
      "superficie": "Nieve pura suave con impresiones sutiles.",
      "atmosfera": "Lujo invernal, contraste estacional audaz."
    },
    "A_Accion_Postura": {
      "pose": "Recostada relajada, pierna extendida hacia cámara (foreshortening).",
      "expresion": "Calma, confiada, mirada sutilmente seductora.",
      "estilo": "Influencer high-end aesthetic."
    },
    "I_Iluminacion": {
      "tipo": "Luz natural difusa de día nublado.",
      "calidad": "Suave y envolvente."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Audaz, confiado, contraste frío/calor.",
      "vibe": "High fashion editorial winter."
    },
    "E_visual_EstiloVisual": {
      "estetica": "Retrato smartphone high-end.",
      "texturas": "Piel suave vs Nieve vs Piel sintética del gorro.",
      "calidad": "Photorealistic 8K."
    },
    "M_Composicion_Camara": {
      "angulo": "Top-down, vista superior directa.",
      "encuadre": "Cuerpo completo con profundidad.",
      "aspecto": "4:5 Vertical."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('486bfa80-e881-4660-83d8-a9a612e06a77', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('486bfa80-e881-4660-83d8-a9a612e06a77', '8a796d72-abff-4a35-8a51-a538bc4abdaa') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('486bfa80-e881-4660-83d8-a9a612e06a77', '179bf2c6-0bb3-43a3-8654-673782bc8069') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('494fc71a-6c79-46dc-8896-646fc77f9951', 'prompt', 'Denim Backpack Garden Portrait — Pink Roses Sunny Daylight', 'denim-backpack-garden-portrait', 'Ultra-realistic 8K outdoor floral portrait con luz soleada y atmósfera fresca.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.
- **Preservación total:** No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Ángulo sujeto:** Visto desde atrás y ligeramente de lado, pero con el rostro visible mirando hacia arriba hacia la cámara.
- **Expresión:** Natural, suave, contemplativa.
- **Vestimenta:**
  - Jacket: Chaqueta denim azul loose-fit
  - Accesorio: Mochila clara (off-white o cream) sobre un solo hombro
- **Detalle piel:** Textura de piel realista, preservada al 100%.
- **Calidad:** Ultra-realistic 8K portrait rendering con máxima fidelidad en rostro, cabello y textiles.

## E: Entorno
- **Escena:** Exterior rodeado de naturaleza exuberante.
- **Fondo:**
  - Follaje verde intenso
  - Racimos abundantes de rosas rosas brillantes en plena floración
- **Atmósfera:** Jardín vibrante, fresco, lleno de vida y color.

## A: Acción / Postura
- **Pose:** Sujeto de espaldas con giro parcial hacia la cámara.
- **Mirada:** Mirando hacia arriba en dirección al lente.
- **Lenguaje corporal:** Casual, lifestyle auténtico, momento natural.

## I: Iluminación
- **Tipo:** Luz natural brillante de día soleado.
- **Características:** Iluminación limpia y cálida con highlights suaves.
- **Efecto:** Resalta denim, piel, flores y colores vibrantes.

## S: Sensación / Atmósfera
- **Mood:** Optimista, fresco, sereno, natural.
- **Tono:** Lifestyle cinematográfico con energía floral suave.

## E: Estilo Visual
- **Estilo general:** Retrato hiperrealista cinematográfico exterior.
- **Texturas:**
  - Denim detallado
  - Rosas rosas con pétalos definidos
  - Vegetación verde con profundidad natural
- **Paleta:** Verde intenso + rosa brillante + neutros suaves en mochila.
- **Calidad:** Ultra-realistic 8K con acabado premium natural.

## M: Composición / Cámara
- **Plano:** Plano medio mostrando espalda, mochila y rostro girado hacia cámara.
- **Ángulo:** Ligeramente elevado, reforzando la mirada upward.
- **Encuadre:** Sujeto centrado, flores actuando como marco natural.
- **Enfoque:** Sharp focus en rostro y jacket, fondo suavemente desenfocado.

## P: Postproducción
- **Color grading:** Vibrante natural con contraste cinematográfico suave.
- **Nitidez:** Alta definición en piel, denim y pétalos.
- **Acabado final:** Ultra-realistic 8K outdoor floral portrait con luz soleada y atmósfera fresca.
', 'Lifestyle', NULL, NULL, 'advanced', '/images/prompts/denim-backpack-garden-portrait.jpg', '{
  "title": "Denim Backpack Garden Portrait — Pink Roses Sunny Daylight",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.",
      "preservacion_total": "No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.",
      "angulo_sujeto": "Visto desde atrás y ligeramente de lado, pero con el rostro visible mirando hacia arriba hacia la cámara.",
      "expresion": "Natural, suave, contemplativa.",
      "vestimenta": {
        "jacket": "Chaqueta denim azul loose-fit",
        "accesorio": "Mochila clara (off-white o cream) sobre un solo hombro"
      },
      "detalle_piel": "Textura de piel realista, preservada al 100%.",
      "calidad": "Ultra-realistic 8K portrait rendering con máxima fidelidad en rostro, cabello y textiles."
    },
    "E_Entorno": {
      "escena": "Exterior rodeado de naturaleza exuberante.",
      "fondo": [
        "Follaje verde intenso",
        "Racimos abundantes de rosas rosas brillantes en plena floración"
      ],
      "atmósfera": "Jardín vibrante, fresco, lleno de vida y color."
    },
    "A_Accion_Postura": {
      "pose": "Sujeto de espaldas con giro parcial hacia la cámara.",
      "mirada": "Mirando hacia arriba en dirección al lente.",
      "lenguaje_corporal": "Casual, lifestyle auténtico, momento natural."
    },
    "I_Iluminacion": {
      "tipo": "Luz natural brillante de día soleado.",
      "caracteristicas": "Iluminación limpia y cálida con highlights suaves.",
      "efecto": "Resalta denim, piel, flores y colores vibrantes."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Optimista, fresco, sereno, natural.",
      "tono": "Lifestyle cinematográfico con energía floral suave."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato hiperrealista cinematográfico exterior.",
      "texturas": [
        "Denim detallado",
        "Rosas rosas con pétalos definidos",
        "Vegetación verde con profundidad natural"
      ],
      "paleta": "Verde intenso + rosa brillante + neutros suaves en mochila.",
      "calidad": "Ultra-realistic 8K con acabado premium natural."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio mostrando espalda, mochila y rostro girado hacia cámara.",
      "angulo": "Ligeramente elevado, reforzando la mirada upward.",
      "encuadre": "Sujeto centrado, flores actuando como marco natural.",
      "enfoque": "Sharp focus en rostro y jacket, fondo suavemente desenfocado."
    },
    "P_Postproduccion": {
      "color_grading": "Vibrante natural con contraste cinematográfico suave.",
      "nitidez": "Alta definición en piel, denim y pétalos.",
      "acabado_final": "Ultra-realistic 8K outdoor floral portrait con luz soleada y atmósfera fresca."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('494fc71a-6c79-46dc-8896-646fc77f9951', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('494fc71a-6c79-46dc-8896-646fc77f9951', '0b568b09-1fa1-42ca-8609-3e4ce6294e67') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('494fc71a-6c79-46dc-8896-646fc77f9951', '63636fb4-1990-4e4b-86aa-57e06467efd3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('8025d00b-28b1-4f52-8013-14cacf29cfef', 'prompt', 'Denim Rose Wall Portrait — Golden Circle Shadow Mood', 'denim-rose-wall-portrait', 'Ultra-realistic 8K moody wall portrait con rosa blanca y sombra dorada misteriosa.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos.
- **Preservación total:** No cambiar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Expresión:** Gloomy, seria, ligeramente triste e introspectiva.
- **Vestimenta:**
  - Jacket: Chaqueta de mezclilla (denim jacket)
  - Bottom: Falda larga denim tipo cargo
- **Prop principal:**
  - Objeto: Una sola rosa blanca
  - Interacción: Sostenida con ambas manos al frente, gesto delicado y simbólico
- **Calidad:** Ultra-realistic 8K portrait rendering con textura extrema en piel, denim y flor.

## E: Entorno
- **Escena:** Persona sentada contra una pared lisa, fondo completamente limpio.
- **Fondo:** Minimalista, sin elementos adicionales.
- **Elemento luz:** Círculo de luz solar dorada proyectado en la pared detrás del sujeto.

## A: Acción / Postura
- **Pose:** Sentado contra la pared, mirando hacia el frente.
- **Lenguaje corporal:** Quietud emocional, vulnerabilidad contenida.
- **Acción:** Sosteniendo la rosa blanca como foco narrativo.

## I: Iluminación
- **Tipo:** Iluminación cinematográfica dramática con luz cálida direccional.
- **Fuente:** Haz circular de sunlight dorado creando contraste fuerte.
- **Efecto clave:** Sombra marcada del rostro proyectada claramente en la pared.
- **Sombras:** Deep shadows limpias y definidas para atmósfera misteriosa.

## S: Sensación / Atmósfera
- **Mood:** Moody, misterioso, melancólico.
- **Tono:** Cinemático, simbólico, íntimo y emocional.

## E: Estilo Visual
- **Estilo general:** Retrato editorial cinematográfico minimalista con dramatismo de luz.
- **Texturas:**
  - Denim altamente detallado
  - Rosa blanca delicada
  - Sombra fuerte proyectada en pared
- **Paleta:** Azules denim + blanco puro + dorado cálido en luz de fondo.
- **Calidad:** Ultra-realistic 8K con mood oscuro premium.

## M: Composición / Cámara
- **Formato:** Vertical 9:16
- **Plano:** Plano medio mostrando postura completa sentada + rosa visible.
- **Encuadre:** Sujeto centrado con círculo de luz como elemento compositivo detrás.
- **Enfoque:** Sharp focus en rostro, manos y flor; fondo limpio con sombra definida.

## P: Postproducción
- **Color grading:** Contraste cinematográfico con dorados cálidos y tonos fríos en denim.
- **Nitidez:** Alta definición en piel, tela y pétalos.
- **Contraste:** Alto para enfatizar sombras y dramatismo.
- **Acabado final:** Ultra-realistic 8K moody wall portrait con rosa blanca y sombra dorada misteriosa.
', 'Editorial', NULL, NULL, 'advanced', '/images/prompts/denim-rose-wall-portrait.png', '{
  "title": "Denim Rose Wall Portrait — Golden Circle Shadow Mood",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos.",
      "preservacion_total": "No cambiar ni editar ningún rasgo físico bajo ninguna circunstancia.",
      "expresion": "Gloomy, seria, ligeramente triste e introspectiva.",
      "vestimenta": {
        "jacket": "Chaqueta de mezclilla (denim jacket)",
        "bottom": "Falda larga denim tipo cargo"
      },
      "prop_principal": {
        "objeto": "Una sola rosa blanca",
        "interaccion": "Sostenida con ambas manos al frente, gesto delicado y simbólico"
      },
      "calidad": "Ultra-realistic 8K portrait rendering con textura extrema en piel, denim y flor."
    },
    "E_Entorno": {
      "escena": "Persona sentada contra una pared lisa, fondo completamente limpio.",
      "fondo": "Minimalista, sin elementos adicionales.",
      "elemento_luz": "Círculo de luz solar dorada proyectado en la pared detrás del sujeto."
    },
    "A_Accion_Postura": {
      "pose": "Sentado contra la pared, mirando hacia el frente.",
      "lenguaje_corporal": "Quietud emocional, vulnerabilidad contenida.",
      "accion": "Sosteniendo la rosa blanca como foco narrativo."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación cinematográfica dramática con luz cálida direccional.",
      "fuente": "Haz circular de sunlight dorado creando contraste fuerte.",
      "efecto_clave": "Sombra marcada del rostro proyectada claramente en la pared.",
      "sombras": "Deep shadows limpias y definidas para atmósfera misteriosa."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Moody, misterioso, melancólico.",
      "tono": "Cinemático, simbólico, íntimo y emocional."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato editorial cinematográfico minimalista con dramatismo de luz.",
      "texturas": [
        "Denim altamente detallado",
        "Rosa blanca delicada",
        "Sombra fuerte proyectada en pared"
      ],
      "paleta": "Azules denim + blanco puro + dorado cálido en luz de fondo.",
      "calidad": "Ultra-realistic 8K con mood oscuro premium."
    },
    "M_Composicion_Camara": {
      "formato": "Vertical 9:16",
      "plano": "Plano medio mostrando postura completa sentada + rosa visible.",
      "encuadre": "Sujeto centrado con círculo de luz como elemento compositivo detrás.",
      "enfoque": "Sharp focus en rostro, manos y flor; fondo limpio con sombra definida."
    },
    "P_Postproduccion": {
      "color_grading": "Contraste cinematográfico con dorados cálidos y tonos fríos en denim.",
      "nitidez": "Alta definición en piel, tela y pétalos.",
      "contraste": "Alto para enfatizar sombras y dramatismo.",
      "acabado_final": "Ultra-realistic 8K moody wall portrait con rosa blanca y sombra dorada misteriosa."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('8025d00b-28b1-4f52-8013-14cacf29cfef', 'd164f509-a838-43ac-8459-2c7dad280356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('8025d00b-28b1-4f52-8013-14cacf29cfef', '99464f8a-cb41-4870-88fa-93727b359000') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('8025d00b-28b1-4f52-8013-14cacf29cfef', 'b78afbc0-3986-4381-8aa5-51bf31877a08') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('fac686f8-af13-462d-8449-450de948ecfa', 'prompt', 'Minimalist Black & White Chair Portrait — Raw Timeless Mood', 'minimalist-bw-chair-portrait', 'Ultra-realistic 8K timeless monochrome portrait con vibra editorial minimal.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos.
- **Preservación total:** No cambiar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Persona con presencia calmada, estilo natural y sin adornos.
- **Cabello:** Corto, oscuro, enmarcando el rostro de manera orgánica.
- **Expresión:** Serena, introspectiva, casi pensativa.
- **Vestimenta:**
  - Top: Camiseta negra sleeveless simple
  - Jeans: Denim loose-fit casual
  - Pies: Descalzo, look raw y auténtico
- **Calidad:** Ultra-realistic 8K black-and-white portrait rendering con detalle extremo.

## E: Entorno
- **Escena:** Estudio minimalista con fondo completamente liso.
- **Props:** Silla simple moderna sin elementos adicionales.
- **Atmósfera:** Espacio limpio diseñado para enfatizar al sujeto.

## A: Acción / Postura
- **Pose:** Sentado en una silla minimalista en postura relajada.
- **Detalle:** Pies descalzos recogidos, una pierna cruzada suavemente sobre la otra.
- **Mirada:** Directa hacia cámara, conexión íntima.
- **Lenguaje corporal:** Natural, effortless, sin pose exagerada.

## I: Iluminación
- **Tipo:** Luz de estudio suave y envolvente.
- **Características:** Sombras delicadas, iluminación uniforme que resalta contornos faciales.
- **Efecto:** Mood íntimo, sin dramatismo extremo.

## S: Sensación / Atmósfera
- **Mood:** Raw, moderno, íntimo, atemporal.
- **Tono:** Understated elegance, effortless timeless portrait.

## E: Estilo Visual
- **Estilo general:** Retrato editorial minimalista en blanco y negro.
- **Acabado:** Unembellished, auténtico, con textura real de piel.
- **Paleta:** Monocromática con contraste suave.
- **Calidad:** Ultra-realistic 8K fine-art fashion portrait.

## M: Composición / Cámara
- **Plano:** Plano medio mostrando postura completa sobre la silla.
- **Ángulo:** Eye-level neutral, moderno y directo.
- **Enfoque:** Nitidez en rostro y expresión, fondo limpio suavemente desenfocado.

## P: Postproducción
- **Conversión:** Blanco y negro con separación tonal fina.
- **Contraste:** Suave pero definido, deep blacks controlados.
- **Textura:** Grano cinematográfico sutil opcional para mood analógico.
- **Acabado final:** Ultra-realistic 8K timeless monochrome portrait con vibra editorial minimal.
', 'Editorial', NULL, NULL, 'advanced', '/images/prompts/minimalist-bw-chair-portrait.png', '{
  "title": "Minimalist Black & White Chair Portrait — Raw Timeless Mood",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen de referencia como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos.",
      "preservacion_total": "No cambiar ni editar ningún rasgo físico bajo ninguna circunstancia.",
      "sujeto": "Persona con presencia calmada, estilo natural y sin adornos.",
      "cabello": "Corto, oscuro, enmarcando el rostro de manera orgánica.",
      "expresion": "Serena, introspectiva, casi pensativa.",
      "vestimenta": {
        "top": "Camiseta negra sleeveless simple",
        "jeans": "Denim loose-fit casual",
        "pies": "Descalzo, look raw y auténtico"
      },
      "calidad": "Ultra-realistic 8K black-and-white portrait rendering con detalle extremo."
    },
    "E_Entorno": {
      "escena": "Estudio minimalista con fondo completamente liso.",
      "props": "Silla simple moderna sin elementos adicionales.",
      "atmósfera": "Espacio limpio diseñado para enfatizar al sujeto."
    },
    "A_Accion_Postura": {
      "pose": "Sentado en una silla minimalista en postura relajada.",
      "detalle": "Pies descalzos recogidos, una pierna cruzada suavemente sobre la otra.",
      "mirada": "Directa hacia cámara, conexión íntima.",
      "lenguaje_corporal": "Natural, effortless, sin pose exagerada."
    },
    "I_Iluminacion": {
      "tipo": "Luz de estudio suave y envolvente.",
      "caracteristicas": "Sombras delicadas, iluminación uniforme que resalta contornos faciales.",
      "efecto": "Mood íntimo, sin dramatismo extremo."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Raw, moderno, íntimo, atemporal.",
      "tono": "Understated elegance, effortless timeless portrait."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato editorial minimalista en blanco y negro.",
      "acabado": "Unembellished, auténtico, con textura real de piel.",
      "paleta": "Monocromática con contraste suave.",
      "calidad": "Ultra-realistic 8K fine-art fashion portrait."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio mostrando postura completa sobre la silla.",
      "angulo": "Eye-level neutral, moderno y directo.",
      "enfoque": "Nitidez en rostro y expresión, fondo limpio suavemente desenfocado."
    },
    "P_Postproduccion": {
      "conversion": "Blanco y negro con separación tonal fina.",
      "contraste": "Suave pero definido, deep blacks controlados.",
      "textura": "Grano cinematográfico sutil opcional para mood analógico.",
      "acabado_final": "Ultra-realistic 8K timeless monochrome portrait con vibra editorial minimal."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fac686f8-af13-462d-8449-450de948ecfa', 'd164f509-a838-43ac-8459-2c7dad280356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fac686f8-af13-462d-8449-450de948ecfa', '61a3c407-bef7-4162-820a-bfca8dbdd1fd') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fac686f8-af13-462d-8449-450de948ecfa', '356ee647-71f8-4602-85be-d9139e09edec') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('3e43f275-fe7b-47b2-8256-486bcb0a242a', 'prompt', 'Orange Rim-Light Editorial — Shadowed Vogue Studio Portrait', 'orange-rim-light-editorial-vogue', 'Ultra-realistic 8K Vogue-style orange glow studio portrait con misterio y elegancia.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.
- **Preservación total:** No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Persona estilizada con presencia editorial de alta moda.
- **Vestimenta:**
  - Outfit: Ensemble de diseñador minimalista y high-end
  - Jacket: Chaqueta slim-fit de corte afilado con acabado mate
  - Detalle: Sin camisa debajo
  - Cuello: Turtleneck chic complementario
- **Detalle piel:** Textura realista natural sin suavizado artificial.
- **Calidad:** Ultra-realistic 8K editorial portrait con claridad extrema.

## E: Entorno
- **Escena:** Estudio indoor cutting-edge, minimalista y moderno.
- **Fondo:** Seamless background completamente naranja, iluminado desde luces ocultas.
- **Props:** Sin objetos visibles, entorno limpio tipo Vogue studio.

## A: Acción / Postura
- **Pose:** Postura firme y sofisticada, estilo editorial high-fashion.
- **Expresión:** Calma, elegante, dominante.
- **Detalle visual:** El rostro parcialmente cubierto por sombra suave, revelando solo parte de la expresión.

## I: Iluminación
- **Tipo:** Iluminación editorial cinematográfica con rim light.
- **Fuentes:**
  - Glow naranja intenso del fondo
  - Rim lighting lateral que define el perfil
  - Sombras profundas limpias cubriendo parcialmente el rostro
- **Efecto:** Contornos esculpidos, atmósfera moderna y dramática.

## S: Sensación / Atmósfera
- **Mood:** Cool, editorial, misterioso, sofisticado.
- **Tono:** Vogue-style luxury minimalism con tensión visual.

## E: Estilo Visual
- **Estilo general:** Fotografía editorial hiperrealista de alta moda.
- **Acabado:** Gradientes cinematográficos, sombras profundas, aura moderna.
- **Paleta:** Naranja intenso + tonos oscuros mate para contraste elegante.
- **Calidad:** Ultra-realistic 8K con estética premium.

## M: Composición / Cámara
- **Lente:** 85mm portrait lens effect
- **Profundidad de campo:** Shallow DOF con fondo suave y sujeto dominante.
- **Plano:** Plano medio a close-up editorial.
- **Ángulo:** Eye-level con composición limpia centrada.
- **Enfoque:** Sharp focus en rostro visible, perfil iluminado y textura del jacket.

## P: Postproducción
- **Color grading:** Naranja cinematográfico intenso con contraste editorial frío.
- **Contraste:** Alto, con deep shadows limpias.
- **Nitidez:** UHD clarity extrema en piel, tela mate y rim light.
- **Acabado final:** Ultra-realistic 8K Vogue-style orange glow studio portrait con misterio y elegancia.
', 'Fashion', NULL, NULL, 'advanced', '/images/prompts/orange-rim-light-editorial.png', '{
  "title": "Orange Rim-Light Editorial — Shadowed Vogue Studio Portrait",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.",
      "preservacion_total": "No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.",
      "sujeto": "Persona estilizada con presencia editorial de alta moda.",
      "vestimenta": {
        "outfit": "Ensemble de diseñador minimalista y high-end",
        "jacket": "Chaqueta slim-fit de corte afilado con acabado mate",
        "detalle": "Sin camisa debajo",
        "cuello": "Turtleneck chic complementario"
      },
      "detalle_piel": "Textura realista natural sin suavizado artificial.",
      "calidad": "Ultra-realistic 8K editorial portrait con claridad extrema."
    },
    "E_Entorno": {
      "escena": "Estudio indoor cutting-edge, minimalista y moderno.",
      "fondo": "Seamless background completamente naranja, iluminado desde luces ocultas.",
      "props": "Sin objetos visibles, entorno limpio tipo Vogue studio."
    },
    "A_Accion_Postura": {
      "pose": "Postura firme y sofisticada, estilo editorial high-fashion.",
      "expresion": "Calma, elegante, dominante.",
      "detalle_visual": "El rostro parcialmente cubierto por sombra suave, revelando solo parte de la expresión."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación editorial cinematográfica con rim light.",
      "fuentes": [
        "Glow naranja intenso del fondo",
        "Rim lighting lateral que define el perfil",
        "Sombras profundas limpias cubriendo parcialmente el rostro"
      ],
      "efecto": "Contornos esculpidos, atmósfera moderna y dramática."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Cool, editorial, misterioso, sofisticado.",
      "tono": "Vogue-style luxury minimalism con tensión visual."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía editorial hiperrealista de alta moda.",
      "acabado": "Gradientes cinematográficos, sombras profundas, aura moderna.",
      "paleta": "Naranja intenso + tonos oscuros mate para contraste elegante.",
      "calidad": "Ultra-realistic 8K con estética premium."
    },
    "M_Composicion_Camara": {
      "lente": "85mm portrait lens effect",
      "profundidad_de_campo": "Shallow DOF con fondo suave y sujeto dominante.",
      "plano": "Plano medio a close-up editorial.",
      "angulo": "Eye-level con composición limpia centrada.",
      "enfoque": "Sharp focus en rostro visible, perfil iluminado y textura del jacket."
    },
    "P_Postproduccion": {
      "color_grading": "Naranja cinematográfico intenso con contraste editorial frío.",
      "contraste": "Alto, con deep shadows limpias.",
      "nitidez": "UHD clarity extrema en piel, tela mate y rim light.",
      "acabado_final": "Ultra-realistic 8K Vogue-style orange glow studio portrait con misterio y elegancia."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('3e43f275-fe7b-47b2-8256-486bcb0a242a', '179bf2c6-0bb3-43a3-8654-673782bc8069') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('3e43f275-fe7b-47b2-8256-486bcb0a242a', 'd164f509-a838-43ac-8459-2c7dad280356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('3e43f275-fe7b-47b2-8256-486bcb0a242a', 'ce38b0f1-cefd-435f-81cf-11189d218f9c') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('67c80378-1181-4b69-81cf-b8f79c80f6ff', 'prompt', 'Elevator Neon Editorial — Black Suit Mysterious Portrait', 'elevator-neon-editorial-black-suit', 'Ultra-realistic 8K neon elevator fashion portrait con mood misterioso.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** El sujeto debe ser exactamente idéntico a la imagen de referencia: rostro, cabello, tono de piel, tipo de cuerpo y todos los rasgos físicos sin ninguna modificación.
- **Preservación total:** No alterar cara, proporciones, peinado ni características corporales.
- **Vestimenta:**
  - Outfit: Total black look
  - Blazer: Oversized blazer negro
  - Pantalones: Pantalones largos negros
  - Accesorios: Sunglasses oscuros, Vaso de café take-away en la mano
- **Detalle piel:** Textura realista natural, sin suavizado artificial.
- **Calidad:** Ultra-realistic 8K portrait rendering con máxima fidelidad.

## E: Entorno
- **Ubicación:** Elevador moderno con paredes metálicas reflectantes.
- **Materiales:** Metal pulido con reflejos visibles y highlights suaves.
- **Escena:** Interior cerrado, minimalista, urbano, elegante.

## A: Acción / Postura
- **Pose:** Postura relajada y editorial, actitud cool y dominante.
- **Lenguaje corporal:** Elegante, edgy, misterioso.
- **Acción:** Sosteniendo el vaso de café como detalle lifestyle sofisticado.

## I: Iluminación
- **Tipo:** Luz neón tenue desde el techo del elevador.
- **Características:** Sombras sutiles con highlights reflejados en paredes metálicas.
- **Efecto:** Contraste suave que crea atmósfera cinematográfica moderna.

## S: Sensación / Atmósfera
- **Mood:** Elegante, edgy, misterioso.
- **Tono:** Fashion editorial urbano con sensación nocturna futurista.

## E: Estilo Visual
- **Estilo general:** Retrato editorial de alta moda en escenario urbano minimalista.
- **Acabado:** Cinemático, moderno, sleek.
- **Detalle:** Texturas metálicas + outfit negro + estética de lujo oscuro.
- **Calidad:** Ultra-realistic 8K con enfoque premium.

## M: Composición / Cámara
- **Plano:** Plano medio o retrato de cuerpo parcial dentro del elevador.
- **Ángulo:** Eye-level para presencia dominante.
- **Encuadre:** Sujeto centrado, reflejos metálicos aportan profundidad.
- **Enfoque:** Sharp focus en rostro, gafas y vaso de café.

## P: Postproducción
- **Color grading:** Tonos fríos con contraste elegante tipo editorial.
- **Contraste:** Medio-alto para resaltar metal y outfit negro.
- **Nitidez:** Alta definición en piel, tela y reflejos.
- **Acabado final:** Ultra-realistic 8K neon elevator fashion portrait con mood misterioso.
', 'Fashion', NULL, NULL, 'advanced', '/images/prompts/elevator-neon-editorial.png', '{
  "title": "Elevator Neon Editorial — Black Suit Mysterious Portrait",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "El sujeto debe ser exactamente idéntico a la imagen de referencia: rostro, cabello, tono de piel, tipo de cuerpo y todos los rasgos físicos sin ninguna modificación.",
      "preservacion_total": "No alterar cara, proporciones, peinado ni características corporales.",
      "vestimenta": {
        "outfit": "Total black look",
        "blazer": "Oversized blazer negro",
        "pantalones": "Pantalones largos negros",
        "accesorios": [
          "Sunglasses oscuros",
          "Vaso de café take-away en la mano"
        ]
      },
      "detalle_piel": "Textura realista natural, sin suavizado artificial.",
      "calidad": "Ultra-realistic 8K portrait rendering con máxima fidelidad."
    },
    "E_Entorno": {
      "ubicacion": "Elevador moderno con paredes metálicas reflectantes.",
      "materiales": "Metal pulido con reflejos visibles y highlights suaves.",
      "escena": "Interior cerrado, minimalista, urbano, elegante."
    },
    "A_Accion_Postura": {
      "pose": "Postura relajada y editorial, actitud cool y dominante.",
      "lenguaje_corporal": "Elegante, edgy, misterioso.",
      "accion": "Sosteniendo el vaso de café como detalle lifestyle sofisticado."
    },
    "I_Iluminacion": {
      "tipo": "Luz neón tenue desde el techo del elevador.",
      "caracteristicas": "Sombras sutiles con highlights reflejados en paredes metálicas.",
      "efecto": "Contraste suave que crea atmósfera cinematográfica moderna."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Elegante, edgy, misterioso.",
      "tono": "Fashion editorial urbano con sensación nocturna futurista."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato editorial de alta moda en escenario urbano minimalista.",
      "acabado": "Cinemático, moderno, sleek.",
      "detalle": "Texturas metálicas + outfit negro + estética de lujo oscuro.",
      "calidad": "Ultra-realistic 8K con enfoque premium."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio o retrato de cuerpo parcial dentro del elevador.",
      "angulo": "Eye-level para presencia dominante.",
      "encuadre": "Sujeto centrado, reflejos metálicos aportan profundidad.",
      "enfoque": "Sharp focus en rostro, gafas y vaso de café."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos fríos con contraste elegante tipo editorial.",
      "contraste": "Medio-alto para resaltar metal y outfit negro.",
      "nitidez": "Alta definición en piel, tela y reflejos.",
      "acabado_final": "Ultra-realistic 8K neon elevator fashion portrait con mood misterioso."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('67c80378-1181-4b69-81cf-b8f79c80f6ff', '179bf2c6-0bb3-43a3-8654-673782bc8069') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('67c80378-1181-4b69-81cf-b8f79c80f6ff', 'a786e011-fb3c-4dec-804d-66510df1dd79') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('67c80378-1181-4b69-81cf-b8f79c80f6ff', 'd164f509-a838-43ac-8459-2c7dad280356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('c27d9798-35ec-44e1-856a-00b7e6d28157', 'prompt', 'Floating Jump Above Mirror Water — Surreal Freedom Portrait', 'floating-jump-mirror-water-surreal', 'Ultra-realistic 8K floating surreal cinematic portrait con sensación de libertad.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** La persona debe ser exactamente idéntica a la imagen de referencia: rostro, cabello, tono de piel y todos los rasgos físicos sin ninguna alteración.
- **Preservación total:** No cambiar cara, peinado, proporciones ni características corporales.
- **Vestimenta:**
  - Pantalones blancos
  - Camisa blanca abierta, estilo ligero y limpio
- **Detalle piel:** Textura natural y realista, sin embellecimiento artificial.
- **Calidad:** Ultra-realistic 8K portrait rendering con fidelidad absoluta.

## E: Entorno
- **Escena:** Superficie de agua completamente calma y reflectante, actuando como espejo.
- **Efecto espejo:** El agua refleja el cuerpo completo, el cielo y las nubes.
- **Fondo:** Cielo abierto infinito lleno de nubes blancas esponjosas.
- **Atmósfera:** Surreal, mágica, onírica, sensación de libertad.

## A: Acción / Postura
- **Acción:** El sujeto está saltando elegantemente sobre el agua, como si flotara.
- **Pose:** Movimiento grácil y liviano, sensación de ingravidez.
- **Pies:** Descalzo, tocando suavemente el agua con los dedos.
- **Detalle interacción:** Ondas circulares (ripples) se expanden desde el contacto con el agua.

## I: Iluminación
- **Tipo:** Luz natural brillante de día.
- **Características:** Claridad alta, iluminación cinematográfica limpia.
- **Efecto:** Resalta contornos corporales y pureza del entorno reflejado.

## S: Sensación / Atmósfera
- **Mood:** Libertad, ligereza, espiritualidad visual.
- **Tono:** Dreamy cinematic surrealism con calma absoluta.

## E: Estilo Visual
- **Estilo general:** Fotografía hiperrealista cinematográfica surreal.
- **Texturas:**
  - Agua espejo ultra limpia
  - Reflejo perfecto cuerpo+cielo
  - Ondas suaves circulares
  - Nubes definidas y luminosas
- **Calidad:** Ultra-realistic 8K, sharp clarity, magical realism.

## M: Composición / Cámara
- **Plano:** Cuerpo completo mostrando salto y reflejo completo.
- **Encuadre:** Sujeto centrado con simetría entre cielo y espejo de agua.
- **Profundidad:** Espacio infinito horizontal con horizonte mínimo o inexistente.

## P: Postproducción
- **Color grading:** Tonos blancos y azules suaves, look limpio celestial.
- **Contraste:** Suave pero con alta claridad en reflejos.
- **Nitidez:** Máxima nitidez en rostro, ropa blanca, ondas y nubes.
- **Acabado final:** Ultra-realistic 8K floating surreal cinematic portrait con sensación de libertad.
', 'Surreal', NULL, NULL, 'advanced', '/images/prompts/floating-jump-mirror-water-surreal.png', '{
  "title": "Floating Jump Above Mirror Water — Surreal Freedom Portrait",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "La persona debe ser exactamente idéntica a la imagen de referencia: rostro, cabello, tono de piel y todos los rasgos físicos sin ninguna alteración.",
      "preservacion_total": "No cambiar cara, peinado, proporciones ni características corporales.",
      "vestimenta": {
        "pantalon": "Pantalones blancos",
        "camisa": "Camisa blanca abierta, estilo ligero y limpio"
      },
      "detalle_piel": "Textura natural y realista, sin embellecimiento artificial.",
      "calidad": "Ultra-realistic 8K portrait rendering con fidelidad absoluta."
    },
    "E_Entorno": {
      "escena": "Superficie de agua completamente calma y reflectante, actuando como espejo.",
      "efecto_espejo": "El agua refleja el cuerpo completo, el cielo y las nubes.",
      "fondo": "Cielo abierto infinito lleno de nubes blancas esponjosas.",
      "atmósfera": "Surreal, mágica, onírica, sensación de libertad."
    },
    "A_Accion_Postura": {
      "accion": "El sujeto está saltando elegantemente sobre el agua, como si flotara.",
      "pose": "Movimiento grácil y liviano, sensación de ingravidez.",
      "pies": "Descalzo, tocando suavemente el agua con los dedos.",
      "detalle_interaccion": "Ondas circulares (ripples) se expanden desde el contacto con el agua."
    },
    "I_Iluminacion": {
      "tipo": "Luz natural brillante de día.",
      "caracteristicas": "Claridad alta, iluminación cinematográfica limpia.",
      "efecto": "Resalta contornos corporales y pureza del entorno reflejado."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Libertad, ligereza, espiritualidad visual.",
      "tono": "Dreamy cinematic surrealism con calma absoluta."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía hiperrealista cinematográfica surreal.",
      "texturas": [
        "Agua espejo ultra limpia",
        "Reflejo perfecto cuerpo+cielo",
        "Ondas suaves circulares",
        "Nubes definidas y luminosas"
      ],
      "calidad": "Ultra-realistic 8K, sharp clarity, magical realism."
    },
    "M_Composicion_Camara": {
      "plano": "Cuerpo completo mostrando salto y reflejo completo.",
      "encuadre": "Sujeto centrado con simetría entre cielo y espejo de agua.",
      "profundidad": "Espacio infinito horizontal con horizonte mínimo o inexistente."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos blancos y azules suaves, look limpio celestial.",
      "contraste": "Suave pero con alta claridad en reflejos.",
      "nitidez": "Máxima nitidez en rostro, ropa blanca, ondas y nubes.",
      "acabado_final": "Ultra-realistic 8K floating surreal cinematic portrait con sensación de libertad."
    }
  }
}', NULL, NULL, TRUE, TRUE, 'pro', '2026-08-29T17:52:58.818Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c27d9798-35ec-44e1-856a-00b7e6d28157', 'b5a9bf83-07fe-4ac0-89f2-56e90d7a69a9') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c27d9798-35ec-44e1-856a-00b7e6d28157', '549d1ac8-ef43-4e3a-8651-21b6aa47bb18') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c27d9798-35ec-44e1-856a-00b7e6d28157', '4ac01170-ed90-4ced-8bef-a0de5b03e202') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('8b96149c-7eab-44bc-80e8-4e0d12d7b57d', 'prompt', 'Google Maps to Ancient Treasure Map', 'nano-banana-case-91', '', 'Transform the image to an ancient treasure map drawn on aged parchment. The map includes detailed elements like sailing ships on the ocean, old ports or castles on the coastline, a dotted path leading to a large ''X'' marking the treasure spot, mountains, palm trees, and a decorative compass rose. The overall style is reminiscent of old pirate adventure films.', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/ancient-treasure-map.jpg', 'Transform the image to an ancient treasure map drawn on aged parchment. The map includes detailed elements like sailing ships on the ocean, old ports or castles on the coastline, a dotted path leading to a large ''X'' marking the treasure spot, mountains, palm trees, and a decorative compass rose. The overall style is reminiscent of old pirate adventure films.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('8b96149c-7eab-44bc-80e8-4e0d12d7b57d', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('3ee70e4c-936b-4f6f-8a97-3ce11b196ec8', 'prompt', 'Branded Mechanical Keycaps', 'nano-banana-case-90', '', 'ultra-realistic 3D render of four mechanical keyboard keycaps in a tight 2x2 grid, all keys touching. View from an isometric angle. One key is transparent with the word “{just}” printed in {white}. The other three colors are: {black, purple, and white}. One key features the {Github} logo. The other two say "{fork}" and "{it}". Realistic plastic texture, rounded sculpted keycaps, soft shadows, clean light-gray background.', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/github-fork-it-keys.jpg', 'ultra-realistic 3D render of four mechanical keyboard keycaps in a tight 2x2 grid, all keys touching. View from an isometric angle. One key is transparent with the word “{just}” printed in {white}. The other three colors are: {black, purple, and white}. One key features the {Github} logo. The other two say "{fork}" and "{it}". Realistic plastic texture, rounded sculpted keycaps, soft shadows, clean light-gray background.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('3ee70e4c-936b-4f6f-8a97-3ce11b196ec8', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('077732ad-bdf0-4228-8f05-bd0b4b6756ce', 'prompt', 'Chrome Emoji Pin', 'nano-banana-case-89', '', 'highly detailed 3D render of a single metallic {👍} emoji pin attached to a vertical product card, ultra-glossy chrome finish, smooth rounded 3D icon, stylized futuristic design, soft reflections, clean shadows, paper card has a die-cut euro hole at the top center, bold title “{Awesome}” above the pin, fun tagline “{Smash that ⭐ if you like it!}” below, soft gray background, soft studio lighting, minimal aesthetic', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/chrome-emoji-pin.png', 'highly detailed 3D render of a single metallic {👍} emoji pin attached to a vertical product card, ultra-glossy chrome finish, smooth rounded 3D icon, stylized futuristic design, soft reflections, clean shadows, paper card has a die-cut euro hole at the top center, bold title “{Awesome}” above the pin, fun tagline “{Smash that ⭐ if you like it!}” below, soft gray background, soft studio lighting, minimal aesthetic', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('077732ad-bdf0-4228-8f05-bd0b4b6756ce', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('6102e3fc-4bb5-43e6-8b1f-880a2eb676ab', 'prompt', 'Integrating Word Meaning into Letters', 'nano-banana-case-87', '', 'Integrate the meaning of the word into the letters, cleverly blending graphics and letters.
Word: {beautify}
Add a brief explanation of the word below.', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/beautify-text-design.png', 'Integrate the meaning of the word into the letters, cleverly blending graphics and letters.
Word: {beautify}
Add a brief explanation of the word below.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('6102e3fc-4bb5-43e6-8b1f-880a2eb676ab', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('2cce7cb3-3afb-4534-81cf-70bc032e623e', 'prompt', 'Double Exposure Epic Poster — Aragorn & Middle Earth', 'nano-banana-case-86', 'Composición artística de doble exposición centrada en la silueta de Aragorn.', '
# Double Exposure Epic Poster — Aragorn & Middle Earth

*   **R (Render):** Composición artística de doble exposición centrada en la silueta de Aragorn, hijo de Arathorn. Forma base: Silueta humana definida y reconocible. Nivel realismo: Ilustración conceptual de alto detalle con acabado cinematográfico.
*   **E (Entorno):** Fondo monocromático de alto contraste. Mundo interno: Paisajes de la Tierra Media durante primavera vibrante (bosques de pinos, picos montañosos, senderos, caballo solitario).
*   **A (Acción):** Presentación: La silueta de Aragorn se presenta de perfil o frontal como figura central. Dinámica visual: Los paisajes emergen y se expanden a través del contorno. Narrativa: Sensación de viaje, soledad heroica y destino.
*   **I (Iluminación):** Iluminación conceptual integrada. Paisajes bañados por luz solar cálida dentro de la silueta, contrastando con el fondo oscuro.
*   **S (Sensación):** Épica, introspección, grandeza y melancolía. Tono: Heroico, poético, narrativo.
*   **E (Estilo):** Doble exposición artística estilo Midjourney. Técnica: Fusión, superposición y blending de capas. Color: Esquema vibrante interior vs monocromo exterior. Líneas: Trazos nítidos y deliberados.
*   **M (Composición):** Composición tipo póster. Ángulo frontal o ligeramente lateral. Encuadre: Figura central dominante con amplio espacio negativo.
*   **P (Post):** Alto contraste, negros profundos. Detalle general 1.45, fondo 1.4. Acabado: Masterpiece cinematográfico de doble exposición.
', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/double-exposure-aragorn.png', '{"title":"Double Exposure Epic Poster — Aragorn & Middle Earth","framework_REAISEMP_Object":{"R_Render_del_Objeto":{"descripcion_principal":"Composición artística de doble exposición centrada en la silueta de Aragorn, hijo de Arathorn.","forma_base":"Silueta humana definida y reconocible, utilizada como contenedor visual.","nivel_realismo":"Ilustración conceptual de alto detalle con acabado cinematográfico."},"E_Entorno":{"fondo":"Fondo monocromático de alto contraste.","mundo_interno":"Paisajes de la Tierra Media durante primavera vibrante.","elementos_clave":"Bosques de pinos iluminados por el sol, picos montañosos, senderos y un caballo solitario avanzando."},"A_Accion_Presentacion":{"presentacion":"La silueta de Aragorn se presenta de perfil o frontal como figura central.","dinamica_visual":"Los paisajes emergen y se expanden a través del contorno de la silueta.","narrativa":"Sensación de viaje, soledad heroica y destino."},"I_Iluminacion":{"tipo":"Iluminación conceptual integrada.","caracteristicas":"Paisajes bañados por luz solar cálida dentro de la silueta, contrastando con el fondo oscuro."},"S_Sensacion_Atmosfera":{"emocion":"Épica, introspección, grandeza y melancolía.","tono":"Heroico, poético, narrativo."},"E_visual_EstiloVisual":{"estilo_general":"Doble exposición artística estilo Midjourney.","tecnica":"Fusión, superposición y blending de capas.","color":{"interior_silueta":"Esquema de color completo y vibrante.","exterior":"Monocromo de alto contraste."},"lineas":"Trazos nítidos y deliberados que definen cada contorno con precisión emocional."},"M_Composicion_Camara":{"plano":"Composición tipo póster.","angulo":"Vista frontal o ligeramente lateral de la silueta.","encuadre":"Figura central dominante con amplio espacio negativo alrededor."},"P_Postproduccion":{"detalle":{"nivel_general":1.45,"fondo":1.4},"contraste":"Alto, con negros profundos y colores saturados internos.","acabado":"Masterpiece cinematográfico de doble exposición, limpio y refinado."}}}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('2cce7cb3-3afb-4534-81cf-70bc032e623e', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('ea63b546-0f87-4a69-86d1-83024adcae87', 'prompt', 'Chibi Silicone Wrist Rest — Panda Design', 'nano-banana-case-84', 'Reposamuñecas de silicona estilo chibi inspirado en el emoji de panda.', '
# Chibi Silicone Wrist Rest — Panda Design

*   **R (Render):** Reposamuñecas de silicona estilo chibi inspirado en el emoji de panda. Forma: Redondeada, suave y adorable. Personificación: Diseño antropomórfico con expresión viva y brazos extendidos (gesto de abrazo). Estructura interna: Relleno de espuma de rebote lento.
*   **E (Entorno):** Reposando sobre un escritorio limpio. Fondo: Blanco sólido. Contexto: Escena minimalista tipo fotografía de producto.
*   **A (Acción):** Presentación: Posición de uso, listo para apoyar la muñeca. Interacción simulada: Brazos abiertos sugiriendo confort. Uso: Accesorio ergonómico para oficina.
*   **I (Iluminación):** Iluminación suave de estudio. Características: Luz difusa que resalta el volumen y evita sombras duras. Objetivo: Mostrar textura de silicona.
*   **S (Sensación):** Confort, ternura, cercanía. Tono: Cute, relajante, amigable.
*   **E (Estilo):** Producto chibi estilo cartoon. Materiales: Silicona suave mate grado alimenticio, espuma interior. Paleta: Blanco, negro y acentos suaves. Detalle: Texturas visibles de silicona.
*   **M (Composición):** Plano medio de producto. Ángulo: Vista frontal o superior (45°). Encuadre: Objeto centrado con espacio negativo.
*   **P (Post):** Colores limpios y naturales. Contraste bajo a medio. Acabado: Alta definición, nitidez para destacar textura.
', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/chibi-panda-wrist-rest.png', '{"title":"Chibi Silicone Wrist Rest — Panda Design","framework_REAISEMP_Object":{"R_Render_del_Objeto":{"descripcion_principal":"Reposamuñecas de silicona estilo chibi inspirado en el emoji de panda.","forma":"Redondeada, suave y adorable, con proporciones cartoon.","personificacion":"Diseño antropomórfico con expresión viva y brazos extendidos como si abrazara la muñeca del usuario.","estructura_interna":"Relleno de espuma de rebote lento."},"E_Entorno":{"superficie":"Reposando sobre un escritorio limpio.","fondo":"Fondo blanco sólido.","contexto":"Escena minimalista tipo fotografía de producto."},"A_Accion_Presentacion":{"presentacion":"El objeto se muestra en posición de uso, listo para apoyar la muñeca.","interaccion_simulada":"Brazos abiertos sugiriendo un gesto de abrazo y confort.","uso":"Accesorio ergonómico para oficina."},"I_Iluminacion":{"tipo":"Iluminación suave de estudio.","caracteristicas":"Luz difusa que resalta el volumen y evita sombras duras.","objetivo":"Mostrar claramente la textura de la silicona."},"S_Sensacion_Atmosfera":{"emocion":"Confort, ternura, cercanía.","tono":"Cute, relajante, amigable."},"E_visual_EstiloVisual":{"estilo_general":"Producto chibi estilo cartoon.","materiales":{"exterior":"Silicona suave de grado alimenticio con acabado mate y amigable con la piel.","interior":"Espuma de rebote lento."},"paleta_color":"Esquema clásico del panda (blanco, negro y acentos suaves).","detalle":"Texturas visibles de silicona enfatizando comodidad."},"M_Composicion_Camara":{"plano":"Plano medio de producto.","angulo":"Vista frontal o ángulo superior a 45 grados.","encuadre":"Objeto centrado con espacio negativo alrededor."},"P_Postproduccion":{"color_grading":"Colores limpios y naturales.","contraste":"Bajo a medio.","acabado":"Fotografía de producto en alta definición, clara y atractiva para e-commerce.","enfoque":"Alta nitidez para destacar textura y suavidad."}}}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('ea63b546-0f87-4a69-86d1-83024adcae87', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('afa9ca24-648b-431b-8a3e-23089e3e1d73', 'prompt', 'Advanced Anatomical Visualization — Highlighted Area', 'nano-banana-case-83', 'Ilustración digital del sujeto representado mediante líneas luminosas que delinean su anatomía.', '
# Advanced Anatomical Visualization — Highlighted Area

*   **R (Render):** Ilustración digital del sujeto representado mediante líneas luminosas que delinean su anatomía. Sujeto: [SUBJECT]. Representación: Estructura anatómica definida por líneas azules limpias y brillantes. Nivel realismo: Visualización conceptual avanzada, no fotorrealista.
*   **E (Entorno):** Fondo oscuro uniforme. Función: Maximizar el contraste y resaltar la forma. Contexto: Escena técnica y minimalista.
*   **A (Acción):** Presentación: Sujeto estático, posición clara y legible. Enfoque: Observación y análisis visual. Punto clave: Zona destacada como área de interés.
*   **I (Iluminación):** Iluminación generada por las líneas. Características: Líneas azules brillantes vs fondo oscuro. Énfasis: Zona [PART] con resplandor rojo intenso.
*   **S (Sensación):** Claridad, precisión, enfoque. Tono: Educativo, científico, futurista.
*   **E (Estilo):** Visualización anatómica avanzada. Inspiración: Imagen médica y escaneo tecnológico. Colores: Azul luminoso (estructura) + Rojo brillante (zona destacada). Líneas: Trazos precisos y definidos.
*   **M (Composición):** Plano medio o general. Ángulo: Frontal o perspectiva ligera. Encuadre: Sujeto centrado ocupando el foco.
*   **P (Post):** Alto contraste, alta nitidez en contornos. Acabado: Estética pulida tipo imaging científico. Efectos: Brillo suave (glow).
', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/glowing-lines-anatomy.png', '{"title":"Advanced Anatomical Visualization — Highlighted Area","framework_REAISEMP_Object":{"R_Render_del_Objeto":{"descripcion_principal":"Ilustración digital del sujeto representado mediante líneas luminosas que delinean su anatomía.","sujeto":"[SUBJECT]","representacion":"Estructura anatómica definida por líneas azules limpias y brillantes.","nivel_realismo":"Visualización conceptual avanzada, no fotorrealista."},"E_Entorno":{"fondo":"Fondo oscuro uniforme.","funcion":"Maximizar el contraste y resaltar la forma del sujeto.","contexto":"Escena técnica y minimalista."},"A_Accion_Presentacion":{"presentacion":"El sujeto se muestra estático, en posición clara y legible.","enfoque":"Diseño orientado a observación y análisis visual.","punto_clave":"Una zona específica del cuerpo destacada como área de interés."},"I_Iluminacion":{"tipo":"Iluminación generada por las propias líneas luminosas.","caracteristicas":"Líneas azules brillantes contrastando con el fondo oscuro.","enfasis":"Zona [PART] iluminada con un resplandor rojo intenso."},"S_Sensacion_Atmosfera":{"emocion":"Claridad, precisión, enfoque.","tono":"Educativo, científico, futurista."},"E_visual_EstiloVisual":{"estilo_general":"Visualización anatómica avanzada.","inspiracion":"Técnicas de imagen médica y escaneo tecnológico.","colores":{"estructura_principal":"Azul luminoso limpio.","zona_destacada":"Rojo brillante para indicar importancia."},"lineas":"Trazos precisos, limpios y bien definidos."},"M_Composicion_Camara":{"plano":"Plano medio o general del sujeto completo.","angulo":"Vista frontal o ligeramente en perspectiva.","encuadre":"Composición centrada con el sujeto ocupando el foco visual."},"P_Postproduccion":{"contraste":"Alto.","nitidez":"Alta definición en líneas y contornos.","acabado":"Estética pulida tipo imaging científico avanzado.","efectos":"Brillo suave (glow) en líneas y área destacada."}}}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('afa9ca24-648b-431b-8a3e-23089e3e1d73', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('cf112d52-a644-4e98-8807-706920e2fd1b', 'prompt', 'Tarjeta de Presentación Estilo Código', 'nano-banana-case-80', '', 'A close-up shot of a hand holding a business card designed to look like a JSON file opened in VS Code. The card shows code formatted in realistic syntax-highlighted JSON code. The window includes typical toolbar icons and a title bar labeled Business Card.json, styled exactly like the interface of VS Code. Background is slightly blurred, keeping the focus on the card.
The card displays the following code formatted in JSON:
{
"name": "Jamez Bondos",
"title": "Your Title",
"email": "your@email.com",
"link": "yourwebsite"
}', 'Generative AI', NULL, NULL, 'intermediate', '/images/cases/code-style-card.jpg', 'A close-up shot of a hand holding a business card designed to look like a JSON file opened in VS Code. The card shows code formatted in realistic syntax-highlighted JSON code. The window includes typical toolbar icons and a title bar labeled Business Card.json, styled exactly like the interface of VS Code. Background is slightly blurred, keeping the focus on the card.
The card displays the following code formatted in JSON:
{
"name": "Jamez Bondos",
"title": "Your Title",
"email": "your@email.com",
"link": "yourwebsite"
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('cf112d52-a644-4e98-8807-706920e2fd1b', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('e5470ce2-e2db-4c1f-8f9e-4a95832e4245', 'prompt', 'LEGO Cityscape — Shanghai Bund & Pudong Skyline', 'nano-banana-case-79', 'Escena urbana altamente detallada recreada completamente en estilo LEGO.', '
# LEGO Cityscape — Shanghai Bund & Pudong Skyline

*   **R (Render):** Escena urbana altamente detallada recreada completamente en estilo LEGO. Estilo de construcción: Bloques LEGO con geometría modular y colores vivos. Escala: Paisaje urbano amplio con arquitectura histórica y moderna.
*   **E (Entorno):** Ubicación: Shanghai, área del Bund y skyline de Pudong. Ambientación: Ciudad vibrante y moderna recreada como diorama LEGO. Elementos clave: Edificios históricos del Bund en primer plano y skyline de Lujiazui (Oriental Pearl Tower, Shanghai Tower, etc.) en el fondo.
*   **A (Acción):** Dinámica: Escena urbana activa y viva. Elementos humanos: Minifiguras LEGO caminando, tomando fotos y haciendo turismo. Tráfico: Autos LEGO clásicos estacionados y circulando. Actividad acuática: Ferris y barcos turísticos LEGO navegando el río.
*   **I (Iluminación):** Iluminación diurna brillante. Características: Luz uniforme que realza los colores LEGO sin sombras dramáticas.
*   **S (Sensación):** Energía, modernidad, vitalidad urbana. Tono: Alegre, dinámico, optimista.
*   **E (Estilo):** Diorama urbano estilo LEGO altamente detallado. Arquitectura: Bund (histórico, neoclásico) vs Pudong (rascacielos modernos). Materiales: Plásticos LEGO con acabados limpios y colores saturados. Cielo: Azul brillante LEGO con nubes de bloques.
*   **M (Composición):** Plano general amplio del paisaje urbano. Ángulo ligeramente elevado. Encuadre: Composición panorámica equilibrada entre Bund, río y skyline.
*   **P (Post):** Colores saturados y brillantes, fieles al estilo LEGO. Contraste medio. Acabado: Look limpio, nítido y altamente detallado, estilo maqueta coleccionable.
', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/lego-shanghai-bund.jpg', '{"title":"LEGO Cityscape — Shanghai Bund & Pudong Skyline","framework_REAISEMP_Object":{"R_Render_del_Objeto":{"descripcion_principal":"Escena urbana altamente detallada recreada completamente en estilo LEGO.","estilo_construccion":"Bloques LEGO con geometría modular y colores vivos.","escala":"Paisaje urbano amplio con arquitectura histórica y moderna."},"E_Entorno":{"ubicacion":"Shanghai, área del Bund y skyline de Pudong.","ambientacion":"Ciudad vibrante y moderna recreada como diorama LEGO.","elementos_clave":{"primer_plano":"Edificios históricos del Bund en estilos occidental y neoclásico.","fondo":"Río Huangpu y skyline de Lujiazui."}},"A_Accion_Presentacion":{"dinamica":"Escena urbana activa y viva.","elementos_humanos":"Minifiguras LEGO caminando, tomando fotos y haciendo turismo.","trafico":"Autos LEGO clásicos estacionados y circulando por la calle.","actividad_acuatica":"Ferris y barcos turísticos LEGO navegando el río."},"I_Iluminacion":{"tipo":"Iluminación diurna brillante.","caracteristicas":"Luz uniforme que realza los colores LEGO sin sombras dramáticas."},"S_Sensacion_Atmosfera":{"emocion":"Energía, modernidad, vitalidad urbana.","tono":"Alegre, dinámico, optimista."},"E_visual_EstiloVisual":{"estilo_general":"Diorama urbano estilo LEGO altamente detallado.","arquitectura":{"bund":"Edificios históricos con torres de reloj, cúpulas y columnatas.","pudong":"Rascacielos modernos LEGO incluyendo Oriental Pearl Tower, Shanghai Tower, Jin Mao Tower y Shanghai World Financial Center."},"materiales":"Plásticos LEGO con acabados limpios y colores saturados.","cielo":"Azul brillante LEGO con nubes blancas construidas en bloques."},"M_Composicion_Camara":{"plano":"Plano general amplio del paisaje urbano.","angulo":"Ángulo ligeramente elevado.","encuadre":"Composición panorámica equilibrada entre Bund, río y skyline."},"P_Postproduccion":{"color_grading":"Colores saturados y brillantes, fieles al estilo LEGO.","contraste":"Medio.","acabado":"Look limpio, nítido y altamente detallado, estilo maqueta coleccionable."}}}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e5470ce2-e2db-4c1f-8f9e-4a95832e4245', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('c14d34f4-c795-4188-850f-afc1910d7d51', 'prompt', 'Glass Retexturing', 'nano-banana-case-78', '', 'retexture the image attached based on the json below:

{
"style": "photorealistic",
"material": "glass",
"background": "plain white",
"object_position": "centered",
"lighting": "soft, diffused studio lighting",
"camera_angle": "eye-level, straight-on",
"resolution": "high",
"aspect_ratio": "2:3",
"details": {
"reflections": true,
"shadows": false,
"transparency": true
}
}', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/silver-crochet-dog.png', 'retexture the image attached based on the json below:

{
"style": "photorealistic",
"material": "glass",
"background": "plain white",
"object_position": "centered",
"lighting": "soft, diffused studio lighting",
"camera_angle": "eye-level, straight-on",
"resolution": "high",
"aspect_ratio": "2:3",
"details": {
"reflections": true,
"shadows": false,
"transparency": true
}
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c14d34f4-c795-4188-850f-afc1910d7d51', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('4454c5be-757a-46fa-8239-7c531faf03f2', 'prompt', 'Crystal Ball World — Chang’e Flying to the Moon', 'nano-banana-case-77', 'Esfera de cristal delicada que contiene un mundo tridimensional en miniatura.', '
# Crystal Ball World — Chang’e Flying to the Moon

*   **R (Render):** Esfera de cristal delicada que contiene un mundo tridimensional en miniatura. Bola de cristal transparente con superficie pulida y refractiva. Escena 3D detallada inspirada en el mito de Chang’e volando hacia la Luna. Objeto exterior fotorrealista con mundo interno estilizado.
*   **E (Entorno):** Mesa cálida y suavemente iluminada junto a una ventana. Fondo desenfocado y brumoso con tonos cálidos. Luz solar atravesando la esfera y el ambiente circundante.
*   **A (Acción):** La bola de cristal descansa tranquilamente como objeto central. Escena narrativa congelada en un momento poético. Personajes chibi interactuando emocionalmente dentro del mundo en miniatura.
*   **I (Iluminación):** Iluminación natural cálida. La luz del sol se refracta a través del cristal creando destellos dorados. Iluminación suave que baña el entorno con un resplandor reconfortante.
*   **S (Sensación):** Ensueño, calma, ternura, maravilla. Poético, mágico, reconfortante.
*   **E (Estilo):** Escena híbrida de realismo mágico. Mundo 3D en estilo chibi adorable y detallado. Elementos de fantasía de Asia Oriental. Texturas: Superficie clara con refracción y reflejos suaves; Materiales suaves, colores ricos y detalles intrincados.
*   **M (Composición):** Primer plano a plano medio del objeto. Ángulo frontal ligeramente elevado. Composición centrada con la bola de cristal como foco absoluto, fondo desenfocado.
*   **P (Post):** Paleta cálida dorada con acentos suaves y etéreos. Contraste suave a medio. Look de realismo mágico cinematográfico, lujoso pero elegante. Brillos luminosos sutiles, partículas de luz, atmósfera viva.
', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/crystal-ball-moon.png', '{"title":"Crystal Ball World — Chang’e Flying to the Moon","framework_REAISEMP_Object":{"R_Render_del_Objeto":{"descripcion_principal":"Esfera de cristal delicada que contiene un mundo tridimensional en miniatura.","estructura":"Bola de cristal transparente con superficie pulida y refractiva.","contenido_interno":"Escena 3D detallada inspirada en el mito de Chang’e volando hacia la Luna.","nivel_realismo":"Objeto exterior fotorrealista con mundo interno estilizado."},"E_Entorno":{"ubicacion":"Mesa cálida y suavemente iluminada junto a una ventana.","ambientacion_externa":"Fondo desenfocado y brumoso con tonos cálidos.","elementos_clave":"Luz solar atravesando la esfera y el ambiente circundante."},"A_Accion_Presentacion":{"presentacion":"La bola de cristal descansa tranquilamente como objeto central.","dinamica_interna":"Escena narrativa congelada en un momento poético.","interaccion":"Personajes chibi interactuando emocionalmente dentro del mundo en miniatura."},"I_Iluminacion":{"tipo":"Iluminación natural cálida.","caracteristicas":"La luz del sol se refracta a través del cristal creando destellos dorados.","efecto":"Iluminación suave que baña el entorno con un resplandor reconfortante."},"S_Sensacion_Atmosfera":{"emocion":"Ensueño, calma, ternura, maravilla.","tono":"Poético, mágico, reconfortante."},"E_visual_EstiloVisual":{"estilo_general":"Escena híbrida de realismo mágico.","estilo_interno":"Mundo 3D en estilo chibi adorable y detallado.","influencia_cultural":"Elementos de fantasía de Asia Oriental.","texturas":{"cristal":"Superficie clara con refracción y reflejos suaves.","interior":"Materiales suaves, colores ricos y detalles intrincados."}},"M_Composicion_Camara":{"plano":"Primer plano a plano medio del objeto.","angulo":"Ángulo frontal ligeramente elevado.","encuadre":"Composición centrada con la bola de cristal como foco absoluto, fondo desenfocado."},"P_Postproduccion":{"color_grading":"Paleta cálida dorada con acentos suaves y etéreos.","contraste":"Suave a medio.","acabado":"Look de realismo mágico cinematográfico, lujoso pero elegante.","efectos":"Brillos luminosos sutiles, partículas de luz, atmósfera viva."}}}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4454c5be-757a-46fa-8239-7c531faf03f2', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('41e35946-caf9-4449-8fe4-c8f27cee72c7', 'prompt', 'Creative Logo Shaped Bookshelf', 'nano-banana-case-74', '', 'Create a photograph of a modern bookshelf inspired by the shape of [LOGO]. The bookshelf features flowing, interconnected curves forming multiple sections of varying sizes. It is made of sleek matte black metal with wooden shelves inside the loops. Soft, warm LED lighting outlines the inner curves. The bookshelf is mounted on a neutral-toned wall and holds a mix of colorful books, small plants, and minimalistic art pieces. The overall vibe is creative, elegant, and slightly futuristic', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'Create a photograph of a modern bookshelf inspired by the shape of [LOGO]. The bookshelf features flowing, interconnected curves forming multiple sections of varying sizes. It is made of sleek matte black metal with wooden shelves inside the loops. Soft, warm LED lighting outlines the inner curves. The bookshelf is mounted on a neutral-toned wall and holds a mix of colorful books, small plants, and minimalistic art pieces. The overall vibe is creative, elegant, and slightly futuristic', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('41e35946-caf9-4449-8fe4-c8f27cee72c7', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('34cd2dc6-f119-42f2-83f5-0e07a3cc1f93', 'prompt', 'Gold Pendant Necklace', 'nano-banana-case-72', '', 'A photorealistic close-up of a gold pendant necklace held by female hand. The pendant features a bas-relief engraving of [image /emoji]. The pendant hangs from a polished gold chain. The background is softly blurred with neutral beige tones, and natural lighting, realistic skin tones, Product photography, 16:9 aspect ratio.', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'A photorealistic close-up of a gold pendant necklace held by female hand. The pendant features a bas-relief engraving of [image /emoji]. The pendant hangs from a polished gold chain. The background is softly blurred with neutral beige tones, and natural lighting, realistic skin tones, Product photography, 16:9 aspect ratio.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('34cd2dc6-f119-42f2-83f5-0e07a3cc1f93', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('ef12b700-3f8d-4bd8-8984-26f3bc4c6526', 'prompt', 'Miniature Cyberpunk Tilt-Shift Landscape', 'nano-banana-case-71', '', 'A highly detailed miniature [Cyberpunk] landscape viewed from above, using a tilt-shift lens effect. The scene is filled with toy-like elements, all rendered in high-resolution CG. Dramatic lighting creates a cinematic atmosphere, with vivid colors and strong contrast, emphasizing depth of field and a realistic micro-perspective, making the viewer feel as if overlooking a toy world. The image contains many visual jokes and details worth repeated viewing.', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'A highly detailed miniature [Cyberpunk] landscape viewed from above, using a tilt-shift lens effect. The scene is filled with toy-like elements, all rendered in high-resolution CG. Dramatic lighting creates a cinematic atmosphere, with vivid colors and strong contrast, emphasizing depth of field and a realistic micro-perspective, making the viewer feel as if overlooking a toy world. The image contains many visual jokes and details worth repeated viewing.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('ef12b700-3f8d-4bd8-8984-26f3bc4c6526', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('06164567-29b8-4623-8059-39fade48a832', 'prompt', 'Original Pokemon Creation', 'nano-banana-case-70', '', 'Create an original creature inspired by this object (photo provided). The creature should look like it belongs in a fantasy monster-catching universe, with a cute or cool design influenced by retro Japanese RPG monster art. The image must include:
– A full-body view of the creature, inspired by the shape, materials or purpose of the object.
– A small orb or capsule (similar an a pokeball) at its feet, designed with patterns and colors matching the object’s look — not a standard Pokéball, but a custom design.
– An invented name for the creature, displayed next to or below it. – Its elemental type (e.g., Fire, Water, Metal, Nature, Electric…), based on the object’s core properties. The illustration should look like it comes from a fantasy creature encyclopedia, with clean lines, soft shadows, and an expressive, character-driven design.', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'Create an original creature inspired by this object (photo provided). The creature should look like it belongs in a fantasy monster-catching universe, with a cute or cool design influenced by retro Japanese RPG monster art. The image must include:
– A full-body view of the creature, inspired by the shape, materials or purpose of the object.
– A small orb or capsule (similar an a pokeball) at its feet, designed with patterns and colors matching the object’s look — not a standard Pokéball, but a custom design.
– An invented name for the creature, displayed next to or below it. – Its elemental type (e.g., Fire, Water, Metal, Nature, Electric…), based on the object’s core properties. The illustration should look like it comes from a fantasy creature encyclopedia, with clean lines, soft shadows, and an expressive, character-driven design.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('06164567-29b8-4623-8059-39fade48a832', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('bd84525b-f4a5-4a5e-81db-83967f19a616', 'prompt', 'Silhouette Art', 'nano-banana-case-69', '', 'The silhouette of a basic outline of a [PROMPT]. The background is bright yellow, and the silhouette is solid black.', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'The silhouette of a basic outline of a [PROMPT]. The background is bright yellow, and the silhouette is solid black.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('bd84525b-f4a5-4a5e-81db-83967f19a616', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('c51362e8-2faa-47ef-893c-dff571fc3232', 'prompt', 'Ultra-realistic 3D Game', 'nano-banana-case-67', '', 'Ultra-realistic 3D rendered image that replicates the character design of Natasha from Command & Conquer: Red Alert 3 in 2008, following the original model exactly. The scene is set in a dim and cluttered bedroom from the year 2008. The character is sitting on the carpet, facing an old-fashioned television that is playing Command & Conquer: Red Alert 3 and a game console controller.
The entire room is filled with a nostalgic atmosphere of the year 2008: snack packaging bags, soda cans, posters, and tangled wires are everywhere. Natasha Volkova is captured in the moment of turning her head, looking back at the camera over her shoulder. There is an innocent smile on her iconic ethereally beautiful face. Her upper body is slightly twisted, with a natural dynamic, as if she is reacting to being startled by the flash.
The flash slightly overexposes her face and clothes, making her silhouette stand out more prominently in the dimly lit room. The whole photo appears raw and natural. The strong contrast between light and dark casts deep shadows behind her. The image is full of tactile feel, with a simulated texture that resembles an authentic film snapshot from 2008.', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'Ultra-realistic 3D rendered image that replicates the character design of Natasha from Command & Conquer: Red Alert 3 in 2008, following the original model exactly. The scene is set in a dim and cluttered bedroom from the year 2008. The character is sitting on the carpet, facing an old-fashioned television that is playing Command & Conquer: Red Alert 3 and a game console controller.
The entire room is filled with a nostalgic atmosphere of the year 2008: snack packaging bags, soda cans, posters, and tangled wires are everywhere. Natasha Volkova is captured in the moment of turning her head, looking back at the camera over her shoulder. There is an innocent smile on her iconic ethereally beautiful face. Her upper body is slightly twisted, with a natural dynamic, as if she is reacting to being startled by the flash.
The flash slightly overexposes her face and clothes, making her silhouette stand out more prominently in the dimly lit room. The whole photo appears raw and natural. The strong contrast between light and dark casts deep shadows behind her. The image is full of tactile feel, with a simulated texture that resembles an authentic film snapshot from 2008.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c51362e8-2faa-47ef-893c-dff571fc3232', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('ae25193a-46ab-46b1-8987-176111511387', 'prompt', 'Creative Silk Universe', 'nano-banana-case-66', '', 'Transform the {❄️} into a soft 3D object with a silk texture. The entire surface of the object is wrapped in smooth and flowing silk fabric, featuring surreal wrinkle details, soft highlights, and shadows. The object gently floats in the center of a clean light gray background, creating a light and elegant atmosphere. The overall style is surreal, tactile, and modern, conveying a sense of comfort and refined playfulness. Studio lighting, high-resolution rendering.', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'Transform the {❄️} into a soft 3D object with a silk texture. The entire surface of the object is wrapped in smooth and flowing silk fabric, featuring surreal wrinkle details, soft highlights, and shadows. The object gently floats in the center of a clean light gray background, creating a light and elegant atmosphere. The overall style is surreal, tactile, and modern, conveying a sense of comfort and refined playfulness. Studio lighting, high-resolution rendering.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('ae25193a-46ab-46b1-8987-176111511387', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('6e28ebb6-172d-448b-8ae1-26015a32a71e', 'prompt', 'Surreal Underwater Scene Popsicle', 'nano-banana-case-65', '', 'Tilt POV shot of a hand holding a surreal popsicle with a transparent blue exterior, revealing an underwater scene inside: a tiny scuba diver with tiny fish floating with bubbles, ocean waves crashing, and a green popsicle stick running through the center. The popsicle is melting slightly, with a wooden stick at the bottom, hand is holding it by the wooden stick, soft focus new york street background, premium product photography', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'Tilt POV shot of a hand holding a surreal popsicle with a transparent blue exterior, revealing an underwater scene inside: a tiny scuba diver with tiny fish floating with bubbles, ocean waves crashing, and a green popsicle stick running through the center. The popsicle is melting slightly, with a wooden stick at the bottom, hand is holding it by the wooden stick, soft focus new york street background, premium product photography', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('6e28ebb6-172d-448b-8ae1-26015a32a71e', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('0c4360c6-4250-4eb0-8505-b6d24ebe8bdb', 'prompt', 'Steampunk Mechanical Fish', 'nano-banana-case-64', '', 'A steampunk-style mechanical fish with a brass body and clearly visible gear mechanisms when in motion.
Its mechanical teeth can be slightly seen, neatly arranged and closed, with both upper and lower teeth visible. Each tooth is triangular in shape and made of diamond material.
The tail fin has a metal wire mesh structure, while other fins are made of semi-transparent amber-colored glass with some subtle bubbles inside.
The eyes are multi-faceted rubies, with clearly visible reflective shine.
The fish has "f-is-h" text clearly visible on its body, with all lowercase letters and careful attention to the hyphen placement.
The image is square, showing the entire fish in the center of the frame, with its head pointing to the right. There is adequate white space around the fish, with more space on the left and right sides. The background has subtle steampunk-style gear patterns.
The entire fish looks very cool. This is a high-definition image with extremely rich details and unique texture and aesthetics. The image should not be too dark.', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/nano-64-fish.jpg', 'A steampunk-style mechanical fish with a brass body and clearly visible gear mechanisms when in motion.
Its mechanical teeth can be slightly seen, neatly arranged and closed, with both upper and lower teeth visible. Each tooth is triangular in shape and made of diamond material.
The tail fin has a metal wire mesh structure, while other fins are made of semi-transparent amber-colored glass with some subtle bubbles inside.
The eyes are multi-faceted rubies, with clearly visible reflective shine.
The fish has "f-is-h" text clearly visible on its body, with all lowercase letters and careful attention to the hyphen placement.
The image is square, showing the entire fish in the center of the frame, with its head pointing to the right. There is adequate white space around the fish, with more space on the left and right sides. The background has subtle steampunk-style gear patterns.
The entire fish looks very cool. This is a high-definition image with extremely rich details and unique texture and aesthetics. The image should not be too dark.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('0c4360c6-4250-4eb0-8505-b6d24ebe8bdb', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('052c46f3-6561-4849-837a-7645daf7129f', 'prompt', 'Emoji Cream Popsicle', 'nano-banana-case-63', '', 'Generate an image: Transform the [🍓] into a creamy ice cream bar, with cream flowing in curved swirls on top, making it look delicious and tempting. The ice cream is floating at a 45-degree angle in mid-air, rendered in a cute chibi-style 3D aesthetic, set against a solid color background with a unified color palette.', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'Generate an image: Transform the [🍓] into a creamy ice cream bar, with cream flowing in curved swirls on top, making it look delicious and tempting. The ice cream is floating at a 45-degree angle in mid-air, rendered in a cute chibi-style 3D aesthetic, set against a solid color background with a unified color palette.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('052c46f3-6561-4849-837a-7645daf7129f', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('616596c3-e8dd-438e-8824-5f975d8c9eb1', 'prompt', 'Kawaii Enamel Pin', 'nano-banana-case-62', '', 'Turn the subject in the attached image into a kawaii enamel pin. Use glossy metal outlines and vibrant enamel fill. No extra added features. Square mockup format. White background.', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'Turn the subject in the attached image into a kawaii enamel pin. Use glossy metal outlines and vibrant enamel fill. No extra added features. Square mockup format. White background.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('616596c3-e8dd-438e-8824-5f975d8c9eb1', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('25665ae4-152a-4a0d-8224-d9031bf549ff', 'prompt', 'Fake Tweet Screenshot (Einstein)', 'nano-banana-case-61', '', 'a hyper realistic twitter post by Albert Einstein right after finishing the theory of relativity. include a selfie where you can clearly see scribbled equations and a chalkboard in the background. have it visible that the post was liked by Nikola Tesla', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'a hyper realistic twitter post by Albert Einstein right after finishing the theory of relativity. include a selfie where you can clearly see scribbled equations and a chalkboard in the background. have it visible that the post was liked by Nikola Tesla', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('25665ae4-152a-4a0d-8224-d9031bf549ff', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('8d7126cd-9d94-4097-8114-3013b88f6576', 'prompt', 'Emoji Tufted Rug', 'nano-banana-case-60', '', 'Create an image of a colorful, hand-tufted rug in the shape of 🦖 emoji, placed on a simple floor background. The rug has a bold, playful design with soft, fluffy texture and thick yarn details. Shot from above, in natural daylight, with a slightly quirky, DIY aesthetic. Vibrant colors, cartoonish outlines, and tactile, cozy material—similar to handmade tufted art rugs.', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'Create an image of a colorful, hand-tufted rug in the shape of 🦖 emoji, placed on a simple floor background. The rug has a bold, playful design with soft, fluffy texture and thick yarn details. Shot from above, in natural daylight, with a slightly quirky, DIY aesthetic. Vibrant colors, cartoonish outlines, and tactile, cozy material—similar to handmade tufted art rugs.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('8d7126cd-9d94-4097-8114-3013b88f6576', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('0bdcd8b1-7edf-4a64-8523-e0df5ee59fbf', 'prompt', 'Cloud Art', 'nano-banana-case-58', '', 'Generate image: A photograph captures a daytime scene with a [SUBJECT/OBJECT] formed by scattered clouds in the sky, positioned above a [LOCATION]', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'Generate image: A photograph captures a daytime scene with a [SUBJECT/OBJECT] formed by scattered clouds in the sky, positioned above a [LOCATION]', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('0bdcd8b1-7edf-4a64-8523-e0df5ee59fbf', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('52ca7ce2-9483-41c1-8b03-734eadf87dab', 'prompt', 'Pixel Art Burger — 8-Bit Icon', 'nano-banana-case-57', 'Icono de hamburguesa pixel art estilo 8-bit clásico.', '
# Framework REAISEMP (Object)

*   **R (Render):** Icono pixel art 8-bit de hamburguesa. Lineart negro grueso, colores planos vibrantes.
*   **E (Entorno):** Fondo blanco puro minimalista.
*   **A (Acción):** Objeto estático centrado.
*   **I (Iluminación):** Plana, sin sombras complejas (estilo sprite).
*   **S (Sensación):** Retro, nostálgico, arcade, apetitoso.
*   **E (Estilo):** Pixel art clásico, estética de videojuego retro.
*   **M (Composición):** Icono cuadrado centrado.
*   **P (Post):** Upscaling nítido (nearest neighbor) para mantener bordes duros.
        ', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/pixel-art-burger.png', '{
  "title": "Pixel Art Burger — 8-Bit Icon",
  "framework_REAISEMP_Object": {
    "R_Render_del_Objeto": {
      "descripcion_principal": "Icono pixel art de una hamburguesa clásica con queso.",
      "estilo_pixel": "8-bit o 16-bit, píxeles visibles y definidos.",
      "detalles_objeto": "Pan dorado con semillas de sésamo, carne marrón, queso amarillo derretido, lechuga verde y tomate rojo.",
      "contornos": "Borde negro de 1 pixel de grosor (outline) para definición clara."
    },
    "E_Entorno": {
      "fondo": "Blanco puro (#FFFFFF).",
      "contexto": "Sprite aislado tipo asset de videojuego o icono de UI."
    },
    "A_Accion_Presentacion": {
      "presentacion": "Vista frontal o ligeramente isométrica.",
      "estado": "Estático, listo para ser consumido (metafóricamente)."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación plana (flat shading) o sombreado básico de píxeles.",
      "caracteristicas": "Colores sólidos sin degradados suaves."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Divertido, retro, arcade.",
      "estetica": "Nostalgia de videojuegos clásicos."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Pixel Art genuino.",
      "paleta_colores": "Colores saturados y limitados (paleta retro)."
    },
    "M_Composicion_Camara": {
      "encuadre": "Centrado perfecto con espacio negativo alrededor.",
      "ratio": "Cuadrado (1:1)."
    },
    "P_Postproduccion": {
      "nitidez": "Bordes duros (no anti-aliasing)."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('52ca7ce2-9483-41c1-8b03-734eadf87dab', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('1113ab10-200c-49c8-8ee2-c1f505d9f5b5', 'prompt', 'Miniature 3D Building', 'nano-banana-case-56', '', '3D chibi-style miniature design of a whimsical Starbucks café, shaped like an oversized takeaway coffee cup complete with a lid and straw. The building has two floors, with large glass windows that clearly reveal a cozy and refined interior: wooden furniture, warm lighting, and busy baristas at work. On the street, cute little figurines are strolling or sitting, surrounded by benches, street lamps, and potted plants, creating a charming corner of the city. The overall aesthetic follows a detailed and realistic miniature cityscape style, with soft lighting that evokes a relaxing afternoon atmosphere.', 'Generative AI', NULL, NULL, 'intermediate', NULL, '3D chibi-style miniature design of a whimsical Starbucks café, shaped like an oversized takeaway coffee cup complete with a lid and straw. The building has two floors, with large glass windows that clearly reveal a cozy and refined interior: wooden furniture, warm lighting, and busy baristas at work. On the street, cute little figurines are strolling or sitting, surrounded by benches, street lamps, and potted plants, creating a charming corner of the city. The overall aesthetic follows a detailed and realistic miniature cityscape style, with soft lighting that evokes a relaxing afternoon atmosphere.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1113ab10-200c-49c8-8ee2-c1f505d9f5b5', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('b01a76c3-9e2f-4776-8186-6e4fdbb46fac', 'prompt', 'Cute Plant Planter', 'nano-banana-case-55', '', 'A high-quality photo of a cute ceramic [object/animal]-shaped planter with a glossy finish, filled with a variety of vibrant succulents and greenery including a spiky Haworthia, a rosette-shaped Echeveria, and delicate white flowers. The planter has a friendly face and sits on a soft, neutral background with diffused natural lighting, showcasing fine textures and color contrast in a clean, minimalistic composition', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'A high-quality photo of a cute ceramic [object/animal]-shaped planter with a glossy finish, filled with a variety of vibrant succulents and greenery including a spiky Haworthia, a rosette-shaped Echeveria, and delicate white flowers. The planter has a friendly face and sits on a soft, neutral background with diffused natural lighting, showcasing fine textures and color contrast in a clean, minimalistic composition', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('b01a76c3-9e2f-4776-8186-6e4fdbb46fac', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('7a3db42c-a138-4359-83c6-b1556fdf120a', 'prompt', 'Selfie casual nocturna ultra ordinaria — Snapshot accidental', 'nano-banana-case-54', 'Selfie nocturna casual y accidental en Hong Kong.', '
# Framework REAISEMP (Human)

*   **R (Render):** Dos hombres adultos (Eason Chan, Nicholas Tse). Identidad casual, sin glam.
*   **E (Entorno):** Noche, HK Convention Centre. Luces urbanas desenfocadas.
*   **A (Acción):** Selfie accidental. Ángulo incómodo.
*   **I (Iluminación):** Desigual smartphone. Flash o luz inconsistente.
*   **S (Sensación):** Cotidiano, sin dramatismo. Imperfecto y realista.
*   **E (Estilo):** Selfie iPhone ordinaria. Motion blur, composición desordenada.
*   **M (Composición):** Messy framing. Ángulo torcido. Smartphone depth of field.
*   **P (Post):** Colores crudos. Contraste bajo. Acabado auténtico accidental.
        ', 'Photography', NULL, NULL, 'intermediate', '/images/prompts/hong-kong-night-selfie.jpg', '{
  "title": "Selfie casual nocturna ultra ordinaria — Snapshot accidental",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujetos": "Dos hombres adultos (Eason Chan y Nicholas Tse) presentes en la selfie.",
      "identidad": "Rasgos reconocibles preservados, pero capturados de forma casual y sin intención estética.",
      "expresion": "Natural, espontánea, sin pose marcada.",
      "detalle": "No hay énfasis glam; apariencia cotidiana y normal."
    },
    "E_Entorno": {
      "ubicacion": "Noche junto al Hong Kong Convention and Exhibition Centre, Victoria Harbour, Hong Kong.",
      "fondo": "Luces urbanas nocturnas desenfocadas, ambiente real de calle.",
      "contexto": "Escena turística casual sin composición cuidada."
    },
    "A_Accion_Postura": {
      "accion": "Selfie tomada de forma accidental o improvisada.",
      "pose": "Ángulo incómodo, encuadre torpe, sin intención fotográfica.",
      "lenguaje_corporal": "Momento espontáneo como snapshot de bolsillo."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación desigual típica de smartphone.",
      "caracteristicas": "Exposición irregular con leves zonas sobreexpuestas por luces artificiales o faroles.",
      "efecto": "Flash o luz ambiental nocturna inconsistente."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Completamente cotidiano, sin dramatismo.",
      "tono": "Foto casual, imperfecta, realista, accidental."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Selfie iPhone extremadamente ordinaria.",
      "imperfecciones": [
        "Motion blur ligero",
        "Composición desordenada",
        "Ángulo awkward",
        "Estética plain y sin intención artística"
      ],
      "calidad": "Snapshot realista, no editorial, no cinematográfico."
    },
    "M_Composicion_Camara": {
      "encuadre": "Messy framing, sin sujeto central claro.",
      "angulo": "Torcido, espontáneo, como al sacar el móvil del bolsillo.",
      "profundidad_de_campo": "Smartphone natural, fondo borroso por movimiento."
    },
    "P_Postproduccion": {
      "color_grading": "Ninguno o mínimo: colores crudos de teléfono.",
      "contraste": "Bajo, típico de captura casual.",
      "efectos": "Nada estilizado, acabado auténtico y accidental.",
      "acabado_final": "Selfie nocturna común y sin composición intencional."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-08-29T17:52:58.818Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('7a3db42c-a138-4359-83c6-b1556fdf120a', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('99fc3f11-8438-44e3-8748-05be24f6fe31', 'prompt', 'Emoji Inflatable Cushion', 'nano-banana-case-53', '', 'Create a high-resolution 3D render of [🥹] designed as an inflatable, puffy object. The shape should appear soft, rounded, and air-filled — like a plush balloon or blow-up toy. Use a smooth, matte texture with subtle fabric creases and stitching to emphasize the inflatable look. The form should be slightly irregular and squishy, with gentle shadows and soft lighting that highlight volume and realism. Place it on a clean, minimal background (light gray or pale blue), and maintain a playful, sculptural aesthetic.', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'Create a high-resolution 3D render of [🥹] designed as an inflatable, puffy object. The shape should appear soft, rounded, and air-filled — like a plush balloon or blow-up toy. Use a smooth, matte texture with subtle fabric creases and stitching to emphasize the inflatable look. The form should be slightly irregular and squishy, with gentle shadows and soft lighting that highlight volume and realism. Place it on a clean, minimal background (light gray or pale blue), and maintain a playful, sculptural aesthetic.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('99fc3f11-8438-44e3-8748-05be24f6fe31', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('4298aed7-a5f8-4ac3-82cd-1f81e0ce41d7', 'prompt', 'Paper Craft Style Emoji Icon', 'nano-banana-case-52', '', 'A paper craft-style "🔥" floating on a pure white background. The emoji is handcrafted from colorful cut paper with visible textures, creases, and layered shapes. It casts a soft drop shadow beneath, giving a sense of lightness and depth. The design is minimal, playful, and clean — centered in the frame with lots of negative space. Use soft studio lighting to highlight the paper texture and edges.', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/nano-52-papercraft.jpg', 'A paper craft-style "🔥" floating on a pure white background. The emoji is handcrafted from colorful cut paper with visible textures, creases, and layered shapes. It casts a soft drop shadow beneath, giving a sense of lightness and depth. The design is minimal, playful, and clean — centered in the frame with lots of negative space. Use soft studio lighting to highlight the paper texture and edges.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4298aed7-a5f8-4ac3-82cd-1f81e0ce41d7', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('ab2b41bb-1a88-48f6-8e59-ef5ed6b2abcb', 'prompt', 'Passport Entry Stamp — Welcome to Guanajuato', 'nano-banana-case-51', 'Sello de pasaporte realista ''Welcome to Guanajuato'' con silueta arquitectónica.', '
# Framework REAISEMP (Object)

*   **R (Render):** Sello de tinta azul en papel de pasaporte texturizado.
*   **E (Entorno):** Página de pasaporte con patrones de seguridad sutiles.
*   **A (Acción):** Sellado manual en ángulo ligero (imperfecto).
*   **I (Iluminación):** Plana, escáner o fotografía macro suave.
*   **S (Sensación):** Oficial, viaje, llegada, auténtico.
*   **E (Estilo):** Fotorrealismo macro de documento oficial.
*   **M (Composición):** Sello ovalado/ornamental centrado. Texto ''One-way'' legible.
*   **P (Post):** Textura de papel, absorción de tinta, smudges ligeros.
        ', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/passport-entry-stamp.jpg', '{
  "title": "Passport Entry Stamp — Welcome to Guanajuato",
  "framework_REAISEMP_Object": {
    "R_Render_del_Objeto": {
      "descripcion_principal": "Sello de entrada en pasaporte realista para Guanajuato, México.",
      "detalles_sello": {
        "texto_principal": "WELCOME TO GUANAJUATO",
        "texto_secundario": "ARRIVAL",
        "fecha": "15 APR 2025",
        "diseño": "Forma ovalada con bordes decorativos ornamentales.",
        "icono": "Silueta sutil de la Basílica de Guanajuato o arquitectura colonial al fondo."
      },
      "tinta": {
        "color": "Azul profundo o violeta de seguridad.",
        "comportamiento": "Ligeros borrones (smudges) y absorción irregular en el papel."
      }
    },
    "E_Entorno": {
      "superficie": "Papel de pasaporte auténtico con fibras visibles y textura mate.",
      "fondo": "Patrones de seguridad (guilloche) tenues en el fondo de la página."
    },
    "A_Accion_Presentacion": {
      "estado": "Estático, recién estampado.",
      "angulo": "Ligeramente inclinado/rotado para simular estampado manual humano."
    },
    "I_Iluminacion": {
      "tipo": "Luz difusa y uniforme (tipo escáner o luz natural suave).",
      "sombras": "Mínimas, solo para resaltar la textura del papel."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Oficial, viaje internacional, descubrimiento.",
      "estetica": "Documental realista."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía macro o escaneo de alta resolución.",
      "nivel_de_detalle": "Micro-detalles en la tinta y fibras del papel."
    },
    "M_Composicion_Camara": {
      "encuadre": "Close-up centrado en el sello.",
      "enfoque": "Nítido en todo el sello."
    },
    "P_Postproduccion": {
      "efectos": "Simulación de imperfecciones de tinta y textura de papel para máximo realismo."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('ab2b41bb-1a88-48f6-8e59-ef5ed6b2abcb', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('9ee8e736-9bde-4d5a-8c6c-5271f053a305', 'prompt', 'Trading Card Burst Scene — Lara Croft Archaeological Adventure', 'nano-banana-case-50', 'Ilustración de trading card donde Lara Croft rompe el marco hacia el exterior.', '
# Framework REAISEMP (Object)

*   **R (Render):** Lara Croft saltando/balanceándose. Ruptura marco carta.
*   **E (Entorno):** Dentro: Ruinas selváticas. Fuera: Escombros, fragmentos carta.
*   **A (Acción):** Movimiento agresivo hacia adelante. Pop-out 3D.
*   **I (Iluminación):** Aventurera, dinámica. Contrastes fuertes.
*   **S (Sensación):** Épica, peligro, energía explosiva.
*   **E (Estilo):** Trading card illustration ultra-realista. Dimensional rupture.
*   **M (Composición):** Carta coleccionable, personaje saliendo marco. Título visible.
*   **P (Post):** Cracks energéticos, distorsión, partículas, motion blur.
        ', '3D Design', NULL, NULL, 'intermediate', '/images/prompts/trading-card-lara-croft.png', '{
  "title": "Trading Card Burst Scene — Lara Croft Archaeological Adventure",
  "framework_REAISEMP_Object": {
    "R_Render_del_Objeto": {
      "descripcion_principal": "Ilustración ultra-fotorrealista estilo cinematográfico de una carta coleccionable donde Lara Croft rompe el marco hacia el exterior.",
      "elemento_central": {
        "personaje": "Lara Croft",
        "accion": "Saltando o balanceándose con cuerda, irrumpiendo fuera del plano de la carta",
        "outfit": "Aventurera icónica, posible uso de pistolas duales"
      },
      "efecto_dimensional": "Ruptura visible del borde de la carta con grietas energéticas, distorsión espacial y fragmentos expulsados"
    },
    "E_Entorno": {
      "dentro_de_la_carta": {
        "escena": "Ruinas selváticas densas o tumba antigua llena de trampas",
        "elementos": [
          "Piedra antigua",
          "Vegetación",
          "Ambiente arqueológico peligroso"
        ]
      },
      "fuera_de_la_carta": {
        "elementos_expulsados": [
          "Fragmentos de la carta",
          "Polvo y escombros",
          "Vides volando",
          "Monedas antiguas rotas",
          "Casquillos usados"
        ]
      }
    },
    "A_Accion_Presentacion": {
      "dinamica": "Movimiento agresivo hacia adelante, con profundidad extrema tipo 3D pop-out.",
      "impacto": "El borde tallado en piedra se rompe por la energía y el disparo.",
      "muzzle_flash": "Destellos de disparo ayudan a fracturar el marco y expulsar partículas"
    },
    "I_Iluminacion": {
      "tipo": "Iluminación aventurera y dinámica cinematográfica.",
      "caracteristicas": "Contrastes fuertes, highlights sobre Lara, sombras dramáticas en ruinas.",
      "efecto": "Énfasis en agilidad, peligro y acción"
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Aventura épica, peligro arqueológico, energía explosiva.",
      "tono": "Heroico, intenso, cinematic action card"
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Trading card illustration ultra-realista con efecto dimensional ruptured frame.",
      "texturas": {
        "marco": "Borde tallado en piedra antigua agrietada",
        "fragmentos": "Polvo, piedra, energía, distorsión",
        "fondo": "Selva o tumba con atmósfera arqueológica"
      },
      "detalles": "Alta definición en debris, grietas energéticas, motion depth"
    },
    "M_Composicion_Camara": {
      "layout": "Carta coleccionable con personaje saliendo del marco hacia la cámara.",
      "profundidad": "Perspectiva extrema tipo pop-out 3D",
      "texto_visible": {
        "titulo": "Archaeological Adventure",
        "nombre": "Lara Croft",
        "icono": "Artefacto estilizado junto al nombre"
      },
      "encuadre": "Carta parcialmente destruida pero texto aún legible"
    },
    "P_Postproduccion": {
      "efectos": [
        "Cracks energéticos",
        "Distorsión espacial",
        "Partículas y polvo volumétrico",
        "Motion blur sutil en debris"
      ],
      "acabado": "Ultra-cinematic, alto rango dinámico, acción épica tipo póster",
      "nitidez": "Máxima nitidez en personaje y borde fracturado"
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9ee8e736-9bde-4d5a-8c6c-5271f053a305', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('8c860d60-115e-43ae-8279-eebcdd7026ad', 'prompt', 'Portada editorial — Mujer en qipao rosa con mariposas', 'nano-banana-case-49', 'Portada de revista fashion editorial con mujer en qipao y mariposas.', '
# Framework REAISEMP (Human)

*   **R (Render):** Mujer hermosa, estética fashion. Qipao rosa, encaje blanco. Mariposas.
*   **E (Entorno):** Fondo gris minimalista. Estudio limpio.
*   **A (Acción):** Pose refinada, mano sosteniendo mariposas delicadamente.
*   **I (Iluminación):** Estudio suave y envolvente. Sombras sutiles.
*   **S (Sensación):** Elegancia, delicadeza, fantasía suave.
*   **E (Estilo):** Fotografía editorial hiperrealista. Alta moda.
*   **M (Composición):** Portada centrada. Texto "FASHION DESIGN" superior.
*   **P (Post):** Paleta suave elegante. Alta nitidez en detalles.
        ', 'Fashion', NULL, NULL, 'intermediate', '/images/prompts/fashion-design-cover.png', '{
  "title": "Portada editorial — Mujer en qipao rosa con mariposas",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer hermosa con estética elegante tipo fashion magazine.",
      "vestimenta": {
        "outfit": "Qipao rosa tradicional y estilizado.",
        "cuello": "Cuello blanco de encaje delicado."
      },
      "accesorios": {
        "cabeza": "Accesorios florales finos y blossoms coloridos tejidos en el cabello."
      },
      "detalle_manos": "Una mano sostiene suavemente varias mariposas grandes.",
      "detalle_piel": "Textura de piel realista con acabado editorial de alta definición."
    },
    "E_Entorno": {
      "fondo": "Gris claro minimalista.",
      "escena": "Estudio limpio sin elementos distractores.",
      "objetivo": "Destacar completamente al sujeto como portada."
    },
    "A_Accion_Postura": {
      "pose": "Postura suave y refinada, estilo portada de moda.",
      "gesto": "Mano levantada delicadamente sosteniendo mariposas.",
      "actitud": "Elegante, serena, fashion-forward."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación de estudio suave y envolvente.",
      "caracteristicas": "Luz clara que resalta textura del qipao, flores y mariposas.",
      "sombras": "Sutiles, sin dureza, look editorial."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Elegancia, delicadeza, fantasía suave.",
      "tono": "Fashion magazine cover con estética refinada."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía editorial hiperrealista de alta moda.",
      "calidad": "Alta definición, detalle en tela, accesorios y mariposas.",
      "componente_texto": "Diseño tipo portada contemporánea."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato centrado estilo portada.",
      "encuadre": "Sujeto dominante en el frame con espacio superior para tipografía.",
      "texto_superior": "FASHION DESIGN"
    },
    "P_Postproduccion": {
      "color_grading": "Paleta suave y elegante con contraste moderado.",
      "nitidez": "Alta nitidez en rostro, flores, encaje y mariposas.",
      "acabado_final": "Portada limpia, premium, lista para revista."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('8c860d60-115e-43ae-8279-eebcdd7026ad', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('da074752-d2f0-4204-8d4f-3cb3753da71c', 'prompt', 'ESC Keycap Miniature Diorama', 'nano-banana-case-47', '', 'A hyper-realistic isometric 3D render of a miniature computer setup inside a translucent mechanical keyboard keycap, specifically placed on the ESC key of a real matte-finished mechanical keyboard. Inside the keycap, a tiny figure sits in a modern ergonomic chair, wearing a cozy textured hoodie, working at a glowing ultra-realistic computer screen. The environment is packed with lifelike miniature tech accessories: real-material desk lamps, monitors with reflections, tiny speaker grills, tangled cables, and ceramic mugs. The base of the scene is made of soil, rocks, and moss, with photorealistic textures and imperfections. The lighting inside the cap mimics natural morning sun, casting soft shadows and warm tones, while the outside has cold ambient reflections from the surrounding keyboard. The word “ESC” is subtly etched onto the top of the translucent keycap with a faint frosted glass effect — just barely visible depending on the angle. The surrounding keyboard keys like F1, Q, Shift, and CTRL are crisp, textured, and photorealistically lit. Shot as if taken with a high-end mobile phone camera, with shallow depth of field, perfect white balance, and cinematic detail.', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/nano-47-keycap.jpg', 'A hyper-realistic isometric 3D render of a miniature computer setup inside a translucent mechanical keyboard keycap, specifically placed on the ESC key of a real matte-finished mechanical keyboard. Inside the keycap, a tiny figure sits in a modern ergonomic chair, wearing a cozy textured hoodie, working at a glowing ultra-realistic computer screen. The environment is packed with lifelike miniature tech accessories: real-material desk lamps, monitors with reflections, tiny speaker grills, tangled cables, and ceramic mugs. The base of the scene is made of soil, rocks, and moss, with photorealistic textures and imperfections. The lighting inside the cap mimics natural morning sun, casting soft shadows and warm tones, while the outside has cold ambient reflections from the surrounding keyboard. The word “ESC” is subtly etched onto the top of the translucent keycap with a faint frosted glass effect — just barely visible depending on the angle. The surrounding keyboard keys like F1, Q, Shift, and CTRL are crisp, textured, and photorealistically lit. Shot as if taken with a high-end mobile phone camera, with shallow depth of field, perfect white balance, and cinematic detail.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('da074752-d2f0-4204-8d4f-3cb3753da71c', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('0d38b2d8-579c-477d-844e-c712fdbb1773', 'prompt', '3D Chibi-style University Anthropomorphic Mascot', 'nano-banana-case-45', '', 'Create a personified 3D chibi-style anime girl character representing {Northwestern Polytechnical University}, embodying the school’s distinctive strengths in {aeronautics, astronautics, and marine engineering}.', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/nano-45-mascot.jpg', 'Create a personified 3D chibi-style anime girl character representing {Northwestern Polytechnical University}, embodying the school’s distinctive strengths in {aeronautics, astronautics, and marine engineering}.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('0d38b2d8-579c-477d-844e-c712fdbb1773', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('73317088-43b1-4ef5-8161-4ba388236c89', 'prompt', 'RPG Collectible Character Card — Programmer', 'nano-banana-case-44', 'Tarjeta digital coleccionable estilo RPG con un personaje 3D cartoon.', '
# RPG Collectible Character Card — Programmer

*   **R (Render):** Tarjeta digital coleccionable estilo RPG con un personaje 3D cartoon. Personaje Arquetipo: Programador. Estilo: Personaje 3D cartoon con rasgos expresivos y personalidad viva. Apariencia: De pie, postura segura, sosteniendo herramientas o símbolos relacionados con la programación. Coherencia: El personaje representa claramente la profesión a nivel visual y simbólico.
*   **E (Entorno):** Fondo temático acorde a la profesión de programador. Ambientación: Elementos visuales relacionados con tecnología, código o interfaces abstractas. Contexto: Diseño limpio que no distrae del personaje ni de los stats.
*   **A (Acción):** Postura confiada y heroica típica de tarjetas RPG. Lenguaje corporal: Actitud segura, preparada y competente. Presentación: El personaje se muestra como figura central dentro de la tarjeta.
*   **I (Iluminación):** Iluminación suave y uniforme. Características: Luz equilibrada que resalta el volumen 3D y la personalidad del personaje, sin sombras duras.
*   **S (Sensación):** Competencia, creatividad, confianza. Tono: Divertido, inspirador, profesional.
*   **E (Estilo):** Tarjeta RPG coleccionable en estilo 3D cartoon. Interfaz: Barras de habilidades y estadísticas visibles (ej. Creatividad +10, UI/UX +8). Marco: Bordes limpios y definidos, similares a una caja o figura coleccionable. Paleta de color: Colores con highlights cálidos y tonos asociados a la profesión.
*   **M (Composición):** Plano medio del personaje dentro de la tarjeta. Ángulo frontal. Encuadre: Composición vertical tipo carta coleccionable.
*   **P (Post):** Colores vivos pero balanceados. Contraste medio. Acabado: Aspecto pulido, limpio y listo para colección digital. Elementos de texto: Banner superior (Título) y placa inferior (Nombre).
', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/rpg-programmer-card.png', '{"title":"RPG Collectible Character Card — Programmer","framework_REAISEMP_Object":{"R_Render_del_Objeto":{"descripcion_principal":"Tarjeta digital coleccionable estilo RPG con un personaje 3D cartoon.","personaje":{"arquetipo":"Programador","estilo":"Personaje 3D cartoon con rasgos expresivos y personalidad viva.","apariencia":"De pie, postura segura, sosteniendo herramientas o símbolos relacionados con la programación."},"coherencia":"El personaje representa claramente la profesión a nivel visual y simbólico."},"E_Entorno":{"fondo":"Fondo temático acorde a la profesión de programador.","ambientacion":"Elementos visuales relacionados con tecnología, código o interfaces abstractas.","contexto":"Diseño limpio que no distrae del personaje ni de los stats."},"A_Accion_Presentacion":{"pose":"Postura confiada y heroica típica de tarjetas RPG.","lenguaje_corporal":"Actitud segura, preparada y competente.","presentacion":"El personaje se muestra como figura central dentro de la tarjeta."},"I_Iluminacion":{"tipo":"Iluminación suave y uniforme.","caracteristicas":"Luz equilibrada que resalta el volumen 3D y la personalidad del personaje, sin sombras duras."},"S_Sensacion_Atmosfera":{"emocion":"Competencia, creatividad, confianza.","tono":"Divertido, inspirador, profesional."},"E_visual_EstiloVisual":{"estilo_general":"Tarjeta RPG coleccionable en estilo 3D cartoon.","interfaz":{"elementos_UI":"Barras de habilidades y estadísticas visibles.","ejemplos_stats":["Creatividad +10","UI/UX +8"]},"marco":"Bordes limpios y definidos, similares a una caja o figura coleccionable.","paleta_color":"Colores con highlights cálidos y tonos asociados a la profesión."},"M_Composicion_Camara":{"plano":"Plano medio del personaje dentro de la tarjeta.","angulo":"Ángulo frontal.","encuadre":"Composición vertical tipo carta coleccionable."},"P_Postproduccion":{"color_grading":"Colores vivos pero balanceados.","contraste":"Medio.","acabado":"Aspecto pulido, limpio y listo para colección digital.","elementos_texto":{"banner_superior":"Título de la tarjeta","placa_inferior":"Nombre del personaje"}}}}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.815Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('73317088-43b1-4ef5-8161-4ba388236c89', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('08d68766-4fb0-4bf6-8471-cb47f61079e5', 'prompt', 'Miniature Three-dimensional Scene Presentation', 'nano-banana-case-41', '', 'Miniature three-dimensional scene presentation using tilt-shift photography techniques, depicting a chibi-style version of the scene {Sun Wukong’s Three Battles with the White Bone Demon}', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/nano-41-matrix-chibi.png', 'Miniature three-dimensional scene presentation using tilt-shift photography techniques, depicting a chibi-style version of the scene {Sun Wukong’s Three Battles with the White Bone Demon}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.815Z', '2026-01-23T05:34:12.816Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('08d68766-4fb0-4bf6-8471-cb47f61079e5', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('ab8467f5-f47c-419e-8d2d-dd0742eb2d08', 'prompt', 'Fantasy Cartoon Illustration', 'nano-banana-case-39', '', 'A cartoon-style character with a smiling computer monitor as its head, wearing gloves and boots, happily jumping through a glowing, blue, circular portal in a lush, fantasy forest landscape. The forest is detailed with large trees, mushrooms, flowers, a serene river, floating islands, and an atmospheric starry night sky with multiple moons. Bright, vibrant colors with soft lighting, fantasy illustration style.', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/fantasy-monitor-head.jpg', 'A cartoon-style character with a smiling computer monitor as its head, wearing gloves and boots, happily jumping through a glowing, blue, circular portal in a lush, fantasy forest landscape. The forest is detailed with large trees, mushrooms, flowers, a serene river, floating islands, and an atmospheric starry night sky with multiple moons. Bright, vibrant colors with soft lighting, fantasy illustration style.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.816Z', '2026-01-23T05:34:12.816Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('ab8467f5-f47c-419e-8d2d-dd0742eb2d08', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('0fc297bc-8f6d-4a6e-8128-fb230d9c1c03', 'prompt', 'Pastel Power 3D ADS', 'nano-banana-case-37', '', 'a soft 3D cartoon-style sculpture of [brand product], made of smooth clay-like textures and vibrant pastel colors, placed in a minimalist isometric scene that complements the product’s nature, clean composition, gentle lighting, subtle shadows, with the product’s logo and a 3-word slogan displayed clearly below', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/pastel-power-3d-coke.png', 'a soft 3D cartoon-style sculpture of [brand product], made of smooth clay-like textures and vibrant pastel colors, placed in a minimalist isometric scene that complements the product’s nature, clean composition, gentle lighting, subtle shadows, with the product’s logo and a 3-word slogan displayed clearly below', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.816Z', '2026-01-23T05:34:12.816Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('0fc297bc-8f6d-4a6e-8128-fb230d9c1c03', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('b9450a28-31da-447a-80b0-12f3c128ec14', 'prompt', 'Minimalist 3D Illustration (Markdown Format)', 'nano-banana-case-36', '', 'Draw a Toilet

## 🎨 Art Style: Minimalist 3D Illustration

### 🟢 Shape Language
- Rounded edges and smooth, soft forms using simplified geometric shapes.

### 🎨 Colors
- **Primary palette:** soft beige, light gray, warm orange.
- **Accent color:** warm orange for focal elements.
- **Shading:** gentle gradients and smooth transitions, avoiding harsh shadows and highlights.

### 💡 Lighting
- **Type:** soft, diffuse lighting.
- **Light source direction:** from above, slightly to the right.
- **Shadow style:** subtle and diffused, without sharp or high-contrast shadows.

### 🧱 Materials
- **Surface texture:** matte and smooth with subtle light variation.
- **Reflectivity:** low to none, avoiding noticeable gloss.

### 🖼️ Composition
- **Object presentation:** a single, centered object with generous negative space around it.
- **Perspective:** slight tilt to suggest depth, but no strong depth-of-field effects.
- **Background:** flat color, low saturation, harmonious with the subject and non-distracting.

### ✒️ Typography
- **Font style:** minimalist sans-serif.
- **Text placement:** bottom left corner, small and unobtrusive.
- **Font color:** gray, low contrast with the background.

### 🖥️ Rendering Style
- **Technique:** 3D rendering in a simplified low-poly style.
- **Detail level:** medium — focus on shape and color, avoiding complex textures or fine details.

## 🎯 Style Goal
> Create a clean and aesthetically pleasing visual that emphasizes simplicity, approachability, and modernity.', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/minimalist-3d-toilet.png', 'Draw a Toilet

## 🎨 Art Style: Minimalist 3D Illustration

### 🟢 Shape Language
- Rounded edges and smooth, soft forms using simplified geometric shapes.

### 🎨 Colors
- **Primary palette:** soft beige, light gray, warm orange.
- **Accent color:** warm orange for focal elements.
- **Shading:** gentle gradients and smooth transitions, avoiding harsh shadows and highlights.

### 💡 Lighting
- **Type:** soft, diffuse lighting.
- **Light source direction:** from above, slightly to the right.
- **Shadow style:** subtle and diffused, without sharp or high-contrast shadows.

### 🧱 Materials
- **Surface texture:** matte and smooth with subtle light variation.
- **Reflectivity:** low to none, avoiding noticeable gloss.

### 🖼️ Composition
- **Object presentation:** a single, centered object with generous negative space around it.
- **Perspective:** slight tilt to suggest depth, but no strong depth-of-field effects.
- **Background:** flat color, low saturation, harmonious with the subject and non-distracting.

### ✒️ Typography
- **Font style:** minimalist sans-serif.
- **Text placement:** bottom left corner, small and unobtrusive.
- **Font color:** gray, low contrast with the background.

### 🖥️ Rendering Style
- **Technique:** 3D rendering in a simplified low-poly style.
- **Detail level:** medium — focus on shape and color, avoiding complex textures or fine details.

## 🎯 Style Goal
> Create a clean and aesthetically pleasing visual that emphasizes simplicity, approachability, and modernity.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.816Z', '2026-01-23T05:34:12.816Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('b9450a28-31da-447a-80b0-12f3c128ec14', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('4ca4b46f-6875-4e34-8741-a61c57954b40', 'prompt', 'Chibi 3D Family Wedding Portrait — Framed Scene', 'nano-banana-case-33', 'Retrato familiar de boda en estilo Chibi 3D dentro de un marco.', '
# Framework REAISEMP

*   **R (Render):** Personajes chibi 3D, cabezas grandes, expresiones suaves.
*   **E (Entorno):** Escenario fotográfico realista con arco floral.
*   **A (Acción):** Familia posando armoniosamente.
*   **I (Iluminación):** Suave y uniforme.
*   **S (Sensación):** Ternura, celebración.
*   **E (Estilo):** Híbrido: personajes estilizados + entorno realista.
*   **M (Composición):** Plano medio centrado en marco.
*   **P (Post):** Colores vivos, acabado pulido.
        ', 'Creative', NULL, NULL, 'intermediate', '/images/prompts/chibi-family-wedding.png', '{
  "title": "Chibi 3D Family Wedding Portrait — Framed Scene",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Transformar a las personas de la foto original en versiones chibi 3D, manteniendo identidad reconocible de cada integrante (padre, madre e hijo) a través de rasgos simplificados.",
      "estilo_personajes": "Chibi 3D con cabezas grandes, cuerpos pequeños, proporciones adorables y expresiones suaves.",
      "vestuario": {
        "padre": "Traje formal occidental de boda.",
        "madre": "Vestido de novia elegante.",
        "hijo": "Niña florista sosteniendo un ramo."
      },
      "coherencia": "Cada personaje conserva su rol familiar y relación visual."
    },
    "E_Entorno": {
      "fondo": "Escenario fotográfico realista.",
      "ambientacion": "Arco floral colorido detrás de la familia.",
      "marco": "Toda la escena está contenida dentro de un marco de foto visible."
    },
    "A_Accion_Postura": {
      "pose": "Familia posando junta de forma armoniosa.",
      "lenguaje_corporal": "Posturas relajadas y afectuosas.",
      "accion": "La niña sostiene un ramo de flores como flower girl."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación suave y uniforme.",
      "caracteristicas": "Luz equilibrada que favorece tanto a los personajes chibi como al entorno realista."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Ternura, celebración, alegría familiar.",
      "tono": "Encantador, cálido, festivo."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Personajes en estilo chibi 3D contrastando con entorno fotorealista.",
      "texturas": {
        "personajes": "Superficies suaves tipo juguete/figura 3D.",
        "entorno": "Texturas realistas en flores, fondo y marco."
      },
      "nivel_realismo": "Híbrido: personajes estilizados + entorno realista."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio a plano general.",
      "angulo": "Ángulo frontal.",
      "encuadre": "Composición centrada dentro de un marco de foto visible."
    },
    "P_Postproduccion": {
      "color_grading": "Colores vivos y alegres.",
      "contraste": "Medio.",
      "acabado": "Aspecto limpio, pulido y decorativo.",
      "presentacion_final": "Escena completa presentada como una fotografía enmarcada."
    }
  },
  "final_prompt": "Chibi 3D family wedding portrait, western wedding attire, father in suit, mother in wedding gown, flower girl with bouquet. Realistic floral arch background, inside a photo frame. 3D cute stylized characters, photorealistic environment. Vibrant colors, soft lighting, 8K. --ar 3:4"
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.816Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4ca4b46f-6875-4e34-8741-a61c57954b40', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('e7de5a69-7705-4ddd-839e-5ab4dc7864be', 'prompt', '3D Papercraft Pop-up Book', 'nano-banana-case-32', '', 'Multi-layered foldable paper sculpture pop-up book, placed on a desk, with a clean background highlighting the main subject. The book presents a 3D flip-book style, with a 2:3 vertical aspect ratio. The open pages display the scene of [Nezha Demon Child version battling Ao Bing]. All elements are finely foldable and assembled, showcasing a realistic and delicate texture of folded paper. The composition uniformly adopts a frontal perspective, with an overall dreamy and beautiful visual style, vibrant and gorgeous colors, full of a fantastical and lively story atmosphere.', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/3d-papercraft-popup-book.jpg', 'Multi-layered foldable paper sculpture pop-up book, placed on a desk, with a clean background highlighting the main subject. The book presents a 3D flip-book style, with a 2:3 vertical aspect ratio. The open pages display the scene of [Nezha Demon Child version battling Ao Bing]. All elements are finely foldable and assembled, showcasing a realistic and delicate texture of folded paper. The composition uniformly adopts a frontal perspective, with an overall dreamy and beautiful visual style, vibrant and gorgeous colors, full of a fantastical and lively story atmosphere.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.816Z', '2026-01-23T05:34:12.816Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e7de5a69-7705-4ddd-839e-5ab4dc7864be', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('fb19116d-c899-4f3b-831f-29ba696f1821', 'prompt', 'Floating Moscow — Surreal Aerial Cityscape', 'nano-banana-case-30', 'Ciudad de Moscú representada de forma surrealista con islas flotantes.', '
# Floating Moscow — Surreal Aerial Cityscape

*   **R (Render):** Ciudad de Moscú representada de forma surrealista, fragmentada en islas flotantes suspendidas en el cielo. Arquitectura urbana a gran escala. Fotorrealista con elemento fantástico.
*   **E (Entorno):** Cielo abierto a gran altura. Espacio aéreo surrealista sin horizonte terrestre visible. Islas flotantes separadas, masas de tierra suspendidas.
*   **A (Acción):** Las islas flotan libremente en el aire. Sensación de suspensión y quietud, sin movimiento agresivo. Composición estable y equilibrada entre las islas.
*   **I (Iluminación):** Iluminación natural tipo daylight. Luz uniforme que ilumina la arquitectura y las islas desde un ángulo alto, sin sombras extremas.
*   **S (Sensación):** Asombro, surrealismo, contemplación. Onírico, majestuoso, silencioso.
*   **E (Estilo):** Fotografía surrealista. Estética de fotografía tomada con lente de 35 mm. Arquitectura detallada, superficies naturales de las islas visibles. Alto nivel de detalle.
*   **M (Composición):** Plano general amplio. Vista aérea o ligeramente elevada. Lente de 35 mm. Encuadre abierto que permite apreciar múltiples islas flotantes.
*   **P (Post):** Colores naturales con ligero énfasis cinematográfico. Contraste medio. Look fotográfico limpio, surrealista y cinematográfico.
', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/floating-moscow.jpg', '{"title":"Floating Moscow — Surreal Aerial Cityscape","framework_REAISEMP_Object":{"R_Render_del_Objeto":{"descripcion_principal":"Ciudad de Moscú representada de forma surrealista, fragmentada en islas flotantes suspendidas en el cielo.","escala":"Arquitectura urbana a gran escala.","nivel_realismo":"Fotorrealista con elemento fantástico."},"E_Entorno":{"fondo":"Cielo abierto a gran altura.","ambientacion":"Espacio aéreo surrealista sin horizonte terrestre visible.","elementos_clave":"Islas flotantes separadas, masas de tierra suspendidas."},"A_Accion_Presentacion":{"presentacion":"Las islas flotan libremente en el aire.","dinamica":"Sensación de suspensión y quietud, sin movimiento agresivo.","orientacion":"Composición estable y equilibrada entre las islas."},"I_Iluminacion":{"tipo":"Iluminación natural tipo daylight.","caracteristicas":"Luz uniforme que ilumina la arquitectura y las islas desde un ángulo alto, sin sombras extremas."},"S_Sensacion_Atmosfera":{"emocion":"Asombro, surrealismo, contemplación.","tono":"Onírico, majestuoso, silencioso."},"E_visual_EstiloVisual":{"estilo_general":"Fotografía surrealista.","referencia_fotografica":"Est estética de fotografía tomada con lente de 35 mm.","texturas":"Arquitectura detallada, superficies naturales de las islas visibles.","nivel_detalle":"Alto, con integración realista de elementos fantásticos."},"M_Composicion_Camara":{"plano":"Plano general amplio.","angulo":"Vista aérea o ligeramente elevada.","lente":"35 mm","encuadre":"Composición abierta que permite apreciar múltiples islas flotantes."},"P_Postproduccion":{"color_grading":"Colores naturales con ligero énfasis cinematográfico.","contraste":"Medio.","acabado":"Look fotográfico limpio, surrealista y cinematográfico."}}}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.816Z', '2026-01-23T05:34:12.816Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fb19116d-c899-4f3b-831f-29ba696f1821', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('5b94d51e-5332-4e25-8b18-b744a907f8a4', 'prompt', 'OOTD Character Card — Fashion Designer', 'nano-banana-case-29', 'Avatar 3D estilo Q / chibi renderizado con calidad C4D, presentado como tarjeta editorial OOTD.', '
# OOTD Character Card — Fashion Designer

*   **R (Render):** Avatar 3D estilo Q / chibi renderizado con calidad C4D, presentado como tarjeta editorial OOTD.
*   **E (Entorno):** Color sólido que complementa la paleta del personaje, Sin gradientes ni texturas.
*   **A (Acción):** Pose natural y segura, acorde a un diseñador de moda. El personaje actúa como modelo de su propio outfit.
*   **I (Iluminación):** Iluminación suave y uniforme estilo estudio.
*   **S (Sensación):** Creatividad, estilo, autoexpresión. Moderno, fashion-forward, cool.
*   **E (Estilo):** Q-style 3D chibi con acabado C4D.
*   **M (Composición):** Formato Vertical 9:16. Tarjeta editorial con personaje y breakdown de items.
*   **P (Post):** Colores limpios y coordinados, Look editorial fashion.
', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/ootd-fashion-designer.png', '{
  "title": "OOTD Character Card — Fashion Designer",
  "framework_REAISEMP_Object": {
    "R_Render_del_Objeto": {
      "descripcion_principal": "Avatar 3D estilo Q / chibi renderizado con calidad C4D, presentado como tarjeta editorial OOTD.",
      "personaje": {
        "origen": "Basado en la persona de la foto",
        "identidad": "Mantener rasgos faciales originales y pose base",
        "estilizacion": "Proporciones chibi con piernas largas y cuerpo estilizado",
        "profesion": "Fashion Designer"
      }
    },
    "E_Entorno": {
      "fondo": "Color sólido que complementa la paleta del personaje",
      "restricciones": "Sin gradientes ni texturas",
      "contexto": "Escena limpia tipo fashion layout / lookbook digital"
    },
    "A_Accion_Presentacion": {
      "pose": "Pose natural y segura, acorde a un diseñador de moda",
      "actitud": "Creativa, confiada y estilosa",
      "interaccion": "El personaje actúa como modelo de su propio outfit"
    },
    "I_Iluminacion": {
      "tipo": "Iluminación suave y uniforme estilo estudio",
      "caracteristicas": "Luz suave y balanceada que resalta materiales, telas y silueta sin sombras duras"
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Creatividad, estilo, autoexpresión",
      "tono": "Moderno, fashion-forward, cool"
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Q-style 3D chibi con acabado C4D",
      "outfit": {
        "descripcion": "Outfit of the day inspirado en la profesión de diseñador de moda",
        "prendas": [
          "Ropa de diseñador trendy",
          "Zapatos estilizados"
        ],
        "accesorios": [
          "Gafas",
          "Sketchbook o tablet",
          "Accesorios fashion complementarios"
        ]
      },
      "detalle": "Alta definición en telas, accesorios y proporciones chibi"
    },
    "M_Composicion_Camara": {
      "formato": "Vertical 9:16",
      "layout": {
        "texto_superior": "OOTD",
        "lado_izquierdo": "Personaje chibi a cuerpo completo con outfit completo",
        "lado_derecho": "Desglose visual de prendas y accesorios colocados por separado"
      },
      "encuadre": "Composición balanceada tipo tarjeta editorial"
    },
    "P_Postproduccion": {
      "color_grading": "Colores limpios y coordinados",
      "contraste": "Medio",
      "acabado": "Look editorial fashion listo para social media o branding",
      "nitidez": "Alta, optimizada para formato móvil"
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.816Z', '2026-01-23T05:34:12.816Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5b94d51e-5332-4e25-8b18-b744a907f8a4', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('0358f935-57bb-4cb6-84d3-08aadc36ec52', 'prompt', 'Diseño de Sticker Plano', 'nano-banana-case-28', '', 'Turn this photo into a chibi-style sticker illustration in a minimalist flat design.
– Keep the character’s recognizable features
– Use a cute, simplified aesthetic
– The sticker should have a thick white border
– The character should break out of the circular frame, adding a playful touch
– The circular base should be a solid flat color (no 3D or gradients)
– Background should be transparent
The overall style should be clean, modern, and visually appealing for use as a fun Q-version sticker.', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/nano-28-sticker.jpg', 'Turn this photo into a chibi-style sticker illustration in a minimalist flat design.
– Keep the character’s recognizable features
– Use a cute, simplified aesthetic
– The sticker should have a thick white border
– The character should break out of the circular frame, adding a playful touch
– The circular base should be a solid flat color (no 3D or gradients)
– Background should be transparent
The overall style should be clean, modern, and visually appealing for use as a fun Q-version sticker.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.816Z', '2026-01-23T05:34:12.816Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('0358f935-57bb-4cb6-84d3-08aadc36ec52', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('6d4dc815-65e7-4535-8b3e-8ad878c75579', 'prompt', 'Pack de Stickers Emojis Versión Q', 'nano-banana-case-27', '', 'Create a brand-new set of chibi-style stickers featuring the user as the main character, with six unique poses:
1.	Making a playful peace sign with both hands and winking.
2.	Tearful eyes and slightly trembling lips, showing a cute crying expression.
3.	Arms wide open in a warm, enthusiastic hug pose.
4.	Lying on their side asleep, resting on a tiny pillow with a sweet smile.
5.	Pointing forward with confidence, surrounded by shining visual effects.
6.	Blowing a kiss, with heart symbols floating around.
Maintain the chibi aesthetic:
– Exaggerated, expressive big eyes
– Soft facial lines
– Playful, short black hairstyle
– A white outfit with a bold neckline design
Background: Vibrant red with star or colorful confetti elements for decoration. Leave some clean white space around each sticker.
Aspect ratio: 9:16', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'Create a brand-new set of chibi-style stickers featuring the user as the main character, with six unique poses:
1.	Making a playful peace sign with both hands and winking.
2.	Tearful eyes and slightly trembling lips, showing a cute crying expression.
3.	Arms wide open in a warm, enthusiastic hug pose.
4.	Lying on their side asleep, resting on a tiny pillow with a sweet smile.
5.	Pointing forward with confidence, surrounded by shining visual effects.
6.	Blowing a kiss, with heart symbols floating around.
Maintain the chibi aesthetic:
– Exaggerated, expressive big eyes
– Soft facial lines
– Playful, short black hairstyle
– A white outfit with a bold neckline design
Background: Vibrant red with star or colorful confetti elements for decoration. Leave some clean white space around each sticker.
Aspect ratio: 9:16', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.816Z', '2026-01-23T05:34:12.816Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('6d4dc815-65e7-4535-8b3e-8ad878c75579', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('f1e9d119-7033-4837-86c1-f214d66b622e', 'prompt', 'Anuncio de Cereal: Personaje de Arte', 'nano-banana-case-26', '', '“Master Oats”: Based on the visual features of the person in the uploaded photo, generate a custom oatmeal mix that reflects their personality traits — for example, using vegetables, fruits, yogurt, whole grains, etc.

Design a unique cereal box and package aesthetic that aligns with this tailored mix.

Then, create an advertising cover featuring the person as the mascot on the cereal box. The character should retain their recognizable features but be transformed into a cute chibi-style 3D figure with a C4D-quality rendering.

The oatmeal and packaging should be presented in a setting that matches the mood — such as a minimalist kitchen, a sleek supermarket display, or a clean design counter.

The process includes:
– Character analysis and oat mix pairing
– Cereal box concept and design
– Display environment selection
– Final image with mascot figure, packaging, and styled scene composition

All visuals should be balanced, modern, and appealing, reflecting a premium and fun oat brand identity.', 'Generative AI', NULL, NULL, 'intermediate', NULL, '“Master Oats”: Based on the visual features of the person in the uploaded photo, generate a custom oatmeal mix that reflects their personality traits — for example, using vegetables, fruits, yogurt, whole grains, etc.

Design a unique cereal box and package aesthetic that aligns with this tailored mix.

Then, create an advertising cover featuring the person as the mascot on the cereal box. The character should retain their recognizable features but be transformed into a cute chibi-style 3D figure with a C4D-quality rendering.

The oatmeal and packaging should be presented in a setting that matches the mood — such as a minimalist kitchen, a sleek supermarket display, or a clean design counter.

The process includes:
– Character analysis and oat mix pairing
– Cereal box concept and design
– Display environment selection
– Final image with mascot figure, packaging, and styled scene composition

All visuals should be balanced, modern, and appealing, reflecting a premium and fun oat brand identity.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.816Z', '2026-01-23T05:34:12.816Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('f1e9d119-7033-4837-86c1-f214d66b622e', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('9351e163-a8b9-44cf-82e0-925e5f994b30', 'prompt', 'Collectible Figure Box — JAMES BOND', 'nano-banana-case-24', 'Figura coleccionable estilo Funko Pop presentada dentro de su caja y también fuera del empaque.', '
# Collectible Figure Box — JAMES BOND

*   **R (Render):** Figura coleccionable estilo Funko Pop presentada dentro de su caja y también fuera del empaque. Caja tipo Funko Pop, Vista Isométrica.
*   **E (Entorno):** Entorno limpio tipo exhibición de producto, Escena neutral.
*   **A (Acción):** La caja se muestra cerrada en vista isométrica junto a la figura fuera del empaque.
*   **I (Iluminación):** Iluminación de estudio realista.
*   **S (Sensación):** Elegancia, exclusividad, nostalgia.
*   **E (Estilo):** Producto coleccionable 3D con estética Funko Pop.
*   **M (Composición):** Plano medio de producto, Vista isométrica.
*   **P (Post):** Colores equilibrados y realistas.
', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/james-bond-funko.png', '{
  "title": "Collectible Figure Box — JAMES BOND",
  "framework_REAISEMP_Object": {
    "R_Render_del_Objeto": {
      "descripcion_principal": "Figura coleccionable estilo Funko Pop presentada dentro de su caja y también fuera del empaque.",
      "empaque": {
        "tipo": "Caja tipo Funko Pop",
        "vista": "Isométrica",
        "titulo": "JAMES BOND"
      },
      "figura": {
        "estilo": "Chibi 3D",
        "origen": "Basada en la persona de la foto",
        "identidad": "Conservar rasgos faciales reconocibles del sujeto",
        "proporciones": "Cabeza grande, cuerpo pequeño, estilo coleccionable"
      }
    },
    "E_Entorno": {
      "fondo": "Entorno limpio tipo exhibición de producto",
      "ambientacion": "Escena neutral que resalta el empaque y la figura",
      "contexto": "Display de producto premium"
    },
    "A_Accion_Presentacion": {
      "presentacion": "La caja se muestra cerrada en vista isométrica junto a la figura fuera del empaque.",
      "posicion_figura": "Figura colocada de pie junto a la caja.",
      "interaccion": "Relación clara entre empaque y producto real."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación de estudio realista",
      "caracteristicas": "Luz suave y controlada que resalta volúmenes, texturas y materiales.",
      "objetivo": "Transmitir calidad de producto físico."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Elegancia, exclusividad, nostalgia.",
      "tono": "Premium, icónico, coleccionable."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Producto coleccionable 3D con estética Funko Pop.",
      "detalle_figura": {
        "ropa": "Traje formal estilo James Bond",
        "accesorios": [
          "Pistola",
          "Reloj de pulsera",
          "Elementos icónicos del personaje"
        ]
      },
      "texturas": {
        "figura": "Material plástico con acabado detallado y limpio.",
        "empaque": "Cartón impreso con gráficos nítidos."
      }
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio de producto.",
      "angulo": "Vista isométrica.",
      "encuadre": "Caja y figura centradas como protagonistas del encuadre."
    },
    "P_Postproduccion": {
      "color_grading": "Colores equilibrados y realistas.",
      "contraste": "Medio.",
      "acabado": "Render de producto de alta calidad, listo para catálogo o e-commerce.",
      "detalle_extra": "Alta definición en materiales, bordes y accesorios."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.816Z', '2026-01-23T05:34:12.816Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9351e163-a8b9-44cf-82e0-925e5f994b30', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('dc9f1308-2c71-451e-8650-f581f972a27c', 'prompt', '"Titanic" Pose Parody', 'nano-banana-case-23', '', 'Transform the person in the attached image into a cute chibi-style 3D character.
Scene: On the pointed bow of a luxurious cruise ship.
The man stands behind the woman at the bow, holding her waist with both hands. The woman is wearing a dress, arms spread wide, facing the wind, with a joyful and liberated expression on her face—just like the iconic scene from Titanic.
The sky is painted in warm sunset tones, and the vast ocean stretches beneath the ship.
Only the characters should be in chibi 3D style; the rest of the environment should be realistic.', 'Generative AI', NULL, NULL, 'intermediate', NULL, 'Transform the person in the attached image into a cute chibi-style 3D character.
Scene: On the pointed bow of a luxurious cruise ship.
The man stands behind the woman at the bow, holding her waist with both hands. The woman is wearing a dress, arms spread wide, facing the wind, with a joyful and liberated expression on her face—just like the iconic scene from Titanic.
The sky is painted in warm sunset tones, and the vast ocean stretches beneath the ship.
Only the characters should be in chibi 3D style; the rest of the environment should be realistic.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.816Z', '2026-01-23T05:34:12.816Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('dc9f1308-2c71-451e-8650-f581f972a27c', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('75678881-1fbd-42c5-8b88-86e645798669', 'prompt', 'Desk Scene Contrast — Anime Figure + Real Person Pose Match', 'nano-banana-case-20', 'Escena casual de contraste entre figura anime y persona real.', '
# Framework REAISEMP (Object)

*   **R (Render):** Figura anime vs Persona Real. Figura estilo Jackie Chan completamente equipada. Persona real imitando pose exacta.
*   **E (Entorno):** Escritorio cotidiano, interior casual, foto de móvil.
*   **A (Acción):** Poses paralelas exageradas y dinámicas. Interacción visual divertida.
*   **I (Iluminación):** Ambiental cálida, imperfecta, sombras suaves (smartphone style).
*   **S (Sensación):** Cálido, divertido, auténtico.
*   **E (Estilo):** Snapshot casual true-to-life. Contraste escala juguete vs humana.
*   **M (Composición):** Plano medio balanceado.
*   **P (Post):** Color grading natural y cálido.
        ', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/desk-scene-contrast.jpg', '{
  "title": "Desk Scene Contrast — Anime Figure + Real Person Pose Match",
  "framework_REAISEMP_Object": {
    "R_Render_del_Objeto": {
      "descripcion_principal": "Escena casual tipo móvil donde una figura anime coleccionable aparece sobre un escritorio junto a una persona real replicando su pose.",
      "figura": {
        "tipo": "Figura estilo anime (inspirada en Jackie Chan)",
        "pose": "Exagerada, cool y dinámica",
        "detalle": "Completamente equipada como figura de acción"
      },
      "persona_real": {
        "presencia": "Aparece en el mismo encuadre",
        "accion": "Imita la pose exacta de la figura para contraste visual",
        "efecto": "Relación divertida entre miniatura y humano"
      }
    },
    "E_Entorno": {
      "escena": "Escritorio cotidiano en un ambiente real",
      "fondo": "Interior casual sin look de estudio",
      "contexto": "Fotografía espontánea como snapshot de móvil"
    },
    "A_Accion_Presentacion": {
      "dinamica": "Figura y persona ejecutan poses paralelas en el mismo frame",
      "interaccion": "Contraste visual divertido entre toy scale y escala humana",
      "composicion": "Natural y armoniosa, sin parecer montada artificialmente"
    },
    "I_Iluminacion": {
      "tipo": "Luz ambiental cotidiana tipo smartphone",
      "caracteristicas": "Iluminación cálida, imperfecta, realista",
      "sombras": "Suaves e irregulares como en una escena doméstica"
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Cálido, vibrante, divertido, auténtico",
      "tono": "Everyday life + playful visual contrast"
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía casual de móvil con estética true-to-life",
      "detalle": {
        "figura": "Look anime coleccionable con pose exagerada",
        "persona": "Realismo natural, postura similar",
        "contraste": "Toy vs real person en un mismo momento"
      },
      "acabado": "Harmonioso y orgánico, no editorial"
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio mostrando escritorio, figura y persona",
      "angulo": "Smartphone casual ligeramente imperfecto",
      "encuadre": "Balanceado para que ambos sujetos sean visibles"
    },
    "P_Postproduccion": {
      "color_grading": "Natural y cálido, sin filtros agresivos",
      "nitidez": "Detalle suficiente en figura y persona, estilo snapshot real",
      "acabado_final": "Escena auténtica y encantadora con contraste juguetón"
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.816Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('75678881-1fbd-42c5-8b88-86e645798669', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('1fd09fa5-1f42-4039-8c91-76e308218c7b', 'prompt', 'Mexico in a Box — Miniature Diorama', 'nano-banana-case-19', 'Diorama realista de México dentro de una caja de cartón.', '
# Framework REAISEMP (Object)

*   **R (Render):** Diorama 3D-printed dentro de caja de cartón. Textura matte con layer lines visibles, estilo juguete táctil.
*   **E (Entorno):** Interior de caja de cartón beige, manos humanas sosteniendo la tapa.
*   **A (Acción):** Vista top-down revelando el paisaje miniatura.
*   **I (Iluminación):** Cálida y cinematográfica, resaltando texturas y sombras realistas.
*   **S (Sensación):** Mágico, encantador, realismo miniatura.
*   **E (Estilo):** Fotografía ultra-realista de maqueta física estilo juguete.
*   **M (Composición):** Paisaje de México con landmarks (pirámides, edificios coloniales), vegetación y multitudes. Texto "MÉXICO" en letras plásticas de colores en la tapa.
*   **P (Post):** Enfoque nítido en el diorama, profundidad de campo natural.
        ', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/mexico-box-diorama.jpg', '{
  "title": "Mexico in a Box — Miniature Diorama",
  "framework_REAISEMP_Object": {
    "R_Render_del_Objeto": {
      "tipo_objeto": "Diorama impreso en 3D dentro de una caja de cartón.",
      "materiales": {
        "terreno": "Textura mate con líneas de impresión visibles (layer lines) para efecto táctil de juguete.",
        "letras": "Plástico brillante de colores vivos (raised plastic letters).",
        "caja": "Cartón corrugado beige realista."
      },
      "contenido": "Paisaje miniatura de México: pirámides, edificios coloniales, ríos, vegetación y multitudes de figuras humanas diminutas."
    },
    "E_Entorno": {
      "contenedor": "Caja de cartón beige estándar sostenida por manos humanas reales.",
      "texto_tapa": "Frase ''MÉXICO'' en el interior de la tapa, cada letra de un color brillante diferente."
    },
    "A_Accion_Presentacion": {
      "accion": "Manos abriendo la caja para revelar el mundo mágico interior.",
      "perspectiva": "Top-down shot (vista cenital) clara y detallada."
    },
    "I_Iluminacion": {
      "tipo": "Cinematográfica cálida (Golden Hour).",
      "efecto": "Sombras suaves que dan volumen a las miniaturas y realismo a la escena."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Encantador, nostálgico, mágico.",
      "estetica": "Toy-like realism, artesanía digital de alta calidad."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía ultra-realista de objeto físico (tilt-shift feel sin desenfoque excesivo).",
      "colores": "Vibrantes y geográficamente apropiados (tonos tierra, verdes vivos, arquitectura colorida)."
    },
    "M_Composicion_Camara": {
      "encuadre": "Centrado en el contenido de la caja.",
      "enfoque": "Nitidez total en el diorama, ligero desenfoque en las manos/fondo."
    },
    "P_Postproduccion": {
      "acabado": "Aspecto físico tangible, no render digital liso."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.816Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1fd09fa5-1f42-4039-8c91-76e308218c7b', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('380d82c3-b6a2-4204-822f-eb8a9b63281d', 'prompt', 'Poster futurista minimalista — Metaball Coca-Cola Bottle', 'nano-banana-case-9', 'Poster minimalista futurista de una botella de Coca-Cola estilo metaball.', '
# Framework REAISEMP (Object)

*   **R (Render):** Metaball fluido 3D, botella Coca-Cola. Vidrio esmerilado, rojo a blanco.
*   **E (Entorno):** Fondo gris ultra claro. Galería futurista minimalista.
*   **A (Acción):** Objeto centrado. Fluido sobre texto con transparencia.
*   **I (Iluminación):** Softbox alto. Sombras suaves coloreadas. Halo sutil.
*   **S (Sensación):** Futurista, limpio, premium. Minimalismo elegante.
*   **E (Estilo):** Poster minimalista futurista. Efecto vidrio esmerilado.
*   **M (Composición):** Vertical 3:4 4K. Espacio negativo generoso.
*   **P (Post):** HDR alto. Nitidez extrema. Blur gaussiano en letras cubiertas.
        ', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/metaball-coca-cola.jpg', '{
  "title": "Poster futurista minimalista — Metaball Coca-Cola Bottle",
  "framework_REAISEMP_Object": {
    "R_Render_del_Objeto": {
      "descripcion_principal": "Objeto central: metaball fluido 3D con forma completa de botella clásica de Coca-Cola.",
      "material": "Vidrio esmerilado (frosted glass) con ruido granulado delicado.",
      "gradiente_color": {
        "inicio": "Coca-Cola Red (#E41C23)",
        "fin": "Pearl White (#FFFFFF)",
        "apariencia": "Transición sedosa tipo vidrio líquido."
      },
      "nivel_detalle": "Render ultra limpio, futurista, alta definición."
    },
    "E_Entorno": {
      "fondo": "Gris frío ultra claro (#f4f4f4).",
      "escena": "Poster de exhibición minimalista con espacio negativo amplio.",
      "contexto": "Diseño de galería futurista, sin objetos adicionales."
    },
    "A_Accion_Presentacion": {
      "presentacion": "Objeto centrado, dominante en el póster.",
      "interaccion_visual": "El fluido se superpone parcialmente al texto, creando efecto de transparencia esmerilada."
    },
    "I_Iluminacion": {
      "tipo": "Softbox alto, luz suave de estudio.",
      "caracteristicas": "Sombras largas, suaves y ligeramente coloreadas.",
      "efectos": "Halo sutil alrededor del objeto, iluminación premium de exhibición."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Futurista, limpio, premium.",
      "tono": "Minimalismo elegante con sensación de lujo moderno."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Poster minimalista futurista con objeto 3D de vidrio líquido.",
      "tipografia": {
        "titulo_principal": {
          "texto": "Coca-Cola",
          "estilo": "Logo clásico rojo centrado",
          "efecto": "Parcialmente cubierto por el vidrio con blur gaussiano suave en letras ocultas."
        },
        "subtitulo": {
          "texto": "TASTE THE FEELING",
          "fuente": "Sans-serif moderna, bold, all-caps",
          "color": "Negro puro",
          "efecto": "También parcialmente superpuesto y difuminado en las zonas cubiertas."
        }
      },
      "efecto_vidrio": "Las letras detrás del frosted glass aparecen suavemente borrosas."
    },
    "M_Composicion_Camara": {
      "formato": "Vertical 3:4 en resolución 4K.",
      "encuadre": "Composición centrada, balanceada, con whitespace generoso.",
      "enfoque": "Sharp focus general con sensación HDR."
    },
    "P_Postproduccion": {
      "dynamic_range": "HDR alto, rango dinámico elevado.",
      "nitidez": "Extrema nitidez en tipografía no cubierta y bordes del objeto.",
      "blur": "Gaussian blur suave aplicado solo en letras detrás del vidrio.",
      "acabado_final": "Poster limpio, premium, listo para exposición contemporánea."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.816Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('380d82c3-b6a2-4204-822f-eb8a9b63281d', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('20ca6e33-de16-471b-8d8b-c1fea963034e', 'prompt', 'LEGO Collectible Glass Cube — Avatar + Companion Animal Diorama', 'nano-banana-case-8', 'Mini escena coleccionable LEGO en cubo de vidrio premium.', '
# Framework REAISEMP (Object)

*   **R (Render):** Mini escena coleccionable LEGO. Avatar personalizado + animal compañero.
*   **E (Entorno):** Cubo de vidrio transparente minimalista, base negra mate con acentos plateados.
*   **A (Acción):** Avatar y animal posando juntos, presencia simbólica y calmada.
*   **I (Iluminación):** Refinada, luz de estudio suave, highlights elegantes en vidrio.
*   **S (Sensación):** Curado, artístico, elegante, minimalista, museográfico.
*   **E (Estilo):** Diorama LEGO realista, acabado premium de materiales.
*   **M (Composición):** Vertical, cubo centrado, espacio negativo limpio.
*   **P (Post):** Paleta coordinada, contraste suave, nitidez alta en grabados y texturas.
        ', 'Generative AI', NULL, NULL, 'intermediate', '/images/prompts/lego-collectible-glass-cube.png', '{
  "title": "LEGO Collectible Glass Cube — Avatar + Companion Animal Diorama",
  "framework_REAISEMP_Object": {
    "R_Render_del_Objeto": {
      "descripcion_principal": "Mini escena coleccionable estilo LEGO minifigure basada en la foto del usuario, dentro de un cubo de vidrio premium.",
      "avatar": {
        "estilo": "LEGO minifigure clásico",
        "origen": "Basado en la foto cargada",
        "identidad": "Mantener rasgos reconocibles adaptados a estética LEGO",
        "escala": "Miniatura tipo diorama"
      },
      "animal_companion": {
        "concepto": "Criatura diseñada según la personalidad percibida del usuario",
        "tipo": "Puede ser real, surreal o fantástica",
        "paleta": "Los colores del animal deben armonizar con los colores dominantes del avatar",
        "nombre": "Debe asignarse un nombre elegante para placa"
      }
    },
    "E_Entorno": {
      "estructura": "Cubo transparente de vidrio como vitrina principal",
      "interior": "Diseño minimalista, limpio, tipo galería",
      "base": {
        "material": "Negro mate",
        "detalles": "Acentos plateados modernos"
      },
      "fondo_exterior": "Gradiente suave de oscuro a claro acorde al tema cromático"
    },
    "A_Accion_Presentacion": {
      "staging": "El avatar LEGO está acompañado por el animal a su lado dentro del cubo",
      "interaccion": "Compañero simbólico, presencia calmada y curada",
      "display": "Presentación como obra de museo / collectible de lujo"
    },
    "I_Iluminacion": {
      "tipo": "Iluminación refinada estilo producto premium",
      "caracteristicas": "Luz suave, controlada, con highlights elegantes sobre vidrio y figuras",
      "efecto": "Look de galería de colección de alta gama"
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Curado, artístico, elegante, minimalista",
      "tono": "High-end collectible artwork con esencia museográfica"
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Diorama LEGO dentro de vitrina moderna",
      "materiales": {
        "cubo": "Vidrio transparente limpio",
        "figuras": "Acabado plástico LEGO realista",
        "base": "Negro mate con grabado fino"
      },
      "tipografia": {
        "placa_nombre": "Serif refinado con el nombre del animal",
        "clasificacion": "Texto biológico grabado estilo museo de historia natural"
      },
      "detalle": "Meticuloso, artesanal, premium"
    },
    "M_Composicion_Camara": {
      "formato": "Vertical (orientación tipo collectible showcase)",
      "encuadre": "Cubo centrado con balance perfecto y espacio negativo limpio",
      "layout": "Avatar + animal claramente visibles, placa legible en la base"
    },
    "P_Postproduccion": {
      "color_grading": "Paleta elegante coordinada con el animal y el avatar",
      "contraste": "Suave, premium",
      "acabado_final": "Imagen lista como pieza de arte coleccionable curada",
      "nitidez": "Alta definición en grabados, vidrio, figura y detalles miniatura"
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-01-23T05:34:12.816Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('20ca6e33-de16-471b-8d8b-c1fea963034e', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('b6204195-3fac-480c-847a-eab7a8151142', 'prompt', 'Retrato sofisticado — Mujer en traje navy con presencia elegante', 'elegance-redefined-confidence', 'Retrato editorial sofisticado de mujer en traje navy.', '
# Framework REAISEMP (Human)

*   **R (Render):** Mujer elegante, traje navy entallado. Textura piel realista.
*   **E (Entorno):** Ambiente sereno, cálido y refinado.
*   **A (Postura):** Firme, centrada, mirada segura. Actitud de liderazgo.
*   **I (Iluminación):** Suave, cálida, envolvente. Sombras sutiles.
*   **S (Sensación):** Confianza, poder tranquilo, sofisticación.
*   **E (Estilo):** Retrato editorial cinematográfico high-end.
*   **M (Composición):** Plano medio/retrato. Eye-level, centrado.
*   **P (Post):** Tonos cálidos, contraste suave, nitidez alta.
        ', 'Portrait', NULL, NULL, 'intermediate', '/images/prompts/elegance-redefined-confidence.png', '{
  "title": "Retrato sofisticado — Mujer en traje navy con presencia elegante",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer elegante y poised con apariencia sofisticada.",
      "vestimenta": {
        "outfit": "Traje entallado color navy (azul marino).",
        "estilo": "Formal, profesional, de alta elegancia."
      },
      "expresion": "Mirada seria e intensa, transmitiendo seguridad.",
      "detalle_piel": "Textura realista y natural, acabado editorial."
    },
    "E_Entorno": {
      "escena": "Ambiente sereno con surroundings cálidos y refinados.",
      "fondo": "Contexto suave que complementa la elegancia del sujeto.",
      "objetivo": "Resaltar la figura y su narrativa de poder."
    },
    "A_Accion_Postura": {
      "pose": "Postura firme, centrada y segura.",
      "lenguaje_corporal": "Elegancia contenida, actitud de liderazgo.",
      "mirada": "Directa o ligeramente desviada con intención narrativa."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación suave y cálida.",
      "caracteristicas": "Luz envolvente que define el traje y los contornos faciales.",
      "sombras": "Sutiles, contribuyendo a una atmósfera premium."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Confianza, poder tranquilo, sofisticación.",
      "tono": "Narrativa elegante y profesional con fuerza interior."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato editorial cinematográfico de alta gama.",
      "acabado": "Elegante, limpio, moderno.",
      "detalle": "Énfasis en texturas del traje y presencia del sujeto."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio o retrato profesional.",
      "angulo": "Eye-level neutral para autoridad y cercanía.",
      "encuadre": "Composición centrada y balanceada."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos cálidos balanceados con contraste suave.",
      "nitidez": "Alta nitidez en rostro y traje.",
      "acabado_final": "Retrato contemporáneo que transmite elegancia y poder."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('b6204195-3fac-480c-847a-eab7a8151142', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('a36d0dbb-0139-46be-8ffc-527159049217', 'prompt', 'Retrato chiaroscuro — Belleza rubia platino con couture floral', 'whispers-elegance-floral-dreamscape', 'Retrato editorial chiaroscuro de belleza rubia con couture floral.', '
# Framework REAISEMP (Human)

*   **R (Render):** Belleza rubia platino impactante. Couture floral delicada. Piel ultra-realista.
*   **E (Entorno):** Fondo oscuro minimalista, pétalos flotando.
*   **A (Postura):** Serena, delicada. Mirada emocional y sensible.
*   **I (Iluminación):** Chiaroscuro dramático, contraste fuerte, luz direccional.
*   **S (Sensación):** Delicado, emocional, etéreo, poético.
*   **E (Estilo):** Retrato editorial cinematográfico de alta costura.
*   **M (Composición):** Close-up/Plano medio. Centrado con elementos flotantes.
*   **P (Post):** Tonos cinematográficos, contraste suave en piel, nitidez 8K.
        ', 'Portrait', NULL, NULL, 'intermediate', '/images/prompts/whispers-elegance-floral-dreamscape.png', '{
  "title": "Retrato chiaroscuro — Belleza rubia platino con couture floral",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer de belleza impactante con cabello rubio platino.",
      "identidad_visual": "Rostro elegante y emocional, estética de alta costura.",
      "vestimenta": {
        "outfit": "Couture floral delicada, diseño artístico y refinado."
      },
      "detalle_piel": "Textura de piel natural, ultra-realista.",
      "calidad": "Ultra-realistic 8K portrait rendering con fidelidad extrema."
    },
    "E_Entorno": {
      "fondo": "Minimalista y oscuro, diseñado para enfatizar el claroscuro.",
      "elementos": "Pétalos flotando suavemente alrededor del sujeto.",
      "escena": "Ambiente de estudio artístico con atmósfera emocional."
    },
    "A_Accion_Postura": {
      "pose": "Postura serena, delicada, estilo editorial de alta moda.",
      "expresion": "Emoción suave y contemplativa, mirada cargada de sensibilidad.",
      "dinamica": "Pétalos suspendidos agregan movimiento poético."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación dramática estilo chiaroscuro.",
      "caracteristicas": "Contraste fuerte entre luces suaves y sombras profundas.",
      "efecto": "Rostro esculpido por luz direccional, atmósfera cinematográfica."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Delicado, emocional, etéreo.",
      "tono": "Alta moda poética con tensión visual suave."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato editorial cinematográfico de alta costura.",
      "detalle": "Couture floral, pétalos flotantes, atmósfera oscura elegante.",
      "calidad": "Ultra-realismo 8K con acabados premium tipo revista."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato close-up a plano medio editorial.",
      "angulo": "Eye-level ligeramente estilizado.",
      "encuadre": "Sujeto centrado con espacio para elementos flotantes."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos cinematográficos con contraste suave en piel.",
      "nitidez": "Alta definición en rostro, flores, pétalos y tela.",
      "acabado_final": "Ultra-realistic 8K fashion portrait con mood chiaroscuro refinado."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a36d0dbb-0139-46be-8ffc-527159049217', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('b9061963-3f2f-494f-8ad2-7a1fb5c426a5', 'prompt', 'Elegance in the Snow: A Portrait of Winter Wonder', 'elegance-snow-winter-wonder', 'Girl with an umbrella in a snowy landscape with penguins.', 'Amidst a serene snowy landscape, a girl stands poised with an umbrella, radiating confidence. Penguins wander nearby, enhancing the enchanting, tranquil vibe of this winter scene.', 'Portrait', NULL, NULL, 'intermediate', 'https://files.promptgather.io/7552015b7eecfde57b726cf9ac37a947_thumb_1762912195432.jpg', 'Amidst a serene snowy landscape, a girl stands poised with an umbrella, radiating confidence. Penguins wander nearby, enhancing the enchanting, tranquil vibe of this winter scene.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('b9061963-3f2f-494f-8ad2-7a1fb5c426a5', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('17cbe527-97a4-4b81-84be-c0a54d241b3e', 'prompt', 'Sunlit Serenity: A Moment in Time', 'sunlit-serenity-moment-in-time', 'Golden morning light on a calm expression.', 'Golden morning light spills through window blinds, softly illuminating her calm expression. This cinematic portrait captures the beauty of tranquility, with delicate shadows enhancing her thoughtful gaze.', 'Portrait', NULL, NULL, 'intermediate', 'https://files.promptgather.io/463f7e65b390a238afc692740dad2f9b_thumb_1762912192697.jpg', 'Golden morning light spills through window blinds, softly illuminating her calm expression. This cinematic portrait captures the beauty of tranquility, with delicate shadows enhancing her thoughtful gaze.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('17cbe527-97a4-4b81-84be-c0a54d241b3e', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('dc18e351-46c5-400c-8de2-cdd7e93eb447', 'prompt', 'Neon Noir Portrait — Digital Rebellion', 'urban-shadows-hackers-realm', 'Retrato cyberpunk neo-noir con estética de rebelión digital.', '
# Framework REAISEMP

*   **R (Render):** Figura femenina intensa, piel húmeda, expresión determinada.
*   **E (Entorno):** Ciudad nocturna con neón, calles mojadas, arquitectura futurista.
*   **A (Acción):** Postura firme y desafiante, mirada directa sostenida.
*   **I (Iluminación):** Neón nocturno urbano, reflejos de colores saturados en la lluvia.
*   **S (Sensación):** Rebelión, misterio, subversión digital.
*   **E (Estilo):** Neon-noir cyberpunk, texturas mojadas fotorrealistas.
*   **M (Composición):** Plano medio centrado, profundidad urbana.
*   **P (Post):** Paleta fría con acentos neón ácidos, contraste alto, look rebelde.
        ', 'Cyberpunk', NULL, NULL, 'intermediate', '/images/prompts/neon-noir-rebellion.jpg', '{
  "title": "Neon Noir Portrait — Digital Rebellion",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Figura femenina con rasgos definidos y expresivos, piel realista con reflejos húmedos por la lluvia.",
      "expresion": "Intensa y determinada, mirada firme cargada de propósito.",
      "coherencia": "Identidad facial consistente, proporciones realistas, presencia fuerte."
    },
    "E_Entorno": {
      "fondo": "Ciudad nocturna empapada de luces neón.",
      "ambientacion": "Entorno urbano futurista con estética cyberpunk.",
      "elementos_clave": "Calles mojadas, reflejos de neón, arquitectura densa."
    },
    "A_Accion_Postura": {
      "pose": "De pie, ligeramente adelantada en el encuadre.",
      "lenguaje_corporal": "Postura firme, actitud desafiante y rebelde.",
      "mirada": "Directa a cámara o ligeramente lateral, manteniendo tensión narrativa."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación nocturna urbana.",
      "caracteristicas": "Luces neón de colores intensos reflejadas en la lluvia, contrastes marcados y brillos húmedos."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Misterio, rebelión, determinación.",
      "tono": "Neo-noir, cyberpunk, subversivo."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato cinematográfico cyberpunk.",
      "texturas": "Superficies mojadas, piel húmeda, neón difuso.",
      "nivel_realismo": "Fotorrealista con estética futurista."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio.",
      "angulo": "Ángulo neutro o ligeramente bajo.",
      "encuadre": "Composición centrada con profundidad urbana al fondo."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta fría con acentos neón saturados (azules, magentas, verdes).",
      "contraste": "Alto.",
      "acabado": "Look cinematográfico oscuro con atmósfera rebelde y digital."
    }
  },
  "final_prompt": "Cinematic cyberpunk neon-noir portrait of a rebellious woman with wet skin, intense determined expression. Night city background drenched in neon rain, wet streets. High contrast colorful neon lighting reflections. Photorealistic 8K, cold palette with acid green and magenta accents, digital rebellion atmosphere. --ar 16:9"
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('dc18e351-46c5-400c-8de2-cdd7e93eb447', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('dc18e351-46c5-400c-8de2-cdd7e93eb447', '23e74b4b-008a-4a0d-870b-f8297beba9c9') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('e2e8142a-e680-468f-81bb-f8328518cc6e', 'prompt', 'Cinematic Subway Portrait — Longing and Reflection', 'shadows-longing-subway-story', 'Retrato cinematográfico en el metro, cargado de anhelo y reflexión.', '
# Framework REAISEMP

*   **R (Render):** Hombre adulto, rasgos definidos, mirada profunda y pensativa.
*   **E (Entorno):** Estación de metro subterránea, eco visual, luces artificiales.
*   **A (Acción):** Sosteniendo un papel arrugado (promesa rota), postura contenida.
*   **I (Iluminación):** Luces duras del metro, sombras marcadas.
*   **S (Sensación):** Soledad, anhelo, anticipación pesada.
*   **E (Estilo):** Retrato narrativo urbano, fotorrealista emocional.
*   **M (Composición):** Plano medio, ángulo neutro, espacio negativo.
*   **P (Post):** Paleta fría desaturada, acentos verdosos, look cinematográfico.
        ', 'Cinematic', NULL, NULL, 'intermediate', '/images/prompts/subway-longing.jpg', '{
  "title": "Cinematic Subway Portrait — Longing and Reflection",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Hombre adulto con rasgos definidos y naturales, piel realista con textura visible.",
      "expresion": "Cargada de anticipación y reflexión, mirada profunda y pensativa.",
      "vestuario": "Gabardina (trench coat) oscura, clásica y atemporal.",
      "coherencia": "Identidad facial consistente, proporciones realistas, sin exageración estilística."
    },
    "E_Entorno": {
      "fondo": "Estación de metro subterránea.",
      "ambientacion": "Espacio urbano cerrado con eco, sensación de vacío y tránsito constante.",
      "elementos_clave": "Arquitectura del metro, túneles, luces artificiales."
    },
    "A_Accion_Postura": {
      "pose": "De pie o ligeramente inclinado, cuerpo contenido.",
      "lenguaje_corporal": "Postura tensa pero controlada, reflejo de espera y duda.",
      "accion": "Sosteniendo un papel arrugado como símbolo de una promesa rota.",
      "mirada": "Dirigida hacia abajo o hacia el vacío, fuera de cámara."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación artificial urbana.",
      "caracteristicas": "Luces duras del metro creando sombras marcadas y contrastes dramáticos."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Soledad, anhelo, anticipación pesada.",
      "tono": "Melancólico, introspectivo, cinematográfico."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato cinematográfico urbano narrativo.",
      "texturas": "Superficies frías del metro, tela del abrigo con detalle visible.",
      "nivel_realismo": "Fotorrealista con carga emocional."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio.",
      "angulo": "Ángulo neutro o ligeramente bajo.",
      "encuadre": "Composición que deja espacio negativo para enfatizar soledad."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta fría y desaturada con acentos amarillos o verdosos del metro.",
      "contraste": "Medio-alto.",
      "acabado": "Look cinematográfico urbano con énfasis narrativo."
    }
  },
  "final_prompt": "Cinematic urban portrait of a middle-aged man in a dark trench coat, deep pensive expression, holding a crumpled paper. Underground subway station background with tunnels and artificial lights. High contrast harsh artificial lighting. Photorealistic 8K, cold desaturated palette with greenish accents, melancholic atmosphere. --ar 16:9"
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e2e8142a-e680-468f-81bb-f8328518cc6e', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('6b3a89f7-a196-433a-87ce-4bae4aac9cb5', 'prompt', 'Golden Hour', 'golden-hour', 'Retrato poético al atardecer, soledad en pensamiento.', '
# Framework REAISEMP

*   **R (Render):** Mujer joven, rasgos naturales, textura de piel realista, mirada introspectiva.
*   **E (Entorno):** Exterior al atardecer, luz cálida en el horizonte.
*   **A (Acción):** Postura relajada y quieta, mirada fuera de cámara, pausa en el tiempo.
*   **I (Iluminación):** Luz natural de sunset, sombras suaves que danzan en el rostro.
*   **S (Sensación):** Soledad, melancolía suave, intimidad emocional.
*   **E (Estilo):** Lifestyle cinematográfico, fotorrealista con sensibilidad artística.
*   **M (Composición):** Primer plano íntimo, composición centrada.
*   **P (Post):** Tonos dorados cálidos, contraste suave, look delicado.
        ', 'Cinematic', NULL, NULL, 'intermediate', '/images/prompts/golden-hour.jpg', '{
  "title": "Poetic Sunset Portrait — Solitude in Thought",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Mujer joven con rasgos suaves y naturales, piel realista con textura visible.",
      "expresion": "Pensativa, introspectiva, mirada cargada de emoción contenida.",
      "coherencia": "Identidad facial consistente, proporciones realistas, sin estilización excesiva."
    },
    "E_Entorno": {
      "fondo": "Entorno exterior al atardecer.",
      "ambientacion": "Escenario tranquilo y silencioso que acompaña el momento introspectivo.",
      "elementos_clave": "Luz cálida del sol bajo en el horizonte."
    },
    "A_Accion_Postura": {
      "pose": "Postura relajada, cuerpo quieto.",
      "lenguaje_corporal": "Quietud contemplativa, sensación de pausa en el tiempo.",
      "mirada": "Dirigida ligeramente fuera de cámara."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación natural de sunset.",
      "caracteristicas": "Luz cálida lateral creando sombras suaves que danzan sobre el rostro."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Soledad, reflexión, melancolía suave.",
      "tono": "Poético, íntimo, emocional."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato cinematográfico lifestyle.",
      "texturas": "Piel natural, transiciones suaves de luz y sombra.",
      "nivel_realismo": "Fotorrealista con sensibilidad artística."
    },
    "M_Composicion_Camara": {
      "plano": "Primer plano o plano medio.",
      "angulo": "Ángulo neutro.",
      "encuadre": "Composición íntima centrada en el rostro."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos cálidos dorados con sombras suaves.",
      "contraste": "Suave.",
      "acabado": "Look cinematográfico delicado y emocional."
    }
  },
  "final_prompt": "Cinematic lifestyle portrait of a young woman with soft natural features, pensive and introspective expression. Outdoor sunset setting with warm low horizon light. Natural sunset lighting creating dancing soft shadows on face. Photorealistic 8K, golden warm tones, soft contrast, delicate emotional atmosphere. --ar 16:9"
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('6b3a89f7-a196-433a-87ce-4bae4aac9cb5', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('e110bd71-c611-43e9-892a-0642a9b4b2b8', 'prompt', 'Power Portrait — Teal Smoke Authority', 'teal-smoke-authority-power', 'Retrato de poder cinematográfico con humo teal y estética editorial.', '
# Framework REAISEMP

*   **R (Render):** Figura femenina elegante, rasgos definidos, expresión de confianza silenciosa.
*   **E (Entorno):** Espacio minimalista oscuro, humo en movimiento creando profundidad.
*   **A (Acción):** Postura firme y erguida, control total del espacio.
*   **I (Iluminación):** Luz cinematográfica suave, halo teal difuso a través de la neblina.
*   **S (Sensación):** Confianza, autoridad, misterio elegante.
*   **E (Estilo):** Retrato de poder editorial, fotorrealista, texturas de traje definidas.
*   **M (Composición):** Plano medio a tres cuartos, ángulo bajo de autoridad, formato 16:9.
*   **P (Post):** Paleta oscura con acentos teal, look sofisticado y limpio.
        ', 'Cinematic', NULL, NULL, 'intermediate', '/images/prompts/teal-smoke-authority.jpg', '{
  "title": "Power Portrait — Teal Smoke Authority (16:9)",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Figura femenina con rasgos definidos y elegantes, estructura facial equilibrada, piel realista con acabado editorial pulido.",
      "expresion": "Segura y dominante, confianza silenciosa.",
      "vestuario": "Traje negro a medida con líneas limpias y corte impecable.",
      "coherencia": "Identidad visual consistente, proporciones realistas."
    },
    "E_Entorno": {
      "fondo": "Espacio oscuro envuelto en humo en movimiento.",
      "ambientacion": "Escenario minimalista y abstracto que enfatiza liderazgo.",
      "elementos_clave": "Neblina/smoke creando capas de profundidad."
    },
    "A_Accion_Postura": {
      "pose": "De pie, postura firme y erguida.",
      "lenguaje_corporal": "Control total del espacio.",
      "mirada": "Directa al frente, presencia autoritaria."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación cinematográfica suave.",
      "caracteristicas": "Luz teal difusa atravesando el humo, halo envolvente con sombras controladas."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Confianza, autoridad, misterio.",
      "tono": "Elegante, poderoso, cinematográfico."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato cinematográfico de poder con estética editorial.",
      "texturas": "Tela del traje bien definida; humo etéreo.",
      "nivel_realismo": "Fotorrealista."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio a tres cuartos.",
      "angulo": "Ligeramente bajo para reforzar autoridad.",
      "encuadre": "Formato horizontal 16:9, sujeto dominante centrado con espacio negativo lateral."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta oscura con acentos teal suaves.",
      "contraste": "Medio.",
      "acabado": "Look limpio y sofisticado con atmósfera envolvente.",
      "branding_conceptual": "La presencia visual comunica la esencia de liderazgo asociada a Grok Imagine."
    }
  },
  "final_prompt": "Cinematic power portrait of an elegant woman in a tailored black suit, confident and dominant expression. Dark minimalist background with swirling teal smoke and mist. Soft diffuse cinematic lighting, teal halo effect. Photorealistic 8K, editorial aesthetic, high contrast, sophisticated atmosphere. --ar 16:9"
}', NULL, NULL, TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e110bd71-c611-43e9-892a-0642a9b4b2b8', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e110bd71-c611-43e9-892a-0642a9b4b2b8', '39b84df0-b2fc-4187-87ba-d6dd2b217bed') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('1899b88e-ddb5-4695-83a4-2ba055ac932e', 'prompt', 'Cyberpunk Cinematic Portrait — The Choice', 'shadows-authority-cyberpunk-portrait', 'Retrato cinematográfico de alta autoridad en una realidad simulada.', '
# Framework REAISEMP

*   **R (Render):** Mujer adulta, rostro exacto de la usuaria, expresión enigmática y autoritaria, gafas de sol redondas.
*   **E (Entorno):** Habitación oscura minimalista, cascadas de código digital verde descendiendo por las paredes.
*   **A (Acción):** Sentada en sillón ornamentado, manos extendidas hacia adelante (gesto de decisión), mirada firme.
*   **I (Iluminación):** Dramática cinematográfica, reflejos verdes del código digital, sombras profundas.
*   **S (Sensación):** Tensión, misterio, autoridad absoluta.
*   **E (Estilo):** Hyper-realista cyberpunk, gabardina oscura sobre traje estructurado.
*   **M (Composición):** Plano medio/tres cuartos, ángulo frontal bajo para enfatizar autoridad.
*   **P (Post):** Paleta oscura con acentos verdes intensos, contraste alto, look 8K de alto impacto.
        ', 'Cyberpunk', NULL, NULL, 'advanced', '/images/prompts/cyberpunk-the-choice.jpg', '{
  "title": "Cyberpunk Cinematic Portrait — The Choice",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Mujer adulta utilizando el rostro exacto de la usuaria, preservando perfectamente sus rasgos faciales, proporciones, textura de piel, expresiones naturales y peinado original.",
      "expresion": "Enigmática, compuesta y autoritaria.",
      "accesorios": "Gafas de sol redondas distintivas.",
      "coherencia": "Identidad facial fija y consistente, sin alteraciones ni estilización no deseada."
    },
    "E_Entorno": {
      "fondo": "Habitación oscura y minimalista con estética casi estéril.",
      "elementos_clave": "Cascadas de código digital verde descendiendo por las paredes o proyectadas en el espacio.",
      "ambientacion": "Entorno que evoca una realidad simulada de inspiración cyberpunk."
    },
    "A_Accion_Postura": {
      "pose": "Sentada en un sillón oscuro, grande y ornamentado.",
      "lenguaje_corporal": "Postura intencional y poderosa, control total del espacio.",
      "accion": "Ambas manos extendidas hacia adelante, gesto simbólico de decisión.",
      "mirada": "Firme y dominante, dirigida hacia el espectador."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación dramática cinematográfica.",
      "caracteristicas": "Luz direccional que crea sombras profundas, resaltando el rostro y la expresión, con reflejos verdes provenientes del código digital."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Tensión, misterio, autoridad.",
      "tono": "Cinematográfico, cyberpunk, serio y poderoso."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato cinematográfico hyper-realista con estética cyberpunk.",
      "vestuario": "Gabardina oscura sobre un traje estructurado y elegante.",
      "texturas": "Materiales realistas en ropa, piel y mobiliario.",
      "nivel_realismo": "Ultra-realista."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio a plano tres cuartos.",
      "angulo": "Ángulo frontal ligeramente bajo para enfatizar autoridad.",
      "encuadre": "Formato vertical 3:4, sujeto dominante en el centro del encuadre."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta oscura con acentos verdes intensos.",
      "contraste": "Alto, con negros profundos.",
      "acabado": "Look cinematográfico de alto impacto.",
      "calidad": {
        "resolucion": "Ultra-realistic 8K",
        "estilo": "Cyberpunk cinematic",
        "iluminacion": "Dramatic shadowed"
      }
    }
  },
  "final_prompt": "Cyberpunk Cinematic Portrait, Adult woman with highly detailed facial features [exact identity], wearing distinctive round sunglasses, enigmatic and authoritative expression. Sitting in a large ornate dark armchair, both hands extended forward in a symbolic gesture of choice. Background is a dark minimalist room with cascading green digital code on walls. Dramatic cinematic lighting with green highlights, deep shadows. Ultra-realistic 8K, dark trench coat, high contrast, Matrix-inspired simulation aesthetic. --ar 3:4"
}', NULL, NULL, TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1899b88e-ddb5-4695-83a4-2ba055ac932e', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1899b88e-ddb5-4695-83a4-2ba055ac932e', '23e74b4b-008a-4a0d-870b-f8297beba9c9') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('a1cbda5f-b627-44c9-88a4-6b0ce982c4a3', 'prompt', 'Conceptual Juxtaposition Portrait — Geisha Between Worlds', 'geisha-dual-existence-conceptual', 'Retrato conceptual que divide el mundo de una geisha entre lo urbano y lo natural.', '
# Framework REAISEMP

*   **R (Render):** Figura de geisha simbólica, rasgos delicados, expresión serena y contemplativa.
*   **E (Entorno):** Composición dividida: Lado urbano (arquitectura moderna rígida) vs Lado natural (vegetación exuberante).
*   **A (Acción):** Postura estática centrada, equilibrio meditativo entre dos realidades.
*   **I (Iluminación):** Luz fría estructurada (urbano) vs Luz cálida vibrante (natural).
*   **S (Sensación):** Dualidad, tensión poética entre progreso y naturaleza.
*   **E (Estilo):** Arte conceptual, semi-realista, fuerte narrativa visual.
*   **M (Composición):** Plano medio frontal, composición simétrica que enfatiza la división.
*   **P (Post):** Color grading contrastado, estilo editorial simbólico, contraste alto.
        ', 'Conceptual', NULL, NULL, 'advanced', '/images/prompts/geisha-dual-existence.jpg', '{
  "title": "Conceptual Juxtaposition Portrait — Geisha Between Worlds",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Figura femenina inspirada en una geisha, con rasgos delicados y expresión serena, identidad tratada de forma simbólica y artística más que literal.",
      "expresion": "Calma, introspectiva, contemplativa.",
      "coherencia": "El rostro permanece reconocible y equilibrado a pesar de la división visual conceptual."
    },
    "E_Entorno": {
      "fondo": "Composición dividida en dos mundos contrastantes.",
      "lado_urbano": "Estructuras geométricas, arquitectura moderna, formas rígidas y urbanas.",
      "lado_natural": "Vegetación exuberante, colores vivos, naturaleza orgánica y salvaje.",
      "ambientacion": "Contraste visual entre modernidad y naturaleza."
    },
    "A_Accion_Postura": {
      "pose": "Postura estática y centrada, símbolo de equilibrio entre dos realidades.",
      "lenguaje_corporal": "Quietud deliberada, presencia meditativa.",
      "mirada": "Neutral o suavemente dirigida al frente, reforzando la dualidad."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación conceptual diferenciada por zonas.",
      "caracteristicas": "Luz fría y estructurada en el lado urbano, luz cálida y vibrante en el lado natural."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Dualidad, reflexión, tensión entre progreso y naturaleza.",
      "tono": "Poético, simbólico, contemplativo."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Arte conceptual con narrativa visual fuerte.",
      "tecnicas": "Juxtaposición visual, división simbólica del retrato.",
      "texturas": "Contraste entre superficies geométricas duras y elementos orgánicos vivos.",
      "nivel_realismo": "Semi-realista conceptual."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio o primer plano.",
      "angulo": "Ángulo frontal.",
      "encuadre": "Composición simétrica que enfatiza la división entre ambos mundos."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta contrastante entre tonos fríos urbanos y colores saturados naturales.",
      "contraste": "Alto entre ambas mitades.",
      "acabado": "Estilo artístico editorial con fuerte carga simbólica."
    }
  },
  "final_prompt": "Conceptual juxtaposition portrait of a symbolic geisha figure, delicate features, serene expression. The scene is perfectly split vertically: left side features cold blue rigid modern urban architecture, right side features warm vibrant organic exuberant jungle vegetation. Symmetrical composition, centered subject. Conceptual art style, high contrast between cold and warm lighting, 8K resolution, symbolic editorial aesthetic. --ar 16:9"
}', NULL, NULL, TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a1cbda5f-b627-44c9-88a4-6b0ce982c4a3', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a1cbda5f-b627-44c9-88a4-6b0ce982c4a3', 'd341c67c-fe6c-43af-8590-1177e2116b28') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('7b343c55-0f5d-4e99-8ad3-af386c7b62f2', 'prompt', 'Cinematic Music Studio Portrait — Creative Focus', 'music-studio-creative-focus', 'Retrato cinematográfico de una artista en su estudio, capturando la esencia de la creación musical.', '
# Framework REAISEMP

*   **R (Render):** Artista femenina, rasgos naturales y expresivos, profundamente concentrada.
*   **E (Entorno):** Estudio musical en penumbra, guitarras y controladores MIDI de fondo.
*   **A (Acción):** Interactuando con el equipo, postura inmersiva y enfocada.
*   **I (Iluminación):** Luz mínima direccional, creando sombras profundas y atmósfera íntima.
*   **S (Sensación):** Pasión, introspección, proceso creativo auténtico.
*   **E (Estilo):** Fotorrealista, estilo lifestyle cinematográfico.
*   **M (Composición):** Plano medio, composición equilibrada entre artista e instrumentos.
*   **P (Post):** Tonos cálidos y oscuros, acabado analógico, contraste medio-alto.
        ', 'Creative', NULL, NULL, 'intermediate', '/images/prompts/music-studio-creative.jpg', '{
  "title": "Cinematic Music Studio Portrait — Creative Focus",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Artista femenina con rasgos naturales y expresivos, piel realista, identidad clara y auténtica.",
      "expresion": "Concentrada, inspirada, profundamente conectada con el sonido.",
      "coherencia": "Rasgos consistentes, apariencia realista sin estilización excesiva."
    },
    "E_Entorno": {
      "fondo": "Estudio musical en penumbra.",
      "elementos_clave": "Guitarras visibles, controladores MIDI y equipo musical rodeando a la artista.",
      "ambientacion": "Espacio creativo íntimo y funcional, cargado de potencial sonoro."
    },
    "A_Accion_Postura": {
      "pose": "De pie o sentada frente al equipo musical.",
      "lenguaje_corporal": "Postura enfocada, inmersa en el proceso creativo.",
      "accion": "Interactuando o preparándose para usar guitarras y controladores MIDI.",
      "mirada": "Dirigida hacia los instrumentos o ligeramente hacia abajo, en concentración."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación mínima y direccional.",
      "caracteristicas": "Un único punto de luz que revela parcialmente el rostro y los instrumentos, dejando el resto del espacio en sombra."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Creatividad, pasión, introspección.",
      "tono": "Íntimo, artístico, inspirador."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato cinematográfico lifestyle en entorno musical.",
      "texturas": "Materiales reales de instrumentos, superficies mates y metálicas.",
      "nivel_realismo": "Fotorrealista."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio.",
      "angulo": "Ángulo neutro o ligeramente lateral.",
      "encuadre": "Composición que integra a la artista y los instrumentos sin saturar la escena."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos oscuros y cálidos con acentos suaves.",
      "contraste": "Medio-alto, enfatizando luces y sombras.",
      "acabado": "Look cinematográfico íntimo con sensación analógica."
    }
  },
  "final_prompt": "Cinematic lifestyle portrait of a female music artist, natural and expressive features, deeply focused and connected to sound. Setting is a dim music studio with visible guitars and MIDI controllers in the background. Minimal directional lighting casting soft shadows. Photorealistic 8K, warm analog color grading, intimate creative atmosphere. --ar 16:9"
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('7b343c55-0f5d-4e99-8ad3-af386c7b62f2', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('7b343c55-0f5d-4e99-8ad3-af386c7b62f2', '24739888-0e50-41f4-82c8-9ea609fc457e') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('a87f71e2-dfdb-4065-897d-55b479847002', 'prompt', 'Winter Tranquility Portrait — Snowfall Elegance', 'winter-snowfall-elegance', 'Retrato invernal que captura la elegancia y la paz de la nieve al caer.', '
# Framework REAISEMP

*   **R (Render):** Figura femenina elegante, traje de piel lujoso, expresión serena y calmada.
*   **E (Entorno):** Exterior invernal, caída de nieve suave, atmósfera silenciosa.
*   **A (Acción):** Postura erguida y relajada, presencia serena ante la cámara.
*   **I (Iluminación):** Luz natural difusa de invierno, envolvente y suave.
*   **S (Sensación):** Paz, quietud, elegancia fría y poética.
*   **E (Estilo):** Fotorrealista con toque artístico, retrato cinematográfico.
*   **M (Composición):** Plano medio centrado, los copos de nieve envuelven al sujeto.
*   **P (Post):** Paleta fría (blancos y grises azulados), contraste suave, look etéreo.
        ', 'Cinematic', NULL, NULL, 'intermediate', '/images/prompts/winter-tranquility.jpg', '{
  "title": "Winter Tranquility Portrait — Snowfall Elegance",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Figura femenina con rasgos serenos y elegantes, piel natural con tonos fríos suaves, identidad visual calmada y armónica.",
      "expresion": "Tranquila, contemplativa, con una sensación de quietud interior.",
      "vestuario": "Abrigo de piel lujoso que envuelve la figura con presencia y sofisticación.",
      "coherencia": "Proporciones realistas y apariencia refinada, sin exageración."
    },
    "E_Entorno": {
      "fondo": "Escenario exterior invernal con caída de nieve.",
      "ambientacion": "Paisaje frío y silencioso que refuerza la sensación de calma.",
      "elementos_clave": "Copos de nieve visibles flotando alrededor del sujeto."
    },
    "A_Accion_Postura": {
      "pose": "Postura erguida y relajada.",
      "lenguaje_corporal": "Calma absoluta, presencia serena.",
      "mirada": "Suave, dirigida al frente o ligeramente fuera de cámara."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación natural difusa de invierno.",
      "caracteristicas": "Luz suave y envolvente que resalta la textura del abrigo y los copos de nieve."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Paz, quietud, elegancia fría.",
      "tono": "Poético, invernal, contemplativo."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato cinematográfico de invierno.",
      "texturas": "Detalle visible en la piel, el abrigo de piel y los copos de nieve.",
      "nivel_realismo": "Fotorrealista con toque artístico."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio.",
      "angulo": "Ángulo neutro.",
      "encuadre": "Composición centrada con nieve envolviendo al sujeto."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta fría con blancos suaves y grises azulados.",
      "contraste": "Suave.",
      "acabado": "Look limpio y etéreo que refuerza la tranquilidad invernal."
    }
  },
  "final_prompt": "Cinematic winter portrait of an elegant woman in a luxurious fur coat, serene and contemplative expression. Natural soft cold skin tones. Falling snow in a quiet winter landscape background. Diffuse natural winter lighting. Photorealistic 8K, cold color palette with soft whites and blueish grays, ethereal atmosphere. --ar 16:9"
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a87f71e2-dfdb-4065-897d-55b479847002', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a87f71e2-dfdb-4065-897d-55b479847002', '8a796d72-abff-4a35-8a51-a538bc4abdaa') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('6b33a28d-2ac7-4b08-8d20-cf2da2efc011', 'prompt', 'Retrato Fashion de Cuerpo Completo con MacBook Pro - Femenino', 'fashion-fullbody-macbook-pro', 'Retrato fashion de cuerpo completo con MacBook Pro, estilo editorial minimalista.', '
# Framework REAISEMP

*   **R (Render):** Rostro natural con maquillaje suave, expresión neutra profesional. Cabello rojo suelto.
*   **E (Entorno):** Fondo neutro apagado estilo marketing, ambientación minimalista.
*   **A (Acción):** De pie manipulando un MacBook Pro, gestualidad natural y profesional.
*   **I (Iluminación):** Studio soft light, sombras mínimas.
*   **S (Sensación):** Productividad, modernidad, tono marketing clean.
*   **E (Estilo):** Editorial minimalista, paleta neutra elegante.
*   **M (Composicion):** Full body, ángulo neutral, modelo centrada.
*   **P (Post):** Tonos suaves, claridad alta.
        ', 'Fashion', NULL, NULL, 'intermediate', '/images/prompts/fashion-macbook-pro.png', '{
  "title": "Retrato Fashion de Cuerpo Completo con MacBook Pro - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rostro natural con maquillaje suave.",
      "expresion": "Neutra profesional.",
      "cabello": "Rojo, suelto.",
      "coherencia": "Medidas corporales exactas según prompt original."
    },
    "E_Entorno": {
      "fondo": "Neutro apagado estilo marketing.",
      "ambientacion": "Minimalista."
    },
    "A_Accion_Postura": {
      "pose": "De pie manipulando un MacBook Pro.",
      "gestualidad": "Natural y profesional."
    },
    "I_Iluminacion": {
      "tipo": "Studio soft light.",
      "caracteristicas": "Sombras mínimas."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Productividad, modernidad.",
      "tono": "Marketing clean."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Editorial minimalista.",
      "color": "Paleta neutra elegante."
    },
    "M_Composicion_Camara": {
      "plano": "Full body.",
      "angulo": "Neutral.",
      "encuadre": "Modelo centrada."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos suaves.",
      "claridad": "Alta."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('6b33a28d-2ac7-4b08-8d20-cf2da2efc011', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('6b33a28d-2ac7-4b08-8d20-cf2da2efc011', '179bf2c6-0bb3-43a3-8654-673782bc8069') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('6b33a28d-2ac7-4b08-8d20-cf2da2efc011', 'ca4fe112-b77c-4c5f-868d-163de854f9dc') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('1f902e83-e0a2-42a8-84c2-0b674d4bea9a', 'prompt', 'Retrato B&W de Pareja de Alta Costura (Espalda con Espalda) - Femenino', 'couture-couple-bw', 'Retrato B&W de pareja de alta costura, espalda con espalda, estilo editorial.', '
# Framework REAISEMP

*   **R (Render):** Expresión intensa y elegante, seria, editorial. Cabello con ondas largas estilizadas. Estilo con blazer negro y crop top.
*   **E (Entorno):** Telón gris claro minimalista, ambientación moda de estudio en B&W.
*   **A (Acción):** Espalda con espalda junto al hombre, mirada directa intensa a cámara.
*   **I (Iluminación):** Luz controlada suave, contraste elegante B&W.
*   **S (Sensación):** Fuerza, elegancia, sofisticación, tono editorial clásico.
*   **E (Estilo):** Monocromo elegante, blancos puros, negros profundos, textura alta definición fashion.
*   **M (Composición):** Mitad de cuerpo, altura de ojos, ambos sujetos centrados y simétricos.
*   **P (Post):** B&W de alto contraste, claridad alta y precisa.
        ', 'Fashion', NULL, NULL, 'intermediate', '/images/prompts/couture-couple-bw.png', '{
  "title": "Retrato B&W de Pareja de Alta Costura (Espalda con Espalda) - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Expresión intensa y elegante.",
      "expresion": "Seria, editorial.",
      "cabello": "Ondas largas estilizadas.",
      "estilo": "Blazer negro con crop top."
    },
    "E_Entorno": {
      "fondo": "Telón gris claro minimalista.",
      "ambientacion": "Moda de estudio en B&W."
    },
    "A_Accion_Postura": {
      "pose": "Espalda con espalda junto al hombre.",
      "mirada": "Directa intensa a cámara."
    },
    "I_Iluminacion": {
      "tipo": "Luz controlada suave.",
      "caracteristicas": "Contraste elegante B&W."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Fuerza, elegancia, sofisticación.",
      "tono": "Editorial clásico."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Monocromo elegante.",
      "color": "Blancos puros, negros profundos.",
      "textura": "Alta definición fashion."
    },
    "M_Composicion_Camara": {
      "plano": "Mitad de cuerpo.",
      "angulo": "Altura de ojos.",
      "encuadre": "Ambos sujetos centrados y simétricos."
    },
    "P_Postproduccion": {
      "color_grading": "B&W de alto contraste.",
      "claridad": "Alta y precisa."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1f902e83-e0a2-42a8-84c2-0b674d4bea9a', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1f902e83-e0a2-42a8-84c2-0b674d4bea9a', '179bf2c6-0bb3-43a3-8654-673782bc8069') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1f902e83-e0a2-42a8-84c2-0b674d4bea9a', '61a3c407-bef7-4162-820a-bfca8dbdd1fd') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('98f9a556-422c-4cf8-8cdb-54dfe99737a0', 'prompt', 'Retrato Íntimo de Pareja en Sala Moderna - Femenino', 'intimate-couple-modern', 'Retrato íntimo de pareja en sala moderna, cálido y elegante.', '
# Framework REAISEMP

*   **R (Render):** Perfil delicado, mirada suave, expresión cálida y afectuosa. Cabello largo con ondas suaves. Top y falda negros.
*   **E (Entorno):** Sala moderna desenfocada con tonos beige, ambientación elegante y cálida.
*   **A (Acción):** De pie al lado del hombre, mano en su cintura. Mirada hacia cámara.
*   **I (Iluminación):** Luz difusa desde la izquierda, sombras delicadas y cálidas.
*   **S (Sensación):** Conexión emocional, tono retrato cálido editorial.
*   **E (Estilo):** Lifestyle cálido y moderno, paleta beige, negro, marrón suave.
*   **M (Composición):** Plano medio, ángulo altura de ojos.
*   **P (Post):** Color grading cálido elegante, claridad alta y suave.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/intimate-couple-modern.png', '{
  "title": "Retrato Íntimo de Pareja en Sala Moderna - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Perfil delicado, mirada suave.",
      "expresion": "Cálida, afectuosa.",
      "cabello": "Largo con ondas suaves.",
      "indumentaria": "Top y falda negros."
    },
    "E_Entorno": {
      "fondo": "Sala moderna desenfocada con tonos beige.",
      "ambientacion": "Elegante y cálida."
    },
    "A_Accion_Postura": {
      "pose": "De pie al lado del hombre, mano en su cintura.",
      "mirada": "Hacia cámara."
    },
    "I_Iluminacion": {
      "tipo": "Luz difusa desde la izquierda.",
      "caracteristicas": "Sombras delicadas y cálidas."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Conexión emocional.",
      "tono": "Retrato cálido editorial."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Lifestyle cálido y moderno.",
      "color": "Paleta cálida: beige, negro, marrón suave."
    },
    "M_Composicion_Camara": {
      "plano": "Medio.",
      "angulo": "Altura de ojos."
    },
    "P_Postproduccion": {
      "color_grading": "Cálido elegante.",
      "claridad": "Alta y suave."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('98f9a556-422c-4cf8-8cdb-54dfe99737a0', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('98f9a556-422c-4cf8-8cdb-54dfe99737a0', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('5e042803-0f1d-4137-8f48-a3b391d5222c', 'prompt', 'Retrato Navideño con Caja de Regalo y Letrero Neón - Femenino', 'christmas-gift-neon', 'Retrato navideño alegre con caja de regalo gigante y letrero neón.', '
# Framework REAISEMP

*   **R (Render):** Sonrisa amplia, maquillaje navideño suave. Cabello rubio largo, suelto. Minivestido rojo brillante.
*   **E (Entorno):** Árboles navideños con luces cálidas. Letrero ''Merry Christmas'' en neón blanco.
*   **A (Acción):** Sentada dentro de una caja roja gigante. Manos abiertas, postura alegre.
*   **I (Iluminación):** Luz cálida festiva, bokeh navideño brillante.
*   **S (Sensación):** Alegría festiva, tono comercial navideño.
*   **E (Estilo):** Fotografía publicitaria navideña, rojos, verdes, dorados, brillo suave y cálido.
*   **M (Composición):** Medium shot, ligero picado desde arriba.
*   **P (Post):** Calidez navideña, claridad alta, bokeh expandido.
        ', 'Holiday', NULL, NULL, 'beginner', '/images/prompts/christmas-gift-neon.jpg', '{
  "title": "Retrato Navideño con Caja de Regalo y Letrero Neón - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Sonrisa amplia, maquillaje navideño suave.",
      "cabello": "Rubio largo, suelto.",
      "indumentaria": "Minivestido rojo brillante."
    },
    "E_Entorno": {
      "fondo": "Árboles navideños con luces cálidas.",
      "elementos": "Letrero ''Merry Christmas'' en neón blanco."
    },
    "A_Accion_Postura": {
      "pose": "Sentada dentro de una caja roja gigante.",
      "gestualidad": "Manos abiertas, postura alegre."
    },
    "I_Iluminacion": {
      "tipo": "Luz cálida festiva.",
      "caracteristicas": "Bokeh navideño brillante."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Alegría festiva.",
      "tono": "Comercial navideño."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía publicitaria navideña.",
      "color": "Rojos, verdes, dorados.",
      "textura": "Brillo suave y cálido."
    },
    "M_Composicion_Camara": {
      "plano": "Medium shot.",
      "angulo": "Ligero picado desde arriba."
    },
    "P_Postproduccion": {
      "color_grading": "Calidez navideña.",
      "claridad": "Alta.",
      "efectos": "Bokeh expandido."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5e042803-0f1d-4137-8f48-a3b391d5222c', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5e042803-0f1d-4137-8f48-a3b391d5222c', '62debbdf-d74f-4103-88e1-2327c1dd79f1') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5e042803-0f1d-4137-8f48-a3b391d5222c', 'a786e011-fb3c-4dec-804d-66510df1dd79') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('5c2c1406-a4bb-4098-8c8b-987d1612be09', 'prompt', 'Retrato Íntimo y Cálido Navideño - Femenino', 'christmas-intimate-warm', 'Retrato navideño íntimo y cálido con iluminación tenue.', '
# Framework REAISEMP

*   **R (Render):** Mirada pensativa, maquillaje suave. Cabello rubio largo natural. Suéter rojo navideño.
*   **E (Entorno):** Árbol navideño oscuro con bokeh dorado. Ambientación cálida e íntima.
*   **A (Acción):** Manos cerca del rostro en gesto contemplativo. Mirada hacia arriba.
*   **I (Iluminación):** Luz cálida tenue, sombras suaves e íntimas.
*   **S (Sensación):** Nostalgia y calidez emocional, tono íntimo navideño.
*   **E (Estilo):** Retrato navideño tipo editorial, rojos profundos y dorados oscuros.
*   **M (Composición):** Medium close-up, ángulo neutral.
*   **P (Post):** Color grading cálido profundo, claridad moderada para efecto suave.
        ', 'Holiday', NULL, NULL, 'intermediate', '/images/prompts/christmas-intimate-warm.png', '{
  "title": "Retrato Íntimo y Cálido Navideño - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Mirada pensativa, maquillaje suave.",
      "cabello": "Rubio largo natural.",
      "indumentaria": "Suéter rojo navideño."
    },
    "E_Entorno": {
      "fondo": "Árbol navideño oscuro con bokeh dorado.",
      "ambientacion": "Cálida e íntima."
    },
    "A_Accion_Postura": {
      "pose": "Manos cerca del rostro en gesto contemplativo.",
      "mirada": "Hacia arriba."
    },
    "I_Iluminacion": {
      "tipo": "Luz cálida tenue.",
      "caracteristicas": "Sombras suaves e íntimas."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Nostalgia y calidez emocional.",
      "tono": "Íntimo navideño."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato navideño tipo editorial.",
      "color": "Rojos profundos y dorados oscuros."
    },
    "M_Composicion_Camara": {
      "plano": "Medium close-up.",
      "angulo": "Neutral."
    },
    "P_Postproduccion": {
      "color_grading": "Cálido profundo.",
      "claridad": "Moderada para efecto suave."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5c2c1406-a4bb-4098-8c8b-987d1612be09', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5c2c1406-a4bb-4098-8c8b-987d1612be09', '62debbdf-d74f-4103-88e1-2327c1dd79f1') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('5c2c1406-a4bb-4098-8c8b-987d1612be09', '8a825204-ae80-4bb3-8a48-7f029f852268') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('9d620c87-d4d4-43d9-85ce-a081e01c7ef0', 'prompt', 'Selfie Casual en Gimnasio con Estilo de Teléfono - Femenino', 'gym-selfie-casual', 'Selfie casual en gimnasio con estilo de teléfono, natural y espontáneo.', '
# Framework REAISEMP

*   **R (Render):** Natural, sin retoque. Cabello peinado casual, expresión espontánea. Outfit deportivo girly en negro y rosa.
*   **E (Entorno):** Gimnasio real, ligeramente desordenado. Ambientación casual auténtica.
*   **A (Acción):** Selfie frente al espejo, gestualidad teléfono en mano.
*   **I (Iluminación):** Luz natural suave, sin iluminación profesional.
*   **S (Sensación):** Naturalidad y espontaneidad, tono realista no profesional.
*   **E (Estilo):** Foto de móvil real, colores neutros sin estilización, textura suave típica de cámara de baja calidad.
*   **M (Composición):** Selfie close-up / medio, ángulo vertical espejo, encuadre centrado y casual.
*   **P (Post):** Edición mínima, contraste natural, nitidez moderada/baja.
        ', 'Lifestyle', NULL, NULL, 'beginner', '/images/prompts/gym-selfie-casual.jpg', '{
  "title": "Selfie Casual en Gimnasio con Estilo de Teléfono - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Natural, sin retoque.",
      "cabello": "Peinado casual.",
      "expresion": "Espontánea.",
      "indumentaria": "Outfit deportivo girly en negro y rosa."
    },
    "E_Entorno": {
      "fondo": "Gimnasio real, ligeramente desordenado.",
      "ambientacion": "Casual auténtica."
    },
    "A_Accion_Postura": {
      "pose": "Selfie frente al espejo.",
      "gestualidad": "Teléfono en mano."
    },
    "I_Iluminacion": {
      "tipo": "Luz natural suave.",
      "caracteristicas": "Sin iluminación profesional."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Naturalidad y espontaneidad.",
      "tono": "Realista no profesional."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Foto de móvil real.",
      "color": "Neutros, sin estilización.",
      "textura": "Suavidad típica de cámara de baja calidad."
    },
    "M_Composicion_Camara": {
      "plano": "Selfie close-up / medio.",
      "angulo": "Vertical espejo.",
      "encuadre": "Centrado y casual."
    },
    "P_Postproduccion": {
      "edicion": "Mínima.",
      "contraste": "Natural.",
      "nitidez": "Moderada/baja."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9d620c87-d4d4-43d9-85ce-a081e01c7ef0', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9d620c87-d4d4-43d9-85ce-a081e01c7ef0', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9d620c87-d4d4-43d9-85ce-a081e01c7ef0', '41d8c9ef-d8ae-483d-87ec-9cf6792c0e74') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9d620c87-d4d4-43d9-85ce-a081e01c7ef0', '51cd2e03-9be8-42d1-8d84-2a56f8077243') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('063fa9a0-8501-40ee-86cf-a066785b3029', 'prompt', 'Escena Estilo Jennifer’s Body en Sofá de Terciopelo - Femenino', 'jennifers-body-style', 'Escena estilo Jennifer''s Body en sofá de terciopelo, rebelde y oscura.', '
# Framework REAISEMP

*   **R (Render):** Expresiva y traviesa, lengua afuera en pose divertida. Peinado suelto de fiesta. Baby tee corta y mini falda baja.
*   **E (Entorno):** Sala oscura con luces neón y velas. Ambientación oscura, mística y cinematográfica.
*   **A (Acción):** Sentada junto a otra chica en el sofá. Interacción divertida con el encendedor.
*   **I (Iluminación):** Luz de velas + neón, reflejos cálidos en rostros.
*   **S (Sensación):** Risa, energía rebelde, tono oscuro juvenil.
*   **E (Estilo):** Cine oscuro 50mm f/1.4 realista, neón rosa, amarillo cálido, alta nitidez nocturna.
*   **M (Composición):** Plano medio, altura de ojos, enfoque en rostros y llama.
*   **P (Post):** Color grading oscuro-neón vibrante, claridad alta, glow del fuego.
        ', 'Cinematic', NULL, NULL, 'intermediate', '/images/prompts/jennifers-body-style.jpg', '{
  "title": "Escena Estilo Jennifer’s Body en Sofá de Terciopelo - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Expresiva y traviesa.",
      "cabello": "Peinado suelto de fiesta.",
      "indumentaria": "Baby tee corta y mini falda baja.",
      "expresion": "Lengua afuera en pose divertida."
    },
    "E_Entorno": {
      "fondo": "Sala oscura con luces neón y velas.",
      "ambientacion": "Oscura, mística y cinematográfica."
    },
    "A_Accion_Postura": {
      "pose": "Sentada junto a otra chica en el sofá.",
      "gestualidad": "Interacción divertida con el encendedor."
    },
    "I_Iluminacion": {
      "tipo": "Luz de velas + neón.",
      "caracteristicas": "Reflejos cálidos en rostros."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Risa, energía rebelde.",
      "tono": "Oscuro juvenil."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Cine oscuro 50mm f/1.4 realista.",
      "color": "Neón rosa, amarillo cálido.",
      "textura": "Alta nitidez nocturna."
    },
    "M_Composicion_Camara": {
      "plano": "Medio.",
      "angulo": "Altura de ojos.",
      "enfoque": "Rostros y llama."
    },
    "P_Postproduccion": {
      "color_grading": "Oscuro-neón vibrante.",
      "claridad": "Alta.",
      "efectos": "Glow del fuego."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('063fa9a0-8501-40ee-86cf-a066785b3029', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('063fa9a0-8501-40ee-86cf-a066785b3029', '39b84df0-b2fc-4187-87ba-d6dd2b217bed') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('063fa9a0-8501-40ee-86cf-a066785b3029', 'a786e011-fb3c-4dec-804d-66510df1dd79') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('830b3f84-8060-4db7-8594-4616834b4bb2', 'prompt', 'Selfie en Auto Rosa con Estética Neon Horror - Femenino', 'neon-horror-drive-thru', 'Selfie casual en un drive-thru de terror con estética neón vibrante.', '
# Framework REAISEMP

*   **R (Render):** Risa espontánea, expresión alegre. Cabello suelto natural. Cropped hoodie y mini falda.
*   **E (Entorno):** Drive-thru de terror con neón multicolor. Michael Myers al fondo.
*   **A (Acción):** Selfie frontal inclinada, sosteniendo una papa frita.
*   **I (Iluminación):** Neón exterior filtrado, reflejos multicolores.
*   **S (Sensación):** Juego, humor, vibra Gen Z.
*   **E (Estilo):** Realismo iPhone nocturno, colores rosa, azul, púrpura.
*   **M (Composición):** Selfie close-up, ángulo ligeramente alto.
*   **P (Post):** Neón saturado, ruido ligero.
        ', 'Cinematic', NULL, NULL, 'intermediate', '/images/prompts/neon-horror-drive-thru.jpg', '{
  "title": "Selfie en Auto Rosa con Estética Neon Horror - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Risa espontánea, expresión alegre.",
      "cabello": "Suelto, natural.",
      "indumentaria": "Cropped hoodie y mini falda casual."
    },
    "E_Entorno": {
      "fondo": "Drive-thru de terror con neón multicolor.",
      "elementos": "Michael Myers sosteniendo malteada."
    },
    "A_Accion_Postura": {
      "pose": "Selfie frontal inclinada.",
      "gestualidad": "Sosteniendo una papa frita y diciendo ''cheese''."
    },
    "I_Iluminacion": {
      "tipo": "Neón exterior filtrado al auto.",
      "caracteristicas": "Reflejos multicolores."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Juego, humor, vibra Gen Z.",
      "tono": "Casual con toque slasher cómico."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Realismo estilo iPhone nocturno.",
      "color": "Rosa, azul, púrpura."
    },
    "M_Composicion_Camara": {
      "plano": "Selfie close-up.",
      "angulo": "Ligeramente alto.",
      "encuadre": "Casual y espontáneo."
    },
    "P_Postproduccion": {
      "color_grading": "Neón saturado.",
      "claridad": "Media acorde a móvil.",
      "ruido": "Ligero."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('830b3f84-8060-4db7-8594-4616834b4bb2', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('830b3f84-8060-4db7-8594-4616834b4bb2', '39b84df0-b2fc-4187-87ba-d6dd2b217bed') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('830b3f84-8060-4db7-8594-4616834b4bb2', 'a786e011-fb3c-4dec-804d-66510df1dd79') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('830b3f84-8060-4db7-8594-4616834b4bb2', 'fef86d52-82e9-4fbd-8420-6a315ef0ad03') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('beda3314-8c36-4de9-88a3-00b8b7042450', 'prompt', 'Selfie Gritty en Baño de Gasolinera 90s con Freddy Krueger - Femenino', 'gritty-bathroom-freddy', 'Selfie gritty en baño de gasolinera estilo 90s con Freddy Krueger.', '
# Framework REAISEMP

*   **R (Render):** Expresión despreocupada haciendo burbuja de chicle. Top rojo halter, mini falda y medias de red.
*   **E (Entorno):** Baño sucio estilo 90s, azulejos viejos. Freddy Krueger en puerta del cubículo.
*   **A (Acción):** Frente al espejo, formando burbuja de chicle.
*   **I (Iluminación):** Fluorescente parpadeante, sombras duras y tonos verdosos.
*   **S (Sensación):** Tensión mezclada con humor irreverente, gritty horror 90s.
*   **E (Estilo):** Calidad baja y ruda, desaturado y sucio, ruido marcado.
*   **M (Composición):** Selfie en espejo, frontal.
*   **P (Post):** Tonos verdes fríos, claridad baja, ruido alto.
        ', 'Cinematic', NULL, NULL, 'intermediate', '/images/prompts/gritty-bathroom-freddy.jpg', '{
  "title": "Selfie Gritty en Baño de Gasolinera 90s con Freddy Krueger - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Expresión despreocupada haciendo burbuja de chicle.",
      "cabello": "Despeinado casual.",
      "indumentaria": "Top rojo halter, mini falda y medias de red."
    },
    "E_Entorno": {
      "fondo": "Baño sucio estilo 90s, azulejos viejos.",
      "elementos": "Freddy Krueger en puerta del cubículo."
    },
    "A_Accion_Postura": {
      "pose": "Frente al espejo.",
      "gestualidad": "Formando burbuja de chicle."
    },
    "I_Iluminacion": {
      "tipo": "Fluorescente parpadeante.",
      "caracteristicas": "Sombras duras y tonos verdosos."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Tensión mezclada con humor irreverente.",
      "tono": "Gritty horror 90s."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Calidad baja y ruda.",
      "color": "Desaturado y sucio.",
      "textura": "Ruido marcado."
    },
    "M_Composicion_Camara": {
      "plano": "Selfie en espejo.",
      "angulo": "Frontal.",
      "encuadre": "Ajustado al centro."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos verdes fríos.",
      "claridad": "Baja.",
      "ruido": "Alto."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('beda3314-8c36-4de9-88a3-00b8b7042450', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('beda3314-8c36-4de9-88a3-00b8b7042450', '39b84df0-b2fc-4187-87ba-d6dd2b217bed') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('beda3314-8c36-4de9-88a3-00b8b7042450', 'fef86d52-82e9-4fbd-8420-6a315ef0ad03') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('beda3314-8c36-4de9-88a3-00b8b7042450', '34f7e52b-c3b9-421c-8194-317539437e92') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('13ddd38a-6317-405e-8470-e5c9be411b26', 'prompt', 'Selfie Nocturna en Estacionamiento con Jason Voorhees - Femenino', 'night-parking-jason', 'Selfie nocturna casual en estacionamiento con Jason Voorhees.', '
# Framework REAISEMP

*   **R (Render):** Expresión natural relajada. Cabello rubio liso largo. Hoodie negro corto, mini falda roja, calcetas altas.
*   **E (Entorno):** Estacionamiento con luces y trick-or-treaters. Jason sosteniendo calabaza pequeña.
*   **A (Acción):** Selfie elevada ligeramente, posición casual de noche.
*   **I (Iluminación):** Luz ambiental nocturna de estacionamiento, sombras suaves, colores urbanos.
*   **S (Sensación):** Casualidad nocturna, Halloween urbano realista.
*   **E (Estilo):** Estética iPhone nocturna, colores fríos con acentos cálidos.
*   **M (Composición):** Selfie medio, ángulo ligeramente alto, encuadre desenfadado.
*   **P (Post):** Color grading urban night, claridad media-baja, ruido moderado.
        ', 'Cinematic', NULL, NULL, 'intermediate', '/images/prompts/night-parking-jason.jpg', '{
  "title": "Selfie Nocturna en Estacionamiento con Jason Voorhees - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Expresión natural relajada.",
      "cabello": "Rubio liso largo.",
      "indumentaria": "Hoodie negro corto, mini falda roja, calcetas altas."
    },
    "E_Entorno": {
      "fondo": "Estacionamiento con luces y trick-or-treaters.",
      "elementos": "Jason sosteniendo calabaza pequeña."
    },
    "A_Accion_Postura": {
      "pose": "Selfie elevada ligeramente.",
      "gestualidad": "Posición casual de noche."
    },
    "I_Iluminacion": {
      "tipo": "Luz ambiental nocturna de estacionamiento.",
      "caracteristicas": "Sombras suaves, colores urbanos."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Casualidad nocturna.",
      "tono": "Halloween urbano realista."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Estética iPhone nocturna.",
      "color": "Colores fríos con acentos cálidos."
    },
    "M_Composicion_Camara": {
      "plano": "Selfie medio.",
      "angulo": "Ligeramente alto.",
      "encuadre": "Desenfadado."
    },
    "P_Postproduccion": {
      "color_grading": "Urban night.",
      "claridad": "Media-baja.",
      "ruido": "Moderado."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('13ddd38a-6317-405e-8470-e5c9be411b26', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('13ddd38a-6317-405e-8470-e5c9be411b26', '39b84df0-b2fc-4187-87ba-d6dd2b217bed') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('13ddd38a-6317-405e-8470-e5c9be411b26', 'fef86d52-82e9-4fbd-8420-6a315ef0ad03') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('13ddd38a-6317-405e-8470-e5c9be411b26', 'c2a6e71c-4977-4fa5-8413-af8c13ae3ba8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('c6598147-8c0e-48ed-8244-2c43f1fe3823', 'prompt', 'Fashion Editorial con Suéter Geométrico - Femenino', 'fashion-geometric-sweater', 'Editorial de moda con suéter geométrico y fondo naranja vibrante.', '
# Framework REAISEMP

*   **R (Render):** Rasgos femeninos definidos, expresión seria elegante. Melena larga o bob estilizado. Gafas redondas negro-dorado. Suéter geométrico con cuello naranja grueso.
*   **E (Entorno):** Fondo naranja sólido vibrante, ambientación moda editorial moderna.
*   **A (Acción):** Mirada hacia el lado con postura segura, cuello y hombros relajados.
*   **I (Iluminación):** Luz de estudio brillante, sombras suaves, piel muy definida.
*   **S (Sensación):** Confianza y estilo, moda futurista minimalista.
*   **E (Estilo):** High-fashion editorial, paleta vibrante naranja/azul/rojo, ropa con textura clara.
*   **M (Composición):** Retrato medio, ángulo altura de ojos.
*   **P (Post):** Saturación moderada y contrastes fuertes, claridad alta.
        ', 'Fashion', NULL, NULL, 'intermediate', '/images/prompts/fashion-geometric-sweater.jpg', '{
  "title": "Fashion Editorial con Suéter Geométrico - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Rasgos femeninos definidos, expresión seria elegante.",
      "cabello": "Melena larga o bob estilizado.",
      "accesorios": "Gafas redondas negro-dorado.",
      "indumentaria": "Suéter geométrico con cuello naranja grueso."
    },
    "E_Entorno": {
      "fondo": "Naranja sólido vibrante.",
      "ambientacion": "Moda editorial moderna."
    },
    "A_Accion_Postura": {
      "pose": "Mirada hacia el lado con postura segura.",
      "gestualidad": "Cuello y hombros relajados."
    },
    "I_Iluminacion": {
      "tipo": "Luz de estudio brillante.",
      "caracteristicas": "Sombras suaves, piel muy definida."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Confianza y estilo.",
      "tono": "Moda futurista minimalista."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "High-fashion editorial.",
      "color": "Paleta vibrante naranja/azul/rojo.",
      "textura": "Ropa con textura clara."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato medio.",
      "angulo": "Altura de ojos."
    },
    "P_Postproduccion": {
      "color_grading": "Saturación moderada y contrastes fuertes.",
      "claridad": "Alta."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c6598147-8c0e-48ed-8244-2c43f1fe3823', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c6598147-8c0e-48ed-8244-2c43f1fe3823', '179bf2c6-0bb3-43a3-8654-673782bc8069') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c6598147-8c0e-48ed-8244-2c43f1fe3823', 'd164f509-a838-43ac-8459-2c7dad280356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('d2568a11-22f4-4af2-8641-38671b817728', 'prompt', 'Retrato Femenino con Suéter Navideño y Gafas Oscuras - Femenino', 'fashion-christmas-sweater', 'Editorial navideño de moda con suéter y gafas oscuras.', '
# Framework REAISEMP

*   **R (Render):** Expresión seria y elegante. Cabello rubio largo o castaño. Suéter navideño rojo/blanco/verde. Gafas oscuras redondas.
*   **E (Entorno):** Fondo rojo profundo con luces de navidad borrosas. Ambientación Studio Christmas editorial.
*   **A (Acción):** De pie mirando al lado, postura calmada.
*   **I (Iluminación):** Luz cálida suave, enfatiza textura del suéter.
*   **S (Sensación):** Elegancia festiva, editorial navideño serio.
*   **E (Estilo):** Alta moda navideña, rojos profundos y verdes suaves.
*   **M (Composición):** Medium shot, ángulo frontal leve.
*   **P (Post):** Color grading navideño cálido, claridad alta.
        ', 'Fashion', NULL, NULL, 'intermediate', '/images/prompts/fashion-christmas-sweater.jpg', '{
  "title": "Retrato Femenino con Suéter Navideño y Gafas Oscuras - Femenino",
  "framework_REAISEMP": {
    "R_Render_del_Avatar": {
      "descripcion_facial": "Expresión seria y elegante.",
      "cabello": "Rubio largo o castaño.",
      "indumentaria": "Suéter navideño rojo/blanco/verde.",
      "accesorios": "Gafas oscuras redondas."
    },
    "E_Entorno": {
      "fondo": "Rojo profundo con luces de navidad borrosas.",
      "ambientacion": "Studio Christmas editorial."
    },
    "A_Accion_Postura": {
      "pose": "De pie mirando al lado.",
      "gestualidad": "Postura calmada."
    },
    "I_Iluminacion": {
      "tipo": "Luz cálida suave.",
      "caracteristicas": "Enfatiza textura del suéter."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Elegancia festiva.",
      "tono": "Editorial navideño serio."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Alta moda navideña.",
      "color": "Rojos profundos y verdes suaves."
    },
    "M_Composicion_Camara": {
      "plano": "Medium shot.",
      "angulo": "Frontal leve."
    },
    "P_Postproduccion": {
      "color_grading": "Navideño cálido.",
      "claridad": "Alta."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.819Z', '2026-08-29T17:52:58.819Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d2568a11-22f4-4af2-8641-38671b817728', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d2568a11-22f4-4af2-8641-38671b817728', '179bf2c6-0bb3-43a3-8654-673782bc8069') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d2568a11-22f4-4af2-8641-38671b817728', '62debbdf-d74f-4103-88e1-2327c1dd79f1') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d2568a11-22f4-4af2-8641-38671b817728', '372551a3-37df-4c0f-83c4-cbda4664b331') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('fc04a2b2-514b-431a-80ec-bba3b9a5aa84', 'prompt', 'Professional Studio Profile Photo — Business Casual Portrait', 'professional-studio-profile', 'Retrato profesional de estudio business casual.', '
# Framework REAISEMP (Human)

*   **R (Render):** Identidad y rasgos clave mantenidos. Sonrisa cálida, profesional. Piel natural. Cabello detallado.
*   **E (Entorno):** Fondo sólido neutro de estudio #141414.
*   **A (Acción):** Plano chest-up, espacio negativo superior. Postura abierta y accesible.
*   **I (Iluminación):** Studio soft light, envolvente y cálida. Catchlight sutil.
*   **S (Sensación):** Confianza, calidez profesional, cercanía.
*   **E (Estilo):** Retrato corporate high-end. Cardigan charcoal sobre blusa blanca.
*   **M (Composición):** Ángulo ligeramente alto. Lente 85mm f/1.8. Poca profundidad de campo.
*   **P (Post):** Detalle nítido. Color grading cinemático limpio.
        ', 'Professional', NULL, NULL, 'intermediate', '/images/prompts/professional-studio-profile.png', '{
  "title": "Professional Studio Profile Photo — Business Casual Portrait",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Mantener exactamente la estructura facial, identidad y rasgos clave de la persona en la imagen de entrada.",
      "expresion": "Sonrisa cálida, acogedora y profesional.",
      "mirada": "Contacto visual directo a la cámara.",
      "piel_y_detalle": "Textura de piel natural y realista, sin suavizado excesivo.",
      "cabello": "Detalles visibles en hebras individuales, apariencia natural."
    },
    "E_Entorno": {
      "fondo": "Fondo sólido neutro de estudio en color #141414.",
      "escena": "Fotografía de estudio profesional, sin elementos distractores."
    },
    "A_Accion_Postura": {
      "encuadre": "Plano desde el pecho hacia arriba (chest-up).",
      "composicion": "Espacio negativo amplio sobre la cabeza, sin recortar el cabello.",
      "postura": "Actitud abierta, accesible y confiable."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación de estudio suave, brillante y difusa.",
      "caracteristicas": "Luz envolvente que ilumina el rostro con calidez.",
      "detalle": "Catchlight sutil en los ojos.",
      "sombras": "Sombras mínimas y suaves para un look airy."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Confianza, calidez profesional, cercanía.",
      "tono": "Reliable, approachable, contemporary corporate portrait."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato profesional high-end estilo LinkedIn / corporate studio.",
      "vestimenta": {
        "outfit": "Cardigan business casual en charcoal sobre blusa blanca."
      },
      "calidad": "Alta resolución, acabado pulido y moderno."
    },
    "M_Composicion_Camara": {
      "angulo": "Toma ligeramente desde un ángulo alto.",
      "lente": "85mm f/1.8",
      "profundidad_de_campo": "Muy poca profundidad, foco exquisito en los ojos.",
      "bokeh": "Fondo suavemente desenfocado, bokeh elegante."
    },
    "P_Postproduccion": {
      "nitidez": "Detalle nítido en tela, ojos, cabello y piel.",
      "color_grading": "Cinemático limpio con calidez sutil y tonos balanceados.",
      "acabado_final": "Imagen contemporánea, profesional y lista para perfil corporativo."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fc04a2b2-514b-431a-80ec-bba3b9a5aa84', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fc04a2b2-514b-431a-80ec-bba3b9a5aa84', 'f0edcde4-94ab-4cbb-8324-2ed5aeff4225') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fc04a2b2-514b-431a-80ec-bba3b9a5aa84', '3a8d5248-3879-4712-8352-03076643a662') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fc04a2b2-514b-431a-80ec-bba3b9a5aa84', '8565d138-edcd-4651-8f31-56e4afe693aa') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('898466fe-5ad5-4dd0-8fc6-96ea87ae7ab2', 'prompt', 'Editorial 3x3 Grid — Intimate Minimalist Portrait Series', 'editorial-3x3-grid', 'Serie de retratos editoriales íntimos y minimalistas en formato grid 3x3.', '
# Framework REAISEMP (Human)

*   **R (Render):** Identidad 100% igual a referencia. Vestimenta minimalista (navy/marfil). Piel realista. Cabello natural expresivo.
*   **E (Entorno):** Estudio limpio minimalista beige suave. Sin distracciones.
*   **A (Acción):** Grid 3x3 con 9 tomas distintas (ojos, manos, perfiles, etc.). Ángulos tight headshots.
*   **I (Iluminación):** Gran luz difusa frontal-derecha. Reflector fill. Rim sutil. Sombras suaves.
*   **S (Sensación):** Íntimo, introspectivo, minimalista. Quietud emocional.
*   **E (Estilo):** Fotografía editorial minimalista high-end. Muted grade. Un panel B&W. Grano sutil.
*   **M (Composición):** Grid 3x3 alineado. Lentes 35mm/50mm/85mm. DOF delgada.
*   **P (Post):** Tonos apagados beige studio clean. Contraste suave. Grano cinemático.
        ', 'Photography', NULL, NULL, 'advanced', '/images/prompts/editorial-3x3-grid.png', '{
  "title": "Editorial 3x3 Grid — Intimate Minimalist Portrait Series",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "El personaje debe coincidir con la referencia al 100%, preservando rostro, estructura facial y rasgos clave.",
      "vestimenta": {
        "top": "Camisa ligera azul navy oscuro",
        "bottom": "Pantalones marfil",
        "detalle": "Descalzo para simplicidad cruda"
      },
      "detalle_piel": "Textura realista y natural, sin suavizado excesivo.",
      "cabello": "Cabello con caída natural, usado como elemento expresivo en algunos encuadres."
    },
    "E_Entorno": {
      "escena": "Estudio limpio minimalista en tono beige suave.",
      "fondo": "Uniforme y sin objetos distractores.",
      "props": "Tela o cortina usada sutilmente como marco editorial."
    },
    "A_Accion_Postura": {
      "formato": "Grid editorial 3x3 con 9 tomas distintas.",
      "paneles": {
        "shot_1": "Extreme close-up de labios y pómulo, mano borrosa cubriendo parcialmente (85mm f/1.8).",
        "shot_2": "Crop ajustado de ojos mirando al lente, reflejo de tira de luz visible (85mm f/2.0).",
        "shot_3": "Retrato close en blanco y negro, mentón apoyado en el puño (50mm f/2.2).",
        "shot_4": "Over-shoulder con cortina borrosa en primer plano enmarcando medio rostro (85mm f/2.0).",
        "shot_5": "Muy frontal con manos superpuestas sobre el rostro, streak de luz cruzando ojos (50mm f/2.5).",
        "shot_6": "Retrato angulado con cabello cayendo sobre los ojos, fondo soft-focus (85mm f/2.2).",
        "shot_7": "Crop de manos tocando mandíbula, ojos fuera de encuadre (50mm f/3.2).",
        "shot_8": "Half-body sentado de lado sobre cubo bajo, cabeza girada lejos, foreground borroso (35mm f/4.5).",
        "shot_9": "Close-up intenso de perfil con gota tipo lágrima, slice de luz cinematográfica (85mm f/1.9)."
      },
      "variacion": "Ángulos mayormente tight headshots con ligeros high/low tilts manteniendo coherencia editorial."
    },
    "I_Iluminacion": {
      "key_light": "Gran luz difusa principal desde frente-derecha.",
      "fill": "Reflector plateado a la izquierda.",
      "rim_light": "Rim sutil desde arriba para separación.",
      "sombras": "Suaves, delicadas, con contraste tonal controlado."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Íntimo, introspectivo, minimalista.",
      "tono": "Editorial character-led con delicadeza emocional y quietud."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía editorial minimalista de alto nivel.",
      "acabado": "Muted grade profesional con contraste suave.",
      "blanco_y_negro": "Un panel incluido como acento artístico.",
      "textura": "Grano cinematográfico sutil."
    },
    "M_Composicion_Camara": {
      "layout": "Grid 3x3 perfectamente alineado.",
      "lentes": [
        "35mm",
        "50mm",
        "85mm"
      ],
      "profundidad_de_campo": "DOF extremadamente delgada en close-ups clave.",
      "captura": "RAW profesional, enfoque preciso en ojos y detalles faciales."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos apagados, beige studio clean, estética contemporánea.",
      "contraste": "Suave y controlado.",
      "grain": "Cinematic subtle grain añadido.",
      "acabado_final": "Serie editorial coherente, emotiva y minimalista lista para revista."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('898466fe-5ad5-4dd0-8fc6-96ea87ae7ab2', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('898466fe-5ad5-4dd0-8fc6-96ea87ae7ab2', 'd164f509-a838-43ac-8459-2c7dad280356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('898466fe-5ad5-4dd0-8fc6-96ea87ae7ab2', 'f17c8880-8ca9-42df-81a4-00d54d66bcb9') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('898466fe-5ad5-4dd0-8fc6-96ea87ae7ab2', '3a8d5248-3879-4712-8352-03076643a662') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('1c93fb69-f6cd-408e-87eb-986e8c42913a', 'prompt', 'Early 2000s Paparazzi Night Shot — Raw Flash Street Portrait', 'early-2000s-paparazzi', 'Retrato callejero nocturno estilo paparazzi de los 2000s con flash duro.', '
# Framework REAISEMP (Human)

*   **R (Render):** Identidad 100% fiel. Mirada fría, distante. Streetwear oversized neutro. Piel textura cruda.
*   **E (Entorno):** Calle urbana nocturna. Teléfono público. Fondo luces desenfocadas.
*   **A (Acción):** En teléfono público, girando hacia cámara. Mano cubriendo parcialmente. Defensivo.
*   **I (Iluminación):** Flash duro directo (paparazzi). Sombras duras.
*   **S (Sensación):** Raw, espontáneo, misterioso. Energía Y2K.
*   **E (Estilo):** Paparazzi 2000s. Lo-fi realista, grainy. Timestamp digital rojo.
*   **M (Composición):** Plano medio/close-up espontáneo. Ángulo snapshot inclinado.
*   **P (Post):** Tonos nocturnos, flash frío. Alto contraste. Grano digital.
        ', 'Photography', NULL, NULL, 'intermediate', '/images/prompts/early-2000s-paparazzi.jpg', '{
  "title": "Early 2000s Paparazzi Night Shot — Raw Flash Street Portrait",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Mantener el rostro 100% fiel a la imagen de referencia, sin alterar estructura facial ni rasgos clave.",
      "expresion": "Mirada fría, distante, emocionalmente desconectada.",
      "estilismo": {
        "ropa": "Streetwear relajado: pantalones wide-leg y top oversized liso en tonos neutros.",
        "accesorios": "Gafas negras simples."
      },
      "detalle_piel": "Textura realista y cruda, sin embellecimiento artificial."
    },
    "E_Entorno": {
      "ubicacion": "Calle urbana nocturna.",
      "elemento_clave": "Teléfono público, con el sujeto tocando el auricular.",
      "fondo": "Luces de autos desenfocadas y ambiente urbano borroso."
    },
    "A_Accion_Postura": {
      "accion": "El sujeto está en un teléfono público, girando hacia la cámara.",
      "pose": "Una mano sobre el receptor del teléfono, cuerpo parcialmente rotado.",
      "lenguaje_corporal": "Defensivo, distante, espontáneo tipo paparazzi."
    },
    "I_Iluminacion": {
      "tipo": "Flash duro directo de cámara (paparazzi).",
      "caracteristicas": "Iluminación agresiva, sombras duras, estética cruda nocturna.",
      "efecto": "Alta intensidad en el rostro con caída rápida hacia el fondo."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Raw, espontáneo, misterioso, distante.",
      "tono": "Energía paparazzi early 2000s, nocturna, urbana."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía paparazzi de principios de los 2000s.",
      "calidad": "Lo-fi realista, ligeramente grainy, imperfecta.",
      "detalle_temporal": "Incluye timestamp digital rojo clásico en la imagen."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio a close-up espontáneo.",
      "angulo": "Captura frontal ligeramente inclinada como snapshot.",
      "profundidad_de_campo": "Fondo desenfocado por movimiento y baja luz nocturna."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos nocturnos urbanos con flash frío/blanco.",
      "contraste": "Alto por el flash.",
      "textura": "Grano sutil tipo cámara digital antigua.",
      "overlay": "Timestamp rojo digital estilo early 2000s.",
      "acabado_final": "Auténtico paparazzi snapshot, crudo y nostálgico."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1c93fb69-f6cd-408e-87eb-986e8c42913a', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1c93fb69-f6cd-408e-87eb-986e8c42913a', '0c12b7c3-d97c-41d8-83fd-d9f94d7e1d0a') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1c93fb69-f6cd-408e-87eb-986e8c42913a', 'dc09f376-c86b-4590-8cb3-43f2d33da56c') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1c93fb69-f6cd-408e-87eb-986e8c42913a', '8c359586-d240-4165-8bbd-db9053f731ec') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('54686c22-3e0c-4671-8201-3253b5ab1156', 'prompt', 'Escena de cine con personajes de videojuegos', 'gaming-cinema-scene', 'Escena cinematográfica hiperrealista en cine con personajes de videojuegos.', '
# Framework REAISEMP (Human)

*   **R (Render):** Identidad fiel. Expresión feliz/emocionada. Piel hiperrealista.
*   **E (Entorno):** Cine oscuro, luces bajas. Múltiples personajes de videojuegos (Mario, DK, Goku, Kratos).
*   **A (Acción):** Sentado/de pie reaccionando con alegría. Interacción natural con personajes.
*   **I (Iluminación):** Cinematográfica oscura. Luz de pantalla. Sombras suaves.
*   **S (Sensación):** Divertido, nostálgico, épico. Energía geek.
*   **E (Estilo):** Hiperrealista cinematográfico. Crossover gamer. Alta definición.
*   **M (Composición):** Plano medio. Eye-level. Fondo semidesenfocado.
*   **P (Post):** Dark cinematic, tonos cálidos, ligero glow.
        ', 'Cinematic', NULL, NULL, 'intermediate', '/images/prompts/gaming-cinema-scene.png', '{
  "title": "Escena de cine con personajes de videojuegos",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "El hombre debe conservar exactamente el rostro y rasgos faciales de la foto proporcionada.",
      "expresion": "Feliz, emocionado, disfrutando el momento.",
      "detalle_piel": "Textura realista, estilo cinematográfico hiperrealista.",
      "cabello_y_apariencia": "Mantener peinado y estructura original sin modificaciones."
    },
    "E_Entorno": {
      "ubicacion": "Interior de un cine oscuro.",
      "ambientacion": "Sala cinematográfica con luces bajas y atmósfera envolvente.",
      "elementos_secundarios": "Presencia de múltiples personajes icónicos de videojuegos alrededor del sujeto."
    },
    "A_Accion_Postura": {
      "accion": "El sujeto está sentado o de pie dentro del cine, reaccionando con alegría.",
      "lenguaje_corporal": "Relajado y contento, como en una experiencia fanboy/fangame.",
      "interaccion": "Los personajes (Mario, Donkey Kong, Goku, Kratos, etc.) llenan el espacio como parte de la escena."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación cinematográfica de cine oscuro.",
      "caracteristicas": "Luz tenue proveniente de la pantalla o luces ambientales.",
      "efecto": "Sombras suaves con reflejos en el rostro para dramatismo y calidez."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Divertido, nostálgico, emocionante.",
      "tono": "Cinemático, fan-service épico, lleno de energía geek."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Shot hiperrealista cinematográfico.",
      "detalle": "Alta definición en rostro y personajes secundarios.",
      "composicion": "Escena rica en elementos visuales sin perder el foco en el sujeto principal.",
      "universo": "Crossover visual de cultura gamer."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio del sujeto con entorno amplio visible.",
      "angulo": "Eye-level estilo escena de película.",
      "profundidad_de_campo": "Fondo parcialmente desenfocado pero personajes reconocibles."
    },
    "P_Postproduccion": {
      "color_grading": "Cinemático oscuro con tonos cálidos y contrastes suaves.",
      "efectos": "Ligero glow de pantalla, atmósfera envolvente.",
      "acabado_final": "Escena épica y emocional lista como still de película."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('54686c22-3e0c-4671-8201-3253b5ab1156', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('54686c22-3e0c-4671-8201-3253b5ab1156', '39b84df0-b2fc-4187-87ba-d6dd2b217bed') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('54686c22-3e0c-4671-8201-3253b5ab1156', '6e4f151f-3670-4f67-8a36-02135c22915c') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('54686c22-3e0c-4671-8201-3253b5ab1156', 'e223660d-3be5-4867-8665-1b1bf6864a7a') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('2f1e38b5-7638-4999-8ae8-9f4b414eaba1', 'prompt', 'Miniatura estilo MrBeast con tema Halloween y expresión de sorpresa', 'mrbeast-halloween-thumbnail', 'Miniatura de YouTube estilo MrBeast con temática de Halloween.', '
# Framework REAISEMP (Human)

*   **R (Render):** Identidad exacta. Sorpresa extrema estilo MrBeast. Rasgos exagerados limpios.
*   **E (Entorno):** Halloween. Calabazas brillantes, fantasmas, casa embrujada. Colores naranja/púrpura.
*   **A (Acción):** Rostro centrado mirando a cámara. Expresión viral abierta.
*   **I (Iluminación):** Iluminación intensa de thumbnail. Luz frontal brillante. Alto contraste.
*   **S (Sensación):** Divertido, spooky, energético. Sensacionalista.
*   **E (Estilo):** Miniatura ultra-realista 8K. Estética marketing viral.
*   **M (Composición):** Horizontal 16:9. Close-up centrado.
*   **P (Post):** Saturación alta, nitidez extrema. Glow ligero.
        ', 'Marketing', NULL, NULL, 'intermediate', '/images/prompts/mrbeast-halloween-thumbnail.jpg', '{
  "title": "Miniatura estilo MrBeast con tema Halloween y expresión de sorpresa",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Mantener exactamente el mismo rostro y peinado masculino de la imagen de referencia.",
      "expresion": "Sorpresa extrema, energía alta, mirada expresiva estilo YouTube thumbnail.",
      "detalle_facial": "Rasgos exageradamente claros pero sin deformar identidad.",
      "estilo": "Facialidad limpia, nítida, altamente reconocible."
    },
    "E_Entorno": {
      "tema": "Halloween",
      "elementos_fondo": [
        "Calabazas brillantes",
        "Fantasmas caricaturescos",
        "Casa embrujada",
        "Efectos spooky decorativos"
      ],
      "paleta": "Colores dominantes naranja y púrpura con alto contraste.",
      "contexto": "Fondo dinámico pero subordinado al rostro."
    },
    "A_Accion_Postura": {
      "pose": "Rostro centrado mirando directamente a cámara.",
      "lenguaje_corporal": "Expresión abierta, dramática y exagerada típica de MrBeast.",
      "actitud": "Entusiasta, impactante, viral."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación intensa de thumbnail estilo MrBeast.",
      "caracteristicas": "Luz brillante frontal con sombras mínimas.",
      "efecto": "Alto contraste para que el rostro resalte inmediatamente."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Divertido, spooky, energético.",
      "tono": "Sensacionalista, entretenido, Halloween pop."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Miniatura YouTube ultra-realista estilo MrBeast.",
      "calidad": "8K, hiperdefinición, colores saturados.",
      "estetica": "Marketing viral, alto impacto visual.",
      "detalles": "Elementos Halloween con look limpio y moderno."
    },
    "M_Composicion_Camara": {
      "formato": "YouTube thumbnail horizontal 16:9.",
      "encuadre": "Close-up del rostro ocupando gran parte del frame.",
      "composicion": "Sujeto centrado con fondo temático dinámico."
    },
    "P_Postproduccion": {
      "color_grading": "Saturación alta y contraste fuerte estilo thumbnail viral.",
      "nitidez": "Extrema nitidez en ojos y expresión.",
      "efectos": "Glow ligero, elementos Halloween resaltados.",
      "acabado_final": "Thumbnail moderno, llamativo, listo para viralidad."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('2f1e38b5-7638-4999-8ae8-9f4b414eaba1', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('2f1e38b5-7638-4999-8ae8-9f4b414eaba1', '6794068b-f704-46d3-8ee8-5f0c84b2ffad') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('2f1e38b5-7638-4999-8ae8-9f4b414eaba1', '50f2c7de-4f4f-4507-8ae8-b4b684982af8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('2f1e38b5-7638-4999-8ae8-9f4b414eaba1', 'c2a6e71c-4977-4fa5-8413-af8c13ae3ba8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('644d235a-b3ca-425e-8864-6120a1277eb8', 'prompt', 'Romantic Collectible Box — Forever Together Chibi Keepsake', 'nano-banana-case-12', 'Figura coleccionable 3D estilo chibi de pareja en caja romántica.', '
# Framework REAISEMP (Object)

*   **R (Render):** Figura chibi 3D. Pareja romántica. Ojos expresivos. Ramo flores blancas.
*   **E (Entorno):** Caja joyero romántica. Ventana skyline pueblo chino. Nubes, pétalos.
*   **A (Acción):** Caja abierta. Pareja mirándose dulcemente. Energía enamorada.
*   **I (Iluminación):** Ambiental cálida suave. Glow delicado.
*   **S (Sensación):** Romántico, cálido, nostálgico, adorable. Keepsake de lujo.
*   **E (Estilo):** Collectible chibi 3D premium. Estética pastel. Detalles dorados.
*   **M (Composición):** Vertical 9:16. Plano medio producto. Caja foco central.
*   **P (Post):** Tonos cálidos pastel. Contraste bajo-medio. Nitidez decorativa.
        ', '3D Design', NULL, NULL, 'intermediate', '/images/prompts/romantic-collectible-box.png', '{
  "title": "Romantic Collectible Box — Forever Together Chibi Keepsake",
  "framework_REAISEMP_Object": {
    "R_Render_del_Objeto": {
      "descripcion_principal": "Figura coleccionable 3D estilo chibi basada en los sujetos de la foto, presentada dentro de una caja romántica tipo joyero portátil.",
      "figuras": {
        "estilo": "Chibi 3D adorable con ojos grandes y expresivos",
        "identidad": "Mantener rasgos reconocibles de la pareja original",
        "personajes": [
          {
            "rol": "Female subject",
            "detalle": "Sostiene un pequeño ramo de flores blancas"
          },
          {
            "rol": "Male partner",
            "detalle": "A su lado, mirando con ternura"
          }
        ],
        "expresion": "Sonrisas cálidas, mirada afectuosa, energía romántica"
      },
      "caja_presentacion": {
        "tipo": "Box coleccionable estilo estuche de joyería",
        "color": "Crema pastel con acentos dorados suaves",
        "grabado_tapa": "Texto: ''FOREVER TOGETHER'' con motivos de estrellas y corazones"
      }
    },
    "E_Entorno": {
      "interior_box_scene": {
        "fondo": "Ventana redonda mostrando un skyline soleado de un pueblo tradicional chino",
        "elementos": [
          "Nubes flotando suavemente",
          "Pétalos suspendidos en el aire"
        ]
      },
      "ambientacion": "Mini escena romántica cálida dentro de la caja",
      "color_scheme": "Paleta armoniosa, elegante y pastel"
    },
    "A_Accion_Presentacion": {
      "presentacion": "Caja abierta revelando una escena romántica en miniatura",
      "pose": "Los dos personajes chibi se miran dulcemente",
      "interaccion": "Energía de pareja enamorada, momento de recuerdo"
    },
    "I_Iluminacion": {
      "tipo": "Iluminación ambiental cálida y suave",
      "caracteristicas": "Luz difusa romántica dentro del estuche",
      "efecto": "Glow delicado que refuerza el tono de lujo y ensueño"
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Romántico, cálido, nostálgico, adorable",
      "tono": "Mini keepsake de lujo, sueño poético y afectuoso"
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Collectible chibi 3D premium con estética romántica pastel",
      "materiales": {
        "figuras": "Acabado suave tipo figura coleccionable",
        "caja": "Textura elegante con detalles dorados delicados"
      },
      "detalles": "Alta definición en ojos brillantes, flores, grabados y decoraciones internas"
    },
    "M_Composicion_Camara": {
      "formato": "Vertical 9:16",
      "plano": "Plano medio de producto con caja abierta y escena interior visible",
      "encuadre": "Caja como foco central, personajes claramente destacados"
    },
    "P_Postproduccion": {
      "color_grading": "Tonos cálidos pastel con acabado premium",
      "contraste": "Bajo-medio para suavidad romántica",
      "acabado_final": "Miniatura de lujo soñadora lista para merchandising o regalo digital",
      "nitidez": "Alta definición en caja, personajes y detalles decorativos"
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('644d235a-b3ca-425e-8864-6120a1277eb8', '6121296b-e11e-4b6b-8bd3-648139c36d37') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('644d235a-b3ca-425e-8864-6120a1277eb8', '9ffafdbb-ef6a-4693-8a9d-3c17860f1ce8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('644d235a-b3ca-425e-8864-6120a1277eb8', '4119e704-b41f-42c2-88e3-9ebb6eecede2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('644d235a-b3ca-425e-8864-6120a1277eb8', '88c53690-97af-4900-83fb-1d38652c8d2e') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('9db2e923-fcdf-4325-8b7a-c42dec25439e', 'prompt', 'Early 2000s Flash Selfie — Cozy Sweater Floor Portrait', 'early-2000s-flash-selfie', 'Selfie cozy Y2K con flash duro, sweater tejido y ambiente hogareño.', '
# Framework REAISEMP (Human)

*   **R (Render):** Mujer joven, rubia, sweater chunky off-shoulder. Piel realista con flash.
*   **E (Entorno):** Sala cozy de noche, chimenea encendida, alfombra faux fur.
*   **A (Postura):** Selfie high-angle desde el piso. Piernas recogidas. Cámara digital visible.
*   **I (Iluminación):** Flash duro frontal (2000s style) + calidez de fuego de fondo.
*   **S (Sensación):** Íntimo, nostálgico, relajado, auténtico.
*   **E (Estilo):** Snapshot digital Y2K, influencers tempranos.
*   **M (Composición):** Vertical 4:5, encuadre cerrado high-angle.
*   **P (Post):** Contraste medio-alto, look digital vintage, glow cálido + flash frío.
        ', 'Photography', NULL, NULL, 'intermediate', '/images/prompts/early-2000s-flash-selfie.jpg', '{
  "title": "Early 2000s Flash Selfie — Cozy Sweater Floor Portrait",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Preservar exactamente el rostro original (preserve_original = true).",
      "sujeto": "Mujer joven (early–mid 20s) tomando una selfie desde un ángulo alto.",
      "expresion": "Mirada suave y ligeramente alluring, cabeza inclinada sutilmente hacia la derecha.",
      "cabello": {
        "color": "Rubio",
        "estilo": "Largo, voluminoso, ondas sueltas, raya lateral"
      },
      "maquillaje": {
        "cejas": "Definidas",
        "ojos": "Winged eyeliner",
        "labios": "Gloss nude natural",
        "piel": "Bronceado suave con textura realista"
      },
      "vestimenta": {
        "outfit": "Vestido tipo sweater chunky cable-knit color crema",
        "detalles": "Off-shoulder exponiendo hombros y clavícula, mangas oversized, tejido grueso visible"
      },
      "calidad": "Ultra-realistic 8K portrait rendering con detalle extremo en piel y textiles."
    },
    "E_Entorno": {
      "escena": "Sala acogedora de noche, estilo lifestyle influencer.",
      "elementos_visibles": [
        "Chimenea con llamas naranjas intensas a la izquierda",
        "Repisa blanca (mantelpiece)",
        "Ventana oscura o puerta de vidrio",
        "Sillón beige al fondo",
        "Piso de madera oscura",
        "Alfombra blanca tipo faux fur"
      ],
      "atmósfera": "Invierno íntimo, relajado, cozy evening vibe."
    },
    "A_Accion_Postura": {
      "accion": "Selfie casual sentada en el piso.",
      "pose": "Piernas recogidas hacia un lado, cuerpo ligeramente encorvado dentro del sweater.",
      "dispositivo": "Cámara compacta digital o smartphone sostenido a brazo extendido con reflejo de flash visible.",
      "lenguaje_corporal": "Íntimo, natural, espontáneo."
    },
    "I_Iluminacion": {
      "tipo": "Estética digital early 2000s con flash duro.",
      "fuentes": [
        "Flash directo de cámara (harsh shadows)",
        "Luz ambiental cálida proveniente del fuego"
      ],
      "efecto": "Contraste fuerte entre piel iluminada por flash y fondo cálido tenue."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Cozy, íntimo, relajado, ligeramente seductor pero natural.",
      "tono": "Lifestyle nostálgico con vibra Y2K digital snapshot."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Selfie hiperrealista tipo cámara digital 2000s.",
      "textura": "On-camera flash, sombras duras, piel real, knit sweater detallado.",
      "acabado": "Influencer realism con sensación auténtica, no editorial pulido.",
      "calidad": "Ultra-realistic 8K con grano sutil de cámara antigua."
    },
    "M_Composicion_Camara": {
      "angulo": "High-angle looking downward.",
      "shot_type": "Close medium shot desde arriba, framing ligeramente off-center.",
      "aspect_ratio": "Vertical 4:5",
      "enfoque": "Nitidez en rostro, ojos y textura del sweater, fondo más suave."
    },
    "P_Postproduccion": {
      "color_grading": "Mezcla de flash frío con glow cálido de chimenea.",
      "contraste": "Medio-alto por estética snapshot digital.",
      "detalles": "Preservar textura real de piel, flash reflection y sombras auténticas.",
      "acabado_final": "Ultra-realistic 8K cozy Y2K harsh-flash selfie con vibra íntima."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9db2e923-fcdf-4325-8b7a-c42dec25439e', 'f40bc665-4479-4af3-8857-c444d89ecd24') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9db2e923-fcdf-4325-8b7a-c42dec25439e', 'dc09f376-c86b-4590-8cb3-43f2d33da56c') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9db2e923-fcdf-4325-8b7a-c42dec25439e', 'd59bbabd-307c-41ad-8539-f85e96ed30ca') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('e2446f6b-8ba9-414a-8148-635f39da348c', 'prompt', 'Cat-Ears Mirror Selfie — Pink Brocade Outfit + Playful Tongue Expression', 'cat-ears-mirror-selfie', 'Ultra-realistic 8K photorealistic mirror selfie con outfit rosa y cat ears.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener estructura facial, peinado, tono de piel y expresión exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Joven mujer en mirror selfie con estética cute-fashion.
- **Cabello:**
  - Color: Blonde
  - Estilo: Long wavy hair natural
- **Accesorio cabeza:** White fluffy cat ears headband
- **Outfit:**
  - Top: Pink brocade corset-style garment con lacing frontal y trim decorativo
  - Bottom: Pink gingham mini skirt con ruffles y lace blanca
  - Socks: White thigh-high socks con pink stripes
  - Choker: Pink collar choker con small silver bell
  - Jewelry: Stud earrings, Delicate gold bracelet
- **Expresión:** Playful, tongue slightly sticking out, gaze up-left.
- **Detalle piel:** Textura realista natural con skin detail definido.
- **Calidad:** Ultra-realistic 8K photorealistic mirror selfie rendering con fidelidad absoluta.

## E: Entorno
- **Ubicación:** Modern apartment interior flooded with daylight.
- **Background elements:**
  - Floor-to-ceiling windows with cityscape view
  - Grey wood plank flooring
  - Grey tiled wall section
  - Large brown teddy bear
  - White upholstered armchair
  - Wooden side table
- **Foreground detail:** Hanging green artificial ivy framing the scene.
- **Atmósfera:** Bright, playful, cozy lifestyle setting.

## A: Acción / Postura
- **Pose:** Standing mirror selfie holding a white iPhone in right hand.
- **Lenguaje corporal:** Cute, spontaneous, playful fashion pose.
- **Detalle:**
  - Head: Slight tilt with playful tongue expression
  - Gaze: Directed upward and to the left

## I: Iluminación
- **Tipo:** Bright natural daylight from large windows.
- **Características:**
  - Realistic daylight spread across skin and outfit
  - Soft cinematic shadows on interior surfaces
  - Organic blending with apartment lighting
- **Efecto:** Clean modern daylight selfie realism.

## S: Sensación / Atmósfera
- **Mood:** Playful, cute, bright, youthful.
- **Tono:** Mirror selfie lifestyle con cosplay-inspired fashion charm.

## E: Estilo Visual
- **Estilo general:** Ultra-photorealistic cinematic mirror selfie aesthetic.
- **Detalles:**
  - High-detail fabrics: brocade + gingham + lace trim
  - Natural daylight realism
  - Interior props enhancing cozy atmosphere
  - Cute overlay typography for social vibe
- **Acabado:** Photorealistic editorial lifestyle with playful character.
- **Calidad:** Ultra-realistic 8K high-detail mirror selfie rendering.

## M: Composición / Cámara
- **Plano:** Full-body to three-quarter mirror selfie framing.
- **Ángulo:** Mirror perspective natural handheld phone pose.
- **Encuadre:** Subject dominant with apartment props balanced around.
- **Enfoque:** Sharp focus on face, outfit textures, and phone; background softly clear but not distracting.
- **Aspect Ratio:** Vertical social media framing (9:16 implied).

## P: Postproducción
- **Color grading:** Soft warm-pink fashion palette with clean daylight tones.
- **Contraste:** Moderate-natural, avoiding overprocessing.
- **Nitidez:** Alta definición en rostro, textiles, lace trim y props.
- **Acabado final:** Ultra-realistic 8K cute cat-ears mirror selfie portrait con ambiente bright lifestyle.
', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/cat-ears-mirror-selfie.jpg', '{
  "title": "Cat-Ears Mirror Selfie — Pink Brocade Outfit + Playful Tongue Expression",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen de referencia como identidad principal. Mantener estructura facial, peinado, tono de piel y expresión exactamente idénticos.",
      "preservacion_total": "No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.",
      "sujeto": "Joven mujer en mirror selfie con estética cute-fashion.",
      "cabello": {
        "color": "Blonde",
        "estilo": "Long wavy hair natural"
      },
      "accesorio_cabeza": "White fluffy cat ears headband",
      "outfit": {
        "top": "Pink brocade corset-style garment con lacing frontal y trim decorativo",
        "bottom": "Pink gingham mini skirt con ruffles y lace blanca",
        "socks": "White thigh-high socks con pink stripes",
        "choker": "Pink collar choker con small silver bell",
        "jewelry": [
          "Stud earrings",
          "Delicate gold bracelet"
        ]
      },
      "expresion": "Playful, tongue slightly sticking out, gaze up-left.",
      "detalle_piel": "Textura realista natural con skin detail definido.",
      "calidad": "Ultra-realistic 8K photorealistic mirror selfie rendering con fidelidad absoluta."
    },
    "E_Entorno": {
      "ubicacion": "Modern apartment interior flooded with daylight.",
      "background_elements": [
        "Floor-to-ceiling windows with cityscape view",
        "Grey wood plank flooring",
        "Grey tiled wall section",
        "Large brown teddy bear",
        "White upholstered armchair",
        "Wooden side table"
      ],
      "foreground_detail": "Hanging green artificial ivy framing the scene",
      "atmósfera": "Bright, playful, cozy lifestyle setting."
    },
    "A_Accion_Postura": {
      "pose": "Standing mirror selfie holding a white iPhone in right hand.",
      "lenguaje_corporal": "Cute, spontaneous, playful fashion pose.",
      "detalle": {
        "head": "Slight tilt with playful tongue expression",
        "gaze": "Directed upward and to the left"
      }
    },
    "I_Iluminacion": {
      "tipo": "Bright natural daylight from large windows.",
      "caracteristicas": [
        "Realistic daylight spread across skin and outfit",
        "Soft cinematic shadows on interior surfaces",
        "Organic blending with apartment lighting"
      ],
      "efecto": "Clean modern daylight selfie realism."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Playful, cute, bright, youthful.",
      "tono": "Mirror selfie lifestyle con cosplay-inspired fashion charm."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Ultra-photorealistic cinematic mirror selfie aesthetic.",
      "detalles": [
        "High-detail fabrics: brocade + gingham + lace trim",
        "Natural daylight realism",
        "Interior props enhancing cozy atmosphere",
        "Cute overlay typography for social vibe"
      ],
      "acabado": "Photorealistic editorial lifestyle with playful character.",
      "calidad": "Ultra-realistic 8K high-detail mirror selfie rendering."
    },
    "M_Composicion_Camara": {
      "plano": "Full-body to three-quarter mirror selfie framing.",
      "angulo": "Mirror perspective natural handheld phone pose.",
      "encuadre": "Subject dominant with apartment props balanced around.",
      "enfoque": "Sharp focus on face, outfit textures, and phone; background softly clear but not distracting.",
      "aspect_ratio": "Vertical social media framing (9:16 implied)."
    },
    "P_Postproduccion": {
      "color_grading": "Soft warm-pink fashion palette with clean daylight tones.",
      "contraste": "Moderate-natural, avoiding overprocessing.",
      "nitidez": "Alta definición en rostro, textiles, lace trim y props.",
      "acabado_final": "Ultra-realistic 8K cute cat-ears mirror selfie portrait con ambiente bright lifestyle."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e2446f6b-8ba9-414a-8148-635f39da348c', '51cd2e03-9be8-42d1-8d84-2a56f8077243') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e2446f6b-8ba9-414a-8148-635f39da348c', '00b3a0ce-6fad-4c3a-8d9d-1419593018ce') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e2446f6b-8ba9-414a-8148-635f39da348c', '918e36fa-6e9e-482a-88b9-0410e6af5770') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('9d8404f4-683b-470d-86e9-2af28e645ed6', 'prompt', 'Gym Locker Room Mirror Selfie — Athletic Sportswear Editorial Realism', 'gym-locker-room-selfie', 'Ultra-realistic 8K gym lifestyle mirror selfie con sportswear gris y aesthetic fitness.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener estructura facial, peinado, tono de piel, proporciones corporales y expresión exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Mujer atlética joven en selfie de espejo estilo gym lifestyle.
- **Cabello:**
  - Color: Blonde con raíces ligeramente más oscuras
  - Estilo: Long straight hair con wispy curtain bangs
- **Detalle facial:** Preservar textura natural de piel y expresión original.
- **Tattoos:** Mantener tatuaje visible en antebrazo izquierdo exactamente igual.
- **Outfit:**
  - Top: Light heather grey ribbed sports bra con spaghetti straps y plunging neckline
  - Bottom: High-waisted tight leggings en light grey snakeskin / animal print
- **Accesorios:**
  - Nails: Burgundy nail polish
  - Rings: Multiple silver rings
  - Wristbands: Black and green wristbands
- **Calidad:** Ultra-realistic 8K photorealistic gym mirror selfie rendering con detalle extremo.

## E: Entorno
- **Ubicación:** Gym locker room / changing area interior.
- **Background elements:**
  - Metal coat rack con black puffer jacket
  - Gym bag con texto invertido ''FITNESS''
  - White textured plaster walls
  - Dark bench
  - Beige tiled flooring
- **Atmósfera:** Realista, cotidiana, lifestyle fitness aesthetic.

## A: Acción / Postura
- **Pose:** Standing mirror selfie con hip popped creando una silueta en S-curve.
- **Mano derecha:**
  - Acción: Sosteniendo white iPhone
  - Detalle: MagSafe ring + hanging grey lanyard
- **Mano izquierda:** Resting gently near midriff mostrando uñas, rings y wristbands.
- **Lenguaje corporal:** Athletic, confident, natural gym candid vibe.

## I: Iluminación
- **Tipo:** Soft indoor ambient lighting con diffused overhead quality.
- **Características:**
  - Sombras suaves naturales
  - Highlights orgánicos en cabello rubio
  - Blend realista con el ambiente del locker room
- **Efecto:** Cinematic gym realism sin harsh shadows.

## S: Sensación / Atmósfera
- **Mood:** Confident, sporty, candid lifestyle.
- **Tono:** Fitness editorial mirror selfie con autenticidad moderna.

## E: Estilo Visual
- **Estilo general:** Ultra-photorealistic cinematic gym lifestyle portrait.
- **Detalles:**
  - Textura ribbed sportswear definida
  - Animal-print leggings realistic fabric detail
  - Skin texture natural con enfoque editorial
  - Locker room props para realismo contextual
- **Acabado:** Modern athletic influencer-style realism con calidad premium.
- **Calidad:** Ultra-realistic 8K high-detail selfie aesthetic.

## M: Composición / Cámara
- **Plano:** Three-quarter to full-body mirror selfie framing.
- **Ángulo:** Natural mirror perspective con iPhone visible.
- **Encuadre:** Sujeto dominante centrado con background gym contextual balanceado.
- **Enfoque:** Sharp focus en rostro y outfit; background ligeramente softer pero legible.
- **Aspect Ratio:** Vertical social framing (9:16 implied).

## P: Postproducción
- **Color grading:** Neutral cool gym tones con acabado realista moderno.
- **Contraste:** Moderado-natural para autenticidad fitness.
- **Nitidez:** Alta definición en piel, cabello, leggings texture y accesorios.
- **Acabado final:** Ultra-realistic 8K gym locker mirror selfie con mood sporty editorial y fidelidad absoluta.
', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/gym-locker-room-selfie.png', '{
  "title": "Gym Locker Room Mirror Selfie — Athletic Sportswear Editorial Realism",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen de referencia como identidad principal. Mantener estructura facial, peinado, tono de piel, proporciones corporales y expresión exactamente idénticos.",
      "preservacion_total": "No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.",
      "sujeto": "Mujer atlética joven en selfie de espejo estilo gym lifestyle.",
      "cabello": {
        "color": "Blonde con raíces ligeramente más oscuras",
        "estilo": "Long straight hair con wispy curtain bangs"
      },
      "detalle_facial": "Preservar textura natural de piel y expresión original.",
      "tattoos": "Mantener tatuaje visible en antebrazo izquierdo exactamente igual.",
      "outfit": {
        "top": "Light heather grey ribbed sports bra con spaghetti straps y plunging neckline",
        "bottom": "High-waisted tight leggings en light grey snakeskin / animal print"
      },
      "accesorios": {
        "nails": "Burgundy nail polish",
        "rings": "Multiple silver rings",
        "wristbands": "Black and green wristbands"
      },
      "calidad": "Ultra-realistic 8K photorealistic gym mirror selfie rendering con detalle extremo."
    },
    "E_Entorno": {
      "ubicacion": "Gym locker room / changing area interior.",
      "background_elements": [
        "Metal coat rack con black puffer jacket",
        "Gym bag con texto invertido ''FITNESS''",
        "White textured plaster walls",
        "Dark bench",
        "Beige tiled flooring"
      ],
      "atmósfera": "Realista, cotidiana, lifestyle fitness aesthetic."
    },
    "A_Accion_Postura": {
      "pose": "Standing mirror selfie con hip popped creando una silueta en S-curve.",
      "mano_derecha": {
        "accion": "Sosteniendo white iPhone",
        "detalle": "MagSafe ring + hanging grey lanyard"
      },
      "mano_izquierda": "Resting gently near midriff mostrando uñas, rings y wristbands.",
      "lenguaje_corporal": "Athletic, confident, natural gym candid vibe."
    },
    "I_Iluminacion": {
      "tipo": "Soft indoor ambient lighting con diffused overhead quality.",
      "caracteristicas": [
        "Sombras suaves naturales",
        "Highlights orgánicos en cabello rubio",
        "Blend realista con el ambiente del locker room"
      ],
      "efecto": "Cinematic gym realism sin harsh shadows."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Confident, sporty, candid lifestyle.",
      "tono": "Fitness editorial mirror selfie con autenticidad moderna."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Ultra-photorealistic cinematic gym lifestyle portrait.",
      "detalles": [
        "Textura ribbed sportswear definida",
        "Animal-print leggings realistic fabric detail",
        "Skin texture natural con enfoque editorial",
        "Locker room props para realismo contextual"
      ],
      "acabado": "Modern athletic influencer-style realism con calidad premium.",
      "calidad": "Ultra-realistic 8K high-detail selfie aesthetic."
    },
    "M_Composicion_Camara": {
      "plano": "Three-quarter to full-body mirror selfie framing.",
      "angulo": "Natural mirror perspective con iPhone visible.",
      "encuadre": "Sujeto dominante centrado con background gym contextual balanceado.",
      "enfoque": "Sharp focus en rostro y outfit; background ligeramente softer pero legible.",
      "aspect_ratio": "Vertical social framing (9:16 implied)."
    },
    "P_Postproduccion": {
      "color_grading": "Neutral cool gym tones con acabado realista moderno.",
      "contraste": "Moderado-natural para autenticidad fitness.",
      "nitidez": "Alta definición en piel, cabello, leggings texture y accesorios.",
      "acabado_final": "Ultra-realistic 8K gym locker mirror selfie con mood sporty editorial y fidelidad absoluta."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9d8404f4-683b-470d-86e9-2af28e645ed6', '51cd2e03-9be8-42d1-8d84-2a56f8077243') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9d8404f4-683b-470d-86e9-2af28e645ed6', 'e65aed91-4fab-4574-8f48-5d9390a5be00') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('9d8404f4-683b-470d-86e9-2af28e645ed6', '41d8c9ef-d8ae-483d-87ec-9cf6792c0e74') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('eb72edf7-90ce-4922-8190-099824b49ccc', 'prompt', '6-Frame Gen-Z VHS Collage — Pink Sunglasses + Camcorder REC Overlay', 'gen-z-vhs-collage', 'Ultra-realistic 8K Gen-Z camcorder collage portrait con estética editorial VHS futurista.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Preservar rasgos faciales, identidad y expresión exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Retrato editorial futurista dreamy con estética Gen-Z.
- **Accesorios:**
  - Sunglasses: Pink round-lens sunglasses
  - Earrings: Pearl earrings
- **Detalle piel:** Textura realista natural en rostro, sin smoothing artificial.
- **Calidad:** Ultra-realistic 8K fashion portrait rendering con fidelidad absoluta.

## E: Entorno
- **Fondo:** Neutral light gray studio background limpio.
- **Escena:** Estudio minimalista sin props físicos adicionales.
- **Atmósfera:** Dreamy, ethereal, futuristic Gen-Z vibe.

## A: Acción / Postura
- **Estructura:** Collage cinematográfico de seis retratos distintos.
- **Variaciones:**
  - Shots: Close-up portraits, Medium shots
  - Expresión: Fashion editorial calm, slightly ethereal
  - Movimiento: Slight motion blur en algunos frames para efecto dreamy
- **Lenguaje corporal:** Editorial moderno, suave y futurista.

## I: Iluminación
- **Tipo:** Clean studio lighting con sombras suaves.
- **Características:**
  - Iluminación uniforme profesional
  - Soft shadows controladas
  - Glow sutil para atmósfera etérea
- **Efecto:** Look fashion editorial limpio con acabado cinematográfico.

## S: Sensación / Atmósfera
- **Mood:** Gen-Z futuristic, dreamy, ethereal, retro-tech.
- **Tono:** Fashion collage con nostalgia VHS moderna.

## E: Estilo Visual
- **Estilo general:** Photorealistic editorial collage con textura VHS retro.
- **Detalles:**
  - Retro VHS grain and texture overlay
  - Digital camcorder interface en cada frame
  - Slight motion blur para dreamy softness
- **Overlay UI:**
  - Elementos: Battery icon, Red ''REC'' text, Unique white timer values per frame
  - Función: Simular grabación camcorder estética Y2K futurista
- **Calidad:** Ultra-realistic 8K con acabado fashion + VHS dream.

## M: Composición / Cámara
- **Layout:** Six distinct portrait frames arranged as cinematic collage grid.
- **Encuadre:** Mix de close-up y medium shots para variedad editorial.
- **Enfoque:** Sharp focus en identidad facial en cada frame; blur solo como efecto estilístico leve.
- **Profundidad de campo:** Shallow DOF suave para look premium.

## P: Postproducción
- **Color grading:** Neutral studio tones con vibe retro-dream futurista.
- **Textura:** Subtle VHS grain + camcorder UI overlays.
- **Contraste:** Soft-moderate para mantener delicadeza etérea.
- **Nitidez:** Alta definición en rostro, gafas, perlas y detalles de recording UI.
- **Acabado final:** Ultra-realistic 8K Gen-Z camcorder collage portrait con estética editorial VHS futurista.
', 'Editorial', NULL, NULL, 'advanced', '/images/prompts/gen-z-vhs-collage.jpg', '{
  "title": "6-Frame Gen-Z VHS Collage — Pink Sunglasses + Camcorder REC Overlay",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen de referencia como identidad principal. Preservar rasgos faciales, identidad y expresión exactamente idénticos.",
      "preservacion_total": "No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.",
      "sujeto": "Retrato editorial futurista dreamy con estética Gen-Z.",
      "accesorios": {
        "sunglasses": "Pink round-lens sunglasses",
        "earrings": "Pearl earrings"
      },
      "detalle_piel": "Textura realista natural en rostro, sin smoothing artificial.",
      "calidad": "Ultra-realistic 8K fashion portrait rendering con fidelidad absoluta."
    },
    "E_Entorno": {
      "fondo": "Neutral light gray studio background limpio.",
      "escena": "Estudio minimalista sin props físicos adicionales.",
      "atmósfera": "Dreamy, ethereal, futuristic Gen-Z vibe."
    },
    "A_Accion_Postura": {
      "estructura": "Collage cinematográfico de seis retratos distintos.",
      "variaciones": {
        "shots": [
          "Close-up portraits",
          "Medium shots"
        ],
        "expresion": "Fashion editorial calm, slightly ethereal",
        "movimiento": "Slight motion blur en algunos frames para efecto dreamy"
      },
      "lenguaje_corporal": "Editorial moderno, suave y futurista."
    },
    "I_Iluminacion": {
      "tipo": "Clean studio lighting con sombras suaves.",
      "caracteristicas": [
        "Iluminación uniforme profesional",
        "Soft shadows controladas",
        "Glow sutil para atmósfera etérea"
      ],
      "efecto": "Look fashion editorial limpio con acabado cinematográfico."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Gen-Z futuristic, dreamy, ethereal, retro-tech.",
      "tono": "Fashion collage con nostalgia VHS moderna."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Photorealistic editorial collage con textura VHS retro.",
      "detalles": [
        "Retro VHS grain and texture overlay",
        "Digital camcorder interface en cada frame",
        "Slight motion blur para dreamy softness"
      ],
      "overlay_UI": {
        "elementos": [
          "Battery icon",
          "Red ''REC'' text",
          "Unique white timer values per frame"
        ],
        "funcion": "Simular grabación camcorder estética Y2K futurista"
      },
      "calidad": "Ultra-realistic 8K con acabado fashion + VHS dream."
    },
    "M_Composicion_Camara": {
      "layout": "Six distinct portrait frames arranged as cinematic collage grid.",
      "encuadre": "Mix de close-up y medium shots para variedad editorial.",
      "enfoque": "Sharp focus en identidad facial en cada frame; blur solo como efecto estilístico leve.",
      "profundidad_de_campo": "Shallow DOF suave para look premium."
    },
    "P_Postproduccion": {
      "color_grading": "Neutral studio tones con vibe retro-dream futurista.",
      "textura": "Subtle VHS grain + camcorder UI overlays.",
      "contraste": "Soft-moderate para mantener delicadeza etérea.",
      "nitidez": "Alta definición en rostro, gafas, perlas y detalles de recording UI.",
      "acabado_final": "Ultra-realistic 8K Gen-Z camcorder collage portrait con estética editorial VHS futurista."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('eb72edf7-90ce-4922-8190-099824b49ccc', '8951aa14-a722-492a-81ec-7f55e290a183') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('eb72edf7-90ce-4922-8190-099824b49ccc', '4270fc57-7856-4b16-81ab-370f3e654a81') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('eb72edf7-90ce-4922-8190-099824b49ccc', 'd164f509-a838-43ac-8459-2c7dad280356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('081505f3-5919-490b-8c4b-a838484f2371', 'prompt', 'Black-and-White Hoodie Editorial Portrait — Seated Introspective Studio Pose', 'bw-hoodie-portrait', 'Ultra-realistic 8K monochrome hoodie portrait con atmósfera introspectiva de estudio.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Preservar estructura facial, rasgos, tono de piel, peinado y expresión exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Retrato editorial en blanco y negro con pose contemplativa.
- **Outfit:**
  - Prenda: Oversized washed-fabric hoodie
  - Detalle: Textura realista, folds naturales y apariencia auténtica de tela lavada
- **Expresión:** Introspectiva, calmada, emocionalmente contenida.
- **Calidad:** Ultra-realistic 8K monochrome studio portrait rendering con fidelidad absoluta.

## E: Entorno
- **Fondo:** Clean seamless white studio backdrop.
- **Escena:** Minimalista, sin objetos ni props adicionales.
- **Objetivo:** Aislar al sujeto como foco emocional principal.

## A: Acción / Postura
- **Pose:** Sentada, inclinada hacia adelante con elbows on knees.
- **Manos:**
  - Posicion: Hands clasped
  - Detalle: One thumb gently touching the forehead
- **Lenguaje corporal:** Contemplativo, introspectivo, editorial fashion calm.

## I: Iluminación
- **Tipo:** Soft directional studio lighting.
- **Características:**
  - Luz suave pero con dirección definida
  - Sombras delicadas que esculpen el rostro
  - Iluminación premium high-end editorial
- **Efecto:** Contraste elegante en blanco y negro con mood íntimo.

## S: Sensación / Atmósfera
- **Mood:** Introspective, calm, timeless, editorial.
- **Tono:** High-end fashion portrait con emoción silenciosa.

## E: Estilo Visual
- **Estilo general:** Ultra-realistic black-and-white studio fashion editorial.
- **Detalles:**
  - Monochrome tonal separation rica
  - Textura auténtica en hoodie fabric
  - Sombras suaves direccionales en fondo blanco
- **Acabado:** Timeless, minimal, cinematic fashion portrait.
- **Calidad:** Ultra-realistic 8K con look fine-art editorial.

## M: Composición / Cámara
- **Plano:** Medium portrait framing, seated forward pose.
- **Ángulo:** Eye-level ligeramente cercano para intensidad emocional.
- **Encuadre:** Sujeto centrado, fondo blanco limpio como espacio negativo.
- **Enfoque:** Sharp focus en rostro y manos; hoodie folds claramente definidos.
- **Profundidad de campo:** Shallow DOF suave para acabado premium.

## P: Postproducción
- **Color grading:** Black-and-white conversion con contrastes finos y suaves midtones.
- **Nitidez:** Alta definición en piel, textura de tela y expresión facial.
- **Contraste:** Moderado-high editorial sin perder suavidad.
- **Acabado final:** Ultra-realistic 8K monochrome hoodie portrait con atmósfera introspectiva de estudio.
', 'Fashion', NULL, NULL, 'advanced', '/images/prompts/bw-hoodie-portrait.png', '{
  "title": "Black-and-White Hoodie Editorial Portrait — Seated Introspective Studio Pose",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen de referencia como identidad principal. Preservar estructura facial, rasgos, tono de piel, peinado y expresión exactamente idénticos.",
      "preservacion_total": "No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.",
      "sujeto": "Retrato editorial en blanco y negro con pose contemplativa.",
      "outfit": {
        "prenda": "Oversized washed-fabric hoodie",
        "detalle": "Textura realista, folds naturales y apariencia auténtica de tela lavada"
      },
      "expresion": "Introspectiva, calmada, emocionalmente contenida.",
      "calidad": "Ultra-realistic 8K monochrome studio portrait rendering con fidelidad absoluta."
    },
    "E_Entorno": {
      "fondo": "Clean seamless white studio backdrop.",
      "escena": "Minimalista, sin objetos ni props adicionales.",
      "objetivo": "Aislar al sujeto como foco emocional principal."
    },
    "A_Accion_Postura": {
      "pose": "Sentada, inclinada hacia adelante con elbows on knees.",
      "manos": {
        "posicion": "Hands clasped",
        "detalle": "One thumb gently touching the forehead"
      },
      "lenguaje_corporal": "Contemplativo, introspectivo, editorial fashion calm."
    },
    "I_Iluminacion": {
      "tipo": "Soft directional studio lighting.",
      "caracteristicas": [
        "Luz suave pero con dirección definida",
        "Sombras delicadas que esculpen el rostro",
        "Iluminación premium high-end editorial"
      ],
      "efecto": "Contraste elegante en blanco y negro con mood íntimo."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Introspective, calm, timeless, editorial.",
      "tono": "High-end fashion portrait con emoción silenciosa."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Ultra-realistic black-and-white studio fashion editorial.",
      "detalles": [
        "Monochrome tonal separation rica",
        "Textura auténtica en hoodie fabric",
        "Sombras suaves direccionales en fondo blanco"
      ],
      "acabado": "Timeless, minimal, cinematic fashion portrait.",
      "calidad": "Ultra-realistic 8K con look fine-art editorial."
    },
    "M_Composicion_Camara": {
      "plano": "Medium portrait framing, seated forward pose.",
      "angulo": "Eye-level ligeramente cercano para intensidad emocional.",
      "encuadre": "Sujeto centrado, fondo blanco limpio como espacio negativo.",
      "enfoque": "Sharp focus en rostro y manos; hoodie folds claramente definidos.",
      "profundidad_de_campo": "Shallow DOF suave para acabado premium."
    },
    "P_Postproduccion": {
      "color_grading": "Black-and-white conversion con contrastes finos y suaves midtones.",
      "nitidez": "Alta definición en piel, textura de tela y expresión facial.",
      "contraste": "Moderado-high editorial sin perder suavidad.",
      "acabado_final": "Ultra-realistic 8K monochrome hoodie portrait con atmósfera introspectiva de estudio."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('081505f3-5919-490b-8c4b-a838484f2371', '179bf2c6-0bb3-43a3-8654-673782bc8069') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('081505f3-5919-490b-8c4b-a838484f2371', '61a3c407-bef7-4162-820a-bfca8dbdd1fd') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('081505f3-5919-490b-8c4b-a838484f2371', 'd164f509-a838-43ac-8459-2c7dad280356') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('081505f3-5919-490b-8c4b-a838484f2371', 'ce38b0f1-cefd-435f-81cf-11189d218f9c') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('4e9082f1-5b8f-4d80-8df3-b02a6d3ce77e', 'prompt', 'Poolside Fashion Editorial Portrait — Colorful Bikini + Butterfly Tattoo', 'poolside-fashion-portrait', 'Ultra-realistic 8K poolside fashion editorial portrait con atmósfera limpia y comercial.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar la imagen adjunta como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y rasgos físicos exactamente idénticos.
- **Preservación total:** No alterar ni editar el rostro ni ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Retrato lifestyle editorial en ambiente de piscina.
- **Detalle corporal:** Proporciones naturales, look saludable y atlético, sin exageraciones anatómicas.
- **Tattoo:** Tiny butterfly tattoo visible en la espalda.
- **Outfit:**
  - Tipo: Colorful patterned bikini (high-fashion swimwear styling)
  - Descripción: Diseño moderno con colores vibrantes y ajuste elegante, estilo editorial.
- **Expresión:** Sonrisa natural, mood relajado y veraniego.
- **Calidad:** Ultra-realistic 8K swimwear fashion portrait rendering con fidelidad absoluta.

## E: Entorno
- **Ubicación:** Pool setting exterior con atmósfera luminosa.
- **Background:** Agua azul desenfocada y entorno minimalista veraniego.
- **Atmósfera:** Resort lifestyle, clean, bright, editorial.

## A: Acción / Postura
- **Pose:** Medium shot ligeramente inclinado (canted angle) para dinamismo visual.
- **Lenguaje corporal:** Relajado, confident, casual poolside vibe.

## I: Iluminación
- **Tipo:** Natural daylight pool lighting.
- **Características:**
  - Highlights suaves sobre piel y agua
  - Sombras naturales balanceadas
  - Look cinematográfico veraniego
- **Efecto:** Look cinematográfico veraniego.

## S: Sensación / Atmósfera
- **Mood:** Fresh, confident, summery, fashion editorial.
- **Tono:** Lifestyle resort aesthetic con elegancia moderna.

## E: Estilo Visual
- **Estilo general:** Photorealistic swimwear editorial portrait.
- **Detalles:**
  - Textura realista de piel
  - Colores vibrantes del bikini
  - Tatuaje mariposa como detalle distintivo
  - Pool bokeh background
- **Calidad:** Ultra-realistic 8K clean fashion photography look.

## M: Composición / Cámara
- **Plano:** Medium shot landscape framing.
- **Ángulo:** Slight canted angle para estética editorial.
- **Enfoque:** Sharp focus en rostro y tattoo detail; fondo suavemente desenfocado.
- **Profundidad de campo:** Shallow DOF cinematográfico.

## P: Postproducción
- **Color grading:** Warm summer tones con contraste suave.
- **Nitidez:** Alta definición en piel, bikini fabric y tattoo detail.
- **Acabado final:** Ultra-realistic 8K poolside fashion editorial portrait con atmósfera limpia y comercial.
', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/poolside-fashion-portrait.jpg', '{
  "title": "Poolside Fashion Editorial Portrait — Colorful Bikini + Butterfly Tattoo",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar la imagen adjunta como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y rasgos físicos exactamente idénticos.",
      "preservacion_total": "No alterar ni editar el rostro ni ningún rasgo físico bajo ninguna circunstancia.",
      "sujeto": "Retrato lifestyle editorial en ambiente de piscina.",
      "detalle_corporal": "Proporciones naturales, look saludable y atlético, sin exageraciones anatómicas.",
      "tattoo": "Tiny butterfly tattoo visible en la espalda.",
      "outfit": {
        "tipo": "Colorful patterned bikini (high-fashion swimwear styling)",
        "descripcion": "Diseño moderno con colores vibrantes y ajuste elegante, estilo editorial."
      },
      "expresion": "Sonrisa natural, mood relajado y veraniego.",
      "calidad": "Ultra-realistic 8K swimwear fashion portrait rendering con fidelidad absoluta."
    },
    "E_Entorno": {
      "ubicacion": "Pool setting exterior con atmósfera luminosa.",
      "background": "Agua azul desenfocada y entorno minimalista veraniego.",
      "atmósfera": "Resort lifestyle, clean, bright, editorial."
    },
    "A_Accion_Postura": {
      "pose": "Medium shot ligeramente inclinado (canted angle) para dinamismo visual.",
      "lenguaje_corporal": "Relajado, confident, casual poolside vibe."
    },
    "I_Iluminacion": {
      "tipo": "Natural daylight pool lighting.",
      "caracteristicas": [
        "Highlights suaves sobre piel y agua",
        "Sombras naturales balanceadas",
        "Look cinematográfico veraniego"
      ]
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Fresh, confident, summery, fashion editorial.",
      "tono": "Lifestyle resort aesthetic con elegancia moderna."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Photorealistic swimwear editorial portrait.",
      "detalles": [
        "Textura realista de piel",
        "Colores vibrantes del bikini",
        "Tatuaje mariposa como detalle distintivo",
        "Pool bokeh background"
      ],
      "calidad": "Ultra-realistic 8K clean fashion photography look."
    },
    "M_Composicion_Camara": {
      "plano": "Medium shot landscape framing.",
      "angulo": "Slight canted angle para estética editorial.",
      "enfoque": "Sharp focus en rostro y tattoo detail; fondo suavemente desenfocado.",
      "profundidad_de_campo": "Shallow DOF cinematográfico."
    },
    "P_Postproduccion": {
      "color_grading": "Warm summer tones con contraste suave.",
      "nitidez": "Alta definición en piel, bikini fabric y tattoo detail.",
      "acabado_final": "Ultra-realistic 8K poolside fashion editorial portrait con atmósfera limpia y comercial."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4e9082f1-5b8f-4d80-8df3-b02a6d3ce77e', 'da1092e5-3f78-4a6f-8bdd-ac7d7b53c0a7') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4e9082f1-5b8f-4d80-8df3-b02a6d3ce77e', '77495ed8-df99-4a2d-8fa5-be3aabfa5411') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4e9082f1-5b8f-4d80-8df3-b02a6d3ce77e', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('0f2a225b-fad6-4d6f-8483-47944c080572', 'prompt', 'Intimate Dressing Chair Portrait — Kodak Film Camera + Warm Nostalgic 35mm Mood (8K)', 'intimate-dressing-chair', 'Ultra-realistic 8K intimate editorial portrait with warm nostalgic film atmosphere.', '
# Framework REAISEMP

## R: Render del Avatar
- **Identidad:** Usar el modelo de referencia como identidad principal. Mantener ojos, contorno facial, cejas, nariz y boca 100% idénticos. No editar el rostro.
- **Preservación total:** No alterar ni modificar ningún rasgo facial o físico bajo ninguna circunstancia. Identidad bloqueada.
- **Sujeto:** Retrato íntimo lifestyle editorial en ambiente privado y cálido.
- **Pose base:** Full body sitting on a dressing chair, arms wrapped around knees.
- **Outfit:**
  - Top: Long white shirt oversize
  - Bottom: Shorts minimalistas
  - Socks: White lace long socks
- **Prop:**
  - Camera: Retro-style Kodak film camera held close to the face
- **Detalle piel:** Textura auténtica, natural, sin suavizado artificial.
- **Calidad:** Ultra-realistic 8K intimate portrait rendering con fidelidad absoluta.

## E: Entorno
- **Ubicación:** Interior cálido tipo dressing room o espacio privado.
- **Escena:** Lifestyle editorial con atmósfera íntima, tranquila y nostálgica.
- **Background:**
  - Golden brown gradient backdrop suave
  - No elementos distractores, ambiente minimalista
- **Atmósfera:** Private warm editorial moment, nostalgic film mood.

## A: Acción / Postura
- **Pose:** Sentado en una silla de vestidor con ambas rodillas recogidas.
- **Detalle:**
  - Ambos brazos rodeando las rodillas
  - Cámara Kodak sostenida cerca del rostro como gesto íntimo
- **Lenguaje corporal:** Warm, introspective, private, emotionally close.

## I: Iluminación
- **Tipo:** Warm ambient light with cinematic movie tone.
- **Características:**
  - Luz cálida envolvente
  - Sombras suaves delicadas
  - Highlights sutiles sobre piel y tela blanca
  - Atmosfera nostálgica tipo cine
- **Efecto:** Golden intimate lighting with soft warmth.

## S: Sensación / Atmósfera
- **Mood:** Nostalgic, warm, private, intimate editorial lifestyle.
- **Tono:** Soft emotional closeness with cinematic calm.

## E: Estilo Visual
- **Estilo general:** Hyper-realistic lifestyle portrait with 35mm film aesthetic.
- **Detalles:**
  - Soft focus cinematic intimacy
  - Delicate film grain texture
  - Golden brown nostalgic palette
  - Editorial warm private atmosphere
- **Acabado:** Analog-inspired movie lifestyle realism.
- **Calidad:** Ultra-realistic 8K with subtle 35mm grain finish.

## M: Composición / Cámara
- **Plano:** Full body portrait seated on dressing chair.
- **Ángulo:** Eye-level intimate framing, close enough to feel personal.
- **Encuadre:** Subject centered, arms and camera forming emotional focal triangle.
- **Profundidad de campo:** Soft shallow DOF with nostalgic softness.
- **Enfoque:** Sharpest focus on eyes and facial features, softer on background.

## P: Postproducción
- **Color grading:** Warm golden-brown movie-grade tones.
- **Contraste:** Soft low contrast for nostalgic intimacy.
- **Nitidez:** Ultra detail in facial texture, lace socks, Kodak camera surface.
- **Film efecto:** Delicate 35mm grain added for authenticity.
- **Acabado final:** Ultra-realistic 8K intimate editorial portrait with warm nostalgic film atmosphere and absolute face fidelity.
', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/intimate-dressing-chair.png', '{
  "title": "Intimate Dressing Chair Portrait — Kodak Film Camera + Warm Nostalgic 35mm Mood (8K)",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "identidad": "Usar el modelo de referencia como identidad principal. Mantener ojos, contorno facial, cejas, nariz y boca 100% idénticos. No editar el rostro.",
      "preservacion_total": "No alterar ni modificar ningún rasgo facial o físico bajo ninguna circunstancia. Identidad bloqueada.",
      "sujeto": "Retrato íntimo lifestyle editorial en ambiente privado y cálido.",
      "pose_base": "Full body sitting on a dressing chair, arms wrapped around knees.",
      "outfit": {
        "top": "Long white shirt oversize",
        "bottom": "Shorts minimalistas",
        "socks": "White lace long socks"
      },
      "prop": {
        "camera": "Retro-style Kodak film camera held close to the face"
      },
      "detalle_piel": "Textura auténtica, natural, sin suavizado artificial.",
      "calidad": "Ultra-realistic 8K intimate portrait rendering con fidelidad absoluta."
    },
    "E_Entorno": {
      "ubicacion": "Interior cálido tipo dressing room o espacio privado.",
      "escena": "Lifestyle editorial con atmósfera íntima, tranquila y nostálgica.",
      "background": [
        "Golden brown gradient backdrop suave",
        "No elementos distractores, ambiente minimalista"
      ],
      "atmósfera": "Private warm editorial moment, nostalgic film mood."
    },
    "A_Accion_Postura": {
      "pose": "Sentado en una silla de vestidor con ambas rodillas recogidas.",
      "detalle": [
        "Ambos brazos rodeando las rodillas",
        "Cámara Kodak sostenida cerca del rostro como gesto íntimo"
      ],
      "lenguaje_corporal": "Warm, introspective, private, emotionally close."
    },
    "I_Iluminacion": {
      "tipo": "Warm ambient light with cinematic movie tone.",
      "caracteristicas": [
        "Luz cálida envolvente",
        "Sombras suaves delicadas",
        "Highlights sutiles sobre piel y tela blanca",
        "Atmosfera nostálgica tipo cine"
      ],
      "efecto": "Golden intimate lighting with soft warmth."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Nostalgic, warm, private, intimate editorial lifestyle.",
      "tono": "Soft emotional closeness with cinematic calm."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Hyper-realistic lifestyle portrait with 35mm film aesthetic.",
      "detalles": [
        "Soft focus cinematic intimacy",
        "Delicate film grain texture",
        "Golden brown nostalgic palette",
        "Editorial warm private atmosphere"
      ],
      "acabado": "Analog-inspired movie lifestyle realism.",
      "calidad": "Ultra-realistic 8K with subtle 35mm grain finish."
    },
    "M_Composicion_Camara": {
      "plano": "Full body portrait seated on dressing chair.",
      "angulo": "Eye-level intimate framing, close enough to feel personal.",
      "encuadre": "Subject centered, arms and camera forming emotional focal triangle.",
      "profundidad_de_campo": "Soft shallow DOF with nostalgic softness.",
      "enfoque": "Sharpest focus on eyes and facial features, softer on background."
    },
    "P_Postproduccion": {
      "color_grading": "Warm golden-brown movie-grade tones.",
      "contraste": "Soft low contrast for nostalgic intimacy.",
      "nitidez": "Ultra detail in facial texture, lace socks, Kodak camera surface.",
      "film_effect": "Delicate 35mm grain added for authenticity.",
      "acabado_final": "Ultra-realistic 8K intimate editorial portrait with warm nostalgic film atmosphere and absolute face fidelity."
    }
  }
}', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('0f2a225b-fad6-4d6f-8483-47944c080572', '76cbf2d5-3aa0-4204-845d-b89118da12ab') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('0f2a225b-fad6-4d6f-8483-47944c080572', '6311fecc-7319-4faf-858b-04ef6724f241') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('0f2a225b-fad6-4d6f-8483-47944c080572', 'b53711bb-5c3b-4d1f-8176-4ddb47ebeaf8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('34850c30-f8d2-42fd-8284-b02cfaddc162', 'prompt', 'Chrome Pink Supercar Selfie — Casual Instagram Main Character Mood', 'chrome-pink-supercar-selfie', 'Prompt ultra-realista que coloca a tu avatar posando junto a un BMW i8 en un llamativo color cromo rosa espejo con estilo streetwear de lujo.', '
# Framework REAISEMP

*   **R(Render):** Mujer joven (early 20s), cabello rubio platino fluyendo bajo gorra negra. Estructura facial bonita, ojos enfocados en pantalla del móvil.
*   **E(Entorno):** Calle urbana moderna, edificios de cristal, pavimento adoquinado elegante.
*   **A(Acción):** Posando con un brazo levantado tomando una selfie a un ángulo alto, apoyada ligeramente sobre la puerta del conductor de un BMW i8.
*   **I(Iluminación):** Luz natural de día, reflejos en el cromo del vehículo.
*   **S(Sensación):** Flex casual de lujo, vibra main character e Instagram-perfect.
*   **E(Estilo):** Foto urbana candid de estilo de vida de alta definición.
*   **M(Composición):** Plano medio-completo vertical, ella en el centro con el vehículo cromo rosa como co-estrella.
*   **P(Post):** Paleta de colores súper contrastada y vibrante (Amarillo + Blanco + Rosa Cromo).
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/chrome-pink-supercar-selfie.jpg', '{
  "title": "Chrome Pink Supercar Selfie — Casual Instagram Main Character Mood",
  "framework_REAISEMP": {
    "subject": {
      "description": "Young woman taking selfie next to chrome pink BMW i8, casual main character energy",
      "setting_rules": "street scene, luxury car, urban modern backdrop",
      "age": "early 20s",
      "expression": {
        "eyes": "focused on phone screen, taking selfie, casual confidence",
        "mouth": "relaxed, soft, natural",
        "brows": "relaxed, effortless",
        "overall": "unbothered, ''just casually next to a pink supercar'' energy"
      },
      "hair": {
        "color": "platinum blonde",
        "style": "loose, flowing from under cap",
        "details": "messy-pretty, some pieces falling forward, effortless waves",
        "length": "medium-long, past shoulders"
      },
      "body": {
        "frame": "petite, slim, toned",
        "waist": "tiny, fully exposed midriff",
        "legs": "toned, athletic, fully visible",
        "stance": "casual lean against car, weight shifted"
      },
      "pose": {
        "position": "standing next to driver door of car, leaning slightly against it",
        "upper_body": {
          "action": "one arm UP holding phone for selfie",
          "phone_angle": "high, classic selfie position",
          "other_arm": "relaxed at side"
        },
        "lower_body": {
          "stance": "one leg straight, one slightly crossed or bent",
          "weight": "casual lean, hip near car",
          "energy": "relaxed but aware of angles"
        },
        "overall": "the ''caught me with this random supercar'' pose that''s definitely not random"
      },
      "clothing": {
        "top": {
          "type": "ultra cropped baby tee",
          "color": "bright YELLOW, sunshine yellow",
          "graphic": "small star or cute graphic on chest (or BANANA logo)",
          "fit": {
            "length": "EXTREME crop - ends just below chest, full stomach exposed",
            "tightness": "fitted, hugging curves",
            "sleeves": "short sleeves, casual"
          },
          "effect": "entire midriff visible from just under chest to shorts"
        },
        "bottom": {
          "type": "ultra mini athletic shorts",
          "color": "WHITE, clean bright white",
          "fit": {
            "style": "tight fitted athletic shorts",
            "length": "very short, upper thigh",
            "waist": "high-waisted, sits at natural waist",
            "effect": "shows full leg length, hugs curves"
          },
          "material": "stretchy athletic fabric, smooth"
        },
        "shoes": {
          "type": "white sneakers",
          "style": "clean, casual, athletic vibe",
          "effect": "completes sporty-cute look"
        }
      },
      "face": {
        "features": "pretty, big eyes, small nose, soft lips",
        "makeup": "natural, minimal, fresh-faced",
        "expression": "focused on selfie, casual pretty"
      }
    },
    "accessories": {
      "headwear": {
        "type": "baseball cap",
        "color": "BLACK",
        "style": "worn forward, classic",
        "logo": "small patch or logo visible",
        "effect": "sporty edge, hair flowing from underneath"
      },
      "headphones": {
        "type": "over-ear headphones",
        "color": "WHITE",
        "position": "around neck, not on ears",
        "style": "chunky, modern, like Beats or similar",
        "effect": "adds to casual ''just vibing'' energy"
      },
      "device": {
        "type": "iPhone",
        "position": "held up high for selfie",
        "case": "dark case visible"
      }
    },
    "the_car": {
      "make": "BMW i8",
      "wrap": "CHROME PINK / rose gold mirror finish",
      "effect": {
        "reflection": "mirror chrome reflecting everything around",
        "color": "pink/rose gold, flashy, attention-grabbing",
        "energy": "luxury, flex, main character vehicle"
      },
      "position": "parked on street, she''s standing next to driver side",
      "wheels": "black rims with pink accents matching wrap",
      "presence": "the car is a CO-STAR, not just background"
    },
    "environment": {
      "location": "modern urban area, upscale shopping district or hotel entrance",
      "ground": "cobblestone or nice pavement",
      "backdrop": {
        "buildings": "modern glass buildings, upscale retail",
        "elements": "architectural feature visible (sculptural element)",
        "other_cars": "normal cars parked nearby for contrast",
        "vibe": "wealthy area, nice neighborhood"
      },
      "time": "daytime, good natural light",
      "atmosphere": "urban luxury, casual wealth"
    },
    "photography": {
      "style": "candid-looking but obviously posed, lifestyle shot",
      "angle": "shot from front-side, capturing her full body + car",
      "quality": "high quality, could be iPhone or camera",
      "framing": "her centered, car visible behind/beside, environment context",
      "lighting": "natural daylight, flattering"
    },
    "color_story": {
      "her": {
        "top": "bright YELLOW",
        "shorts": "clean WHITE",
        "cap": "BLACK",
        "headphones": "WHITE",
        "shoes": "WHITE",
        "hair": "platinum BLONDE"
      },
      "car": "chrome PINK / rose gold",
      "overall": "yellow + white + pink chrome = eye-catching, vibrant, instagram-perfect"
    },
    "the_vibe": {
      "energy": "casual luxury, ''this is just my tuesday''",
      "mood": "unbothered, main character, casual flex",
      "contrast": "sporty casual outfit + absurd luxury car",
      "story": "she either owns this car or saw it and had to take a pic - either way she belongs next to it",
      "social_media": "this is THE instagram photo",
      "caption_energy": "''running errands'' or ''🩷'' or no caption needed"
    },
    "critical_elements": {
      "outfit_combo": "yellow crop + white shorts = sporty cute, maximum skin",
      "midriff": "fully exposed, tiny waist on display",
      "cap_headphones": "the combo that says ''casual but styled''",
      "car_color": "chrome pink/rose gold = the main prop",
      "selfie_action": "caught in the act of taking the pic",
      "energy": "effortless but everything is intentional"
    }
  }
}', '# Personalización de Selfie con Supercar
Sustituye la descripción del avatar o la marca de la gorra si prefieres usar otra prenda. Ajusta el color del envoltorio del coche cambiando `CHROME PINK / rose gold` por otro tono (ej. `CHROME EMERALD GREEN`).', 'Usa una foto donde tu sujeto esté mirando directamente a la cámara para mantener la mirada fija en el teléfono del selfie de manera coherente.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('34850c30-f8d2-42fd-8284-b02cfaddc162', '575e4ebd-f06b-4993-8199-933aeaf56baa') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('34850c30-f8d2-42fd-8284-b02cfaddc162', '60514d83-4505-48ee-87c7-40d282bc13f9') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('34850c30-f8d2-42fd-8284-b02cfaddc162', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('fde21abf-6859-4e85-8474-5d5822181c71', 'prompt', 'REAISEMP_Human — Cozy Y2K Winter Selfie', 'cozy-y2k-winter-selfie', 'Prompt ultra-realista de retrato lifestyle en plano picado con estética Y2K, flash de cámara retro y ambiente acogedor de noche invernal junto a la chimenea.', '
# Framework REAISEMP_Human

*   **R(Render del Avatar):** Mujer joven de piel clara bronceada, cabello rubio largo y voluminoso. Eyeliner alado y vestido sweater de punto crema oversized off-shoulder.
*   **E(Entorno):** Salón acogedor de noche invernal. Chimenea de gas con llamas naranjas, alfombra blanca mullida de pelo sintético y suelo de madera oscura.
*   **A(Acción / Postura):** Sentada en el suelo con piernas recogidas de lado, tomando una selfie con el brazo extendido desde arriba.
*   **I(Iluminación):** Flash frontal directo (sombras duras de cámara antigua) combinado con la luz cálida de la chimenea.
*   **S(Sensación / Atmósfera):** Cozy, íntimo, nostálgico, estética Y2K de influencer de noche de invierno.
*   **E(Estilo Visual):** Fotografía lifestyle ultra realista, estética de cámara digital clásica (principios de los 2000), ligeramente imperfecta.
*   **M(Composición / Cámara):** Plano medio picado (high-angle shot), encuadre casual y formato vertical 4:5.
*   **P(Postproducción):** Tonos cálidos y desaturados, nitidez natural de piel y tejido de punto sin filtros artificiales.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/cozy-y2k-winter-selfie.jpg', '{
  "title": "REAISEMP_Human — Cozy Y2K Winter Selfie",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer joven de piel clara bronceada, apariencia natural y fotográfica.",
      "cabello": "Largo, rubio, voluminoso, con ondas sueltas y raya lateral.",
      "rostro": "Ojos color avellana, cejas definidas, eyeliner ligeramente alado, labios nude glossy y contouring suave.",
      "expresion": "Mirada suave y cautivadora, cabeza ligeramente inclinada hacia la derecha.",
      "vestimenta": "Vestido sweater de punto grueso color crema, oversized, con cuello off-shoulder mostrando hombros y clavículas, mangas largas y textura de trenzado pronunciada."
    },
    "E_Entorno": {
      "escena": "Salón acogedor con iluminación tenue durante una noche de invierno.",
      "fondo": "Chimenea de gas con llamas naranjas intensas a la izquierda, repisa blanca, ventana o puerta de cristal oscura y sillón beige en la esquina superior derecha.",
      "suelo": "Madera oscura parcialmente cubierta por una alfombra mullida de pelo sintético blanco."
    },
    "A_Accion_Postura": {
      "pose": "Sentada en el suelo con las piernas flexionadas y recogidas hacia un lado.",
      "accion": "Selfie tomada con un brazo extendido hacia la cámara.",
      "lenguaje_corporal": "Postura relajada, espontánea e íntima.",
      "angulo": "Plano en picado pronunciado mirando hacia la modelo."
    },
    "I_Iluminacion": {
      "tipo": "Flash directo de cámara combinado con luz ambiental cálida de la chimenea.",
      "caracteristicas": "Flash frontal intenso con sombras marcadas detrás del sujeto y brillo cálido procedente del fuego.",
      "sombras": "Sombras duras pero naturales, características de una fotografía digital antigua."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Acogedor, íntimo, relajado y ligeramente nostálgico.",
      "tono": "Lifestyle de influencer con estética Y2K y vibra de noche invernal."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía lifestyle ultra realista con estética de cámara digital de principios de los 2000.",
      "acabado": "Natural, espontáneo y ligeramente imperfecto.",
      "paleta": "Neutros cálidos, crema, naranja del fuego y sombras marrón oscuro."
    },
    "M_Composicion_Camara": {
      "plano": "Selfie en plano medio desde una perspectiva elevada.",
      "angulo": "High-angle shot mirando hacia abajo.",
      "encuadre": "Composición casual, ligeramente imperfecta, con la modelo como punto focal.",
      "formato": "Vertical 4:5."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos cálidos y ligeramente desaturados con contraste propio de cámaras digitales antiguas.",
      "nitidez": "Detalle natural de piel, cabello y tejido de punto, sin apariencia artificial.",
      "acabado_final": "Realismo fotográfico, flash visible, estética Y2K auténtica y sensación de fotografía personal espontánea."
    }
  }
}', '# Personalización de Selfie Cozy Winter
Sustituye la descripción física del avatar (cabello, ojos, tono de piel) por la tuya. Ajusta la prenda (ej. cambia ''Vestido sweater de punto grueso color crema'' por ''Polerón de lana negro'') para renovar el outfit.', 'Usa una foto donde tu rostro se vea de frente o ligeramente perfilado de modo que el flash retro resalte tu mirada.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fde21abf-6859-4e85-8474-5d5822181c71', 'dc09f376-c86b-4590-8cb3-43f2d33da56c') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fde21abf-6859-4e85-8474-5d5822181c71', 'b53711bb-5c3b-4d1f-8176-4ddb47ebeaf8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fde21abf-6859-4e85-8474-5d5822181c71', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('4ac980f8-95c8-45ea-812c-411aac1dde56', 'prompt', 'REAISEMP_Human — Mirror Selfie Azul Eléctrico', 'electric-blue-mirror-selfie', 'Prompt ultra-realista de mirror selfie de cuerpo completo en un entorno interior minimalista y luminoso, destacando el vestido azul eléctrico brillante.', '
# Framework REAISEMP_Human

*   **R(Render del Avatar):** Mujer adulta sentada en el suelo frente a un gran espejo. Coleta rubia alta con mechones sueltos, vestido mini ajustado azul brillante y calcetines blancos altos de estilo deportivo.
*   **E(Entorno):** Habitación interior minimalista con paredes blancas, molduras decorativas y suelo de madera clara.
*   **A(Acción / Postura):** Sentada en el suelo, mano derecha sosteniendo el móvil con funda plateada y flash activo apuntando al espejo. Mano izquierda levantando ligeramente el cabello, mirada hacia el reflejo.
*   **I(Iluminación):** Iluminación interior brillante y flash directo del smartphone visible en el espejo con reflejos y destellos naturales.
*   **S(Sensación / Atmósfera):** Moderno, limpio, seguro y juvenil. Vibe de contenido espontáneo de redes sociales.
*   **E(Estilo Visual):** Fotografía mirror selfie de smartphone nítida y fotorrealista, textura natural de piel, vestido y madera.
*   **M(Composición / Cámara):** Composición frontal de cuerpo completo reflejada en el espejo, con la modelo centrada.
*   **P(Postproducción):** Tonos y colores limpios destacando el azul brillante y el fondo blanco con profundidad de campo natural.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/electric-blue-mirror-selfie.png', '{
  "title": "REAISEMP_Human — Mirror Selfie Azul Eléctrico",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer adulta sentada en el suelo frente a un gran espejo, capturando una selfie de cuerpo completo.",
      "cabello": "Rubio, recogido en una coleta alta con mechones sueltos enmarcando el rostro.",
      "rostro": "Maquillaje glam, eyeliner winged y labios mate en tono mauve/rosa.",
      "expresion": "Neutral, segura y natural.",
      "vestimenta": "Vestido mini ajustado color azul brillante, combinado con calcetines blancos altos hasta media pantorrilla con detalle tipo swoosh negro."
    },
    "E_Entorno": {
      "escena": "Habitación interior minimalista y luminosa.",
      "fondo": "Paredes blancas con molduras decorativas y suelo de madera clara.",
      "elementos": [
        "Gran espejo de cuerpo completo apoyado en el suelo",
        "Superficie limpia y minimalista",
        "Detalles arquitectónicos blancos"
      ]
    },
    "A_Accion_Postura": {
      "pose": "Sentada en el suelo frente al espejo con las piernas posicionadas naturalmente.",
      "accion": "La mano derecha sostiene el smartphone para realizar la selfie; la izquierda levanta el cabello o descansa cerca de la cabeza.",
      "lenguaje_corporal": "Relajado, seguro y espontáneo.",
      "mirada": "Dirigida hacia el reflejo del espejo."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación interior brillante combinada con flash directo del smartphone.",
      "caracteristicas": "Flash visible en el espejo, creando reflejos naturales y pequeñas variaciones de exposición.",
      "sombras": "Suaves, con sombras ligeramente marcadas alrededor del sujeto."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Moderno, limpio, juvenil y seguro.",
      "tono": "Lifestyle de influencer con estética casual y espontánea."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía mirror selfie ultra realista.",
      "acabado": "Natural, nítido y ligeramente imperfecto como contenido auténtico de redes sociales.",
      "detalle": "Textura real de piel, cabello, tejido del vestido y madera."
    },
    "M_Composicion_Camara": {
      "plano": "Plano de cuerpo completo sentado.",
      "angulo": "Perspectiva frontal mediante espejo.",
      "encuadre": "Modelo centrada y completamente visible dentro del espejo.",
      "dispositivo": "Smartphone con funda plateada/blanca y flash activo."
    },
    "P_Postproduccion": {
      "color_grading": "Colores limpios y naturales, destacando el azul brillante del vestido y los tonos blancos del entorno.",
      "nitidez": "Alta nitidez con profundidad de campo natural.",
      "acabado_final": "Fotografía realista de smartphone, sin apariencia de render 3D ni piel artificial."
    }
  }
}', '# Personalización de Mirror Selfie
Modifica el color del vestido cambiando ''color azul brillante'' por tu tono preferido (ej. ''color verde oliva''). Puedes sustituir los calcetines deportivos altos por zapatos de tacón o tenis casuales para cambiar el estilo de vestir.', 'Usa una foto de retrato clara donde la pose de tu cuerpo y manos sea similar para asegurar que el mapeo del rostro y los hombros encajen perfectamente en el espejo.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4ac980f8-95c8-45ea-812c-411aac1dde56', 'f1d11f80-ccff-4409-83b7-520e0c92da87') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4ac980f8-95c8-45ea-812c-411aac1dde56', 'b53711bb-5c3b-4d1f-8176-4ddb47ebeaf8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4ac980f8-95c8-45ea-812c-411aac1dde56', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('de54ef7c-ba06-454d-8b15-4d5c0888aa5a', 'prompt', 'REAISEMP_Human — Selfie cariñosa con cachorro', 'puppy-cuddle-selfie', 'Prompt ultra-realista de primer plano vertical lifestyle capturando una selfie espontánea de tu avatar abrazando de manera cariñosa a un esponjoso cachorro goldendoodle.', '
# Framework REAISEMP_Human

*   **R(Render del Avatar):** Mujer joven de piel cálida bronceada, cabello largo rubio recogido en moño alto desenfadado, aros dorados finos y tank top acanalado negro.
*   **E(Entorno):** Dormitorio luminoso y ordenado. Paredes blancas, puerta panelada azul marino, cómoda blanca y ventana amplia.
*   **A(Acción / Postura):** Sostiene cariñosamente a un cachorro dorado contra el pecho con ambas manos, cabeza inclinada y mirando de frente a la cámara con sonrisa suave.
*   **I(Iluminación):** Luz natural lateral procedente de la ventana a la derecha, suave y difusa.
*   **S(Sensación / Atmósfera):** Cálida, afectuosa, feliz, natural y familiar.
*   **E(Estilo Visual):** Fotografía lifestyle candid ultra realista tipo selfie de smartphone (iPhone). Texturas de algodón y pelaje muy definidas.
*   **M(Composición / Cámara):** Primer plano vertical (4:5) con la modelo y el cachorro centrados, ángulo de cámara levemente picado y fondo desenfocado.
*   **P(Postproducción):** Tonos cálidos y naturales, saturación realista, nitidez alta en texturas y sin marcas de agua ni texto.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/puppy-cuddle-selfie.jpg', '{
  "title": "REAISEMP_Human — Selfie cariñosa con cachorro",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer joven adulta de piel cálida bronceada, apariencia natural y sonrisa suave.",
      "cabello": "Recogido en un moño alto y desenfadado, con mechones sueltos enmarcando el rostro.",
      "rostro": "Maquillaje natural, piel realista, sonrisa delicada y mirada directa a cámara.",
      "vestimenta": "Tank top negro de tejido acanalado.",
      "accesorios": "Pequeños aros dorados, collar fino dorado y dos anillos en la mano izquierda."
    },
    "E_Entorno": {
      "escena": "Dormitorio luminoso y acogedor.",
      "fondo": "Paredes blancas, puerta panelada azul marino a la izquierda, cómoda blanca con tiradores negros, cama blanca con almohadas y ventana con marco blanco a la derecha.",
      "atmosfera": "Limpia, doméstica, cálida y natural, con muy poco desorden."
    },
    "A_Accion_Postura": {
      "pose": "La mujer sostiene al cachorro cerca del pecho con ambas manos y mantiene la cabeza ligeramente inclinada.",
      "accion": "Abraza al cachorro mientras mira y sonríe suavemente a la cámara.",
      "acompanante": "Cachorro pequeño tipo Goldendoodle o mezcla de caniche, de pelaje dorado claro, rizado y esponjoso, mirando hacia delante.",
      "lenguaje_corporal": "Cariñoso, relajado y espontáneo."
    },
    "I_Iluminacion": {
      "tipo": "Luz natural diurna procedente de la ventana.",
      "direccion": "Iluminación lateral desde la derecha.",
      "caracteristicas": "Luz suave, difusa y favorecedora con reflejos delicados sobre piel, cabello y pelaje.",
      "sombras": "Suaves y mínimas."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Cálido, afectuoso, casual y feliz.",
      "tono": "Lifestyle auténtico y espontáneo."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía lifestyle candid ultra realista.",
      "acabado": "Aspecto natural de smartphone, sin apariencia de estudio.",
      "texturas": "Pelaje rizado y suave, textura natural de piel y tejido de algodón del tank top.",
      "paleta": "Tonos cálidos y naturales: beige, negro, blanco y dorado, con azul marino como acento."
    },
    "M_Composicion_Camara": {
      "plano": "Primer plano vertical.",
      "angulo": "Ligeramente elevado, mirando hacia abajo.",
      "encuadre": "Mujer y cachorro centrados, ambos claramente visibles.",
      "profundidad": "Profundidad de campo reducida con fondo ligeramente desenfocado.",
      "camara": "Smartphone estilo iPhone con lente gran angular.",
      "aspect_ratio": "4:5 vertical"
    },
    "P_Postproduccion": {
      "color_grading": "Color cálido y natural, saturación realista y contraste moderado.",
      "nitidez": "Enfoque preciso en rostro y cachorro, conservando textura auténtica.",
      "acabado_final": "Fotografía espontánea de alta calidad con profundidad natural y sin texto visible.",
      "negative_prompts": [
        "blurry",
        "dark",
        "low quality",
        "artificial lighting",
        "sad expression",
        "different clothing",
        "different dog breed",
        "deformed anatomy",
        "extra limbs",
        "plastic skin",
        "cartoon",
        "3d render",
        "watermark",
        "text"
      ]
    }
  }
}', '# Personalización de Selfie con Cachorro
Sustituye los rasgos faciales y de vestimenta del avatar por los tuyos. Si prefieres otra raza de perro, edita ''Goldendoodle'' por el nombre de la raza que desees (ej. ''Pug'' o ''Golden Retriever'').', 'Usa una foto donde tu expresión sea alegre y relajada, preferiblemente con la cabeza un poco inclinada para que coincida de forma natural con la pose de abrazo.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('de54ef7c-ba06-454d-8b15-4d5c0888aa5a', '597d0932-6a36-4ec5-801b-f363602afddc') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('de54ef7c-ba06-454d-8b15-4d5c0888aa5a', 'b53711bb-5c3b-4d1f-8176-4ddb47ebeaf8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('de54ef7c-ba06-454d-8b15-4d5c0888aa5a', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('c00e6a8d-9dbf-456f-87f4-9ceb2f2402d0', 'prompt', 'REAISEMP_Human — Luxury Travel Private Jet', 'private-jet-luxury-travel', 'Prompt ultra-realista de retrato lifestyle en jet privado. El avatar posa relajado en asientos de cuero gris junto a la ventanilla con luz natural brillante.', '
# Framework REAISEMP_Human

*   **R(Render del Avatar):** Mujer joven de piel bronceada, cabello largo castaño con reflejos rubios ondulados, manicura degradada rosa y blanca, tank top blanco y pantalones negros.
*   **E(Entorno):** Cabina interior de jet privado de lujo. Asientos de cuero gris, paneles blancos, ventanilla con luz intensa y mochila de diseñador al lado.
*   **A(Acción / Postura):** Sentada de medio lado, la mano izquierda toca sutilmente el cabello y la mano derecha descansa en la rodilla. Joyería plateada fina y mochila visible.
*   **I(Iluminación):** Luz natural diurna difusa desde la derecha entrando por la ventanilla, ligera sobreexposición natural en el cristal de la ventana.
*   **S(Sensación / Atmósfera):** Relajado, casual, sofisticado y de alto standing.
*   **E(Estilo Visual):** Fotografía de viajes lifestyle candid ultra realista, grano fotográfico sutil y texturas de cuero, metal y algodón muy detalladas.
*   **M(Composición / Cámara):** Plano medio asimétrico (9:16 vertical), ángulo a la altura de los ojos (eye-level) con fondo suavemente desenfocado.
*   **P(Postproducción):** Colores neutros cálidos y naturales, contraste nítido y sin apariencia artificial de render 3D.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/private-jet-luxury-travel.png', '{
  "title": "REAISEMP_Human — Luxury Travel Private Jet",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer joven adulta de apariencia natural, piel bronceada y presencia relajada.",
      "cabello": "Largo, castaño con reflejos rubios, ondulado y cayendo naturalmente sobre los hombros.",
      "rostro": "Cejas definidas, labios carnosos y mirada directa a cámara, expresión neutra y segura.",
      "piel": "Complexión bronceada con textura natural y acabado realista.",
      "manicura": "Uñas largas y puntiagudas con manicura degradada rosa y blanco."
    },
    "E_Entorno": {
      "escena": "Interior de un jet privado de alta gama.",
      "fondo": "Asientos de cuero gris, paneles interiores blancos, ventanilla del avión con luz intensa y detalles de cabina.",
      "elementos": [
        "Hebilla del cinturón de seguridad",
        "Asiento opuesto desenfocado",
        "Ventana del avión",
        "Mochila de diseñador junto a la mujer"
      ],
      "atmosfera": "Exclusiva, limpia y sofisticada."
    },
    "A_Accion_Postura": {
      "pose": "Sentada en el asiento del avión con el cuerpo ligeramente orientado hacia la izquierda.",
      "accion": "La mano izquierda toca el cabello cerca de la parte superior de la cabeza mientras la mano derecha descansa sobre la rodilla con los dedos relajados.",
      "lenguaje_corporal": "Casual, relajado y seguro.",
      "accesorios": "Collar de cadena plateada, varios brazaletes plateados, anillo dorado, pendientes de aro y mochila de diseñador"
    },
    "I_Iluminacion": {
      "tipo": "Luz natural diurna entrando por la ventanilla.",
      "direccion": "Desde la derecha.",
      "caracteristicas": "Luz suave y difusa con delicados reflejos sobre cabello, brazo, piel y superficies de cuero.",
      "exposicion": "Correctamente expuesta con una ligera sobreexposición natural alrededor de la ventana.",
      "sombras": "Suaves, creadas por el cuerpo y los asientos para aportar profundidad."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Relajado, casual y lujoso.",
      "tono": "Momento cotidiano de viaje exclusivo, capturado de forma espontánea."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía lifestyle candid ultra realista.",
      "acabado": "Natural, ligeramente cinematográfico, con grano fotográfico sutil.",
      "texturas": "Piel y cabello naturales, cuero suave, tejido acanalado, joyería reflectante y cristal de la ventana.",
      "paleta": "Blanco, negro, gris y marrón cálido con tonos beige naturales."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio ligeramente amplio.",
      "angulo": "Eye-level.",
      "encuadre": "Composición asimétrica, con la mujer y la ventana dominando el lado derecho.",
      "foco": "Rostro y parte superior del cuerpo perfectamente enfocados.",
      "profundidad_de_campo": "Reducida, con el interior del avión suavemente desenfocado.",
      "aspect_ratio": "9:16 vertical",
      "camara": "Smartphone premium o cámara DSLR.",
      "optica": "35mm–50mm equivalente.",
      "ajustes": "ISO 200, f/2.8, 1/250s."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos cálidos y neutros, ligeramente apagados y naturales.",
      "contraste": "Contraste definido entre el top blanco, la ventana luminosa y los pantalones negros.",
      "nitidez": "Alta nitidez en sujeto con fondo más suave.",
      "acabado_final": "Fotografía de viaje de lujo auténtica, sin texto, gráficos ni apariencia de render 3D."
    }
  }
}', '# Personalización de Viaje en Jet Privado
Reemplaza los rasgos de la modelo para ajustarlos a tu avatar. Modifica los accesorios del jet cambiando ''mochila de diseñador'' por otra prenda o elemento (ej. ''una copa de champaña en la mesa lateral'').', 'Usa una foto donde tu rostro y hombros miren al frente con expresión relajada o segura para que coincida perfectamente con la perspectiva a nivel de ojos dentro de la cabina.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c00e6a8d-9dbf-456f-87f4-9ceb2f2402d0', '3bdcbcf8-8e36-409c-89d4-b433347525a1') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c00e6a8d-9dbf-456f-87f4-9ceb2f2402d0', '60514d83-4505-48ee-87c7-40d282bc13f9') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c00e6a8d-9dbf-456f-87f4-9ceb2f2402d0', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('d3a3e96f-dc5e-4bf3-8e3b-8ed2cd4eea14', 'prompt', 'REAISEMP_Human — Candid Flash Bedroom Night', 'candid-flash-bedroom-night', 'Prompt ultra-realista de fotografía candid nocturna con flash directo de smartphone. El avatar posa sentada en la cama de su dormitorio recogiéndose el pelo.', '
# Framework REAISEMP_Human

*   **R(Render del Avatar):** Mujer joven sentada en la cama, cabello rubio recogido con ambas manos, body negro de manga larga, jeans azul claro y collar con cruz pequeña.
*   **E(Entorno):** Dormitorio de noche. Cama grande con edredón beige, estructura de canopy metálica negra, ventana amplia con vistas a las luces de la ciudad y cortinas beige.
*   **A(Acción / Postura):** Torso orientado levemente a la izquierda, ambos brazos elevados para atar/ajustar el cabello, mirada contemplativa hacia la izquierda fuera de cámara.
*   **I(Iluminación):** Flash directo y frontal de smartphone con destello de alta intensidad, creando sombras nítidas detrás y reflejos brillantes en frente y piel.
*   **S(Sensación / Atmósfera):** Íntima, casual, cruda, doméstica y espontánea.
*   **E(Estilo Visual):** Fotografía de smartphone de noche (candid flash photography), grano fino y texturas reales de algodón, mezclilla y sábanas.
*   **M(Composición / Cámara):** Plano medio vertical (9:16), ángulo levemente contrapicado, sujeto centrado y profundidad de campo reducida con fondo de dormitorio suave.
*   **P(Postproducción):** Tonos y temperatura cálida del flash directo con saturación natural y contraste definido.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/candid-flash-bedroom-night.png', '{
  "title": "REAISEMP_Human — Candid Flash Bedroom Night",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer joven adulta sentada sobre la cama, capturada en un momento íntimo y espontáneo.",
      "cabello": "Rubio, recogido hacia atrás mientras ajusta o ata el cabello con ambas manos.",
      "rostro": "Piel clara y natural con reflejos intensos del flash, maquillaje mínimo.",
      "expresion": "Neutral y ligeramente contemplativa, mirando hacia la izquierda.",
      "vestimenta": {
        "top": "Body negro de manga larga con escote scoop-neck.",
        "bottom": "Jeans azul claro ligeramente desgastados."
      },
      "accesorios": "Pequeño collar dorado con cruz y pendientes de aro discretos."
    },
    "E_Entorno": {
      "escena": "Dormitorio durante la noche.",
      "fondo": "Cama grande con edredón y almohadas beige, estructura metálica tipo canopy, ventana amplia con cortinas beige y luces de la ciudad visibles en el exterior.",
      "elementos": [
        "Radiador debajo de la ventana",
        "Planta en maceta en una esquina",
        "Estructura metálica de cuatro postes"
      ],
      "atmosfera": "Íntima, doméstica y ligeramente nocturna."
    },
    "A_Accion_Postura": {
      "pose": "Sentada sobre la cama con el torso ligeramente orientado hacia la izquierda.",
      "accion": "Ambos brazos elevados mientras las manos recogen y ajustan el cabello hacia atrás.",
      "lenguaje_corporal": "Relajado, natural y ligeramente posado.",
      "mirada": "Dirigida hacia la izquierda, fuera de cámara."
    },
    "I_Iluminacion": {
      "tipo": "Flash directo de smartphone.",
      "direccion": "Frontal.",
      "intensidad": "Alta.",
      "caracteristicas": "Flash intenso con highlights marcados sobre frente, piel y parte superior del torso.",
      "sombras": "Sombras nítidas y definidas proyectadas detrás del sujeto.",
      "ambiente": "Ligero spill del flash mezclado con iluminación ambiental tenue del dormitorio."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Casual, relajado, íntimo y ligeramente contemplativo.",
      "tono": "Instantánea nocturna cruda y auténtica de redes sociales."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía candid de smartphone con estética de flash directo.",
      "acabado": "Raw, espontáneo y realista, evitando apariencia editorial excesivamente pulida.",
      "texturas": "Textura natural de piel, denim, tejido del body y ropa de cama.",
      "paleta": "Negro, azul grisáceo, beige cálido, blanco y pequeños acentos dorados."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio.",
      "angulo": "Ligeramente contrapicado.",
      "encuadre": "Sujeto centrado con el rostro situado en el tercio superior.",
      "profundidad_de_campo": "Reducida, con el fondo ligeramente desenfocado.",
      "camara": "Smartphone con flash activado.",
      "optica": "Gran angular moderado sin distorsión evidente.",
      "velocidad": "Rápida, congelando el movimiento.",
      "aspect_ratio": "9:16 vertical"
    },
    "P_Postproduccion": {
      "color_grading": "Tonalidad cálida producida por el flash, saturación media y contraste natural.",
      "nitidez": "Enfoque nítido sobre la mujer y textura realista de piel.",
      "acabado_final": "Fotografía nocturna auténtica, sin texto, otras personas, luz diurna, maquillaje pesado, ropa estampada ni distorsión extrema de gran angular."
    }
  }
}', '# Personalización de Flash Nocturno en Dormitorio
Modifica el top de manga larga negro por otro color (ej. ''blanco'' o ''rojo oscuro'') para jugar con el contraste del flash. Puedes adaptar el fondo de la ventana para reflejar otra localización de fondo en la ciudad.', 'Usa una foto tomada con flash frontal directo a tu avatar, preferiblemente levantando los brazos para simular la pose de atarse el pelo de manera fluida.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.820Z', '2026-08-29T17:52:58.820Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d3a3e96f-dc5e-4bf3-8e3b-8ed2cd4eea14', 'b53711bb-5c3b-4d1f-8176-4ddb47ebeaf8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d3a3e96f-dc5e-4bf3-8e3b-8ed2cd4eea14', '35cda63b-9cc3-436e-8635-96383ae7fabb') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('d3a3e96f-dc5e-4bf3-8e3b-8ed2cd4eea14', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('fe5d0fd3-00d6-4699-8029-4f2019068de4', 'prompt', 'REAISEMP_Human — Candid Porch Night', 'candid-porch-night', 'Prompt ultra-realista de fotografía candid nocturna en balcón o porche residencial. El avatar posa sentada con sudadera negra con el texto WANGHAF y gorra negra hacia atrás.', '
# Framework REAISEMP_Human

*   **R(Render del Avatar):** Persona rubia sentada de forma relajada, cabello largo saliendo bajo gorra de béisbol negra hacia atrás, sudadera con capucha negra con el texto WANGHAF y pantalones grises.
*   **E(Entorno):** Porche residencial de noche. Ventana con persianas, barandilla de madera blanca, macetas con plantas verdes, silla y mesa de metal blanca con un vaso de papel.
*   **A(Acción / Postura):** Sentada en la silla metálica, mirando ligeramente hacia arriba de forma expectante, mientras otra persona (parcialmente visible) acerca un cigarrillo a su boca.
*   **I(Iluminación):** Flash directo de cámara con fuerte intensidad frontal y caída de iluminación rápida hacia el fondo oscuro del porche.
*   **S(Sensación / Atmósfera):** Relajada, casual, íntima, de instantánea entre amigos.
*   **E(Estilo Visual):** Fotografía de estilo de vida candid nocturna con flash, grano analógico sutil y texturas de algodón, madera y hojas verdes muy naturales.
*   **M(Composición / Cámara):** Plano medio vertical (9:16), perspectiva a nivel de los ojos (eye-level) con enfoque nítido sobre el sujeto principal.
*   **P(Postproducción):** Contraste fuerte producido por el flash directo, colores y tonos nocturnos naturales. Texto WANGHAF perfectamente legible en la sudadera.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/candid-porch-night.png', '{
  "title": "REAISEMP_Human — Candid Porch Night",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Persona joven adulta sentada de forma relajada en un porche residencial durante la noche.",
      "cabello": "Largo y rubio, parcialmente oculto bajo una gorra.",
      "headwear": "Gorra de béisbol negra colocada hacia atrás.",
      "vestimenta": {
        "top": "Sudadera negra con el texto WANGHAF claramente visible en la parte frontal.",
        "bottom": "Pantalones deportivos grises."
      },
      "expresion": "Boca ligeramente abierta, expresión neutral y expectante.",
      "mirada": "Ligeramente elevada hacia la persona que está frente a ella."
    },
    "E_Entorno": {
      "escena": "Porche o balcón residencial exterior durante la noche.",
      "fondo": "Ventana con persianas, barandilla del porche y vegetación doméstica.",
      "elementos": [
        "Silla metálica blanca",
        "Mesa pequeña metálica blanca",
        "Vaso de papel sobre la mesa",
        "Plantas en macetas",
        "Ventana con persianas",
        "Barandilla del porche"
      ],
      "atmosfera": "Casual, cotidiana y espontánea."
    },
    "A_Accion_Postura": {
      "pose": "Persona sentada en una silla metálica blanca.",
      "accion": "Otra persona, visible únicamente parcialmente, acerca un cigarrillo hacia la boca de la persona sentada.",
      "lenguaje_corporal": "Relajado y natural, como una instantánea espontánea entre amigos.",
      "interaccion": "La persona sentada mira ligeramente hacia arriba en dirección a quien ofrece el cigarrillo."
    },
    "I_Iluminacion": {
      "tipo": "Flash directo de cámara.",
      "fuente": "Flash frontal con poca luz ambiental.",
      "direccion": "Frontal.",
      "caracteristicas": "Iluminación intensa sobre el sujeto y objetos cercanos, con caída rápida de luz hacia el fondo.",
      "sombras": "Sombras definidas y naturales proyectadas detrás de los objetos."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Casual, candid and ligeramente nocturno.",
      "tono": "Fotografía espontánea de redes sociales, sin apariencia de sesión profesional."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía lifestyle candid con flash directo.",
      "acabado": "Raw, espontáneo, ligeramente imperfecto y ultra realista.",
      "texturas": "Tela de la sudadera, algodón del pantalón, metal pintado, plantas y superficies exteriores.",
      "paleta": "Negro, gris, blanco y tonos verdes oscuros con iluminación cálida del flash."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio.",
      "angulo": "Eye-level.",
      "encuadre": "Sujeto principal centrado, con parte de la segunda persona entrando naturalmente en el encuadre.",
      "orientacion": "Vertical.",
      "aspect_ratio": "9:16 vertical",
      "profundidad_de_campo": "Moderada, manteniendo al sujeto nítido y el fondo ligeramente suave."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos nocturnos naturales con contraste producido por el flash.",
      "nitidez": "Alta nitidez en rostro, ropa y objetos cercanos.",
      "texto": "Mantener exactamente el texto WANGHAF en la parte frontal de la sudadera, perfectamente legible y sin caracteres adicionales.",
      "acabado_final": "Fotografía nocturna auténtica, sin estética de estudio, sin texto adicional ni apariencia de render."
    }
  }
}', '# Personalización de Balcón Nocturno
Edita el texto frontal ''WANGHAF'' por la palabra que quieras en tu sudadera. Puedes modificar el color del pantalón deportivo gris a otro tono o sustituir la gorra por el pelo libre.', 'Usa una foto donde tu rostro esté perfilado de tres cuartos mirando ligeramente hacia arriba para encajar bien con la dirección de la mirada.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.821Z', '2026-08-29T17:52:58.821Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fe5d0fd3-00d6-4699-8029-4f2019068de4', '63636fb4-1990-4e4b-86aa-57e06467efd3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fe5d0fd3-00d6-4699-8029-4f2019068de4', '35cda63b-9cc3-436e-8635-96383ae7fabb') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fe5d0fd3-00d6-4699-8029-4f2019068de4', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('950e7a3c-68f4-4a65-84f5-6dfc98de0d9d', 'prompt', 'REAISEMP_Human — Paris Night Portrait by the Seine', 'paris-night-seine', 'Prompt ultra-realista de retrato nocturno de viaje en París junto al río Sena. El avatar posa elegante con blazer negro frente a la Torre Eiffel iluminada.', '
# Framework REAISEMP_Human

*   **R(Render del Avatar):** Mujer joven rubia, cabello largo y ondulado cayendo sobre los hombros, blazer negro con escote en V pronunciado, collar dorado y pendientes de aro.
*   **E(Entorno):** Orilla del río Sena en París durante la noche. Torre Eiffel iluminada en tonos dorados al fondo, agua reflejando las luces doradas, barandilla metálica en primer plano.
*   **A(Acción / Postura):** De pie, apoyada ligeramente sobre la barandilla de metal con una mano relajada. Postura elegante, mirada pensativa dirigida hacia arriba y a la izquierda.
*   **I(Iluminación):** Mezcla de luz ambiental nocturna (dorada artificial de la Torre Eiffel) y flash directo frontal para iluminar a la mujer. Contraste alto con fondo y cielo oscuro.
*   **S(Sensación / Atmósfera):** Romántica, glamurosa, cinematográfica y serena.
*   **E(Estilo Visual):** Retrato nocturno de viaje ultra realista con texturas definidas en cabello, blazer negro y metal de la barandilla.
*   **M(Composición / Cámara):** Plano medio vertical (9:16) con composición asimétrica (ella a la derecha, la Torre Eiffel dominando la parte izquierda), ángulo a nivel de ojos y fondo desenfocado.
*   **P(Postproducción):** Tonos dorados cálidos y negros profundos con alta definición en el sujeto principal sin filtros de estudio exagerados.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/paris-night-seine.png', '{
  "title": "REAISEMP_Human — Paris Night Portrait by the Seine",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer joven adulta de cabello rubio largo y ondulado, capturada en un retrato nocturno elegante y contemplativo.",
      "cabello": "Largo, rubio y ondulado, cayendo naturalmente sobre los hombros.",
      "rostro": "Piel con textura natural, expresión serena y mirada pensativa.",
      "expresion": "Pensive, calm and slightly melancholic.",
      "vestimenta": "Blazer negro elegante con escote profundo en V.",
      "accesorios": "Collar dorado y pendientes de aro."
    },
    "E_Entorno": {
      "escena": "Orilla del río Sena en París durante la noche.",
      "fondo": "Torre Eiffel iluminada en tonos dorados, agua del Sena reflejando las luces, embarcaciones desenfocadas y luces urbanas lejanas.",
      "elementos": [
        "Barandilla metálica en primer plano",
        "Barcos sobre el Sena",
        "Puente distante",
        "Luces de la ciudad",
        "Cielo nocturno oscuro con ligeros rastros luminosos"
      ],
      "atmosfera": "Glamurosa, romántica, serena y cinematográfica."
    },
    "A_Accion_Postura": {
      "pose": "De pie, apoyándose ligeramente sobre la barandilla.",
      "accion": "Una mano descansa parcialmente sobre la barandilla mientras mantiene una postura relajada.",
      "lenguaje_corporal": "Elegante, contenida y contemplativa.",
      "mirada": "Dirigida hacia arriba y hacia la izquierda, alejándose de la cámara."
    },
    "I_Iluminacion": {
      "tipo": "Combinación de iluminación ambiental nocturna y flash directo.",
      "fuente_principal": "Iluminación dorada artificial de la Torre Eiffel.",
      "fuente_secundaria": "Flash directo de cámara.",
      "caracteristicas": "El flash ilumina claramente a la mujer mientras las luces doradas de París y sus reflejos permanecen visibles en el fondo.",
      "sombras": "Suaves sobre rostro y ropa, con zonas oscuras profundas en el entorno.",
      "contraste": "Alto contraste entre sujeto iluminado, cielo nocturno y reflejos dorados."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Glamuroso, pensativo, sereno y nocturno.",
      "tono": "Retrato de viaje sofisticado con estética de influencer y sensación cinematográfica."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía nocturna de retrato y travel photography ultra realista.",
      "acabado": "Realista, elegante y ligeramente dramático.",
      "texturas": "Cabello fluido, piel natural, metal de la barandilla, agua reflectante y estructura iluminada de la Torre Eiffel.",
      "paleta": "Dorado intenso, negro profundo, beige cálido, piel cálida y gris metálico."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio vertical.",
      "angulo": "Eye-level.",
      "encuadre": "La mujer ocupa la zona inferior centro-derecha mientras la Torre Eiffel domina el centro-superior izquierdo.",
      "profundidad_de_campo": "Reducida, manteniendo sujeto y barandilla definidos con el fondo ligeramente desenfocado.",
      "camara": "Smartphone premium.",
      "optica": "Gran angular moderado, aproximadamente 26mm equivalente.",
      "aspect_ratio": "9:16 vertical",
      "ajustes": "Apertura aproximada f/1.8, velocidad suficiente para congelar el flash y sensibilidad moderadamente alta."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos dorados cálidos contrastados con negros profundos y cielo nocturno.",
      "saturacion": "Rica pero natural.",
      "nitidez": "Alta nitidez sobre la mujer y la barandilla, con suavidad progresiva en el fondo.",
      "acabado_final": "Retrato nocturno realista y lujoso, sin multitudes, lluvia, luz diurna, ojos rojos, blanco y negro ni texto visible."
    }
  }
}', '# Personalización de Retrato en París
Modifica el blazer negro por un vestido de cóctel elegante para cambiar la formalidad de la foto. Puedes cambiar la localización sustituyendo la Torre Eiffel por otro monumento famoso del mundo.', 'Usa una foto donde tu rostro mire ligeramente de perfil hacia arriba para que encaje perfectamente con la pose contemplativa junto al río Sena.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.821Z', '2026-08-29T17:52:58.821Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('950e7a3c-68f4-4a65-84f5-6dfc98de0d9d', '3bdcbcf8-8e36-409c-89d4-b433347525a1') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('950e7a3c-68f4-4a65-84f5-6dfc98de0d9d', '35cda63b-9cc3-436e-8635-96383ae7fabb') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('950e7a3c-68f4-4a65-84f5-6dfc98de0d9d', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('e598a91b-b170-448f-8eee-f60954bf701f', 'prompt', 'REAISEMP_Human — Urban Luxury Daylight Portrait', 'urban-luxury-daylight', 'Prompt ultra-realista de retrato chic urbano con luz de día natural en plaza comercial elegante. El avatar posa sonriente sentada sobre un banco de mármol gris con bolso de diseñador.', '
# Framework REAISEMP_Human

*   **R(Render del Avatar):** Mujer joven de silueta curvilínea, cabello rubio castaño ondulado muy largo sobre el hombro, blusa wrap verde oliva, pantalón negro de tiro alto y manicura roja.
*   **E(Entorno):** Plaza exterior moderna con banco de mármol gris claro, boutique de lujo al fondo con vitrinas y transeúntes desenfocados.
*   **A(Acción / Postura):** Sentada de lado en el banco de mármol, cuerpo ligeramente inclinado hacia el frente, mirada directa y alegre a la cámara con una mano descansando en su hombro. Bolso negro con cadena dorada en el banco.
*   **I(Iluminación):** Luz natural diurna brillante, iluminación lateral y frontal suave y favorecedora sin sombras duras.
*   **S(Sensación / Atmósfera):** Elegante, alegre, glamurosa, urbana y lifestyle sofisticado.
*   **E(Estilo Visual):** Retrato urbano chic altamente realista con grano analógico sutil y definición clara de piel, cabello ondulado, mármol y cuero.
*   **M(Composición / Cámara):** Plano medio-largo vertical (4:5), ángulo ligeramente contrapicado, objetivo de retrato 50mm–85mm con apertura f/2.0–f/3.5 logrando un bokeh suave.
*   **P(Postproducción):** Tonos cálidos y luminosos con saturación realista y contraste moderado. Sin marcas de agua, textos ni imperfecciones 3D.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/urban-luxury-daylight.jpg', '{
  "title": "REAISEMP_Human — Urban Luxury Daylight Portrait",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer joven adulta de figura curvilínea, apariencia sofisticada y presencia natural.",
      "cabello": "Muy largo, grueso y ondulado, cayendo sobre hombro y pecho.",
      "rostro": "Piel clara, luminosa y saludable; cejas oscuras arqueadas, eyeliner negro, sombras neutras, pestañas largas y labios rosados con gloss.",
      "expresion": "Sonrisa amplia, radiante y cautivadora.",
      "vestimenta": {
        "top": "Blusa verde oliva tipo wrap con escote V, mangas 3/4 ligeramente recogidas y tejido fluido.",
        "bottom": "Pantalón negro de cintura alta, ajustado y con textura vertical sutil."
      },
      "accesorios": "Pendientes largos dorados, pulsera delicada con detalles verdes, reloj plateado con esfera blanca y manicura roja."
    },
    "E_Entorno": {
      "escena": "Zona urbana exterior elegante durante un día soleado.",
      "fondo": "Plaza o acera moderna con banco amplio de mármol gris claro y fachada de boutique de lujo detrás.",
      "elementos": [
        "Banco de mármol gris claro",
        "Vitrinas de cristal",
        "Estructuras metálicas y toldos",
        "Columnas arquitectónicas",
        "Personas pasando desenfocadas"
      ],
      "atmosfera": "Urban elegance, daytime glamour, sofisticación lifestyle."
    },
    "A_Accion_Postura": {
      "pose": "Sentada de lado sobre el banco, con el torso ligeramente inclinado hacia delante.",
      "accion": "Una mano descansa suavemente sobre el hombro mientras mantiene una postura relajada.",
      "lenguaje_corporal": "Elegante, segura y natural.",
      "mirada": "Directa hacia la cámara.",
      "prop": "Bolso negro de cuero con cadena dorada y medallón dorado decorativo apoyado sobre el banco junto a ella."
    },
    "I_Iluminacion": {
      "tipo": "Luz natural diurna brillante.",
      "direccion": "Lateral y ligeramente frontal.",
      "caracteristicas": "Luz suave y favorecedora, posiblemente reflejada por superficies urbanas.",
      "sombras": "Muy suaves, evitando sombras duras sobre rostro y cuerpo.",
      "efecto": "Realza el brillo natural de la piel, cabello y colores de la ropa."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Elegante, alegre, sofisticado y seguro.",
      "tono": "Retrato urbano premium con sensación espontánea y lifestyle."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato urbano chic y fotorealista.",
      "acabado": "Limpio, natural y sofisticado, sin apariencia excesivamente retocada.",
      "texturas": "Piel realista, cabello ondulado, tejido fluido, cuero, mármol y metal.",
      "paleta": "Verde oliva, negro, gris mármol, dorado y tonos naturales de piel."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio-largo.",
      "angulo": "Ligeramente contrapicado.",
      "encuadre": "Sujeto claramente separado del fondo urbano.",
      "camara": "Cámara full-frame.",
      "optica": "Objetivo de retrato 50mm–85mm.",
      "apertura": "f/2.0–f/3.5.",
      "profundidad_de_campo": "Bokeh suave, manteniendo rostro, ropa y accesorios nítidos.",
      "aspect_ratio": "4:5 vertical"
    },
    "P_Postproduccion": {
      "color_grading": "Color natural con tonos cálidos y luminosos.",
      "contraste": "Moderado y elegante.",
      "nitidez": "Alta definición en rostro y sujeto, fondo suavemente desenfocado.",
      "acabado_final": "Fotografía editorial lifestyle realista, sin texto, sin deformaciones y sin apariencia de render 3D."
    }
  }
}', '# Personalización de Retrato Urbano de Día
Modifica la blusa wrap verde oliva por otra prenda y color de tu elección (ej. ''camisa de lino blanca''). Puedes sustituir el bolso negro con cadena dorada por otro accesorio como unas gafas de sol.', 'Usa una foto donde tu rostro tenga una sonrisa radiante y mire directamente a la cámara para asegurar una coherencia perfecta con la expresión alegre del prompt.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.821Z', '2026-08-29T17:52:58.821Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e598a91b-b170-448f-8eee-f60954bf701f', '575e4ebd-f06b-4993-8199-933aeaf56baa') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e598a91b-b170-448f-8eee-f60954bf701f', '63636fb4-1990-4e4b-86aa-57e06467efd3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('e598a91b-b170-448f-8eee-f60954bf701f', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('7592cde5-7f95-480b-8177-956d8c0bfaec', 'prompt', 'REAISEMP_Human — Alpine Ski Selfie', 'alpine-ski-selfie', 'Prompt ultra-realista de selfie de medio cuerpo durante un día de esquí en los Alpes. El avatar posa frente a un chalet tradicional con montañas nevadas de fondo.', '
# Framework REAISEMP_Human

*   **R(Render del Avatar):** Mujer joven de apariencia y cabello natural recogido en messy bun, chaqueta de esquí rosa y verde con pantalones a juego y gafas de nieve reflectantes.
*   **E(Entorno):** Exterior de un chalet alpino tradicional de madera con nieve fresca y montañas nevadas en el fondo.
*   **A(Acción / Postura):** Sosteniendo el smartphone con el brazo extendido para tomar una selfie casual, mirada directa al objetivo.
*   **I(Iluminación):** Luz natural diurna fría e intensa, típica de invierno, con reflejos sobre nieve y ropa técnica.
*   **S(Sensación / Atmósfera):** Aventura invernal, fresca, elegante y sofisticada.
*   **E(Estilo Visual):** Selfie smartphone ultra fotorealista, texturas de nieve, tela técnica y poros de piel muy definidos.
*   **M(Composición / Cámara):** Plano medio de selfie (9:16 vertical), ángulo sutilmente por encima de los ojos con profundidad de campo natural.
*   **P(Postproducción):** Tonos fríos y contrastes limpios, manteniendo alta nitidez en rostro y sin distorsión extrema.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/alpine-ski-selfie.jpg', '{
  "title": "REAISEMP_Human — Alpine Ski Selfie",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer joven adulta tomando un selfie casual durante un día de esquí.",
      "face_identity": "Usar la imagen de referencia como identidad facial principal; preservar estructura, proporciones, textura de piel, lunares, marcas y rasgos distintivos.",
      "cabello": "Mismo color que la referencia, recogido en un messy bun con mechones sueltos alrededor del rostro.",
      "rostro": "Textura de piel auténtica, poros visibles y apariencia natural.",
      "expresion": "Natural, relajada y espontánea.",
      "mirada": "Directamente hacia la cámara.",
      "vestimenta": {
        "outfit": "Chaqueta de esquí rosa y verde con pantalones de esquí a juego.",
        "estilo": "Moda alpina moderna y funcional."
      },
      "accesorios": "Gafas de nieve grandes y reflectantes, eyeliner negro."
    },
    "E_Entorno": {
      "escena": "Exterior de un chalet alpino durante un día despejado de invierno.",
      "fondo": "Casa de arquitectura tradicional de madera, terreno cubierto de nieve y montañas alpinas visibles al fondo.",
      "elementos": [
        "Nieve fresca en el suelo",
        "Fachada de madera",
        "Arquitectura tipo chalet",
        "Montañas nevadas"
      ],
      "atmosfera": "Aventura invernal, fresca, natural y sofisticada."
    },
    "A_Accion_Postura": {
      "pose": "Sosteniendo el smartphone con el brazo extendido para realizar un selfie.",
      "accion": "Selfie casual estilo Instagram.",
      "lenguaje_corporal": "Relajado y espontáneo.",
      "mirada": "Directa al objetivo."
    },
    "I_Iluminacion": {
      "tipo": "Luz natural diurna intensa.",
      "calidad": "Luz fría, limpia y nítida característica de un día de invierno.",
      "sombras": "Suaves pero definidas.",
      "efecto": "Reflejos naturales sobre nieve, gafas y prendas técnicas."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Fresco, aventurero, casual y elegante.",
      "tono": "Instagram lifestyle auténtico durante unas vacaciones de esquí."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Selfie smartphone ultra fotorealista.",
      "acabado": "Natural, espontáneo y sin apariencia de render.",
      "texturas": "Poros visibles, cabello natural, tejido técnico de la ropa y textura realista de la nieve.",
      "color_grading": "Tonos fríos, limpios y naturales."
    },
    "M_Composicion_Camara": {
      "plano": "Selfie de medio cuerpo.",
      "angulo": "Ligeramente por encima del nivel de los ojos.",
      "encuadre": "Composición casual, con el rostro como punto focal y el paisaje alpino claramente reconocible.",
      "camara": "Cámara frontal de smartphone.",
      "profundidad_de_campo": "Natural, sin desenfoque artificial excesivo.",
      "aspect_ratio": "9:16 vertical"
    },
    "P_Postproduccion": {
      "identidad": "Bloqueo estricto de identidad facial respecto a la referencia.",
      "nitidez": "Alta nitidez en rostro, cabello, ropa y gafas.",
      "detalle_piel": "Poros y textura natural visibles, sin efecto plástico.",
      "ruido": "Mínimo pero conservando apariencia fotográfica auténtica.",
      "acabado_final": "Ultra fotorealista, limpio y natural, sin texto, deformaciones, piel artificial ni elementos generados innecesarios."
    }
  }
}', '# Personalización de Esquí Alpino
Modifica el color de la chaqueta rosa y verde por los colores de tu propia equipación. Puedes cambiar la expresión facial o sustituir las gafas reflectantes por unas gafas normales de esquí.', 'Usa una foto donde mantengas tu peinado recogido en moño y los brazos extendidos para simular perfectamente el agarre a dos manos del smartphone al tomar la foto.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.821Z', '2026-08-29T17:52:58.821Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('7592cde5-7f95-480b-8177-956d8c0bfaec', '75615c42-fbb6-4999-80f0-db023929a962') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('7592cde5-7f95-480b-8177-956d8c0bfaec', '63636fb4-1990-4e4b-86aa-57e06467efd3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('7592cde5-7f95-480b-8177-956d8c0bfaec', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('80ea00c2-1050-46ec-8ff2-0b8b7367f068', 'prompt', 'REAISEMP_Human — Lazy Sunday Mirror Selfie', 'lazy-sunday-mirror-selfie', 'Prompt ultra-realista de mirror selfie de cuerpo completo reflejado en espejo dorado. El avatar posa sentada en el suelo del dormitorio con tank top acanalado blanco y shorts grises jaspeados.', '
# Framework REAISEMP_Human

*   **R(Render del Avatar):** Mujer joven de complexión atlética, cabello rubio platino recogido en messy low bun con mechones sueltos, tank top blanco cropped de algodón ribbed y shorts grises jaspeados, descalza.
*   **E(Entorno):** Dormitorio acogedor de mañana tranquila. Espejo de cuerpo completo con marco dorado, suelo de madera, cama sin hacer con sábanas grises y habitación ligeramente desordenada.
*   **A(Acción / Postura):** Sentada en el suelo de madera apoyando el torso hacia atrás en la mano izquierda, tomando un mirror selfie con el móvil en la mano derecha, mirada hacia la pantalla.
*   **I(Iluminación):** Luz natural lateral de ventana matutina suave y cálida, con un ligero resplandor dorado.
*   **S(Sensación / Atmósfera):** Cozy, íntimo, relajado, cotidiano, vibra de lazy Sunday y soft girl aesthetic.
*   **E(Estilo Visual):** Mirror selfie de smartphone realista e imperfecto, texturas de algodón, madera y ropa de cama muy naturales.
*   **M(Composición / Cámara):** Reflejo frontal de cuerpo completo en espejo, modelo centrada y dormitorio visible alrededor, formato vertical 4:5.
*   **P(Postproducción):** Tonos cremas, grises y dorados con alta definición en el sujeto principal sin filtros de estudio. Funda transparente con stickers visible en el iPhone.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/lazy-sunday-mirror-selfie.jpg', '{
  "title": "REAISEMP_Human — Lazy Sunday Mirror Selfie",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer joven adulta de complexión delgada, atlética y tonificada.",
      "cabello": "Rubio platino muy claro, recogido en un messy low bun con mechones sueltos enmarcando el rostro.",
      "piel": "Clara y natural, con textura realista.",
      "expresion": "Mirada suave hacia el teléfono, relajada, con una ligera sonrisa.",
      "vestimenta": {
        "top": "Tank top blanco de algodón ribbed, cropped, cuello alto tipo racer-back y ajuste ceñido.",
        "bottom": "Shorts de algodón gris jaspeado, cortos, holgados y con cintura elástica.",
        "pies": "Descalza."
      },
      "accesorio": "iPhone con funda transparente y stickers visibles."
    },
    "E_Entorno": {
      "escena": "Dormitorio acogedor durante una mañana tranquila.",
      "fondo": "Espejo de cuerpo completo con marco dorado, suelo de madera y paredes color crema.",
      "elementos": [
        "Cama sin hacer con ropa de cama gris",
        "Ropa esparcida casualmente por el suelo",
        "Habitación ligeramente desordenada",
        "Detalles cotidianos de un espacio habitado"
      ],
      "atmosfera": "Íntima, acogedora, espontánea y auténtica, con energía de lazy Sunday."
    },
    "A_Accion_Postura": {
      "pose": "Sentada sobre el suelo de madera frente al espejo, apoyándose hacia atrás sobre la mano izquierda.",
      "accion": "Tomando un mirror selfie con el smartphone.",
      "piernas": "Pierna izquierda flexionada hacia arriba y pierna derecha doblada debajo del cuerpo.",
      "lenguaje_corporal": "Relajado, cómodo y completamente natural.",
      "mirada": "Hacia el teléfono, ligeramente hacia abajo."
    },
    "I_Iluminacion": {
      "tipo": "Luz natural de mañana.",
      "direccion": "Luz lateral procedente de una ventana.",
      "calidad": "Suave y cálida, con un ligero resplandor dorado.",
      "sombras": "Naturales y delicadas, conservando profundidad sin aspecto de iluminación de estudio."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Cozy, íntimo, relajado y espontáneo.",
      "tono": "Soft girl aesthetic, auténtico y cotidiano."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Mirror selfie candid de smartphone, hiperrealista.",
      "acabado": "Natural, ligeramente imperfecto y propio de una fotografía personal.",
      "texturas": "Piel realista, algodón ribbed, tejido de los shorts, madera y ropa de cama.",
      "color_grading": "Tonos crema, gris, blanco y dorado cálido con contraste suave."
    },
    "M_Composicion_Camara": {
      "plano": "Reflejo de cuerpo completo.",
      "angulo": "Perspectiva de selfie frente al espejo.",
      "encuadre": "La mujer ocupa la mayor parte del reflejo mientras el dormitorio permanece visible alrededor.",
      "foco": "Sujeto nítido dentro del espejo.",
      "camara": "Smartphone.",
      "aspect_ratio": "4:5 vertical"
    },
    "P_Postproduccion": {
      "nitidez": "Alta en sujeto, cabello, ropa y teléfono.",
      "acabado_final": "Fotografía UGC hiperrealista y espontánea, conservando pequeñas imperfecciones del entorno, sin apariencia de estudio, piel plástica, render 3D, texto añadido ni elementos artificiales."
    }
  }
}', '# Personalización de Selfie Dominical Relajado
Sustituye la descripción del pelo y ropa por la tuya. Puedes alterar la funda de stickers y el diseño de la cama de fondo modificando la descripción en los campos correspondientes de entorno.', 'Usa una foto donde estés sentada en el suelo apoyándote hacia atrás de manera lateral para que el render conserve la inclinación corporal exacta.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.821Z', '2026-08-29T17:52:58.821Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('80ea00c2-1050-46ec-8ff2-0b8b7367f068', 'f1d11f80-ccff-4409-83b7-520e0c92da87') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('80ea00c2-1050-46ec-8ff2-0b8b7367f068', 'b53711bb-5c3b-4d1f-8176-4ddb47ebeaf8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('80ea00c2-1050-46ec-8ff2-0b8b7367f068', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('75eb4763-289a-4257-829e-237ed259d4b8', 'prompt', 'REAISEMP_Human — Vintage Slip Bathroom Vanity', 'vintage-slip-bathroom-vanity', 'Prompt ultra-realista de fotografía mirror selfie analógica de 35mm. El avatar posa sentada en el mostrador del baño vistiendo un vestido de seda vintage.', '
# Framework REAISEMP_Human

*   **R(Render del Avatar):** Mujer joven de figura esbelta, cabello recogido suelto y desordenado con mechones finos, vestido slip vintage de seda con bordes de encaje claro.
*   **E(Entorno):** Baño residencial compacto. Espejo de vanity con manchas de agua, mostrador desordenado con cosméticos, brochas y productos de aseo personal.
*   **A(Acción / Postura):** Sentada sobre el mostrador del baño, inclinándose hacia el espejo con piernas relajadas de lado, mirada dirigida al reflejo del espejo.
*   **I(Iluminación):** Flash frontal directo y duro con sombras marcadas y highlights especulares, combinado con luz de tungsteno ambiental tenue y cálida de fondo.
*   **S(Sensación / Atmósfera):** Cool, íntimo, crudo, privado y nocturno.
*   **E(Estilo Visual):** Fotografía mirror selfie con estética analógica de point-and-shoot de 35mm con grano visible y viñeteado natural.
*   **M(Composición / Cámara):** Plano thighs-up vertical (4:5) desde el reflejo del espejo a nivel de los ojos (eye-level), con objetos desenfocados en primer plano para aportar profundidad.
*   **P(Postproducción):** Negros ligeramente lavados, sombras verdosas y rojos saturados de forma moderada. Enfoque nítido pero suave característico de película vintage.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/vintage-slip-bathroom-vanity.jpg', '{
  "title": "REAISEMP_Human — Vintage Slip Bathroom Vanity",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer adulta joven, principios de los 20, figura esbelta y apariencia natural.",
      "cabello": "Recogido suelto y ligeramente desordenado, con mechones enmarcando el rostro.",
      "rostro": "Piel realista con textura visible, sin retoque excesivo.",
      "expresion": "Mirada distante y cool, labios ligeramente entreabiertos.",
      "vestimenta": "Vestido slip vintage de seda con delicados bordes de encaje."
    },
    "E_Entorno": {
      "escena": "Baño residencial compacto con azulejos y espejo sobre el vanity.",
      "elementos": [
        "Cosméticos",
        "Brochas",
        "Productos de baño",
        "Mostrador ligeramente desordenado",
        "Espejo con manchas de agua y pequeñas marcas"
      ],
      "atmosfera": "Momento privado, íntimo y nocturno, con imperfecciones cotidianas."
    },
    "A_Accion_Postura": {
      "pose": "Sentada casualmente sobre el mostrador, inclinándose ligeramente hacia el espejo.",
      "piernas": "Relajadas o cruzadas naturalmente.",
      "lenguaje_corporal": "Relajado, espontáneo y sin apariencia de pose profesional.",
      "mirada": "Dirigida al reflejo o hacia la cámara."
    },
    "I_Iluminacion": {
      "tipo": "Flash directo de cámara combinado con tungsteno ambiental.",
      "principal": "Flash frontal duro con sombras marcadas y highlights especulares.",
      "ambiental": "Luz tungsteno tenue y cálida.",
      "contraste": "Alto, con caída pronunciada de luz.",
      "temperatura": "5500K flash + 3200K ambiente."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Cool, íntimo, crudo y nocturno.",
      "tono": "Snapshot privado capturado espontáneamente."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Mirror photograph con estética raw flash y emulación analógica.",
      "acabado": "35mm vintage, grano visible, imperfecciones naturales y textura auténtica.",
      "color_grading": "Negros ligeramente levantados, sombras verdosas y rojos moderadamente saturados."
    },
    "M_Composicion_Camara": {
      "plano": "Thighs-up, sujeto sentado sobre el vanity.",
      "angulo": "Eye-level hacia el reflejo.",
      "encuadre": "Reflejo centrado con objetos del mostrador en primer plano para profundidad.",
      "camara": "Point-and-shoot con estética 35mm.",
      "optica": "35mm gran angular con ligera distorsión.",
      "apertura": "f/5.6–f/8.",
      "velocidad": "1/60s.",
      "iso": 800,
      "aspect_ratio": "4:5 vertical"
    },
    "P_Postproduccion": {
      "nitidez": "Moderada con suavidad natural del flash.",
      "grano": "Film grain auténtico.",
      "vignette": "Caída natural del flash hacia los bordes.",
      "acabado_final": "Fotografía hiperrealista y espontánea, sin iluminación de estudio, softbox, render 3D, ilustración, piel aerografiada, estética LED ni apariencia excesivamente pulida."
    }
  }
}', '# Personalización de Retrato Vintage en Baño
Modifica el tipo de vestido o color del encaje de seda para renovar tu outfit. Puedes agregar o quitar elementos del mostrador del baño ajustando la descripción en los detalles del entorno.', 'Usa una foto donde aparezcas sentada sobre un mostrador o mesa inclinándote levemente al espejo de modo que la pose sea consistente.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.821Z', '2026-08-29T17:52:58.821Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('75eb4763-289a-4257-829e-237ed259d4b8', 'f1d11f80-ccff-4409-83b7-520e0c92da87') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('75eb4763-289a-4257-829e-237ed259d4b8', 'b53711bb-5c3b-4d1f-8176-4ddb47ebeaf8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('75eb4763-289a-4257-829e-237ed259d4b8', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('35865e22-f101-4a57-885d-20dd1b556014', 'prompt', 'REAISEMP_Human — Luxury Sofa Editorial', 'luxury-sofa-editorial', 'Prompt ultra-realista de retrato editorial cinematográfico. El avatar posa reclinada sobre un sofá beige con bodysuit blanco, abrigo voluminoso de pelo sintético y tacones nude.', '
# Framework REAISEMP_Human

*   **R(Render del Avatar):** Mujer adulta, expresión calmada y seductora con media sonrisa natural, bodysuit blanco ajustado sin tirantes, medias marfil translúcidas, abrigo voluminoso de piel sintética sobre hombros y tacones nude.
*   **E(Entorno):** Interior moderno en tonos beige minimalistas. Sofá beige grande y elementos decorativos neutros y discretos.
*   **A(Acción / Postura):** Reclinada sobre el sofá, cuerpo girado de lado, una pierna flexionada y la otra extendida al frente. Mano izquierda colocada casualmente cerca de la cabeza y mano derecha relajada al lado.
*   **I(Iluminación):** Iluminación interior cálida y difusa con un halo dorado (warm golden undertone), highlights y resplandor suave sobre piel y prendas.
*   **S(Sensación / Atmósfera):** Elegancia, glamour discreto, confianza tranquila y lujo silencioso.
*   **E(Estilo Visual):** Retrato editorial de moda sofisticado y fotorealista, texturas de piel sintética, medias y cuero de tacones de alta credibilidad física.
*   **M(Composición / Cámara):** Retrato horizontal (aspecto 3.4:1) a nivel de ojos, composición equilibrada favoreciendo la silueta y profundidad de campo suave.
*   **P(Postproducción):** Tonos crema, beige y blanco contrastados, alta nitidez sin modificar la identidad facial del sujeto respecto a la referencia original.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/luxury-sofa-editorial.jpg', '{
  "title": "REAISEMP_Human — Luxury Sofa Editorial",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer adulta cuya identidad facial debe mantenerse exactamente igual a la imagen de referencia.",
      "rostro": "Preservar estructura facial, proporciones y rasgos originales; maquillaje suave con énfasis sutil en ojos y labios.",
      "expresion": "Calmada y seductora, con media sonrisa natural.",
      "piel": "Textura realista, proporciones naturales y detalles de piel visibles."
    },
    "E_Entorno": {
      "escena": "Interior moderno en tonos beige con decoración minimalista.",
      "fondo": "Sofá beige y elementos decorativos neutros y discretos.",
      "atmosfera": "Lujo suave, elegante y cinematográfico."
    },
    "A_Accion_Postura": {
      "pose": "Reclinada sobre un sofá beige, cuerpo ligeramente girado hacia un lado.",
      "piernas": "Una pierna flexionada y la otra extendida hacia delante.",
      "brazos": "Un brazo relajado junto al cuerpo y el otro colocado casualmente cerca de la cabeza.",
      "lenguaje_corporal": "Relajado, seguro y sofisticado."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación interior cálida y difusa.",
      "temperatura": "Warm golden undertone.",
      "caracteristicas": "Mantener exactamente la dirección, intensidad, calidad y comportamiento de la luz presentes en la referencia.",
      "efecto": "Glow suave y highlights naturales sobre piel, cabello, tejido y superficies."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Elegancia, glamour discreto y confianza tranquila.",
      "tono": "Editorial cinematográfico de lujo suave."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato editorial sofisticado y fotorealista.",
      "acabado": "Natural, elegante y cinematográfico, evitando apariencia artificial.",
      "paleta": "Beige, crema, blanco y tonos cálidos neutros."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato horizontal mostrando cuerpo y entorno suficiente para contextualizar la pose.",
      "encuadre": "Composición equilibrada, favoreciendo la silueta sin exageraciones.",
      "aspect_ratio": "3.4:1",
      "referencia": "Usar la imagen subida como referencia principal de identidad y composición."
    },
    "P_Postproduccion": {
      "vestuario": "Bodysuit blanco ajustado sin tirantes, medias translúcidas color marfil, abrigo voluminoso de textura tipo piel sintética sobre los hombros y tacones nude.",
      "accesorios": "Joyería mínima y manicura clara.",
      "acabado_final": "Ultra realista, piel natural, tejidos físicamente creíbles y sin modificar la identidad facial.",
      "restricciones": "No reemplazar el rostro, no alterar identidad, no cambiar la iluminación de referencia, no piel plástica, no anatomía deformada, no apariencia CGI."
    }
  }
}', '# Personalización de Retrato en Sofá
Modifica el color del abrigo o bodysuit (ej. cambia ''Bodysuit blanco'' por ''Bodysuit negro satinado''). Puedes adaptar la composición reclinada en el sofá ajustando los parámetros de pose.', 'Usa una foto donde estés reclinada en un sofá para mantener la coherencia anatómica perfecta y la inclinación natural de la cabeza.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.821Z', '2026-08-29T17:52:58.821Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('35865e22-f101-4a57-885d-20dd1b556014', 'b53711bb-5c3b-4d1f-8176-4ddb47ebeaf8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('35865e22-f101-4a57-885d-20dd1b556014', '179bf2c6-0bb3-43a3-8654-673782bc8069') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('35865e22-f101-4a57-885d-20dd1b556014', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('28e2a212-5217-4288-8bff-dd40e89a14de', 'prompt', 'REAISEMP_Human — Grunge E-girl Black Cat', 'grunge-egirl-black-cat', 'Prompt de primer plano ultra-realista con estética soft-grunge/e-girl. El avatar posa para un selfie sosteniendo de forma cariñosa a un gato negro junto a su rostro.', '
# Framework REAISEMP_Human

*   **R(Render del Avatar):** Mujer joven de estilo e-girl / soft-grunge, cabello rubio liso a los hombros con flequillo completo, pecas y rubor rosado, delineado de ojos winged negro, septum y collar plateado de daga alada con ojo.
*   **E(Entorno):** Interior doméstico sencillo con pared lisa de tono beige/crema.
*   **A(Acción / Postura):** De pie o sentada en primer plano de selfie, sosteniendo un gato negro mejilla con mejilla mientras apoya su mano suavemente sobre el pecho del gato.
*   **I(Iluminación):** Luz artificial tenue y cálida de lámpara ambiental, logrando sombras suaves pero definidas en el rostro y contraste de piel pálida con elementos oscuros.
*   **S(Sensación / Atmósfera):** Cozy, íntima, melancólica y alternativa.
*   **E(Estilo Visual):** Selfie de primer plano (close-up) de smartphone con texturas muy claras de pecas, cabello liso y pelo del gato.
*   **M(Composición / Cámara):** Formato vertical 4:5, encuadre cerrado sobre rostro y gato a nivel de ojos con fondo sutilmente difuminado.
*   **P(Postproducción):** Contraste medio-alto muy natural sin filtros robóticos ni piel plástica de render.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/grunge-egirl-black-cat.png', '{
  "title": "REAISEMP_Human — Grunge E-girl Black Cat",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer adulta joven, aproximadamente de 20 años, apariencia alternativa soft-grunge/e-girl.",
      "cabello": "Rubio, hasta los hombros, liso y con flequillo completo cubriendo la frente.",
      "rostro": "Piel clara y pálida con pecas visibles sobre nariz y mejillas, rubor rosado natural.",
      "ojos": "Marrón intenso, delineado negro tipo winged eyeliner y máscara.",
      "expresion": "Mirada suave y neutral directamente hacia la cámara.",
      "vestimenta": "Tank top blanco acanalado sin mangas.",
      "accesorios": "Cadena plateada con colgante de daga/espada alada y motivo de ojo; piercing septum circular y pequeño stud plateado en la nariz."
    },
    "E_Entorno": {
      "escena": "Interior doméstico sencillo.",
      "fondo": "Pared lisa beige o crema.",
      "atmosfera": "Acogedora, íntima y ligeramente melancólica."
    },
    "A_Accion_Postura": {
      "pose": "Selfie close-up, sosteniendo suavemente un gato negro junto al rostro.",
      "interaccion": "El gato permanece mejilla con mejilla, mientras una mano sostiene delicadamente su pecho/cuello.",
      "lenguaje_corporal": "Natural, cercano y relajado."
    },
    "I_Iluminacion": {
      "tipo": "Luz artificial cálida y tenue.",
      "fuente": "Lámpara ambiental.",
      "caracteristicas": "Sombras suaves, highlights discretos y contraste marcado entre piel clara y elementos oscuros.",
      "temperatura": "Cálida."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Soft grunge, íntimo, alternativo y cozy.",
      "tono": "Selfie personal y espontáneo."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Retrato selfie fotorealista con estética soft-grunge/e-girl.",
      "contraste": "Alto contraste entre piel pálida, cabello rubio y gato negro.",
      "texturas": "Pecas, piel natural, cabello liso y pelaje suave del gato claramente definidos."
    },
    "M_Composicion_Camara": {
      "plano": "Close-up selfie de rostro y gato.",
      "angulo": "Frontal, ligeramente a nivel de los ojos.",
      "foco": "Rostro y gato nítidos, fondo ligeramente desenfocado.",
      "aspect_ratio": "4:5 vertical",
      "camara": "Smartphone selfie aesthetic."
    },
    "P_Postproduccion": {
      "nitidez": "Alta en rostro, ojos y pelaje.",
      "color_grading": "Cálido, ligeramente contrastado, sin sobresaturación.",
      "acabado_final": "Fotografía realista, natural y ligeramente imperfecta, sin piel plástica, CGI, ilustración, anatomía deformada, ojos artificiales ni apariencia excesivamente retocada."
    }
  }
}', '# Personalización de Selfie con Gato
Modifica el color del gato (ej. cambia ''gato negro'' por ''gato siamés''). Puedes retirar el flequillo o el piercing de septum editando las especificaciones del avatar.', 'Usa una foto donde tu rostro y mejilla toquen el objeto o mascota de la toma original para mantener la coherencia espacial y de la mano sosteniendo el pelaje.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.821Z', '2026-08-29T17:52:58.821Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('28e2a212-5217-4288-8bff-dd40e89a14de', '24be544a-e87d-4391-8d5e-b386a8cae31a') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('28e2a212-5217-4288-8bff-dd40e89a14de', 'a4fb7cad-a409-40af-8d21-4add9d147036') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('28e2a212-5217-4288-8bff-dd40e89a14de', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('380676aa-1f80-45f9-8683-91b40f206120', 'prompt', 'REAISEMP_Human — NYC Night Bridge', 'nyc-night-bridge', 'Prompt de retrato nocturno ultra-realista frente al Manhattan Bridge y el skyline iluminado de Nueva York, con chaqueta oversized de cuero y brisa de río Sena.', '
# Framework REAISEMP_Human

*   **R(Render del Avatar):** Persona de cabello oscuro suelto y natural con mechones movidos por la brisa, chaqueta de cuero negro oversized y falda oscura. Identidad facial bloqueada.
*   **E(Entorno):** Orilla del río en Nueva York de noche junto a una barandilla metálica desgastada. Manhattan Bridge y skyline iluminado al fondo con luna creciente en cielo oscuro.
*   **A(Acción / Postura):** De pie junto a la barandilla con hombros orientados hacia la cámara, cabeza ligeramente inclinada hacia atrás y brisa moviendo cabello y ropa.
*   **I(Iluminación):** Luz nocturna natural de farolas de la ciudad y del puente, con reflejos dorados y azules fríos sobre el agua y chaqueta de cuero.
*   **S(Sensación / Atmósfera):** Contemplativa, elegante, urbana y cinematográfica.
*   **E(Estilo Visual):** Fotografía nocturna con estética de iPhone, texturas de metal desgastado, agua en movimiento y cuero muy detalladas.
*   **M(Composición / Cámara):** Retrato medio-largo vertical (9:16) con sujeto nítido a nivel de los ojos y fondo del puente perfectamente reconocible.
*   **P(Postproducción):** Contraste nocturno natural entre tonos cálidos y fríos, sin distorsión artificial y fidelidad total a la referencia.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/nyc-night-bridge.jpg', '{
  "title": "REAISEMP_Human — NYC Night Bridge",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Persona adulta basada estrictamente en la imagen de referencia.",
      "identidad": "Preservar exactamente los rasgos faciales, proporciones, estructura del rostro y detalles únicos de la persona de referencia.",
      "cabello": "Cabello oscuro, suelto y natural, con mechones movidos por la brisa y algunos cursando el rostro.",
      "expresion": "Serena, segura y ligeramente contemplativa.",
      "vestimenta": {
        "top": "Chaqueta oversized de cuero negro.",
        "details": "Mangas arrugadas, pliegues pesados y naturales, líneas de desgaste sutiles y reflejos irregulares de las luces nocturnas.",
        "bottom": "Falda oscura con movimiento ligero provocado por el viento."
      }
    },
    "E_Entorno": {
      "escena": "Riverside nocturno en Nueva York junto a una barandilla frente al agua.",
      "fondo": "Manhattan Bridge y skyline de Manhattan iluminado.",
      "elementos": [
        "Agua con pequeñas ondas",
        "Reflejos blancos, dorados y azul frío",
        "Edificios con ventanas iluminadas",
        "Puente con cables iluminados",
        "Barandilla metálica desgastada",
        "Pequeñas marcas, arañazos y zonas de óxido",
        "Luna creciente en cielo oscuro"
      ],
      "atmosfera": "Nocturna, urbana, cinematográfica y ligeramente brumosa."
    },
    "A_Accion_Postura": {
      "pose": "De pie junto a la barandilla, postura relajada pero deliberadamente compuesta.",
      "cuerpo": "Hombros ligeramente orientados hacia la cámara.",
      "cabeza": "Inclinada suavemente hacia atrás.",
      "movimiento": "Brisa ligera del río moviendo el cabello y el borde de la falda."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación nocturna ambiental natural de ciudad.",
      "fuentes": [
        "Farolas",
        "Luces del Manhattan Bridge",
        "Ventanas de edificios",
        "Reflejos sobre el agua"
      ],
      "caracteristicas": "Highlights irregulares sobre el cuero, halos suaves alrededor de las luces y sombras profundas pero naturales.",
      "temperatura": "Mezcla de tonos cálidos dorados y azules fríos."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Elegante, urbano, contemplativo y cinematográfico.",
      "tono": "Retrato nocturno auténtico capturado espontáneamente frente al skyline."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Fotografía nocturna hiperrealista con estética auténtica de iPhone.",
      "texturas": "Cuero con desgaste realista, metal rayado, agua en movimiento, ladrillo, vidrio y concreto.",
      "ambiente": "Haze ligero sobre el río y pequeñas imperfecciones ópticas naturales.",
      "acabado": "Sin apariencia de estudio ni CGI; realismo fotográfico de smartphone."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato medio a medio-largo.",
      "angulo": "Eye-level ligeramente orientado hacia la figura.",
      "encuadre": "Sujeto en primer plano con Manhattan Bridge y skyline claramente reconocibles detrás.",
      "profundidad": "Sujeto nítido, skyline definido y agua con profundidad atmosférica natural.",
      "aspect_ratio": "9:16 vertical",
      "camara": "iPhone aesthetic, handheld, natural night photography."
    },
    "P_Postproduccion": {
      "nitidez": "Alta en rostro, chaqueta y elementos cercanos.",
      "color": "Contraste natural entre luces ámbar, blanco urbano y azul frío.",
      "acabado_final": "Ultra fotorealista, con reflejos y movimiento naturales, preservando estrictamente la identidad facial de la referencia.",
      "negative_prompt": [
        "altered face",
        "different identity",
        "plastic skin",
        "CGI",
        "3D render",
        "artificial skyline",
        "overprocessed HDR",
        "excessive blur",
        "distorted anatomy",
        "extra limbs",
        "daylight",
        "studio lighting",
        "fake reflections"
      ]
    }
  }
}', '# Personalización de Retrato en Puente de Nueva York
Modifica la chaqueta de cuero por otra prenda similar (ej. cambia ''Chaqueta oversized de cuero negro'' por ''Gabardina clásica beige''). Puedes adaptar el skyline de fondo si deseas simular otra ciudad.', 'Usa una foto donde tu rostro y cabello tengan movimiento sutil causado por brisa artificial o natural para coincidir con el dinamismo del prompt.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.821Z', '2026-08-29T17:52:58.821Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('380676aa-1f80-45f9-8683-91b40f206120', '575e4ebd-f06b-4993-8199-933aeaf56baa') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('380676aa-1f80-45f9-8683-91b40f206120', '35cda63b-9cc3-436e-8635-96383ae7fabb') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('380676aa-1f80-45f9-8683-91b40f206120', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('4a5b8a16-fac0-4991-8bef-2ee32382f0ae', 'prompt', 'REAISEMP_Human — Steamy Bathroom Selfie', 'steamy-bathroom-selfie', 'Prompt ultra-realista de primer plano (close-up) selfie de smartphone dentro de un baño lleno de vapor. El avatar posa frente a espejo empañado con cabello mojado gris plateado y top de bikini blanco.', '
# Framework REAISEMP_Human

*   **R(Render del Avatar):** Mujer joven, cabello gris plateado mojado y despeinado con mechones en la cara, mejillas sonrojadas, labios entreabiertos, top triangular de bikini blanco húmedo y collar dorado. Identidad facial bloqueada.
*   **E(Entorno):** Baño contemporáneo lleno de vapor. Ducha de vidrio con condensación y gotas de agua, espejo con salpicaduras y reflejos luminosos difusos de fondo.
*   **A(Acción / Postura):** De pie frente al espejo, un brazo elevado sobre la cabeza sosteniendo el móvil para tomar un selfie de primer plano. Gotas de agua visibles en cuello, hombros y torso.
*   **I(Iluminación):** Luz cinematográfica cálida-fría, con un halo dorado difuso cruzando el vapor del baño y sombras frías envolviendo la cabina de ducha.
*   **S(Sensación / Atmósfera):** Íntima, cinemática, sofisticada y de estética de fotograma de película de alta calidad.
*   **E(Estilo Visual):** Selfie de smartphone ultra cinematográfico y fotorealista, con definición extrema de piel húmeda, poros, gotas y cristales empañados.
*   **M(Composición / Cámara):** Plano close-up vertical (3:4), encuadre estrecho y centrado en rostro y hombros con bokeh suave de luces de fondo.
*   **P(Postproducción):** Contraste suave, colores ricos pero naturales (contraste Hollywood cálido/frío) y preservación estricta de rasgos faciales.
        ', 'Lifestyle', NULL, NULL, 'intermediate', '/images/prompts/steamy-bathroom-selfie.jpg', '{
  "title": "REAISEMP_Human — Steamy Bathroom Selfie",
  "framework_REAISEMP_Human": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer adulta joven basada estrictamente en la imagen de referencia.",
      "identidad": "Preservar al 100% la estructura facial, proporciones, rasgos únicos, textura de piel y expresión de la referencia.",
      "cabello": "Gris plateado, mojado, naturally despeinado, con mechones adheridos suavemente al rostro.",
      "rostro": "Piel húmeda y realista, mejillas intensamente sonrojadas, labios ligeramente entreabiertos y mirada íntima hacia la cámara.",
      "vestimenta": "Top triangular blanco de bikini, húmedo y ajustado, con reflejos naturales de humedad.",
      "accesorios": "Delicado collar dorado con pequeño colgante."
    },
    "E_Entorno": {
      "escena": "Baño contemporáneo lleno de vapor.",
      "elementos": [
        "Puerta de ducha de vidrio empañada",
        "Condensación y gotas sobre el cristal",
        "Espejo con pequeñas salpicaduras de agua",
        "Reflejos luminosos desenfocados"
      ],
      "atmosfera": "Íntima, cinematográfica, cálida y envolvente."
    },
    "A_Accion_Postura": {
      "pose": "De pie frente al espejo, tomando un selfie cercano.",
      "brazos": "Un brazo elevado por encima de la cabeza.",
      "lenguaje_corporal": "Relajado, elegante y natural.",
      "mirada": "Directamente hacia la cámara del teléfono.",
      "detalles": "Gotas de agua visibles sobre cuello, hombros y torso."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación cinematográfica cálida-fría.",
      "fuente": "Luz dorada difusa atravesando el vapor.",
      "caracteristicas": "Highlights cálidos sobre la piel y sombras frías envolviendo la ducha.",
      "efecto": "Contraste Hollywood suave, profundidad atmosférica y reflejos naturales sobre humedad."
    },
    "S_Sensacion_Atmosfera": {
      "mood": "Cinemático, íntimo, sofisticado y emocional.",
      "tono": "Momento privado capturado con estética de película."
    },
    "E_visual_EstiloVisual": {
      "estilo_general": "Selfie fotorealista ultra cinematográfico.",
      "texturas": "Poros visibles, piel húmeda, gotas de agua, cabello mojado, condensación y cristal realistas.",
      "profundidad": "Bokeh suave en las luces del fondo.",
      "acabado": "Natural, inmersivo y de alta fidelidad."
    },
    "M_Composicion_Camara": {
      "plano": "Close-up selfie, rostro y parte superior del torso.",
      "angulo": "Perspectiva de smartphone a corta distancia.",
      "encuadre": "Sujeto dominante en el encuadre, con el baño desenfocado alrededor.",
      "aspect_ratio": "3:4 vertical",
      "estilo_camara": "Smartphone selfie cinematográfico."
    },
    "P_Postproduccion": {
      "realismo": "Fotorealismo extremo.",
      "face_restore": true,
      "face_reference_strength": 1,
      "negative_prompt": [
        "cartoon",
        "painting",
        "illustration",
        "low quality",
        "distortion",
        "blurry",
        "unnatural skin texture",
        "dry skin",
        "extra limbs",
        "bad anatomy",
        "flat lighting",
        "CGI appearance",
        "plastic skin"
      ]
    }
  }
}', '# Personalización de Selfie en Baño Vaporoso
Modifica el color del bikini (ej. cambia ''bikini blanco'' por ''bikini negro o rojo''). Puedes alterar el tono de cabello a otro color manteniendo el acabado húmedo.', 'Usa una foto donde levantes un brazo por detrás de la cabeza y mantengas una expresión íntima para asegurar que la superposición anatómica sea totalmente fluida.', TRUE, TRUE, 'free_preview', '2026-08-29T17:52:58.821Z', '2026-08-29T17:52:58.821Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4a5b8a16-fac0-4991-8bef-2ee32382f0ae', '77495ed8-df99-4a2d-8fa5-be3aabfa5411') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4a5b8a16-fac0-4991-8bef-2ee32382f0ae', 'b53711bb-5c3b-4d1f-8176-4ddb47ebeaf8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4a5b8a16-fac0-4991-8bef-2ee32382f0ae', '630f4208-ab2d-4eb1-84d8-4cbe36c155b2') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('858bac74-fc7a-444b-82fb-9f3f32ad8305', 'text_prompt', 'SOP: Arquitectura de Página de Ventas (High-Ticket)', 'sop-arquitectura-de-pagina-de-ventas-high-ticket', 'Un sistema de redacción de conversión estructurado para vender ofertas de servicios, consultoría o infraestructuras complejas, asegurando que el diseño de la página responda a objeciones antes de que el cliente las formule.', '# SOP: Arquitectura de Página de Ventas (High-Ticket)

## D.R.A.P.E.R.™ System Integration

> **D - Diagnosticar:** Define claramente la oferta principal, el problema específico que resuelve (el dolor del cliente) y las 3 objeciones más comunes que escuchas en tus llamadas de venta.

> **R - Rediseñar:** Extrae los testimonios, casos de éxito o métricas de garantía que respaldarán la promesa de la oferta.

> **A - Arquitectar & Programar (El Prompt Maestro):** Inyecta la siguiente instrucción en Claude:
>
> ```
> Eres un copywriter de conversión que escribe páginas de ventas para negocios de servicios y ofertas de alto valor. Escribe una página de ventas completa para la oferta que describiré a continuación. Estructúrala de la siguiente manera:
> Un titular que hable directamente al problema principal.
> Un subtítulo que introduzca el resultado.
> Una sección que agite el problema con lenguaje específico y situaciones cotidianas.
> Una sección que presente la oferta como la solución definitiva.
> Un desglose técnico pero accesible de lo que está incluido.
> Tres secciones de manejo de objeciones redactadas en formato FAQ.
> Marcadores de posición para prueba social.
> Sección de precios con un CTA claro y una sección de cierre que genere urgencia real.
> [Inserta los datos de tu oferta, problema y objeciones aquí]
> ```

> **P - Encender:** Pasa el texto generado a tu constructor web (ej. el agente que utiliza el "Anti-AI Web Design Blueprint").

> **R - Refinar:** Instala mapas de calor (ej. Hotjar) en la página publicada. Si los usuarios no llegan a la sección de precios, el titular o la sección de "agitación del problema" necesita más urgencia.', 'Páginas de Ventas', NULL, NULL, 'intermediate', NULL, 'Eres un copywriter de conversión que escribe páginas de ventas para negocios de servicios y ofertas de alto valor. Escribe una página de ventas completa para la oferta que describiré a continuación. Estructúrala de la siguiente manera:
Un titular que hable directamente al problema principal.
Un subtítulo que introduzca el resultado.
Una sección que agite el problema con lenguaje específico y situaciones cotidianas.
Una sección que presente la oferta como la solución definitiva.
Un desglose técnico pero accesible de lo que está incluido.
Tres secciones de manejo de objeciones redactadas en formato FAQ.
Marcadores de posición para prueba social.
Sección de precios con un CTA claro y una sección de cierre que genere urgencia real.
[Inserta los datos de tu oferta, problema y objeciones aquí]', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.831Z', '2026-08-29T17:52:58.831Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('858bac74-fc7a-444b-82fb-9f3f32ad8305', '1a9c0f2a-531d-416d-8537-70c17cfc4ec8') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('858bac74-fc7a-444b-82fb-9f3f32ad8305', 'c97d1262-59ee-46e5-8d5d-a76b3f13b48e') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('858bac74-fc7a-444b-82fb-9f3f32ad8305', 'd870301f-5cd9-47a8-829d-e1099109185a') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('afc95f85-f085-4d7a-84e9-a91608b43bc7', 'text_prompt', 'Identificación de la audiencia a la que se dirige', 'identificacion-audiencia-objetivo-facebook', 'Ensayo sobre la importancia de identificar la audiencia en marketing online.', 'Escribe un ensayo que describa la importancia de identificar la audiencia a la que se dirige en una estrategia de marketing en línea. Incluye consejos prácticos sobre cómo identificar la audiencia adecuada y cómo adaptar la estrategia de marketing para llegar a esa audiencia.', 'Marketing de Facebook', NULL, NULL, 'beginner', NULL, 'Escribe un ensayo que describa la importancia de identificar la audiencia a la que se dirige en una estrategia de marketing en línea. Incluye consejos prácticos sobre cómo identificar la audiencia adecuada y cómo adaptar la estrategia de marketing para llegar a esa audiencia.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.831Z', '2026-08-29T17:52:58.831Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('afc95f85-f085-4d7a-84e9-a91608b43bc7', '1118fd3b-4a65-4848-822b-dcdb710ebb33') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('1f50b02d-175d-40d3-86c3-e1d7a267b8ff', 'text_prompt', 'Creación de buyer personas para comprender mejor a la audiencia', 'creacion-buyer-personas-marketing', 'Guía detallada sobre cómo crear buyer personas para negocios en línea.', 'Escribe una guía detallada sobre cómo crear buyer personas para comprender mejor a la audiencia de un negocio en línea. Incluye los diferentes elementos que deben incluirse en una buyer persona, cómo utilizar la información obtenida y cómo adaptar la estrategia de marketing en función de los datos.', 'Marketing de Facebook', NULL, NULL, 'beginner', NULL, 'Escribe una guía detallada sobre cómo crear buyer personas para comprender mejor a la audiencia de un negocio en línea. Incluye los diferentes elementos que deben incluirse en una buyer persona, cómo utilizar la información obtenida y cómo adaptar la estrategia de marketing en función de los datos.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.831Z', '2026-08-29T17:52:58.831Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('1f50b02d-175d-40d3-86c3-e1d7a267b8ff', '1118fd3b-4a65-4848-822b-dcdb710ebb33') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('08503980-8e77-4900-8fff-f6ddf67d63a9', 'text_prompt', 'Selección de opciones de segmentación adecuadas', 'segmentacion-adecuada-marketing-online', 'Artículo sobre cómo seleccionar opciones de segmentación para llegar a la audiencia deseada.', 'Escribe un artículo que explique cómo seleccionar las opciones de segmentación adecuadas para llegar a la audiencia deseada en una estrategia de marketing en línea. Incluye consejos sobre cómo seleccionar las opciones de segmentación adecuadas, cómo utilizar las herramientas de segmentación disponibles y cómo adaptar la estrategia de marketing en función de los datos obtenidos.', 'Marketing de Facebook', NULL, NULL, 'beginner', NULL, 'Escribe un artículo que explique cómo seleccionar las opciones de segmentación adecuadas para llegar a la audiencia deseada en una estrategia de marketing en línea. Incluye consejos sobre cómo seleccionar las opciones de segmentación adecuadas, cómo utilizar las herramientas de segmentación disponibles y cómo adaptar la estrategia de marketing en función de los datos obtenidos.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.831Z', '2026-08-29T17:52:58.831Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('08503980-8e77-4900-8fff-f6ddf67d63a9', '1118fd3b-4a65-4848-822b-dcdb710ebb33') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('de427071-5120-4c99-8dfb-7dba77f85f8b', 'text_prompt', 'Establecimiento de objetivos de marketing', 'establecimiento-objetivos-marketing-online', 'Guía práctica para definir objetivos realistas y medibles.', 'Escribe una guía práctica que describa cómo establecer objetivos de marketing para un negocio en línea. Incluye consejos sobre cómo definir objetivos realistas y alcanzables, cómo medir el éxito de los objetivos y cómo adaptar la estrategia de marketing en función de los datos obtenidos.', 'Marketing de Facebook', NULL, NULL, 'beginner', NULL, 'Escribe una guía práctica que describa cómo establecer objetivos de marketing para un negocio en línea. Incluye consejos sobre cómo definir objetivos realistas y alcanzables, cómo medir el éxito de los objetivos y cómo adaptar la estrategia de marketing en función de los datos obtenidos.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.831Z', '2026-08-29T17:52:58.831Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('de427071-5120-4c99-8dfb-7dba77f85f8b', '1118fd3b-4a65-4848-822b-dcdb710ebb33') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('6ae93608-100e-4033-850c-c31e07cf3faa', 'text_prompt', 'Definición de una estrategia de contenido', 'estrategia-contenido-efectiva-facebook', 'Informe sobre cómo planificar y diseñar contenido para mejorar el marketing.', 'Escribe un informe que describa cómo definir una estrategia de contenido efectiva para un negocio en línea. Incluye los diferentes tipos de contenido que se pueden utilizar, cómo identificar la audiencia adecuada, cómo planificar y diseñar el contenido y cómo utilizar el contenido para mejorar la estrategia de marketing.', 'Marketing de Facebook', NULL, NULL, 'beginner', NULL, 'Escribe un informe que describa cómo definir una estrategia de contenido efectiva para un negocio en línea. Incluye los diferentes tipos de contenido que se pueden utilizar, cómo identificar la audiencia adecuada, cómo planificar y diseñar el contenido y cómo utilizar el contenido para mejorar la estrategia de marketing.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.831Z', '2026-08-29T17:52:58.831Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('6ae93608-100e-4033-850c-c31e07cf3faa', '1118fd3b-4a65-4848-822b-dcdb710ebb33') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('16db9998-fe08-4df0-8161-96ce223a3d76', 'text_prompt', 'Planificación de campañas publicitarias', 'planificacion-campanas-publicitarias-exitosas', 'Guía detallada sobre canales, mensajes y medición de éxito publicitario.', 'Escribe una guía detallada sobre cómo planificar campañas publicitarias efectivas para un negocio en línea. Incluye los diferentes elementos clave de una campaña publicitaria, cómo seleccionar los canales adecuados, cómo diseñar el mensaje de la campaña y cómo medir el éxito de la campaña.', 'Marketing de Facebook', NULL, NULL, 'beginner', NULL, 'Escribe una guía detallada sobre cómo planificar campañas publicitarias efectivas para un negocio en línea. Incluye los diferentes elementos clave de una campaña publicitaria, cómo seleccionar los canales adecuados, cómo diseñar el mensaje de la campaña y cómo medir el éxito de la campaña.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.831Z', '2026-08-29T17:52:58.831Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('16db9998-fe08-4df0-8161-96ce223a3d76', '1118fd3b-4a65-4848-822b-dcdb710ebb33') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('05333212-4ade-4500-8061-25227dc4f166', 'text_prompt', 'Pie de foto para Instagram promocionando [tipo de producto]', 'pie-de-foto-instagram-promocion', 'Escribe un pie de foto de Instagram para un post promocional de [tipo de producto].', 'Escribe un pie de foto de Instagram para un post promocional de [tipo de producto]. Utiliza un lenguaje amigable y humano que atraiga a [tipo de público]. Destaca las cualidades únicas de [tipo de producto], utiliza emojis de muestra y no suenes demasiado promocional.', 'Marketing y publicidad', NULL, NULL, 'beginner', NULL, 'Escribe un pie de foto de Instagram para un post promocional de [tipo de producto]. Utiliza un lenguaje amigable y humano que atraiga a [tipo de público]. Destaca las cualidades únicas de [tipo de producto], utiliza emojis de muestra y no suenes demasiado promocional.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.831Z', '2026-08-29T17:52:58.831Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('05333212-4ade-4500-8061-25227dc4f166', 'c89e4a96-b22a-4760-82f8-619e21e333a3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('0c8b4ba4-a89d-4413-82d0-8fc551bac50f', 'text_prompt', 'Titular conciso y memorable para [tipo de producto/servicio]', 'titular-conciso-memorable', 'Escribe un titular conciso y memorable para [tipo de producto/servicio].', 'Escribe un titular conciso y memorable para [tipo de producto/servicio].', 'Marketing y publicidad', NULL, NULL, 'beginner', NULL, 'Escribe un titular conciso y memorable para [tipo de producto/servicio].', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.831Z', '2026-08-29T17:52:58.831Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('0c8b4ba4-a89d-4413-82d0-8fc551bac50f', 'c89e4a96-b22a-4760-82f8-619e21e333a3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('c1bce925-f08c-441b-85f9-8dc038be9f78', 'text_prompt', 'Breve texto publicitario para aplicación combinada de redes sociales y finanzas', 'texto-publicitario-app-combinada', 'Texto publicitario directo al grano para una app multi-función.', 'Escribe un breve texto publicitario para una aplicación que combina las funciones de aplicaciones como Instagram, WhatsApp, Venmo y Tik Tok en un solo lugar. Utiliza un lenguaje rápido y conciso, similar al de Apple, que atraiga a un público más joven. Ve directo al grano: no pierdas el tiempo.', 'Marketing y publicidad', NULL, NULL, 'beginner', NULL, 'Escribe un breve texto publicitario para una aplicación que combina las funciones de aplicaciones como Instagram, WhatsApp, Venmo y Tik Tok en un solo lugar. Utiliza un lenguaje rápido y conciso, similar al de Apple, que atraiga a un público más joven. Ve directo al grano: no pierdas el tiempo.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.831Z', '2026-08-29T17:52:58.831Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c1bce925-f08c-441b-85f9-8dc038be9f78', 'c89e4a96-b22a-4760-82f8-619e21e333a3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('958189e1-ce18-4b81-819a-90114300d51d', 'text_prompt', 'Asuntos de correo electrónico para venta flash de curso en línea de creación de contenidos de IA', 'asuntos-email-venta-flash-ia', '10 líneas de asunto de correo electrónico para una venta flash del 50%.', 'Escribe 10 líneas de asunto de correo electrónico para una venta flash del 50% de descuento en un curso online de creación de contenidos de IA. Ve directo al grano - no pierdas el tiempo.', 'Marketing y publicidad', NULL, NULL, 'beginner', NULL, 'Escribe 10 líneas de asunto de correo electrónico para una venta flash del 50% de descuento en un curso online de creación de contenidos de IA. Ve directo al grano - no pierdas el tiempo.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.831Z', '2026-08-29T17:52:58.831Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('958189e1-ce18-4b81-819a-90114300d51d', 'c89e4a96-b22a-4760-82f8-619e21e333a3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('62568d54-9da1-46bb-8bb0-e40664c47917', 'text_prompt', 'Anuncio publicitario para un restaurante vegano', 'anuncio-restaurante-vegano', 'Anuncio creativo y atractivo para un restaurante vegano.', 'Escribe un anuncio publicitario para un restaurante vegano que resalte los beneficios de una dieta vegana y la calidad de los ingredientes utilizados. Utiliza un lenguaje creativo y atractivo que haga que los clientes potenciales se sientan atraídos por el restaurante y su oferta gastronómica.', 'Marketing y publicidad', NULL, NULL, 'beginner', NULL, 'Escribe un anuncio publicitario para un restaurante vegano que resalte los beneficios de una dieta vegana y la calidad de los ingredientes utilizados. Utiliza un lenguaje creativo y atractivo que haga que los clientes potenciales se sientan atraídos por el restaurante y su oferta gastronómica.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.831Z', '2026-08-29T17:52:58.831Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('62568d54-9da1-46bb-8bb0-e40664c47917', 'c89e4a96-b22a-4760-82f8-619e21e333a3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('4724591e-d1c4-4e75-859c-62d0ee778342', 'text_prompt', 'Líneas de asunto para promoción de marca de ropa', 'lineas-asunto-promocion-ropa', '10 líneas de asunto de correo electrónico para una marca de moda.', 'Escribe 10 líneas de asunto de correo electrónico para una promoción de una marca de ropa. Ve directo al grano, utiliza un lenguaje atractivo y no pierdas el tiempo.', 'Marketing y publicidad', NULL, NULL, 'beginner', NULL, 'Escribe 10 líneas de asunto de correo electrónico para una promoción de una marca de ropa. Ve directo al grano, utiliza un lenguaje atractivo y no pierdas el tiempo.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.831Z', '2026-08-29T17:52:58.831Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('4724591e-d1c4-4e75-859c-62d0ee778342', 'c89e4a96-b22a-4760-82f8-619e21e333a3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('20354c79-f1c7-47c2-8fad-97de26404ffe', 'text_prompt', 'Reseña de producto [tipo de producto] desde la perspectiva de [tipo de cliente]', 'resena-producto-perspectiva-cliente', 'Reseña de producto con voz de Generación Z.', 'Escribe una reseña de un producto [tipo de producto] desde la perspectiva de [tipo de cliente]. No suenes demasiado promocional. Escribe como un miembro de la Generación Z.', 'Reseñas de productos', NULL, NULL, 'beginner', NULL, 'Escribe una reseña de un producto [tipo de producto] desde la perspectiva de [tipo de cliente]. No suenes demasiado promocional. Escribe como un miembro de la Generación Z.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.831Z', '2026-08-29T17:52:58.831Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('20354c79-f1c7-47c2-8fad-97de26404ffe', 'c89e4a96-b22a-4760-82f8-619e21e333a3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('c591e06c-9a4f-41cd-8d00-2654c3029296', 'text_prompt', 'Descripción de tienda en línea de bolsa grande de palomitas de maíz veganas', 'descripcion-tienda-palomitas-veganas', 'Descripción de e-commerce rápida y concisa.', 'Escribe la descripción de una tienda de comercio electrónico para un juego de mesa divertido y educativo para niños. Utiliza un lenguaje rápido y conciso que atraiga tanto a padres como a niños. Destaca su valor educativo y no suenes demasiado promocional.', 'Reseñas de productos', NULL, NULL, 'beginner', NULL, 'Escribe la descripción de una tienda de comercio electrónico para un juego de mesa divertido y educativo para niños. Utiliza un lenguaje rápido y conciso que atraiga tanto a padres como a niños. Destaca su valor educativo y no suenes demasiado promocional.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.831Z', '2026-08-29T17:52:58.831Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('c591e06c-9a4f-41cd-8d00-2654c3029296', 'c89e4a96-b22a-4760-82f8-619e21e333a3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('a7b6c895-c8b1-4ad9-8802-83fb992aa455', 'text_prompt', 'Reseña de producto de belleza para adolescentes', 'resena-producto-belleza-adolescentes', 'Reseña de producto de belleza para piel sensible.', 'Escribe una reseña de un producto de belleza desde la perspectiva de una adolescente con piel sensible. No suenes demasiado promocional y utiliza un lenguaje cercano y juvenil.', 'Reseñas de productos', NULL, NULL, 'beginner', NULL, 'Escribe una reseña de un producto de belleza desde la perspectiva de una adolescente con piel sensible. No suenes demasiado promocional y utiliza un lenguaje cercano y juvenil.', NULL, NULL, TRUE, FALSE, 'free_preview', '2026-08-29T17:52:58.831Z', '2026-08-29T17:52:58.831Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a7b6c895-c8b1-4ad9-8802-83fb992aa455', 'c89e4a96-b22a-4760-82f8-619e21e333a3') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('fc95ec78-0bbf-441c-84e8-d92fdb4cbf82', 'automation', 'Build Your ManyChat DM Flows With Claude', 'build-manychat-dm-flows-claude', 'Integración para conectar y nutrir leads a través de mensajes directos combinando automatización de ManyChat y el cerebro de Claude.', '
# ManyChat + Claude Integration Blueprint
Conecta tus flujos de automatización de Instagram/Facebook Direct Message con Claude para responder de forma inteligente y humana sin perder el control del funnel.

## Requisitos
- Cuenta Pro de ManyChat.
- API Key de Anthropic (Claude).
- Plataforma de integración como Make.com o n8n.
        ', 'Chat Automation', NULL, NULL, 'intermediate', NULL, NULL, NULL, NULL, TRUE, TRUE, 'access', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fc95ec78-0bbf-441c-84e8-d92fdb4cbf82', 'c7da402b-620d-4e6e-87d7-9079c61dfa27') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fc95ec78-0bbf-441c-84e8-d92fdb4cbf82', '135489c6-3e83-43a1-87c2-ded4aa421047') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fc95ec78-0bbf-441c-84e8-d92fdb4cbf82', '99822333-8240-4992-8c9e-284aac14847c') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('fc95ec78-0bbf-441c-84e8-d92fdb4cbf82', '364740dd-8304-4032-8c49-f3d9d8aadb89') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('a2edbcec-3945-4ad6-8f81-7533cc77e41c', 'automation', 'Create Videos in Claude Code with Remotion', 'create-videos-claude-code-remotion', 'Configuración automatizada para renderizar y exportar videos personalizados en lote usando Claude Code y Remotion.', '
# Remotion Video Rendering Automation
Automatiza la edición y renderizado de videos dinámicos a través de código. Claude redacta los elementos dinámicos y Remotion compila los archivos mp4 de forma programática.
        ', 'Video Automation', NULL, NULL, 'advanced', NULL, NULL, NULL, NULL, TRUE, TRUE, 'pro', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a2edbcec-3945-4ad6-8f81-7533cc77e41c', 'a8560299-366c-48c0-890e-7d75ce7ea470') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a2edbcec-3945-4ad6-8f81-7533cc77e41c', 'dd420011-0dcb-421f-820b-60905f13d7da') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a2edbcec-3945-4ad6-8f81-7533cc77e41c', 'e490492c-b837-4981-8514-6013481930ff') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('a2edbcec-3945-4ad6-8f81-7533cc77e41c', '22f43233-21b3-46d0-8abe-2b5292a5e3ad') ON CONFLICT DO NOTHING;
INSERT INTO public.content_items (id, type, title, slug, summary, body_markdown, category, system_type, process_state, level, featured_image_url, prompt_text, customization_guide, reference_image_guide, is_published, is_featured, paywall_level, created_at, updated_at) VALUES ('f4d80981-6617-4d25-8cb5-5bd07129b618', 'automation', 'Make UGC Ads With Claude + Arcads', 'make-ugc-ads-claude-arcads', 'Automatización en lote para generar guiones y avatares UGC hiperrealistas integrando Claude y la plataforma Arcads.', '
# UGC Video Ad Automation Setup
Combina la creatividad de Claude para escribir ganchos de alta retención (hooks) con Arcads para generar avatares UGC realistas en lote. Escala tu producción de anuncios x10.
        ', 'Ads Automation', NULL, NULL, 'intermediate', NULL, NULL, NULL, NULL, TRUE, FALSE, 'access', '2026-08-25T11:20:00.000Z', '2026-08-25T11:20:00.000Z') ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, summary = EXCLUDED.summary, body_markdown = EXCLUDED.body_markdown, category = EXCLUDED.category, featured_image_url = EXCLUDED.featured_image_url, prompt_text = EXCLUDED.prompt_text;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('f4d80981-6617-4d25-8cb5-5bd07129b618', '135489c6-3e83-43a1-87c2-ded4aa421047') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('f4d80981-6617-4d25-8cb5-5bd07129b618', '0e5f526a-c3e3-4194-8af5-73d2e1e3bb7a') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('f4d80981-6617-4d25-8cb5-5bd07129b618', '1fcb7506-df10-45f3-831a-6ebcc639046e') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('f4d80981-6617-4d25-8cb5-5bd07129b618', '624edc5c-92d2-4dbc-88ca-b5fa9c45cb4e') ON CONFLICT DO NOTHING;
INSERT INTO public.content_tags (content_id, tag_id) VALUES ('f4d80981-6617-4d25-8cb5-5bd07129b618', '22f43233-21b3-46d0-8abe-2b5292a5e3ad') ON CONFLICT DO NOTHING;