/* @ds-bundle: trimmed subset (Button, Pagination) for deploy */
(() => {

const __ds_ns = (window.AlignUIDesignSystem_99ff02 = window.AlignUIDesignSystem_99ff02 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AlignUI Button — the primary action primitive.
 *
 * variant: 'primary' | 'neutral' | 'error'
 * mode:    'filled' | 'stroke' | 'lighter' | 'ghost'
 * size:    'medium' (40) | 'small' (36) | 'xsmall' (32)
 *
 * leadingIcon / trailingIcon accept any node (e.g. an <i className="ri-…">).
 * Use `iconOnly` for square icon buttons.
 */
function Button({
  variant = 'primary',
  mode = 'filled',
  size = 'medium',
  leadingIcon,
  trailingIcon,
  iconOnly = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const sizes = {
    medium: {
      h: 40,
      radius: 'var(--r-10)',
      px: 14,
      font: 'var(--label-sm)',
      ls: 'var(--label-sm-spacing)'
    },
    small: {
      h: 36,
      radius: 'var(--r-8)',
      px: 12,
      font: 'var(--label-sm)',
      ls: 'var(--label-sm-spacing)'
    },
    xsmall: {
      h: 32,
      radius: 'var(--r-8)',
      px: 10,
      font: 'var(--label-sm)',
      ls: 'var(--label-sm-spacing)'
    }
  };
  const s = sizes[size] || sizes.medium;

  // [bg, text, ring(inset border), hoverBg]
  const palette = {
    primary: {
      filled: ['var(--primary-base)', 'var(--text-white-0)', null, 'var(--primary-dark)'],
      stroke: ['var(--bg-white-0)', 'var(--primary-base)', 'var(--primary-base)', 'var(--primary-lighter)'],
      lighter: ['var(--primary-lighter)', 'var(--primary-base)', null, 'var(--bg-white-0)'],
      ghost: ['transparent', 'var(--primary-base)', null, 'var(--primary-lighter)']
    },
    neutral: {
      filled: ['var(--bg-strong-900)', 'var(--text-white-0)', null, 'var(--neutral-700)'],
      stroke: ['var(--bg-white-0)', 'var(--text-sub-500)', 'var(--stroke-soft-200)', 'var(--bg-weak-100)'],
      lighter: ['var(--bg-weak-100)', 'var(--text-sub-500)', null, 'var(--bg-white-0)'],
      ghost: ['transparent', 'var(--text-sub-500)', null, 'var(--bg-weak-100)']
    },
    error: {
      filled: ['var(--state-error)', 'var(--text-white-0)', null, 'var(--red-dark)'],
      stroke: ['var(--bg-white-0)', 'var(--state-error)', 'var(--state-error)', 'var(--red-lighter)'],
      lighter: ['var(--red-lighter)', 'var(--state-error)', null, 'var(--bg-white-0)'],
      ghost: ['transparent', 'var(--state-error)', null, 'var(--red-lighter)']
    }
  };
  const [bg, color, ring, hoverBg] = (palette[variant] || palette.primary)[mode] || palette.primary.filled;
  const [hover, setHover] = React.useState(false);
  const boxShadow = ring ? `inset 0 0 0 1px ${ring}` : mode === 'filled' ? 'var(--shadow-regular-xs)' : 'none';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      height: s.h,
      minWidth: iconOnly ? s.h : undefined,
      width: iconOnly ? s.h : undefined,
      padding: iconOnly ? 0 : `0 ${s.px}px`,
      borderRadius: s.radius,
      border: 'none',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      font: s.font,
      letterSpacing: s.ls,
      whiteSpace: 'nowrap',
      background: hover && !disabled ? hoverBg : bg,
      color,
      boxShadow,
      opacity: disabled ? 0.5 : 1,
      transition: 'background 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease',
      ...style
    }
  }, rest), leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: 20,
      lineHeight: 0,
      margin: iconOnly ? 0 : '0 -2px'
    }
  }, leadingIcon), !iconOnly && children != null && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 4px'
    }
  }, children), iconOnly && children, trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: 20,
      lineHeight: 0,
      margin: '0 -2px'
    }
  }, trailingIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) });

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AlignUI Pagination — prev / numbered cells / next.
 * Controlled via page/onChange or self-managed with defaultPage.
 */
function Pagination({
  total = 1,
  page,
  defaultPage = 1,
  onChange,
  style,
  ...rest
}) {
  const isControlled = page !== undefined;
  const [internal, setInternal] = React.useState(defaultPage);
  const current = isControlled ? page : internal;
  const go = p => {
    const np = Math.max(1, Math.min(total, p));
    if (!isControlled) setInternal(np);
    onChange && onChange(np);
  };
  const cell = (content, {
    active = false,
    disabled = false,
    onClick
  } = {}) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 36,
      height: 36,
      padding: '0 8px',
      borderRadius: 'var(--r-8)',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      font: 'var(--label-sm)',
      letterSpacing: 'var(--label-sm-spacing)',
      background: active ? 'var(--bg-weak-100)' : 'transparent',
      color: active ? 'var(--text-strong-900, var(--text-main-900))' : 'var(--text-soft-400)',
      opacity: disabled ? 0.4 : 1,
      fontSize: typeof content === 'string' ? undefined : 20,
      lineHeight: 0
    }
  }, content);
  const pages = [];
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || Math.abs(p - current) <= 1) pages.push(p);else if (pages[pages.length - 1] !== '…') pages.push('…');
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      ...style
    }
  }, rest), cell(/*#__PURE__*/React.createElement("i", {
    className: "ri-arrow-left-s-line"
  }), {
    disabled: current === 1,
    onClick: () => go(current - 1)
  }), pages.map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      minWidth: 36,
      textAlign: 'center',
      color: 'var(--text-soft-400)'
    }
  }, "\u2026") : /*#__PURE__*/React.createElement(React.Fragment, {
    key: p
  }, cell(String(p), {
    active: p === current,
    onClick: () => go(p)
  }))), cell(/*#__PURE__*/React.createElement("i", {
    className: "ri-arrow-right-s-line"
  }), {
    disabled: current === total,
    onClick: () => go(current + 1)
  }));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) });

__ds_ns.Button = __ds_scope.Button;
__ds_ns.Pagination = __ds_scope.Pagination;

})();
