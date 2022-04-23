(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    './.storybook/preview.js-generated-config-entry.js': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          'parameters',
          function () {
            return parameters;
          },
        );
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.filter.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-own-property-descriptor.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.for-each.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.for-each.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-own-property-descriptors.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-properties.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-property.js',
        );
      var ClientApi = __webpack_require__(
          './node_modules/@storybook/client-api/dist/esm/ClientApi.js',
        ),
        esm = __webpack_require__(
          './node_modules/@storybook/client-logger/dist/esm/index.js',
        ),
        styled_components_browser_esm =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.slice.js',
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.index-of.js',
          ),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js',
          )),
        react =
          (__webpack_require__(
            './node_modules/core-js/modules/es.object.assign.js',
          ),
          __webpack_require__('./node_modules/react/index.js'));
      __webpack_require__(
        './node_modules/core-js/modules/es.array.is-array.js',
      ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.description.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.to-string.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.string.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.name.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.from.js');
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var useSystemThemeDetector = function useThemeDetector() {
          var _React$useState2 = _slicedToArray(
              react.useState(
                (function getCurrentTheme() {
                  return window.matchMedia('(prefers-color-scheme: dark)')
                    .matches;
                })(),
              ),
              2,
            ),
            isDarkTheme = _React$useState2[0],
            setIsDarkTheme = _React$useState2[1];
          return (
            react.useEffect(
              function () {
                var mqListener = function mqListener(e) {
                    setIsDarkTheme(e.matches);
                  },
                  darkThemeMq = window.matchMedia(
                    '(prefers-color-scheme: dark)',
                  );
                return (
                  darkThemeMq.addEventListener('change', mqListener),
                  function () {
                    return darkThemeMq.removeEventListener(
                      'change',
                      mqListener,
                    );
                  }
                );
              },
              [setIsDarkTheme],
            ),
            isDarkTheme ? 'DARK' : 'LIGHT'
          );
        },
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        BlockThemeProvider_BlockThemeProvider = function BlockThemeProvider(
          _ref,
        ) {
          var _ref$theme = _ref.theme,
            theme = void 0 === _ref$theme ? Theme_light : _ref$theme,
            children = _ref.children,
            _ref$light = _ref.light,
            light = void 0 === _ref$light ? Theme_light : _ref$light,
            _ref$dark = _ref.dark,
            dark = void 0 === _ref$dark ? Theme_dark : _ref$dark,
            useSystemTheme = _ref.useSystemTheme,
            themeType = useSystemThemeDetector(),
            currentTheme = useSystemTheme
              ? 'DARK' === themeType
                ? dark
                : light
              : theme;
          return Object(jsx_runtime.jsx)(
            styled_components_browser_esm.ThemeProvider,
            { theme: currentTheme, children: children },
          );
        };
      BlockThemeProvider_BlockThemeProvider.displayName = 'BlockThemeProvider';
      try {
        (BlockThemeProvider_BlockThemeProvider.displayName =
          'BlockThemeProvider'),
          (BlockThemeProvider_BlockThemeProvider.__docgenInfo = {
            description: '',
            displayName: 'BlockThemeProvider',
            props: {
              theme: {
                defaultValue: {
                  value:
                    "{\n  name: 'light',\n  config: {\n    background: colors.grayScale[0],\n  },\n  borderRadius,\n  colors: colors,\n  blocks: {\n    status: {\n      padding: '5px 8px',\n      borderRadius: borderRadius.small,\n      config: {\n        primary: {\n          color: colors.primary.skyBlue,\n        },\n        secondary: {\n          color: colors.grayScale[7],\n        },\n        success: {\n          color: colors.primary.green,\n        },\n        warning: {\n          color: colors.primary.yellow,\n        },\n        error: {\n          color: colors.secondary.red,\n        },\n      },\n    },\n    text: {\n      weight: {\n        bold: 700,\n        regular: 400,\n        medium: 500,\n        light: 300,\n      },\n      size: {\n        sm: 12,\n        rg: 14,\n        md: 16,\n        lg: 18,\n      },\n    },\n    heading: {\n      config: {\n        h1: {\n          weight: 600,\n          size: 48,\n        },\n        h2: {\n          weight: 600,\n          size: 36,\n        },\n        h3: {\n          weight: 600,\n          size: 28,\n        },\n        h4: {\n          weight: 600,\n          size: 24,\n        },\n        h5: {\n          weight: 600,\n          size: 18,\n        },\n        h6: {\n          weight: 600,\n          size: 16,\n        },\n        tittle: {\n          weight: 600,\n          size: 16,\n        },\n        h7: {\n          weight: 600,\n          size: 14,\n        },\n        h8: {\n          weight: 400,\n          size: 14,\n        },\n        h9: {\n          weight: 600,\n          size: 12,\n        },\n        h10: {\n          weight: 600,\n          size: 11,\n        },\n      },\n    },\n    link: {\n      color: colors.grayScale[10],\n      hover: {\n        color: colors.primary.blue,\n      },\n    },\n    paper: {\n      background: colors.grayScale[0],\n      borderRadius: borderRadius,\n    },\n    input: {\n      fontSize: '1rem',\n      color: colors.grayScale[8],\n      placeholderColor: colors.grayScale[6],\n      background: colors.grayScale[0],\n      default: {\n        borderColor: colors.grayScale[2],\n      },\n      active: {\n        borderColor: colors.primary.skyBlue,\n      },\n      error: {\n        borderColor: colors.secondary.red,\n      },\n    },\n    button: {\n      fontSize: '1rem',\n      appearance: {\n        primary: {\n          background: colors.primary.blue,\n          color: colors.grayScale[0],\n        },\n        secondary: {\n          background: colors.grayScale[3],\n          color: colors.grayScale[10],\n        },\n        alert: {\n          background: colors.secondary.red,\n          color: colors.grayScale[0],\n        },\n        success: {\n          background: colors.primary.green,\n          color: colors.grayScale[0],\n        },\n        warning: {\n          background: colors.primary.yellow,\n          color: colors.grayScale[0],\n        },\n        invert: {\n          color: colors.grayScale[0],\n          background: colors.grayScale[9],\n        },\n      },\n    },\n    icon: {\n      size: {\n        sm: '.8rem',\n        rg: '1rem',\n        lg: '1.2rem',\n      },\n    },\n    tooltip: {\n      color: colors.grayScale[0],\n      background: colors.grayScale[7],\n      maxWidth: '320px',\n    },\n  },\n}",
                },
                description: '',
                name: 'theme',
                required: !1,
                type: {
                  name: '{ name: string; config: { background: string; }; borderRadius: { small: string; medium: string; large: string; }; colors: { primary: { blue: string; yellow: string; skyBlue: string; green: string; }; secondary: { ...; }; grayScale: string[]; }; blocks: { ...; }; }',
                },
              },
              light: {
                defaultValue: {
                  value:
                    "{\n  name: 'light',\n  config: {\n    background: colors.grayScale[0],\n  },\n  borderRadius,\n  colors: colors,\n  blocks: {\n    status: {\n      padding: '5px 8px',\n      borderRadius: borderRadius.small,\n      config: {\n        primary: {\n          color: colors.primary.skyBlue,\n        },\n        secondary: {\n          color: colors.grayScale[7],\n        },\n        success: {\n          color: colors.primary.green,\n        },\n        warning: {\n          color: colors.primary.yellow,\n        },\n        error: {\n          color: colors.secondary.red,\n        },\n      },\n    },\n    text: {\n      weight: {\n        bold: 700,\n        regular: 400,\n        medium: 500,\n        light: 300,\n      },\n      size: {\n        sm: 12,\n        rg: 14,\n        md: 16,\n        lg: 18,\n      },\n    },\n    heading: {\n      config: {\n        h1: {\n          weight: 600,\n          size: 48,\n        },\n        h2: {\n          weight: 600,\n          size: 36,\n        },\n        h3: {\n          weight: 600,\n          size: 28,\n        },\n        h4: {\n          weight: 600,\n          size: 24,\n        },\n        h5: {\n          weight: 600,\n          size: 18,\n        },\n        h6: {\n          weight: 600,\n          size: 16,\n        },\n        tittle: {\n          weight: 600,\n          size: 16,\n        },\n        h7: {\n          weight: 600,\n          size: 14,\n        },\n        h8: {\n          weight: 400,\n          size: 14,\n        },\n        h9: {\n          weight: 600,\n          size: 12,\n        },\n        h10: {\n          weight: 600,\n          size: 11,\n        },\n      },\n    },\n    link: {\n      color: colors.grayScale[10],\n      hover: {\n        color: colors.primary.blue,\n      },\n    },\n    paper: {\n      background: colors.grayScale[0],\n      borderRadius: borderRadius,\n    },\n    input: {\n      fontSize: '1rem',\n      color: colors.grayScale[8],\n      placeholderColor: colors.grayScale[6],\n      background: colors.grayScale[0],\n      default: {\n        borderColor: colors.grayScale[2],\n      },\n      active: {\n        borderColor: colors.primary.skyBlue,\n      },\n      error: {\n        borderColor: colors.secondary.red,\n      },\n    },\n    button: {\n      fontSize: '1rem',\n      appearance: {\n        primary: {\n          background: colors.primary.blue,\n          color: colors.grayScale[0],\n        },\n        secondary: {\n          background: colors.grayScale[3],\n          color: colors.grayScale[10],\n        },\n        alert: {\n          background: colors.secondary.red,\n          color: colors.grayScale[0],\n        },\n        success: {\n          background: colors.primary.green,\n          color: colors.grayScale[0],\n        },\n        warning: {\n          background: colors.primary.yellow,\n          color: colors.grayScale[0],\n        },\n        invert: {\n          color: colors.grayScale[0],\n          background: colors.grayScale[9],\n        },\n      },\n    },\n    icon: {\n      size: {\n        sm: '.8rem',\n        rg: '1rem',\n        lg: '1.2rem',\n      },\n    },\n    tooltip: {\n      color: colors.grayScale[0],\n      background: colors.grayScale[7],\n      maxWidth: '320px',\n    },\n  },\n}",
                },
                description: '',
                name: 'light',
                required: !1,
                type: {
                  name: '{ name: string; config: { background: string; }; borderRadius: { small: string; medium: string; large: string; }; colors: { primary: { blue: string; yellow: string; skyBlue: string; green: string; }; secondary: { ...; }; grayScale: string[]; }; blocks: { ...; }; }',
                },
              },
              dark: {
                defaultValue: {
                  value:
                    "{\n  ...light,\n  name: 'dark',\n  config: {\n    background: '#13131A',\n  },\n  colors: colors,\n  blocks: {\n    status: light.blocks.status,\n    text: light.blocks.text,\n    heading: light.blocks.heading,\n    link: {\n      color: colors.grayScale[0],\n      hover: {\n        color: colors.primary.blue,\n      },\n    },\n    paper: {\n      background: '#1C1C24',\n      borderRadius: borderRadius,\n    },\n    input: {\n      fontSize: '1rem',\n      background: colors.grayScale[9],\n      color: colors.grayScale[1],\n      placeholderColor: colors.grayScale[6],\n      default: {\n        borderColor: colors.grayScale[6],\n      },\n      active: {\n        borderColor: colors.grayScale[0],\n      },\n      error: {\n        borderColor: colors.secondary.red,\n      },\n    },\n    button: {\n      fontSize: '1rem',\n      appearance: {\n        primary: {\n          background: colors.primary.blue,\n          color: colors.grayScale[0],\n        },\n        secondary: {\n          background: colors.grayScale[3],\n          color: colors.grayScale[10],\n        },\n        alert: {\n          background: colors.secondary.red,\n          color: colors.grayScale[0],\n        },\n        success: {\n          background: colors.primary.green,\n          color: colors.grayScale[0],\n        },\n        warning: {\n          background: colors.primary.yellow,\n          color: colors.grayScale[0],\n        },\n        invert: {\n          background: colors.grayScale[0],\n          color: colors.grayScale[9],\n        },\n      },\n    },\n    icon: {\n      size: {\n        sm: '.8rem',\n        rg: '1rem',\n        lg: '1.2rem',\n      },\n    },\n    tooltip: {\n      color: colors.grayScale[0],\n      background: colors.grayScale[7],\n      maxWidth: '320px',\n    },\n  },\n}",
                },
                description: '',
                name: 'dark',
                required: !1,
                type: {
                  name: '{ name: string; config: { background: string; }; borderRadius: { small: string; medium: string; large: string; }; colors: { primary: { blue: string; yellow: string; skyBlue: string; green: string; }; secondary: { ...; }; grayScale: string[]; }; blocks: { ...; }; }',
                },
              },
              useSystemTheme: {
                defaultValue: null,
                description: '',
                name: 'useSystemTheme',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/blocks/Theme/BlockThemeProvider.tsx#BlockThemeProvider'
            ] = {
              docgenInfo: BlockThemeProvider_BlockThemeProvider.__docgenInfo,
              name: 'BlockThemeProvider',
              path: 'src/blocks/Theme/BlockThemeProvider.tsx#BlockThemeProvider',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _templateObject,
        colors = {
          primary: {
            blue: '#0062FF',
            yellow: '#FFC542',
            skyBlue: '#50B5FF',
            green: '#3DD598',
          },
          secondary: {
            orange: '#FF974A',
            red: '#FC5A5A',
            green: '#82C43C',
            purple: '#A461D8',
            pink: '#FF9AD5',
          },
          grayScale: [
            '#FFFFFF',
            '#FAFAFB',
            '#F1F1F5',
            '#E2E2EA',
            '#D5D5DC',
            '#B5B5BE',
            '#92929D',
            '#696974',
            '#44444F',
            '#171725',
            '#000000',
          ],
        },
        borderRadius = { small: '4px', medium: '8px', large: '12px' },
        Theme_light = {
          name: 'light',
          config: { background: colors.grayScale[0] },
          borderRadius: borderRadius,
          colors: colors,
          blocks: {
            status: {
              padding: '5px 8px',
              borderRadius: borderRadius.small,
              config: {
                primary: { color: colors.primary.skyBlue },
                secondary: { color: colors.grayScale[7] },
                success: { color: colors.primary.green },
                warning: { color: colors.primary.yellow },
                error: { color: colors.secondary.red },
              },
            },
            text: {
              weight: { bold: 700, regular: 400, medium: 500, light: 300 },
              size: { sm: 12, rg: 14, md: 16, lg: 18 },
            },
            heading: {
              config: {
                h1: { weight: 600, size: 48 },
                h2: { weight: 600, size: 36 },
                h3: { weight: 600, size: 28 },
                h4: { weight: 600, size: 24 },
                h5: { weight: 600, size: 18 },
                h6: { weight: 600, size: 16 },
                tittle: { weight: 600, size: 16 },
                h7: { weight: 600, size: 14 },
                h8: { weight: 400, size: 14 },
                h9: { weight: 600, size: 12 },
                h10: { weight: 600, size: 11 },
              },
            },
            link: {
              color: colors.grayScale[10],
              hover: { color: colors.primary.blue },
            },
            paper: {
              background: colors.grayScale[0],
              borderRadius: borderRadius,
            },
            input: {
              fontSize: '1rem',
              color: colors.grayScale[8],
              placeholderColor: colors.grayScale[6],
              background: colors.grayScale[0],
              default: { borderColor: colors.grayScale[2] },
              active: { borderColor: colors.primary.skyBlue },
              error: { borderColor: colors.secondary.red },
            },
            button: {
              fontSize: '1rem',
              appearance: {
                primary: {
                  background: colors.primary.blue,
                  color: colors.grayScale[0],
                },
                secondary: {
                  background: colors.grayScale[3],
                  color: colors.grayScale[10],
                },
                alert: {
                  background: colors.secondary.red,
                  color: colors.grayScale[0],
                },
                success: {
                  background: colors.primary.green,
                  color: colors.grayScale[0],
                },
                warning: {
                  background: colors.primary.yellow,
                  color: colors.grayScale[0],
                },
                invert: {
                  color: colors.grayScale[0],
                  background: colors.grayScale[9],
                },
              },
            },
            icon: { size: { sm: '.8rem', rg: '1rem', lg: '1.2rem' } },
            tooltip: {
              color: colors.grayScale[0],
              background: colors.grayScale[7],
              maxWidth: '320px',
            },
          },
        },
        Theme_dark = Object.assign({}, Theme_light, {
          name: 'dark',
          config: { background: '#13131A' },
          colors: colors,
          blocks: {
            status: Theme_light.blocks.status,
            text: Theme_light.blocks.text,
            heading: Theme_light.blocks.heading,
            link: {
              color: colors.grayScale[0],
              hover: { color: colors.primary.blue },
            },
            paper: { background: '#1C1C24', borderRadius: borderRadius },
            input: {
              fontSize: '1rem',
              background: colors.grayScale[9],
              color: colors.grayScale[1],
              placeholderColor: colors.grayScale[6],
              default: { borderColor: colors.grayScale[6] },
              active: { borderColor: colors.grayScale[0] },
              error: { borderColor: colors.secondary.red },
            },
            button: {
              fontSize: '1rem',
              appearance: {
                primary: {
                  background: colors.primary.blue,
                  color: colors.grayScale[0],
                },
                secondary: {
                  background: colors.grayScale[3],
                  color: colors.grayScale[10],
                },
                alert: {
                  background: colors.secondary.red,
                  color: colors.grayScale[0],
                },
                success: {
                  background: colors.primary.green,
                  color: colors.grayScale[0],
                },
                warning: {
                  background: colors.primary.yellow,
                  color: colors.grayScale[0],
                },
                invert: {
                  background: colors.grayScale[0],
                  color: colors.grayScale[9],
                },
              },
            },
            icon: { size: { sm: '.8rem', rg: '1rem', lg: '1.2rem' } },
            tooltip: {
              color: colors.grayScale[0],
              background: colors.grayScale[7],
              maxWidth: '320px',
            },
          },
        }),
        Theme = { light: Theme_light, dark: Theme_dark },
        client = __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/index.js',
        ),
        dist = __webpack_require__(
          './node_modules/storybook-addon-styled-component-theme/dist/index.js',
        ),
        _excluded = ['children', 'theme'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var ThemeWrapper = styled_components_browser_esm.default.div(
          _templateObject ||
            (_templateObject = (function _taggedTemplateLiteralLoose(
              strings,
              raw,
            ) {
              return (
                raw || (raw = strings.slice(0)), (strings.raw = raw), strings
              );
            })([
              '\n  height: 100%;\n  background: ',
              ';\n  padding: 16px;\n  min-height: 600px;\n',
            ])),
          function (props) {
            return props.theme.config.background;
          },
        ),
        themes = [Theme.light, Theme.dark];
      Object(client.addDecorator)(
        Object(dist.withThemesProvider)(themes, function (_ref) {
          var children = _ref.children,
            theme = _ref.theme;
          _objectWithoutProperties(_ref, _excluded);
          return Object(jsx_runtime.jsx)(
            styled_components_browser_esm.ThemeProvider,
            {
              theme: theme,
              children: Object(jsx_runtime.jsx)(ThemeWrapper, {
                children: children,
              }),
            },
          );
        }),
      );
      var parameters = {
        actions: { argTypesRegex: '^on[A-Z].*' },
        layout: 'fullscreen',
        controls: {
          matchers: { color: /(background|color)$/i, date: /Date$/ },
        },
      };
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
          case 'argTypes':
            return esm.a.warn(
              'Invalid args/argTypes in config, ignoring.',
              JSON.stringify(value),
            );
          case 'decorators':
            return value.forEach(function (decorator) {
              return Object(ClientApi.d)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return Object(ClientApi.e)(loader, !1);
            });
          case 'parameters':
            return Object(ClientApi.f)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source),
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key),
                        );
                      });
                }
                return target;
              })({}, value),
              !1,
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return Object(ClientApi.b)(enhancer);
            });
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return Object(ClientApi.c)(enhancer);
            });
          case 'render':
            return Object(ClientApi.g)(value);
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), Object(ClientApi.f)(v, !1);
          case '__namedExportsOrder':
          case 'decorateStory':
          case 'renderToDOM':
            return null;
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    './generated-stories-entry.js': function (
      module,
      exports,
      __webpack_require__,
    ) {
      'use strict';
      (function (module) {
        (0,
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/index.js',
        ).configure)(
          [
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$',
            ),
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$',
            ),
          ],
          module,
          !1,
        );
      }.call(
        this,
        __webpack_require__('./node_modules/webpack/buildin/module.js')(module),
      ));
    },
    './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$':
      function (module, exports, __webpack_require__) {
        var map = {
          './blocks/Button/Button.stories.tsx':
            './src/blocks/Button/Button.stories.tsx',
          './blocks/Input/Input.stories.tsx':
            './src/blocks/Input/Input.stories.tsx',
          './blocks/Label/Label.stories.tsx':
            './src/blocks/Label/Label.stories.tsx',
          './blocks/Link/Link.stories.tsx':
            './src/blocks/Link/Link.stories.tsx',
          './blocks/Popover/Popover.stories.tsx':
            './src/blocks/Popover/Popover.stories.tsx',
          './blocks/SideNav/SideNav.stories.tsx':
            './src/blocks/SideNav/SideNav.stories.tsx',
          './blocks/Status/Status.stories.tsx':
            './src/blocks/Status/Status.stories.tsx',
          './blocks/Tooltip/Tooltip.stories.tsx':
            './src/blocks/Tooltip/Tooltip.stories.tsx',
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$');
      },
    './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$':
      function (module, exports, __webpack_require__) {
        var map = {
          './stories/Introduction.stories.mdx':
            './src/stories/Introduction.stories.mdx',
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$');
      },
    './src/blocks/Button/Button.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary;
        }),
        __webpack_require__.d(__webpack_exports__, 'withIcon', function () {
          return withIcon;
        }),
        __webpack_require__.d(__webpack_exports__, 'fillWidth', function () {
          return fillWidth;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        ),
        __webpack_require__('./node_modules/react/index.js');
      var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react-icons/fi/index.esm.js',
        ),
        ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './src/blocks/Button/index.tsx',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      __webpack_exports__.default = {
        title: 'Button',
        component: ___WEBPACK_IMPORTED_MODULE_4__.a,
      };
      var defaultArgs = { children: 'Search' },
        Template = function Template(args) {
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
            ___WEBPACK_IMPORTED_MODULE_4__.a,
            Object.assign({}, args),
          );
        };
      Template.displayName = 'Template';
      var Primary = Template.bind({});
      Primary.args = defaultArgs;
      var withIcon = Template.bind({});
      withIcon.args = Object.assign({}, defaultArgs, {
        left: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
          react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.d,
          {},
        ),
      });
      var fillWidth = Template.bind({});
      (fillWidth.args = Object.assign({}, defaultArgs, { fullWidth: !0 })),
        (Primary.parameters = Object.assign(
          {
            storySource: {
              source: '(args: ButtonProps) => <Button {...args} />',
            },
          },
          Primary.parameters,
        )),
        (withIcon.parameters = Object.assign(
          {
            storySource: {
              source: '(args: ButtonProps) => <Button {...args} />',
            },
          },
          withIcon.parameters,
        )),
        (fillWidth.parameters = Object.assign(
          {
            storySource: {
              source: '(args: ButtonProps) => <Button {...args} />',
            },
          },
          fillWidth.parameters,
        ));
    },
    './src/blocks/Button/index.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js',
        );
      var _templateObject,
        _templateObject2,
        react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        polished__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          './node_modules/polished/dist/polished.esm.js',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        _excluded = ['children', 'left'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function _taggedTemplateLiteralLoose(strings, raw) {
        return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
      }
      var Placeholder =
          styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div(
            _templateObject ||
              (_templateObject = _taggedTemplateLiteralLoose([
                '\n  height: ',
                ';\n  display: flex;\n  align-items: center;\n',
              ])),
            function (props) {
              return props.theme.blocks.button.fontSize;
            },
          ),
        StyledButton =
          styled_components__WEBPACK_IMPORTED_MODULE_6__.default.button(
            _templateObject2 ||
              (_templateObject2 = _taggedTemplateLiteralLoose([
                '\n  padding: 8px 16px;\n  border-radius: 12px;\n  border: none;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  font-size: ',
                ';\n  cursor: pointer;\n\n  ',
                '\n\n  :hover {\n    background: ',
                ';\n  }\n\n  ',
                '\n  ',
                ' {\n    margin-right: ',
                ';\n  }\n',
              ])),
            function (props) {
              return props.theme.blocks.button.fontSize;
            },
            function (_ref) {
              var theme = _ref.theme,
                appearance = _ref.appearance;
              return (
                '\n    background: ' +
                theme.blocks.button.appearance[appearance || 'primary']
                  .background +
                ';\n    color: ' +
                theme.blocks.button.appearance[appearance || 'primary'].color +
                ';\n  '
              );
            },
            function (props) {
              return Object(polished__WEBPACK_IMPORTED_MODULE_7__.a)(
                0.15,
                props.theme.blocks.button.appearance[
                  props.appearance || 'primary'
                ].background,
              );
            },
            function (_ref2) {
              return _ref2.fullWidth && 'width: 100%;';
            },
            Placeholder,
            function (_ref3) {
              return _ref3.onlyPlaceholder ? 0 : '8px';
            },
          ),
        Button = react__WEBPACK_IMPORTED_MODULE_5__.forwardRef(function (
          _ref4,
          ref,
        ) {
          var children = _ref4.children,
            left = _ref4.left,
            props = _objectWithoutProperties(_ref4, _excluded);
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
            StyledButton,
            Object.assign({}, props, {
              ref: ref,
              onlyPlaceholder: !children,
              children: [
                left &&
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                    Placeholder,
                    { children: left },
                  ),
                children,
              ],
            }),
          );
        });
      __webpack_exports__.a = Button;
      try {
        (Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              left: {
                defaultValue: null,
                description: '',
                name: 'left',
                required: !1,
                type: { name: 'ReactNode' },
              },
              fullWidth: {
                defaultValue: null,
                description: '',
                name: 'fullWidth',
                required: !1,
                type: { name: 'boolean' },
              },
              appearance: {
                defaultValue: null,
                description: '',
                name: 'appearance',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"alert"' },
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"success"' },
                    { value: '"warning"' },
                    { value: '"invert"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/blocks/Button/index.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'src/blocks/Button/index.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/blocks/Input/Input.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary;
        }),
        __webpack_require__.d(__webpack_exports__, 'WithError', function () {
          return WithError;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'WithLeftAndRight',
          function () {
            return WithLeftAndRight;
          },
        );
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        );
      var _templateObject,
        _templateObject2,
        _templateObject3,
        react = __webpack_require__('./node_modules/react/index.js'),
        index_esm = __webpack_require__(
          './node_modules/react-icons/fi/index.esm.js',
        ),
        styled_components_browser_esm =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.slice.js',
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.keys.js',
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.index-of.js',
          ),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.is-array.js',
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.description.js',
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.to-string.js',
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.iterator.js',
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.iterator.js',
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.iterator.js',
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.iterator.js',
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.function.name.js',
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.from.js',
          ),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js',
          )),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        _excluded = [
          'left',
          'right',
          'className',
          'style',
          'error',
          'onFocus',
          'onBlur',
        ];
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function _taggedTemplateLiteralLoose(strings, raw) {
        return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
      }
      var InputWrapper = styled_components_browser_esm.default.div(
          _templateObject ||
            (_templateObject = _taggedTemplateLiteralLoose([
              '\n  display: flex;\n  border-radius: 12px;\n  padding: 8px 12px;\n  align-items: center;\n  border: 2px solid ',
              ';\n  background: ',
              ';\n\n  *:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  :hover,\n  :focus {\n    border-color: ',
              ';\n    outline: none !important;\n  }\n\n  ',
              '\n\n  ',
              '\n',
            ])),
          function (props) {
            return props.theme.blocks.input.default.borderColor;
          },
          function (props) {
            return props.theme.blocks.input.background;
          },
          function (props) {
            return props.theme.blocks.input.active.borderColor;
          },
          function (_ref) {
            var theme = _ref.theme;
            return (
              _ref.isFocused &&
              'border-color: ' + theme.blocks.input.active.borderColor + ';'
            );
          },
          function (_ref2) {
            var theme = _ref2.theme;
            return (
              _ref2.error &&
              'border-color: ' + theme.blocks.input.error.borderColor + ';'
            );
          },
        ),
        Placeholder = styled_components_browser_esm.default.div(
          _templateObject2 ||
            (_templateObject2 = _taggedTemplateLiteralLoose([
              '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n',
            ])),
        ),
        StyledInput = styled_components_browser_esm.default.input(
          _templateObject3 ||
            (_templateObject3 = _taggedTemplateLiteralLoose([
              '\n  border: none;\n  flex-grow: 2;\n  font-size: ',
              ';\n  color: ',
              ';\n  background: none;\n\n  :hover,\n  :focus {\n    outline: none !important;\n  }\n\n  ::placeholder {\n    color: ',
              ';\n  }\n',
            ])),
          function (props) {
            return props.theme.blocks.input.fontSize;
          },
          function (props) {
            return props.theme.blocks.input.color;
          },
          function (props) {
            return props.theme.blocks.input.placeholderColor;
          },
        ),
        Input = react.forwardRef(function (_ref3, ref) {
          var left = _ref3.left,
            right = _ref3.right,
            className = _ref3.className,
            style = _ref3.style,
            error = _ref3.error,
            onFocus = _ref3.onFocus,
            onBlur = _ref3.onBlur,
            props = _objectWithoutProperties(_ref3, _excluded),
            inputRef = react.useRef(null),
            _React$useState2 = _slicedToArray(react.useState(!1), 2),
            isInputFocused = _React$useState2[0],
            setInputFocus = _React$useState2[1];
          return Object(jsx_runtime.jsxs)(InputWrapper, {
            ref: ref,
            className: className,
            style: style,
            isFocused: isInputFocused,
            error: error,
            children: [
              left && Object(jsx_runtime.jsx)(Placeholder, { children: left }),
              Object(jsx_runtime.jsx)(
                StyledInput,
                Object.assign({ ref: inputRef }, props, {
                  onFocus: function handleInputFocus(event) {
                    setInputFocus(!0), onFocus && onFocus(event);
                  },
                  onBlur: function handleInputBlur(event) {
                    setInputFocus(!1), onBlur && onBlur(event);
                  },
                }),
              ),
              right &&
                Object(jsx_runtime.jsx)(Placeholder, { children: right }),
            ],
          });
        }),
        blocks_Input = Input;
      try {
        (Input.displayName = 'Input'),
          (Input.__docgenInfo = {
            description: '',
            displayName: 'Input',
            props: {
              left: {
                defaultValue: null,
                description: '',
                name: 'left',
                required: !1,
                type: { name: 'ReactNode' },
              },
              right: {
                defaultValue: null,
                description: '',
                name: 'right',
                required: !1,
                type: { name: 'ReactNode' },
              },
              error: {
                defaultValue: null,
                description: '',
                name: 'error',
                required: !1,
                type: { name: 'string' },
              },
              isFocused: {
                defaultValue: null,
                description: '',
                name: 'isFocused',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/blocks/Input/index.tsx#Input'] = {
              docgenInfo: Input.__docgenInfo,
              name: 'Input',
              path: 'src/blocks/Input/index.tsx#Input',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = { title: 'Input', component: blocks_Input };
      var defaultArgs = { placeholder: 'Enter your name' },
        Input_stories_Template = function Template(args) {
          return Object(jsx_runtime.jsx)(blocks_Input, Object.assign({}, args));
        };
      Input_stories_Template.displayName = 'Template';
      var Primary = Input_stories_Template.bind({});
      Primary.args = defaultArgs;
      var WithError = Input_stories_Template.bind({});
      WithError.args = Object.assign({}, defaultArgs, {
        error: 'Name cannot be empty',
      });
      var WithLeftAndRight = Input_stories_Template.bind({});
      (WithLeftAndRight.args = Object.assign({}, defaultArgs, {
        left: Object(jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: Object(jsx_runtime.jsx)(index_esm.d, {}),
        }),
        right: Object(jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: Object(jsx_runtime.jsx)(index_esm.e, { tabIndex: 0 }),
        }),
      })),
        (Primary.parameters = Object.assign(
          {
            storySource: {
              source: '(args: InputProps) => <Input {...args} />',
            },
          },
          Primary.parameters,
        )),
        (WithError.parameters = Object.assign(
          {
            storySource: {
              source: '(args: InputProps) => <Input {...args} />',
            },
          },
          WithError.parameters,
        )),
        (WithLeftAndRight.parameters = Object.assign(
          {
            storySource: {
              source: '(args: InputProps) => <Input {...args} />',
            },
          },
          WithLeftAndRight.parameters,
        ));
    },
    './src/blocks/Label/Label.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary;
        });
      var _templateObject;
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        ),
        __webpack_require__('./node_modules/react/index.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js');
      var Label = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ).default.label(
          _templateObject ||
            (_templateObject = (function _taggedTemplateLiteralLoose(
              strings,
              raw,
            ) {
              return (
                raw || (raw = strings.slice(0)), (strings.raw = raw), strings
              );
            })(['\n  margin: 0;\n  font-size: 14px;\n'])),
        ),
        blocks_Label = Label;
      try {
        (Label.displayName = 'Label'),
          (Label.__docgenInfo = {
            description: '',
            displayName: 'Label',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: { name: 'Ref<HTMLLabelElement>' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'any' },
              },
              as: {
                defaultValue: null,
                description: '',
                name: 'as',
                required: !1,
                type: { name: 'undefined' },
              },
              forwardedAs: {
                defaultValue: null,
                description: '',
                name: 'forwardedAs',
                required: !1,
                type: { name: 'undefined' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/blocks/Label/index.tsx#Label'] = {
              docgenInfo: Label.__docgenInfo,
              name: 'Label',
              path: 'src/blocks/Label/index.tsx#Label',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        Label_stories_Template =
          ((__webpack_exports__.default = {
            title: 'Label',
            component: blocks_Label,
          }),
          function Template(args) {
            return Object(jsx_runtime.jsx)(
              blocks_Label,
              Object.assign({}, args),
            );
          });
      Label_stories_Template.displayName = 'Template';
      var Primary = Label_stories_Template.bind({});
      (Primary.args = { children: 'Name:' }),
        (Primary.parameters = Object.assign(
          {
            storySource: {
              source: '(args: LabelProps) => <Label {...args} />',
            },
          },
          Primary.parameters,
        ));
    },
    './src/blocks/Link/Link.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary;
        }),
        __webpack_require__.d(__webpack_exports__, 'asAnchor', function () {
          return asAnchor;
        }),
        __webpack_require__.d(__webpack_exports__, 'withIcon', function () {
          return withIcon;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        ),
        __webpack_require__('./node_modules/react/index.js');
      var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/blocks/Link/index.tsx',
        ),
        react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/react-icons/fi/index.esm.js',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      __webpack_exports__.default = {
        title: 'Link',
        component: ___WEBPACK_IMPORTED_MODULE_3__.a,
      };
      var defaultArgs = { title: 'Home', id: 'home', action: console.log },
        Template = function Template(args) {
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
            ___WEBPACK_IMPORTED_MODULE_3__.a,
            Object.assign({}, args),
          );
        };
      Template.displayName = 'Template';
      var Primary = Template.bind({});
      Primary.args = defaultArgs;
      var asAnchor = Template.bind({});
      asAnchor.args = Object.assign({}, defaultArgs, {
        href: '/?path=/story/link--primary',
      });
      var withIcon = Template.bind({});
      (withIcon.args = Object.assign({}, defaultArgs, {
        icon: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
          react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.b,
          {},
        ),
      })),
        (Primary.parameters = Object.assign(
          {
            storySource: { source: '(args: LinkProps) => <Link {...args} />' },
          },
          Primary.parameters,
        )),
        (asAnchor.parameters = Object.assign(
          {
            storySource: { source: '(args: LinkProps) => <Link {...args} />' },
          },
          asAnchor.parameters,
        )),
        (withIcon.parameters = Object.assign(
          {
            storySource: { source: '(args: LinkProps) => <Link {...args} />' },
          },
          withIcon.parameters,
        ));
    },
    './src/blocks/Link/index.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('./node_modules/core-js/modules/es.string.link.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js',
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _templateObject,
        styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        _blocks_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          './src/blocks/Paper/index.tsx',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        _excluded = [
          'href',
          'title',
          'icon',
          'id',
          'action',
          'index',
          'active',
        ];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Wrapper = Object(
          styled_components__WEBPACK_IMPORTED_MODULE_7__.default,
        )(_blocks_Paper__WEBPACK_IMPORTED_MODULE_8__.a).attrs({
          'data-component': 'Link',
        })(
          _templateObject ||
            (_templateObject = (function _taggedTemplateLiteralLoose(
              strings,
              raw,
            ) {
              return (
                raw || (raw = strings.slice(0)), (strings.raw = raw), strings
              );
            })([
              '\n  display: inline-flex;\n  color: ',
              ';\n  text-decoration: none;\n  cursor: pointer;\n  ',
              ';\n  &:hover {\n    color: ',
              ';\n  }\n',
            ])),
          function (_ref) {
            return _ref.theme.blocks.link.color;
          },
          function (_ref2) {
            var theme = _ref2.theme;
            return _ref2.active && 'color: ' + theme.blocks.link.hover.color;
          },
          function (_ref3) {
            return _ref3.theme.blocks.link.hover.color;
          },
        ),
        Link = function Link(_ref4) {
          var href = _ref4.href,
            title = _ref4.title,
            icon = _ref4.icon,
            id = _ref4.id,
            action = _ref4.action,
            index = _ref4.index,
            active = _ref4.active,
            rest = _objectWithoutProperties(_ref4, _excluded);
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
            Wrapper,
            Object.assign(
              {
                active: active,
                flex: !0,
                alignItems: 'center',
                gutter: 12,
                href: href,
                as: href ? 'a' : 'div',
                onClick: function onClick(event) {
                  action &&
                    action(event, {
                      id: id,
                      index: void 0 === index ? -1 : index,
                    });
                },
              },
              rest,
              {
                children: [
                  icon,
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                    'span',
                    { children: title },
                  ),
                ],
              },
            ),
          );
        };
      (Link.displayName = 'Link'), (__webpack_exports__.a = Link);
      try {
        (Link.displayName = 'Link'),
          (Link.__docgenInfo = {
            description: '',
            displayName: 'Link',
            props: {
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !1,
                type: { name: 'ReactNode' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !0,
                type: { name: 'string' },
              },
              href: {
                defaultValue: null,
                description: '',
                name: 'href',
                required: !1,
                type: { name: 'string' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              action: {
                defaultValue: null,
                description: '',
                name: 'action',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<Element, Event>, data: { id: string; index?: number; }) => void',
                },
              },
              index: {
                defaultValue: null,
                description: '',
                name: 'index',
                required: !1,
                type: { name: 'number' },
              },
              active: {
                defaultValue: null,
                description: '',
                name: 'active',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/blocks/Link/index.tsx#Link'] = {
              docgenInfo: Link.__docgenInfo,
              name: 'Link',
              path: 'src/blocks/Link/index.tsx#Link',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/blocks/Paper/index.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      var _templateObject;
      __webpack_require__('./node_modules/core-js/modules/es.array.slice.js');
      var Paper = __webpack_require__(
        './node_modules/styled-components/dist/styled-components.browser.esm.js',
      ).default.div.attrs({ 'data-component': 'paper' })(
        _templateObject ||
          (_templateObject = (function _taggedTemplateLiteralLoose(
            strings,
            raw,
          ) {
            return (
              raw || (raw = strings.slice(0)), (strings.raw = raw), strings
            );
          })([
            '\n  ',
            '\n  ',
            '\n  ',
            '\n',
            '\n    ',
            '\n    ',
            '\n  ',
            '\n    ',
            '\n\n  > * {\n    &:not(:last-child) {\n      ',
            '\n      ',
            '\n    }\n  }\n',
          ])),
        function (_ref) {
          return _ref.flex && 'display: flex;';
        },
        function (_ref2) {
          return _ref2.stack && 'display: flex; flex-direction: column;';
        },
        function (_ref3) {
          var alignItems = _ref3.alignItems;
          return alignItems && 'align-items: ' + alignItems + ';';
        },
        function (_ref4) {
          var justifyContent = _ref4.justifyContent;
          return justifyContent && 'justify-content: ' + justifyContent + ';';
        },
        function (_ref5) {
          var height = _ref5.height;
          return height && 'height: ' + height + ';';
        },
        function (_ref6) {
          var width = _ref6.width;
          return width ? 'width: ' + width + ';' : 'width: 100%;';
        },
        function (_ref7) {
          var borderRadius = _ref7.borderRadius,
            theme = _ref7.theme;
          return (
            borderRadius &&
            'border-radius: ' +
              theme.blocks.paper.borderRadius[borderRadius] +
              ';'
          );
        },
        function (_ref8) {
          var solid = _ref8.solid,
            theme = _ref8.theme;
          return solid && 'background: ' + theme.blocks.paper.background + ';';
        },
        function (_ref9) {
          var gutter = _ref9.gutter,
            stack = _ref9.stack;
          return gutter && stack && 'margin-bottom: ' + gutter + 'px;';
        },
        function (_ref10) {
          var gutter = _ref10.gutter,
            flex = _ref10.flex;
          return gutter && flex && 'margin-right: ' + gutter + 'px;';
        },
      );
      __webpack_exports__.a = Paper;
      try {
        (Paper.displayName = 'Paper'),
          (Paper.__docgenInfo = {
            description: '',
            displayName: 'Paper',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: { name: 'Ref<HTMLDivElement>' },
              },
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
                required: !1,
                type: { name: 'string | number' },
              },
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !1,
                type: { name: 'string | number' },
              },
              flex: {
                defaultValue: null,
                description: '',
                name: 'flex',
                required: !1,
                type: { name: 'boolean' },
              },
              stack: {
                defaultValue: null,
                description: '',
                name: 'stack',
                required: !1,
                type: { name: 'boolean' },
              },
              alignItems: {
                defaultValue: null,
                description: '',
                name: 'alignItems',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"center"' },
                    { value: '"flex-start"' },
                    { value: '"flex-end"' },
                    { value: '"stretch"' },
                  ],
                },
              },
              justifyContent: {
                defaultValue: null,
                description: '',
                name: 'justifyContent',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"center"' },
                    { value: '"flex-start"' },
                    { value: '"flex-end"' },
                    { value: '"space-between"' },
                    { value: '"space-around"' },
                  ],
                },
              },
              borderRadius: {
                defaultValue: null,
                description: '',
                name: 'borderRadius',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"small"' },
                    { value: '"medium"' },
                    { value: '"large"' },
                  ],
                },
              },
              gutter: {
                defaultValue: null,
                description: '',
                name: 'gutter',
                required: !1,
                type: { name: 'number' },
              },
              solid: {
                defaultValue: null,
                description: '',
                name: 'solid',
                required: !1,
                type: { name: 'boolean' },
              },
              'data-component': {
                defaultValue: null,
                description: '',
                name: 'data-component',
                required: !1,
                type: { name: 'string' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'any' },
              },
              as: {
                defaultValue: null,
                description: '',
                name: 'as',
                required: !1,
                type: { name: 'undefined' },
              },
              forwardedAs: {
                defaultValue: null,
                description: '',
                name: 'forwardedAs',
                required: !1,
                type: { name: 'undefined' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/blocks/Paper/index.tsx#Paper'] = {
              docgenInfo: Paper.__docgenInfo,
              name: 'Paper',
              path: 'src/blocks/Paper/index.tsx#Paper',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/blocks/Popover/Popover.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary;
        }),
        __webpack_require__.d(__webpack_exports__, 'onHover', function () {
          return onHover;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        ),
        __webpack_require__('./node_modules/react/index.js');
      var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/blocks/Popover/index.tsx',
        ),
        _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './src/blocks/Button/index.tsx',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      __webpack_exports__.default = {
        title: 'Popover',
        component: ___WEBPACK_IMPORTED_MODULE_3__.a,
      };
      var defaultArgs = {
          children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
            _Button__WEBPACK_IMPORTED_MODULE_4__.a,
            { children: 'Popup' },
          ),
          popover: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
            'div',
            {
              style: {
                height: 40,
                width: 60,
                background: 'white',
                border: '1px solid gray',
              },
              id: 'dropdown-1',
              children: 'popover',
            },
          ),
        },
        Template = function Template(args) {
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
            ___WEBPACK_IMPORTED_MODULE_3__.a,
            Object.assign({}, args),
          );
        };
      Template.displayName = 'Template';
      var Primary = Template.bind({});
      Primary.args = defaultArgs;
      var onHover = Template.bind({});
      (onHover.args = Object.assign({}, defaultArgs, { on: 'hover' })),
        (Primary.parameters = Object.assign(
          {
            storySource: {
              source: '(args: PopoverProps) => <Popover {...args} />',
            },
          },
          Primary.parameters,
        )),
        (onHover.parameters = Object.assign(
          {
            storySource: {
              source: '(args: PopoverProps) => <Popover {...args} />',
            },
          },
          onHover.parameters,
        ));
    },
    './src/blocks/Popover/index.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__('./node_modules/core-js/modules/web.timers.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.is-array.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.description.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.to-string.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.string.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.iterator.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.name.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.from.js');
      var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        react_tiny_popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          './node_modules/react-tiny-popover/dist/Popover.js',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var Popover = function Popover(_ref) {
        var direction = _ref.direction,
          align = _ref.align,
          padding = _ref.padding,
          children = _ref.children,
          popover = _ref.popover,
          _ref$on = _ref.on,
          on = void 0 === _ref$on ? 'click' : _ref$on,
          _ref$closeOnOutsideCl = _ref.closeOnOutsideClick,
          closeOnOutsideClick =
            void 0 !== _ref$closeOnOutsideCl && _ref$closeOnOutsideCl,
          onOpen = _ref.onOpen,
          onClose = _ref.onClose,
          enterDelay = _ref.enterDelay,
          existDelay = _ref.existDelay,
          _React$useState2 = _slicedToArray(
            react__WEBPACK_IMPORTED_MODULE_12__.useState(!1),
            2,
          ),
          open = _React$useState2[0],
          setOpen = _React$useState2[1],
          popoverPosition =
            'string' == typeof direction ? [direction] : direction,
          onMouseLeave = function onMouseLeave() {
            existDelay
              ? setTimeout(function () {
                  setOpen(!1), onClose && onClose();
                }, existDelay)
              : (setOpen(!1), onClose && onClose());
          },
          triggerProps =
            'click' === on
              ? {
                  onClick: function onClick() {
                    setOpen(function (o) {
                      var newState = !o;
                      return (
                        newState ? onOpen && onOpen() : onClose && onClose(),
                        newState
                      );
                    });
                  },
                }
              : {
                  onMouseEnter: function onMouseEnter() {
                    enterDelay
                      ? setTimeout(function () {
                          setOpen(!0), onOpen && onOpen();
                        }, enterDelay)
                      : (setOpen(!0), onOpen && onOpen());
                  },
                  onMouseLeave: onMouseLeave,
                },
          onOutsideClick =
            closeOnOutsideClick && 'click' === on ? onMouseLeave : void 0;
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(
          react_tiny_popover__WEBPACK_IMPORTED_MODULE_13__.Popover,
          {
            onClickOutside: onOutsideClick,
            positions: popoverPosition,
            align: align,
            isOpen: open,
            padding: padding,
            content: popover,
            children: react__WEBPACK_IMPORTED_MODULE_12__.cloneElement(
              children,
              triggerProps,
            ),
          },
        );
      };
      (Popover.displayName = 'Popover'), (__webpack_exports__.a = Popover);
      try {
        (Popover.displayName = 'Popover'),
          (Popover.__docgenInfo = {
            description: '',
            displayName: 'Popover',
            props: {
              align: {
                defaultValue: null,
                description: '',
                name: 'align',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"start"' },
                    { value: '"center"' },
                    { value: '"end"' },
                  ],
                },
              },
              padding: {
                defaultValue: null,
                description: '',
                name: 'padding',
                required: !1,
                type: { name: 'number' },
              },
              popover: {
                defaultValue: null,
                description: '',
                name: 'popover',
                required: !0,
                type: {
                  name: 'ReactElement<any, string | JSXElementConstructor<any>>',
                },
              },
              direction: {
                defaultValue: null,
                description: '',
                name: 'direction',
                required: !1,
                type: { name: 'PopoverPosition | PopoverPosition[]' },
              },
              on: {
                defaultValue: { value: 'click' },
                description: '',
                name: 'on',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"hover"' }, { value: '"click"' }],
                },
              },
              closeOnOutsideClick: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'closeOnOutsideClick',
                required: !1,
                type: { name: 'boolean' },
              },
              onOpen: {
                defaultValue: null,
                description: '',
                name: 'onOpen',
                required: !1,
                type: { name: '() => void' },
              },
              onClose: {
                defaultValue: null,
                description: '',
                name: 'onClose',
                required: !1,
                type: { name: '() => void' },
              },
              enterDelay: {
                defaultValue: null,
                description: '',
                name: 'enterDelay',
                required: !1,
                type: { name: 'number' },
              },
              existDelay: {
                defaultValue: null,
                description: '',
                name: 'existDelay',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/blocks/Popover/index.tsx#Popover'] = {
              docgenInfo: Popover.__docgenInfo,
              name: 'Popover',
              path: 'src/blocks/Popover/index.tsx#Popover',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/blocks/SideNav/SideNav.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary;
        });
      __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.is-array.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.description.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.to-string.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.string.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.name.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.from.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        );
      var _templateObject,
        react = __webpack_require__('./node_modules/react/index.js'),
        react_default = __webpack_require__.n(react),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        Paper =
          (__webpack_require__(
            './node_modules/core-js/modules/es.object.keys.js',
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.index-of.js',
          ),
          __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
          __webpack_require__('./src/blocks/Paper/index.tsx')),
        Link = __webpack_require__('./src/blocks/Link/index.tsx'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        _excluded = ['items', 'gap', 'activeItem', 'onItemClick'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Wrapper = Object(styled_components_browser_esm.default)(Paper.a)(
          _templateObject ||
            (_templateObject = (function _taggedTemplateLiteralLoose(
              strings,
              raw,
            ) {
              return (
                raw || (raw = strings.slice(0)), (strings.raw = raw), strings
              );
            })(['\n  padding: 12px 16px;\n'])),
        ),
        SideNav_SideNav = function SideNav(_ref) {
          var items = _ref.items,
            gap = _ref.gap,
            activeItem = _ref.activeItem,
            onItemClick = _ref.onItemClick,
            rest = _objectWithoutProperties(_ref, _excluded);
          return Object(jsx_runtime.jsx)(
            Wrapper,
            Object.assign(
              { stack: !0, solid: !0, borderRadius: 'large' },
              rest,
              {
                'data-component': 'sideNav',
                children: items.map(function (item, index) {
                  return Object(react.createElement)(
                    Link.a,
                    Object.assign({ active: item.id === activeItem }, item, {
                      key: item.id,
                      index: index,
                      style: { margin: (gap || 12) + 'px 0' },
                      action: onItemClick,
                    }),
                  );
                }),
              },
            ),
          );
        };
      SideNav_SideNav.displayName = 'SideNav';
      var blocks_SideNav = SideNav_SideNav;
      try {
        (SideNav_SideNav.displayName = 'SideNav'),
          (SideNav_SideNav.__docgenInfo = {
            description: '',
            displayName: 'SideNav',
            props: {
              items: {
                defaultValue: null,
                description: '',
                name: 'items',
                required: !0,
                type: { name: 'LinkProps[]' },
              },
              gap: {
                defaultValue: null,
                description: '',
                name: 'gap',
                required: !1,
                type: { name: 'number' },
              },
              activeItem: {
                defaultValue: null,
                description: '',
                name: 'activeItem',
                required: !1,
                type: { name: 'string' },
              },
              onItemClick: {
                defaultValue: null,
                description: '',
                name: 'onItemClick',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<Element, Event>, data: { id: string; index?: number; }) => void',
                },
              },
              flex: {
                defaultValue: null,
                description: '',
                name: 'flex',
                required: !1,
                type: { name: 'boolean' },
              },
              stack: {
                defaultValue: null,
                description: '',
                name: 'stack',
                required: !1,
                type: { name: 'boolean' },
              },
              alignItems: {
                defaultValue: null,
                description: '',
                name: 'alignItems',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"center"' },
                    { value: '"flex-start"' },
                    { value: '"flex-end"' },
                    { value: '"stretch"' },
                  ],
                },
              },
              justifyContent: {
                defaultValue: null,
                description: '',
                name: 'justifyContent',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"center"' },
                    { value: '"flex-start"' },
                    { value: '"flex-end"' },
                    { value: '"space-between"' },
                    { value: '"space-around"' },
                  ],
                },
              },
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
                required: !1,
                type: { name: 'string | number' },
              },
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !1,
                type: { name: 'string | number' },
              },
              borderRadius: {
                defaultValue: null,
                description: '',
                name: 'borderRadius',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"small"' },
                    { value: '"medium"' },
                    { value: '"large"' },
                  ],
                },
              },
              gutter: {
                defaultValue: null,
                description: '',
                name: 'gutter',
                required: !1,
                type: { name: 'number' },
              },
              solid: {
                defaultValue: null,
                description: '',
                name: 'solid',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/blocks/SideNav/index.tsx#SideNav'] = {
              docgenInfo: SideNav_SideNav.__docgenInfo,
              name: 'SideNav',
              path: 'src/blocks/SideNav/index.tsx#SideNav',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var SideNav_stories_templateObject,
        index_esm = __webpack_require__(
          './node_modules/react-icons/fi/index.esm.js',
        );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var BG = styled_components_browser_esm.default.div(
          SideNav_stories_templateObject ||
            (SideNav_stories_templateObject =
              (function SideNav_stories_taggedTemplateLiteralLoose(
                strings,
                raw,
              ) {
                return (
                  raw || (raw = strings.slice(0)), (strings.raw = raw), strings
                );
              })([
                '\n  background-color: ',
                ';\n  height: 1200px;\n  margin: -16px;\n',
              ])),
          function (_ref) {
            return _ref.theme.colors.grayScale[1];
          },
        ),
        defaultArgs =
          ((__webpack_exports__.default = {
            title: 'navigation/SideNav',
            component: blocks_SideNav,
          }),
          {
            items: [
              {
                title: 'Home',
                id: 'home',
                icon: Object(jsx_runtime.jsx)(index_esm.b, {}),
                action: console.log,
              },
              {
                title: 'Messages',
                id: 'message',
                icon: Object(jsx_runtime.jsx)(index_esm.c, {}),
                action: console.log,
              },
              {
                title: 'Storage',
                id: 'storage',
                icon: Object(jsx_runtime.jsx)(index_esm.a, {}),
                action: console.log,
              },
            ],
          }),
        SideNav_stories_Template = function Template(args) {
          var _React$useState2 = _slicedToArray(
              react_default.a.useState(args.items[0].id),
              2,
            ),
            active = _React$useState2[0],
            setActive = _React$useState2[1];
          return (
            console.log(2, active),
            Object(jsx_runtime.jsx)(BG, {
              children: Object(jsx_runtime.jsx)(
                blocks_SideNav,
                Object.assign(
                  {
                    activeItem: active,
                    onItemClick: function onItemClick(_, _ref2) {
                      var id = _ref2.id;
                      return setActive(id);
                    },
                    width: '180px',
                    height: '100%',
                  },
                  args,
                ),
              ),
            })
          );
        };
      SideNav_stories_Template.displayName = 'Template';
      var Primary = SideNav_stories_Template.bind({});
      (Primary.args = defaultArgs),
        (Primary.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args: SideNavProps) => {\n  const [active, setActive] = React.useState(args.items[0].id);\n  console.log(2, active);\n  return (\n    <BG>\n      <SideNav\n        activeItem={active}\n        onItemClick={(_, { id }) => setActive(id)}\n        width="180px"\n        height="100%"\n        {...args}\n      />\n    </BG>\n  );\n}',
            },
          },
          Primary.parameters,
        ));
    },
    './src/blocks/Status/Status.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        ),
        __webpack_require__('./node_modules/react/index.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js');
      var _templateObject,
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        _excluded = ['weight', 'size', 'truncated', 'className'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var StyledText = styled_components_browser_esm.default.p(
          _templateObject ||
            (_templateObject = (function _taggedTemplateLiteralLoose(
              strings,
              raw,
            ) {
              return (
                raw || (raw = strings.slice(0)), (strings.raw = raw), strings
              );
            })(['\n  margin: 0;\n  ', '\n'])),
          function (_ref) {
            var weight = _ref.weight,
              size = _ref.size,
              text = _ref.theme.blocks.text;
            return (
              '\n    font-weight: ' +
              text.weight[weight || 'regular'] +
              ';\n    font-size: ' +
              text.size[size || 'rg'] +
              'px;\n    '
            );
          },
        ),
        Text_Text = function Text(_ref2) {
          var weight = _ref2.weight,
            size = _ref2.size,
            truncated = _ref2.truncated,
            className = _ref2.className,
            rest = _objectWithoutProperties(_ref2, _excluded);
          return Object(jsx_runtime.jsx)(
            StyledText,
            Object.assign(
              {
                weight: weight,
                size: size,
                className: className + ' ' + (truncated ? 'truncate' : ''),
              },
              rest,
            ),
          );
        };
      Text_Text.displayName = 'Text';
      var blocks_Text = Text_Text;
      try {
        (Text_Text.displayName = 'Text'),
          (Text_Text.__docgenInfo = {
            description: '',
            displayName: 'Text',
            props: {
              weight: {
                defaultValue: null,
                description: '',
                name: 'weight',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"bold"' },
                    { value: '"light"' },
                    { value: '"medium"' },
                    { value: '"regular"' },
                  ],
                },
              },
              truncated: {
                defaultValue: null,
                description: '',
                name: 'truncated',
                required: !1,
                type: { name: 'boolean' },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"sm"' },
                    { value: '"rg"' },
                    { value: '"md"' },
                    { value: '"lg"' },
                  ],
                },
              },
              as: {
                defaultValue: null,
                description: '',
                name: 'as',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"symbol"' },
                    { value: '"object"' },
                    { value: '"button"' },
                    { value: '"big"' },
                    { value: '"link"' },
                    { value: '"small"' },
                    { value: '"sub"' },
                    { value: '"sup"' },
                    { value: '"a"' },
                    { value: '"abbr"' },
                    { value: '"address"' },
                    { value: '"area"' },
                    { value: '"article"' },
                    { value: '"aside"' },
                    { value: '"audio"' },
                    { value: '"b"' },
                    { value: '"base"' },
                    { value: '"bdi"' },
                    { value: '"bdo"' },
                    { value: '"blockquote"' },
                    { value: '"body"' },
                    { value: '"br"' },
                    { value: '"canvas"' },
                    { value: '"caption"' },
                    { value: '"cite"' },
                    { value: '"code"' },
                    { value: '"col"' },
                    { value: '"colgroup"' },
                    { value: '"data"' },
                    { value: '"datalist"' },
                    { value: '"dd"' },
                    { value: '"del"' },
                    { value: '"details"' },
                    { value: '"dfn"' },
                    { value: '"dialog"' },
                    { value: '"div"' },
                    { value: '"dl"' },
                    { value: '"dt"' },
                    { value: '"em"' },
                    { value: '"embed"' },
                    { value: '"fieldset"' },
                    { value: '"figcaption"' },
                    { value: '"figure"' },
                    { value: '"footer"' },
                    { value: '"form"' },
                    { value: '"h1"' },
                    { value: '"h2"' },
                    { value: '"h3"' },
                    { value: '"h4"' },
                    { value: '"h5"' },
                    { value: '"h6"' },
                    { value: '"head"' },
                    { value: '"header"' },
                    { value: '"hgroup"' },
                    { value: '"hr"' },
                    { value: '"html"' },
                    { value: '"i"' },
                    { value: '"iframe"' },
                    { value: '"img"' },
                    { value: '"input"' },
                    { value: '"ins"' },
                    { value: '"kbd"' },
                    { value: '"keygen"' },
                    { value: '"label"' },
                    { value: '"legend"' },
                    { value: '"li"' },
                    { value: '"main"' },
                    { value: '"map"' },
                    { value: '"mark"' },
                    { value: '"menu"' },
                    { value: '"menuitem"' },
                    { value: '"meta"' },
                    { value: '"meter"' },
                    { value: '"nav"' },
                    { value: '"noindex"' },
                    { value: '"noscript"' },
                    { value: '"ol"' },
                    { value: '"optgroup"' },
                    { value: '"option"' },
                    { value: '"output"' },
                    { value: '"p"' },
                    { value: '"param"' },
                    { value: '"picture"' },
                    { value: '"pre"' },
                    { value: '"progress"' },
                    { value: '"q"' },
                    { value: '"rp"' },
                    { value: '"rt"' },
                    { value: '"ruby"' },
                    { value: '"s"' },
                    { value: '"samp"' },
                    { value: '"slot"' },
                    { value: '"script"' },
                    { value: '"section"' },
                    { value: '"select"' },
                    { value: '"source"' },
                    { value: '"span"' },
                    { value: '"strong"' },
                    { value: '"style"' },
                    { value: '"summary"' },
                    { value: '"table"' },
                    { value: '"template"' },
                    { value: '"tbody"' },
                    { value: '"td"' },
                    { value: '"textarea"' },
                    { value: '"tfoot"' },
                    { value: '"th"' },
                    { value: '"thead"' },
                    { value: '"time"' },
                    { value: '"title"' },
                    { value: '"tr"' },
                    { value: '"track"' },
                    { value: '"u"' },
                    { value: '"ul"' },
                    { value: '"var"' },
                    { value: '"video"' },
                    { value: '"wbr"' },
                    { value: '"webview"' },
                    { value: '"svg"' },
                    { value: '"animate"' },
                    { value: '"animateMotion"' },
                    { value: '"animateTransform"' },
                    { value: '"circle"' },
                    { value: '"clipPath"' },
                    { value: '"defs"' },
                    { value: '"desc"' },
                    { value: '"ellipse"' },
                    { value: '"feBlend"' },
                    { value: '"feColorMatrix"' },
                    { value: '"feComponentTransfer"' },
                    { value: '"feComposite"' },
                    { value: '"feConvolveMatrix"' },
                    { value: '"feDiffuseLighting"' },
                    { value: '"feDisplacementMap"' },
                    { value: '"feDistantLight"' },
                    { value: '"feDropShadow"' },
                    { value: '"feFlood"' },
                    { value: '"feFuncA"' },
                    { value: '"feFuncB"' },
                    { value: '"feFuncG"' },
                    { value: '"feFuncR"' },
                    { value: '"feGaussianBlur"' },
                    { value: '"feImage"' },
                    { value: '"feMerge"' },
                    { value: '"feMergeNode"' },
                    { value: '"feMorphology"' },
                    { value: '"feOffset"' },
                    { value: '"fePointLight"' },
                    { value: '"feSpecularLighting"' },
                    { value: '"feSpotLight"' },
                    { value: '"feTile"' },
                    { value: '"feTurbulence"' },
                    { value: '"filter"' },
                    { value: '"foreignObject"' },
                    { value: '"g"' },
                    { value: '"image"' },
                    { value: '"line"' },
                    { value: '"linearGradient"' },
                    { value: '"marker"' },
                    { value: '"mask"' },
                    { value: '"metadata"' },
                    { value: '"mpath"' },
                    { value: '"path"' },
                    { value: '"pattern"' },
                    { value: '"polygon"' },
                    { value: '"polyline"' },
                    { value: '"radialGradient"' },
                    { value: '"rect"' },
                    { value: '"stop"' },
                    { value: '"switch"' },
                    { value: '"text"' },
                    { value: '"textPath"' },
                    { value: '"tspan"' },
                    { value: '"use"' },
                    { value: '"view"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/blocks/Text/index.tsx#Text'] = {
              docgenInfo: Text_Text.__docgenInfo,
              name: 'Text',
              path: 'src/blocks/Text/index.tsx#Text',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Status_templateObject,
        polished_esm = __webpack_require__(
          './node_modules/polished/dist/polished.esm.js',
        ),
        Status_excluded = ['children'];
      function Status_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Status_objectWithoutPropertiesLoose(
            source,
            excluded,
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var StatusWrapper = styled_components_browser_esm.default.div(
          Status_templateObject ||
            (Status_templateObject =
              (function Status_taggedTemplateLiteralLoose(strings, raw) {
                return (
                  raw || (raw = strings.slice(0)), (strings.raw = raw), strings
                );
              })(['\n  display: inline-flex;\n  ', ';\n'])),
          function (_ref) {
            var _ref$theme$blocks$sta = _ref.theme.blocks.status,
              config = _ref$theme$blocks$sta.config,
              borderRadius = _ref$theme$blocks$sta.borderRadius,
              padding = _ref$theme$blocks$sta.padding,
              _ref$appearance = _ref.appearance,
              appearance =
                void 0 === _ref$appearance ? 'primary' : _ref$appearance;
            return (
              '\n      padding: ' +
              padding +
              ';\n      border-radius: ' +
              borderRadius +
              ';\n      color: ' +
              config[appearance].color +
              '; \n      background: ' +
              Object(polished_esm.e)(0.9, config[appearance].color) +
              ';\n    '
            );
          },
        ),
        Status_Status = function Status(_ref2) {
          var children = _ref2.children,
            rest = Status_objectWithoutProperties(_ref2, Status_excluded);
          return Object(jsx_runtime.jsx)(
            StatusWrapper,
            Object.assign({}, rest, {
              children: Object(jsx_runtime.jsx)(blocks_Text, {
                as: 'span',
                size: 'sm',
                children: children,
              }),
            }),
          );
        };
      Status_Status.displayName = 'Status';
      var blocks_Status = Status_Status;
      try {
        (Status_Status.displayName = 'Status'),
          (Status_Status.__docgenInfo = {
            description: '',
            displayName: 'Status',
            props: {
              appearance: {
                defaultValue: null,
                description: '',
                name: 'appearance',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"error"' },
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"success"' },
                    { value: '"warning"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/blocks/Status/index.tsx#Status'] = {
              docgenInfo: Status_Status.__docgenInfo,
              name: 'Status',
              path: 'src/blocks/Status/index.tsx#Status',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = {
        title: 'Status',
        component: blocks_Status,
      };
      var Status_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsx)(blocks_Status, Object.assign({}, args));
      };
      Status_stories_Template.displayName = 'Template';
      var Primary = Status_stories_Template.bind({});
      (Primary.args = { children: 'Completed' }),
        (Primary.parameters = Object.assign(
          {
            storySource: {
              source: '(args: StatusProps) => <Status {...args} />',
            },
          },
          Primary.parameters,
        ));
    },
    './src/blocks/Tooltip/Tooltip.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'CustomTooltip',
          function () {
            return CustomTooltip;
          },
        );
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        ),
        __webpack_require__('./node_modules/react/index.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js');
      var _templateObject,
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        Popover = __webpack_require__('./src/blocks/Popover/index.tsx'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      var TooltipWrapper = styled_components_browser_esm.default.div(
          _templateObject ||
            (_templateObject = (function _taggedTemplateLiteralLoose(
              strings,
              raw,
            ) {
              return (
                raw || (raw = strings.slice(0)), (strings.raw = raw), strings
              );
            })([
              '\n  background: ',
              ';\n  color: ',
              ';\n  border-radius: 8px;\n  padding: 12px 16px;\n  max-width: ',
              ';\n',
            ])),
          function (props) {
            return props.theme.blocks.tooltip.background;
          },
          function (props) {
            return props.theme.blocks.tooltip.color;
          },
          function (props) {
            return props.theme.blocks.tooltip.maxWidth;
          },
        ),
        Tooltip_Tooltip = function Tooltip(_ref) {
          var children = _ref.children,
            content = _ref.content,
            direction = _ref.direction,
            padding = _ref.padding;
          return Object(jsx_runtime.jsx)(Popover.a, {
            on: 'hover',
            align: 'center',
            direction: direction,
            popover: Object(jsx_runtime.jsx)(TooltipWrapper, {
              children: content,
            }),
            padding: padding || 8,
            children: children,
          });
        };
      Tooltip_Tooltip.displayName = 'Tooltip';
      var blocks_Tooltip = Tooltip_Tooltip;
      try {
        (Tooltip_Tooltip.displayName = 'Tooltip'),
          (Tooltip_Tooltip.__docgenInfo = {
            description: '',
            displayName: 'Tooltip',
            props: {
              content: {
                defaultValue: null,
                description: '',
                name: 'content',
                required: !0,
                type: { name: 'ReactNode' },
              },
              direction: {
                defaultValue: null,
                description: '',
                name: 'direction',
                required: !1,
                type: { name: 'PopoverPosition | PopoverPosition[]' },
              },
              padding: {
                defaultValue: null,
                description: '',
                name: 'padding',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/blocks/Tooltip/index.tsx#Tooltip'] = {
              docgenInfo: Tooltip_Tooltip.__docgenInfo,
              name: 'Tooltip',
              path: 'src/blocks/Tooltip/index.tsx#Tooltip',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Button = __webpack_require__('./src/blocks/Button/index.tsx'),
        defaultArgs =
          ((__webpack_exports__.default = {
            title: 'Tooltip',
            component: blocks_Tooltip,
          }),
          {
            children: Object(jsx_runtime.jsx)(Button.a, { children: 'Popup' }),
            content: 'This is a tooltip',
          }),
        Tooltip_stories_Template = function Template(args) {
          return Object(jsx_runtime.jsx)(
            blocks_Tooltip,
            Object.assign({}, args),
          );
        };
      Tooltip_stories_Template.displayName = 'Template';
      var Primary = Tooltip_stories_Template.bind({});
      Primary.args = defaultArgs;
      var CustomTooltip = Tooltip_stories_Template.bind({});
      (CustomTooltip.args = Object.assign({}, defaultArgs, {
        content: Object(jsx_runtime.jsxs)('div', {
          children: [
            Object(jsx_runtime.jsx)('h4', {
              style: { marginTop: 0, marginBottom: 8 },
              children: 'Heading',
            }),
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet consectetur ligula, eu condimentum nulla. Nunc accumsan lectus sed felis porttitor fringilla. Quisque vitae est vitae nisi pharetra ultricie',
          ],
        }),
      })),
        (Primary.parameters = Object.assign(
          {
            storySource: {
              source: '(args: TooltipProps) => <Tooltip {...args} />',
            },
          },
          Primary.parameters,
        )),
        (CustomTooltip.parameters = Object.assign(
          {
            storySource: {
              source: '(args: TooltipProps) => <Tooltip {...args} />',
            },
          },
          CustomTooltip.parameters,
        ));
    },
    './src/stories/Introduction.stories.mdx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js',
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js',
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js',
          ),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__('./src/stories/assets/code-brackets.svg'),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default =
          __webpack_require__.n(
            _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__,
          ),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          './src/stories/assets/colors.svg',
        ),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default =
          __webpack_require__.n(
            _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__,
          ),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          './src/stories/assets/comments.svg',
        ),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default =
          __webpack_require__.n(
            _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__,
          ),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__('./src/stories/assets/direction.svg'),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default =
          __webpack_require__.n(
            _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__,
          ),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          './src/stories/assets/flow.svg',
        ),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default =
          __webpack_require__.n(_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          './src/stories/assets/plugin.svg',
        ),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default =
          __webpack_require__.n(
            _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__,
          ),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          './src/stories/assets/repo.svg',
        ),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default =
          __webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__('./src/stories/assets/stackalt.svg'),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default =
          __webpack_require__.n(
            _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__,
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.b,
            { title: 'Example/Introduction', mdxType: 'Meta' },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'style',
            null,
            "\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n",
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h1',
            { id: 'welcome-to-storybook' },
            'Welcome to Storybook',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            "Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'strong',
              { parentName: 'p' },
              'stories',
            ),
            ' to revisit during development, testing, or QA.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Browse example stories now by navigating to them in the sidebar.\nView their code in the ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'inlineCode',
              { parentName: 'p' },
              'src/stories',
            ),
            ' directory to learn how they work.\nWe recommend building UIs with a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                parentName: 'p',
                href: 'https://componentdriven.org',
                target: '_blank',
                rel: 'nofollow noopener noreferrer',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'strong',
                { parentName: 'a' },
                'component-driven',
              ),
            ),
            ' process starting with atomic components and ending with pages.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            { className: 'subheading' },
            'Configure',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            { className: 'link-list' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/addons/addon-types',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
                alt: 'plugin',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Presets for popular tools',
                ),
                'Easy setup for TypeScript, SCSS and more.',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/configure/webpack',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
                alt: 'Build',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Build configuration',
                ),
                'How to customize webpack and Babel',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/configure/styling-and-css',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
                alt: 'colors',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Styling',
                ),
                'How to load and configure CSS libraries',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
                alt: 'flow',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Data',
                ),
                'Providers and mocking for data libraries',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            { className: 'subheading' },
            'Learn',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            { className: 'link-list' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
                alt: 'repo',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Storybook documentation',
                ),
                'Configure, customize, and extend',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/tutorials/',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
                alt: 'direction',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'In-depth guides',
                ),
                'Best practices from leading teams',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://github.com/storybookjs/storybook',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
                alt: 'code',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'GitHub project',
                ),
                'View the source and add issues',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://discord.gg/storybook',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
                alt: 'comments',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Discord chat',
                ),
                'Chat with maintainers and the community',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            { className: 'tip-wrapper' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'span',
              { className: 'tip' },
              'Tip',
            ),
            'Edit the Markdown in',
            ' ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'code',
              null,
              'src/stories/Introduction.stories.mdx',
            ),
          ),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Example/Introduction',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentAnnotations: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null,
                ),
              );
            },
          },
        )),
        (__webpack_exports__.default = componentMeta);
    },
    './src/stories/assets/code-brackets.svg': function (
      module,
      exports,
      __webpack_require__,
    ) {
      module.exports =
        __webpack_require__.p + 'static/media/code-brackets.2e1112d7.svg';
    },
    './src/stories/assets/colors.svg': function (
      module,
      exports,
      __webpack_require__,
    ) {
      module.exports =
        __webpack_require__.p + 'static/media/colors.a4bd0486.svg';
    },
    './src/stories/assets/comments.svg': function (
      module,
      exports,
      __webpack_require__,
    ) {
      module.exports =
        __webpack_require__.p + 'static/media/comments.a3859089.svg';
    },
    './src/stories/assets/direction.svg': function (
      module,
      exports,
      __webpack_require__,
    ) {
      module.exports =
        __webpack_require__.p + 'static/media/direction.b770f9af.svg';
    },
    './src/stories/assets/flow.svg': function (
      module,
      exports,
      __webpack_require__,
    ) {
      module.exports = __webpack_require__.p + 'static/media/flow.edad2ac1.svg';
    },
    './src/stories/assets/plugin.svg': function (
      module,
      exports,
      __webpack_require__,
    ) {
      module.exports =
        __webpack_require__.p + 'static/media/plugin.d494b228.svg';
    },
    './src/stories/assets/repo.svg': function (
      module,
      exports,
      __webpack_require__,
    ) {
      module.exports = __webpack_require__.p + 'static/media/repo.6d496322.svg';
    },
    './src/stories/assets/stackalt.svg': function (
      module,
      exports,
      __webpack_require__,
    ) {
      module.exports =
        __webpack_require__.p + 'static/media/stackalt.dba9fbb3.svg';
    },
    './storybook-init-framework-entry.js': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(
        './node_modules/@storybook/react/dist/esm/client/index.js',
      );
    },
    0: function (module, exports, __webpack_require__) {
      __webpack_require__(
        './node_modules/@storybook/core-client/dist/esm/globals/polyfills.js',
      ),
        __webpack_require__(
          './node_modules/@storybook/core-client/dist/esm/globals/globals.js',
        ),
        __webpack_require__('./storybook-init-framework-entry.js'),
        __webpack_require__(
          './node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js',
        ),
        __webpack_require__(
          './.storybook/preview.js-generated-config-entry.js',
        ),
        (module.exports = __webpack_require__('./generated-stories-entry.js'));
    },
    1: function (module, exports) {},
  },
  [[0, 4, 5]],
]);
