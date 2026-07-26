
DROP POLICY IF EXISTS "Public read msp-content" ON storage.objects;

CREATE POLICY "Read published msp-content files"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (
  bucket_id = 'msp-content'
  AND (
    EXISTS (
      SELECT 1 FROM public.resources r
      WHERE r.is_published = true
        AND (r.file_url = storage.objects.name OR r.file_url LIKE '%' || storage.objects.name)
    )
    OR EXISTS (
      SELECT 1 FROM public.news n
      WHERE n.is_published = true
        AND n.cover_image_url IS NOT NULL
        AND (n.cover_image_url = storage.objects.name OR n.cover_image_url LIKE '%' || storage.objects.name)
    )
  )
);
