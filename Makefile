publish:
	npm run build:prod
	
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-pan-x: ;//g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-pan-y: ;//g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-pinch-zoom: ;//g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-slashed-zero://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-numeric-figure://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-numeric-spacing://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-numeric-fraction://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-ring-inset://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-blur://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-brightness://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-contrast://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-grayscale://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-hue-rotate://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-invert://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-saturate://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-sepia://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-drop-shadow://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-blur://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-brightness://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-contrast://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-grayscale://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-hue-rotate://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-invert://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-opacity://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-saturate://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-sepia://g"
	cd dist/ngodings | find . -name 'index.html' -print0 | xargs -0 sed -i "" "s/--tw-ordinal: ; ; ; ; ; ;//g"

	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-pan-x: ;//g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-pan-y: ;//g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-pinch-zoom: ;//g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-slashed-zero://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-numeric-figure://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-numeric-spacing://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-numeric-fraction://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-ring-inset://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-blur://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-brightness://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-contrast://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-grayscale://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-hue-rotate://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-invert://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-saturate://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-sepia://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-drop-shadow://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-blur://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-brightness://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-contrast://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-grayscale://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-hue-rotate://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-invert://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-opacity://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-saturate://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-backdrop-sepia://g"
	cd dist/ngodings | find . -name '*.css' -print0 | xargs -0 sed -i "" "s/--tw-ordinal: ; ; ; ; ; ;//g"

	npm run target:local
	npm run deploy-local:hosting

