# ARB-TOA-003A.6.10 — R2 Radial-Convolution Audit

## Declared control integral

Using the locked pointwise scalar kernel,

\[
\Pi_s(k;\Lambda,\varepsilon_{\rm IR})
=\int_{\varepsilon_{\rm IR}}^{\Lambda}
\frac{q^2dq}{(2\pi)^3}
\int d\Omega_q\,
N_{\rm full}(k,q,\mu)
P_h(q)P_h(p),
\qquad p=|\mathbf k-\mathbf q|,
\]

we tested the power-law family \(P_h(q)\propto q^{-s}\) only as a declared control model. This is not yet a cosmological prediction.

Because the locked kernel is homogeneous of degree 12,

\[
N_{\rm full}(k,\lambda q,\mu)\sim \lambda^{12}
\]

in the ultraviolet at fixed nonzero \(k\). Therefore,

\[
q^2dq\,N_{\rm full}(q)P_h(q)P_h(p)
\sim q^{14-2s}dq,
\]

and a sharp-cutoff UV divergence scales as

\[
\boxed{\Lambda^{15-2s}}.
\]

## Numerical cutoff audit

The direct convolution was evaluated with the exact fitted full kernel and Legendre angular quadrature at \(k=1\).

| Spectrum model | Expected UV degree | \(\Lambda=4\) | \(\Lambda=8\) | \(\Lambda=16\) | \(\Lambda=32\) |
|---|---:|---:|---:|---:|---:|
| \(P_h\propto q^{-3}\) | \(\Lambda^9\) | \(4.5230\times10^3\) | \(2.0734\times10^6\) | \(1.0311\times10^9\) | \(5.2413\times10^{11}\) |
| \(P_h\propto q^{-1}\) | \(\Lambda^{13}\) | \(8.6810\times10^5\) | \(6.0181\times10^9\) | \(4.7189\times10^{13}\) | \(3.8252\times10^{17}\) |

The successive doubling ratios approach \(2^9=512\) and \(2^{13}=8192\), respectively. This confirms the spectrum-dependent power counting, not a finite renormalized coefficient.

## Required interpretation

The cutoff result contains analytic UV terms that must be matched to a complete boundary counterterm basis. The scale-invariant case also requires an explicit infrared prescription because both internal momenta can approach soft regions. A numerical sharp cutoff cannot decide whether a finite remainder is regulator-independent, local, or removable by counterterms.

No \(k^9\) term has been promoted here. Such a term can only be assessed after specifying the exact mode functions, the infrared state, the regulator (for example dimensional regularization with a declared continuation), the subtraction scheme, and the observable normalization.

## R2 status

The locked tensor kernel is now suitable for a physical R2 calculation. The radial branch itself remains **open as a formal convolution but gated as a physical prediction**. The next required input is one complete mode-spectrum package: \(a(\eta)\), the normalized \(u_q(\eta_\Sigma)\), the initial state, the IR prescription, and the regulator/counterterm scheme.
